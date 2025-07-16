document.addEventListener('DOMContentLoaded', () => {
    // const loadButton = document.getElementById('load-button');
    const inputDiv = document.getElementById('input-div');
    const speedDisplay = document.getElementById('speed');
    const errorsDisplay = document.getElementById('errors');

    let currentPosition = 0;
    let startTime = null;
    let correctCharacters = 0;
    let errorCount = 0;
    let typingInterval = null;
    let textCharacters = [];
    let errorCharacters = {}; // 跟踪错误字符及其频率
    const typeSound = new Audio('assets/sounds/typewriter-sound.wav');
    const translationDiv = document.getElementById('translation-div');
    let quotes = [];
    let currentQuote = null;

    // 加载格言文件并解析
    function loadQuotes() {
        return fetch('kevin-kelly-quotes-with-translation.txt')
            .then(response => response.text())
            .then(text => {
                const quotes = [];
                const blocks = text.split('---');
                blocks.forEach(block => {
                    const lines = block.trim().split('\n').filter(line => line.trim() !== '');
                    if (lines.length >= 2) {
                        // 分离英文和中文部分
                        let englishLines = [];
                        let chineseLines = [];
                        let isChineseSection = false;
                        
                        lines.forEach(line => {
                            // 判断是否包含中文字符
                            if (/[一-龥]/.test(line)) {
                                chineseLines.push(line.trim());
                            } else {
                                englishLines.push(line.trim());
                            }
                        });
                        
                        if (englishLines.length > 0 && chineseLines.length > 0) {
                            quotes.push({
                                english: englishLines.join(' ').replace(/[‘’′‵]/g, "'").replace(/[“”″‶]/g, '"').replace(/。/g, '.').replace(/，/g, ',').replace(/？/g, '?').replace(/！/g, '!').replace(/；/g, ';').replace(/：/g, ':').replace(/（/g, '(').replace(/）/g, ')').replace(/【/g, '[').replace(/】/g, ']').replace(/｛/g, '{').replace(/｝/g, '}').replace(/／/g, '/').replace(/、/g, ',').replace(/《/g, '<').replace(/》/g, '>').replace(/～/g, '~').replace(/—/g, '-').replace(/–/g, '-').replace(/…/g, '...'),
                                chinese: chineseLines.join(' ')
                            });
                        }
                    }
                });
                return quotes;
            });
    }

    // 获取随机格言
    function getRandomQuote() {
        if (quotes.length === 0) return null;
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    // 加载默认练习文本
    // 页面加载后自动开始练习
    loadQuotes().then(data => {
        quotes = data;
        currentQuote = getRandomQuote();
        if (currentQuote) {
            resetTypingState();
            renderText(currentQuote.english);
            translationDiv.textContent = currentQuote.chinese;
            startTime = new Date();
            startSpeedCalculation();
        }
    });
    function renderText(text) {
        inputDiv.innerHTML = '';
        textCharacters = [];

        for (const char of text) {
            const span = document.createElement('span');
            span.className = `character ${char === ' ' ? 'space-character' : ''}`;
            span.textContent = char;
            inputDiv.appendChild(span);
            textCharacters.push(span);
        }

        // 设置初始光标
        if (textCharacters.length > 0) {
            textCharacters[0].classList.add('cursor', 'pending-char');
        }
    }

    // 重置打字状态
    function resetTypingState() {
        currentPosition = 0;
        correctCharacters = 0;
        errorCount = 0;
        errorCharacters = {};
        speedDisplay.textContent = '0';
        errorsDisplay.textContent = '0';
        clearInterval(typingInterval);
        // 隐藏结果面板
        document.getElementById('results').style.display = 'none';
    }

    // 开始速度计算定时器
    function startSpeedCalculation() {
        typingInterval = setInterval(() => {
            if (!startTime) return;
            const elapsedMinutes = (new Date() - startTime) / (1000 * 60);
            const speed = Math.round(correctCharacters / elapsedMinutes);
            speedDisplay.textContent = speed;
        }, 1000);
    }

    // 处理键盘输入
    // 完成打字时的处理函数
    function finishTyping() {
        clearInterval(typingInterval);
        
        // 计算最终结果
        const elapsedMinutes = (new Date() - startTime) / (1000 * 60);
        const finalSpeed = Math.round(correctCharacters / elapsedMinutes);
        const errorRate = textCharacters.length > 0 ? Math.round((errorCount / textCharacters.length) * 100) : 0;
        
        // 更新结果显示
        document.getElementById('final-speed').textContent = finalSpeed;
        document.getElementById('error-rate').textContent = errorRate;
        
        // 显示错误字符统计
        const errorList = document.getElementById('error-list');
        errorList.innerHTML = '';
        
        for (const char in errorCharacters) {
            const li = document.createElement('li');
            li.textContent = `${char}: ${errorCharacters[char]}次`;
            errorList.appendChild(li);
        }
        
        // 显示结果面板
        document.getElementById('results').style.display = 'block';
    }

    // 再来一次按钮事件
    document.getElementById('restart-button').addEventListener('click', () => {
        resetTypingState();
        if (currentQuote) {
            renderText(currentQuote.english);
            startTime = new Date();
            startSpeedCalculation();
        }
    });

    // 再来一条按钮事件
    document.getElementById('new-quote-button').addEventListener('click', () => {
        resetTypingState();
        currentQuote = getRandomQuote();
        if (currentQuote) {
            renderText(currentQuote.english);
            translationDiv.textContent = currentQuote.chinese;
            startTime = new Date();
            startSpeedCalculation();
        }
    });

    document.addEventListener('keydown', (e) => {
        // 忽略功能键
        if (['Tab', 'Shift', 'Ctrl', 'Alt', 'Meta', 'CapsLock', 'Enter', 'Backspace'].includes(e.key)) {
            if (e.key === 'Backspace' && currentPosition > 0) {
                e.preventDefault();
                // 移除当前光标
                textCharacters[currentPosition].classList.remove('cursor');
                // 重置上一个字符
                currentPosition--;
                textCharacters[currentPosition].classList.remove('correct', 'incorrect');
                textCharacters[currentPosition].classList.add('cursor', 'pending-char');
            }
            return;
        }

        if (currentPosition >= textCharacters.length) return;

        e.preventDefault();
        const currentChar = textCharacters[currentPosition];
        // 标准化输入字符，处理全角符号和不同类型的撇号
        const normalizedKey = e.key
                .replace(/。/g, '.')
                .replace(/，/g, ',')
                .replace(/[‘’′‵]/g, "'")
                .replace(/[“”″‶]/g, '"')
                .replace(/？/g, '?')
                .replace(/！/g, '!')
                .replace(/；/g, ';')
                .replace(/：/g, ':')
                .replace(/（/g, '(')
                .replace(/）/g, ')')
                .replace(/【/g, '[')
                .replace(/】/g, ']')
                .replace(/｛/g, '{')
                .replace(/｝/g, '}')
                .replace(/／/g, '/')
                .replace(/、/g, ',')
                .replace(/《/g, '<')
                .replace(/》/g, '>')
                .replace(/～/g, '~')
                .replace(/—/g, '-')
                .replace(/–/g, '-')
                .replace(/…/g, '...')
            .replace(/＼/g, '\\')
            .replace(/　/g, ' ');
        const pressedKey = e.key === ' ' ? ' ' : normalizedKey;

        // 检查输入是否正确
        if (pressedKey === currentChar.textContent) {
            currentChar.classList.add('correct');
            typeSound.currentTime = 0;
            typeSound.play();
            correctCharacters++;
        } else {
            currentChar.classList.add('incorrect');
            typeSound.currentTime = 0;
            typeSound.play();
            errorCount++;
            errorsDisplay.textContent = errorCount;
            
            // 记录错误字符
            const expectedChar = currentChar.textContent;
            if (errorCharacters[expectedChar]) {
                errorCharacters[expectedChar]++;
            } else {
                errorCharacters[expectedChar] = 1;
            }
        }

        // 移动光标
        currentChar.classList.remove('cursor', 'pending-char');
        currentPosition++;
        if (currentPosition < textCharacters.length) {
            textCharacters[currentPosition].classList.add('cursor', 'pending-char');
        } else {
            // 完成打字练习
            finishTyping();
        }
    });
});