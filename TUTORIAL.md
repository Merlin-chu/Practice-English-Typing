# 打字练习网页使用教程

欢迎使用打字练习网页！这是一个简单易用的工具，帮助你提高打字速度和准确性。本教程将带你一步步了解如何使用这个工具，无需任何编程知识！

## 📱 什么是打字练习网页？

这是一个可以在电脑浏览器中运行的打字练习工具。它就像一个虚拟的打字老师，会显示文字让你练习输入，并记录你的打字速度和错误，帮助你不断进步。

## 🚀 如何开始使用

### 第一步：打开打字练习网页

1. 找到你的打字练习文件夹，双击名为 `simple-type.html` 的文件
2. 它会自动在你的浏览器中打开，你会看到类似这样的界面：
   - 顶部有标题"自定义打字练习"
   - 中间有一个大文本框
   - 下方有"加载文本开始练习"按钮
   - 还有速度和错误次数的显示区域

### 第二步：输入练习文本

1. 在大文本框中，你可以：
   - 使用默认显示的练习文本
   - 或者删除默认文本，粘贴你自己想练习的内容（比如一篇文章、一首诗）
2. 文本可以是中文、英文或其他语言
3. 输入完成后，点击蓝色的"加载文本开始练习"按钮

### 第三步：开始打字练习

1. 点击按钮后，文本会出现在下方的打字区域
2. 你会看到一个灰色闪烁的光标，表示你需要从这里开始输入
3. 看着屏幕上的文字，用键盘输入相同的内容
4. 注意：
   - 正确输入的字符会变成绿色
   - 错误输入的字符会变成红色并添加删除线
   - 屏幕上方会实时显示你的打字速度（字符/分钟）和错误次数
   - 打字时会有打字机音效，增加练习乐趣

### 第四步：完成练习并查看结果

1. 当你打完所有文字后，会自动显示练习结果面板
2. 结果面板会告诉你：
   - 最终打字速度（字符/分钟）
   - 错误率（百分比）
   - 你经常打错的字符统计
3. 想再练习一次？点击"再来一次"按钮即可重新开始

## 💡 小技巧

- 刚开始练习时，可以选择简短的文本
- 专注于准确性，而不是速度，随着练习增多，速度自然会提高
- 注意打字姿势，手指放在正确的位置
- 每天练习10-15分钟，坚持一周就能看到明显进步

## ❓ 常见问题

**Q: 我看不到打字区域怎么办？**
A: 确保你已经点击了"加载文本开始练习"按钮，并且文本框中不是空的。

**Q: 打字时没有声音？**
A: 检查你的电脑音量是否开启，浏览器是否允许播放声音。

**Q: 我想练习特定的文字怎么办？**
A: 在文本框中删除默认文字，粘贴你想练习的内容，然后点击加载按钮。

**Q: 如何提高我的打字速度？**
A: 每天坚持练习是关键！从慢开始，确保准确率，逐渐提高速度。

## 🎉 开始你的打字之旅吧！

现在你已经了解了如何使用这个打字练习工具，快去试试吧！记住，熟能生巧，坚持练习一定能成为打字高手！


## 🧩 代码解析与基础知识

现在我们已经学会了如何使用这个打字练习工具，接下来让我们简单了解一下它是如何工作的。即使你没有编程基础，也能通过下面的解释了解网站的基本原理。

### 📋 项目介绍

这个打字练习网页是一个帮助你提高英文打字速度的工具，同时还能学习凯文·凯利的智慧名言。通过这个项目，你将了解一个完整网页应用的构建过程，从HTML结构到CSS样式，再到JavaScript交互。

## 📂 文件结构解析

我们的项目包含以下核心文件：

```
/打字练习项目
├── index.html           # 网页主文件，包含页面结构
├── simple-type.css      # 样式文件，控制页面外观
├── simple-type.js       # JavaScript文件，实现交互功能
├── TUTORIAL.md          # 本教程文件
├── kevin-kelly-quotes-with-translation.txt  # 名言数据文件
└── assets/
    └── sounds/
        └── typewriter-sound.wav  # 打字音效文件
```

### 核心文件说明
- **index.html**：网页的骨架，定义了所有可见元素
- **simple-type.css**：美化网页，设置颜色、字体和布局
- **simple-type.js**：让网页"动起来"，处理用户输入和交互

## 🔨 从0到1构建过程

### 1. 创建基础HTML结构 (index.html)

HTML是网页的基础，就像房子的框架。我们先创建一个基本的HTML文件：

```html:index.html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice English Typing:用键盘学习英文</title>
    <link rel="stylesheet" href="simple-type.css">
</head>
<body>
    <div class="container">
        <h1>Practice English Typing</h1>
        <h1>用键盘学习英文</h1>

        <div class="description">
            <p>Practice English typing while gaining wisdom.</p>
            <p>Text source: Kevin Kelly's book</p>
            <p> <em>Excellent Advice for Living: Wisdom I Wish I'd Known Earlier</em></p>
        </div>

        <!-- 统计信息区域 -->
        <div class="stats-container">
            <div class="stats">
                <div>速度: <span id="speed">0</span> 字符/分钟</div>
                <div>错误: <span id="errors">0</span> 次</div>
            </div>
        </div>

        <!-- 打字区域 -->
        <div id="typing-area">
            <div id="input-div" class="typing-text"></div>
            <div id="translation-div" class="translation-text"></div>
        </div>

        <!-- 控制按钮 -->
        <button id="new-quote-button">再来一条</button>
        
        <!-- 结果面板 -->
        <div id="results" class="results-panel">
            <h2>练习结果</h2>
            <div class="result-item">最终速度: <span id="final-speed">0</span> 字符/分钟</div>
            <div class="result-item">错误率: <span id="error-rate">0</span>%</div>
            <div class="error-chars">
                <h3>错误字符统计:</h3>
                <ul id="error-list"></ul>
            </div>
            <button id="restart-button">再来一次</button>
        </div>
    </div>

    <script src="simple-type.js"></script>
</body>
</html>
```

- `<!DOCTYPE html>`：告诉浏览器这是一个HTML5文档
- `<head>`：包含网页元信息，如标题和样式表引用
- `<body>`：包含所有可见的页面内容
- `<div>`：用于组织页面内容的容器
- `<h1>`-`<h6>`：标题标签，数字越小字体越大
- `<p>`：段落标签
- `<button>`：按钮元素
- `<script>`：引用JavaScript文件

### 2. 添加样式 (simple-type.css)

CSS让网页变得美观。我们创建一个CSS文件来美化我们的打字练习页面：

```css:simple-type.css
/* 基础样式设置 */
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 20px;
    background-color: #f4f4f4;
    color: #333;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

/* 标题样式 */
h1 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 0.5rem;
}

/* 统计信息样式 */
.stats-container {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}

.stats {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    font-weight: bold;
}

/* 打字区域样式 */
#typing-area {
    margin: 20px 0;
    min-height: 150px;
}

.typing-text {
    font-size: 1.2rem;
    letter-spacing: 1px;
    margin-bottom: 10px;
}

.translation-text {
    color: #666;
    font-style: italic;
    margin-top: 10px;
}

/* 按钮样式 */
#new-quote-button {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
}

#new-quote-button:hover {
    background-color: #2980b9;
}

/* 结果面板样式 */
.results-panel {
    display: none;
    margin-top: 20px;
    padding: 20px;
    border-top: 2px solid #eee;
}

/* 字符样式 */
.character {
    display: inline-block;
    margin: 0 2px;
    position: relative;
}

.cursor {
    border-bottom: 2px solid #2ecc71;
}

.correct {
    color: #27ae60;
}

.incorrect {
    color: #e74c3c;
    text-decoration: line-through;
}
```

- `body`：设置整个页面的基础样式
- `.container`：居中显示内容并添加阴影效果
- `.stats`：美化统计信息区域，添加背景和圆角
- `#new-quote-button`：设计按钮样式，并添加悬停效果
- `.correct` 和 `.incorrect`：分别定义正确和错误字符的样式

### 3. 实现交互功能 (simple-type.js)

JavaScript让网页具有交互性。我们创建一个JavaScript文件来实现打字练习的核心功能：

```javascript:simple-type.js
// 获取HTML元素
const newQuoteButton = document.getElementById('new-quote-button');
const restartButton = document.getElementById('restart-button');
const inputDiv = document.getElementById('input-div');
const translationDiv = document.getElementById('translation-div');
const speedDisplay = document.getElementById('speed');
const errorsDisplay = document.getElementById('errors');
const resultsPanel = document.getElementById('results');

// 定义变量
let currentPosition = 0;
let startTime = null;
let correctCharacters = 0;
let errorCount = 0;
let errorCharacters = {};
let textCharacters = [];
let typingInterval = null;
let currentQuote = null;

// 创建音效对象
const typeSound = new Audio('assets/sounds/typewriter-sound.wav');

// 页面加载时获取名言
document.addEventListener('DOMContentLoaded', () => {
    loadRandomQuote();
    setupEventListeners();
});

// 设置事件监听器
function setupEventListeners() {
    newQuoteButton.addEventListener('click', loadRandomQuote);
    restartButton.addEventListener('click', () => {
        resultsPanel.style.display = 'none';
        renderText(currentQuote);
    });
}

// 从文件加载随机名言
function loadRandomQuote() {
    fetch('kevin-kelly-quotes-with-translation.txt')
        .then(response => response.text())
        .then(text => {
            const quotes = parseQuotes(text);
            currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
            resetTypingState();
            renderText(currentQuote);
        });
}

// 解析名言文件
function parseQuotes(text) {
    const lines = text.split('\n');
    const quotes = [];
    let currentEnglish = '';
    let currentChinese = '';

    for (const line of lines) {
        if (line.trim() === '') continue;

        // 判断是否为英文行
        if (/^[A-Za-z]/.test(line)) {
            if (currentEnglish && currentChinese) {
                quotes.push({ english: currentEnglish, chinese: currentChinese });
                currentEnglish = '';
                currentChinese = '';
            }
            currentEnglish = line.trim();
        } else {
            currentChinese += line.trim() + ' ';
        }
    }

    // 添加最后一条名言
    if (currentEnglish && currentChinese) {
        quotes.push({ english: currentEnglish, chinese: currentChinese });
    }

    return quotes;
}

// 渲染文本到页面
function renderText(quote) {
    inputDiv.innerHTML = '';
    translationDiv.textContent = quote.chinese;
    textCharacters = [];

    // 创建每个字符的span元素
    for (const char of quote.english) {
        const span = document.createElement('span');
        span.className = `character ${char === ' ' ? 'space-character' : ''}`;
        span.textContent = char;
        inputDiv.appendChild(span);
        textCharacters.push(span);
    }

    // 设置第一个字符为光标位置
    if (textCharacters.length > 0) {
        textCharacters[0].classList.add('cursor', 'pending-char');
    }

    // 开始计时
    startTime = new Date();
    startSpeedCalculation();
}

// 开始速度计算
function startSpeedCalculation() {
    clearInterval(typingInterval);
    typingInterval = setInterval(() => {
        if (!startTime) return;
        const elapsedMinutes = (new Date() - startTime) / (1000 * 60);
        const speed = elapsedMinutes > 0 ? Math.round(correctCharacters / elapsedMinutes) : 0;
        speedDisplay.textContent = speed;
    }, 1000);
}

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
    resultsPanel.style.display = 'block';
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
    resultsPanel.style.display = 'none';
}

// 键盘输入处理
document.addEventListener('keydown', (e) => {
    // 忽略功能键
    if (['Tab', 'Shift', 'Ctrl', 'Alt', 'Meta', 'CapsLock', 'Enter', 'Backspace'].includes(e.key)) {
        // 处理退格键
        if (e.key === 'Backspace' && currentPosition > 0) {
            e.preventDefault();
            textCharacters[currentPosition].classList.remove('cursor', 'pending-char');
            currentPosition--;
            textCharacters[currentPosition].classList.remove('correct', 'incorrect');
            textCharacters[currentPosition].classList.add('cursor', 'pending-char');
        }
        return;
    }

    // 如果已经完成打字，不处理输入
    if (currentPosition >= textCharacters.length) return;

    e.preventDefault();
    const currentChar = textCharacters[currentPosition];
    const pressedKey = e.key === ' ' ? ' ' : e.key;

    // 检查输入是否正确
    if (pressedKey === currentChar.textContent) {
        currentChar.classList.add('correct');
        correctCharacters++;
        // 播放打字机音效
        typeSound.currentTime = 0;
        typeSound.play();
    } else {
        currentChar.classList.add('incorrect');
        errorCount++;
        errorsDisplay.textContent = errorCount;
        // 播放打字机音效
        typeSound.currentTime = 0;
        typeSound.play();
        
        // 记录错误字符
        const expectedChar = currentChar.textContent;
        errorCharacters[expectedChar] = (errorCharacters[expectedChar] || 0) + 1;
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
```

### JavaScript核心功能解析

- **DOM元素获取**：通过`document.getElementById`获取页面元素
- **事件监听**：使用`addEventListener`响应按钮点击和键盘输入
- **名言加载与解析**：从文本文件读取名言并解析为英文和中文对照
- **打字状态管理**：跟踪当前位置、正确字符数、错误数等状态
- **速度计算**：通过定时器实时计算并更新打字速度
- **音效播放**：使用HTML5 Audio API播放打字音效

## 🚀 如何运行这个项目

1. **保存文件**：确保所有文件保存在同一个文件夹中
2. **启动服务器**：在终端中运行以下命令启动本地服务器：
   ```bash
   python3 -m http.server 8080
   ```
3. **访问网页**：打开浏览器，访问 http://localhost:8080

## 💡 编程基础知识

### HTML、CSS和JavaScript的关系

- **HTML**：网页的骨架，定义"有什么"
- **CSS**：网页的外观，定义"长什么样"
- **JavaScript**：网页的行为，定义"做什么"

这三种技术共同构成了现代网页开发的基础，缺一不可。

### 核心概念解释

- **DOM**：文档对象模型，将HTML文档表示为树状结构，使JavaScript能够操作页面元素
- **事件驱动**：网页交互基于事件（如点击、键盘输入），JavaScript通过监听事件来响应
- **函数**：可重用的代码块，用于组织逻辑
- **变量**：存储数据的容器
- **循环**：重复执行代码块
- **条件语句**：根据条件执行不同代码

## 🔄 完整工作流程

1. 用户打开网页 → 浏览器加载index.html、simple-type.css和simple-type.js
2. JavaScript自动加载一条随机名言并显示
3. 用户开始打字：
   - 每次按键触发键盘事件处理函数
   - 比较输入字符与目标字符
   - 更新样式（正确/错误）和计数器
   - 播放打字音效
   - 移动光标到下一个字符
4. 当用户完成所有字符输入：
   - 计算并显示最终速度和错误率
   - 显示错误字符统计
5. 用户可以点击"再来一条"或"再来一次"按钮重新开始

## 🎯 下一步学习建议

如果你对网页开发产生了兴趣，可以从这些基础开始学习：
- **HTML**：学习更多标签和页面结构
- **CSS**：探索Flexbox和Grid布局
- **JavaScript**：了解变量、函数、对象和数组
- **开发工具**：尝试使用VS Code和浏览器开发者工具

记住，编程就像打字一样，熟能生巧。每天学习一点，很快你就能创建自己的网页了！


## 🚀 将项目发布到GitHub

现在你已经完成了打字练习网页的开发，接下来我们将学习如何将项目发布到GitHub，这样全世界的人都可以访问你的作品！

### 前提条件
在开始之前，请确保你已经：
1. 注册了[GitHub账号](https://github.com/join)
2. 安装了[Git](https://git-scm.com/downloads)（版本控制工具）
3. 配置了Git用户信息：
   ```bash
   git config --global user.name "你的GitHub用户名"
   git config --global user.email "你的GitHub邮箱"
   ```

### 发布步骤

#### 1. 在GitHub上创建新仓库

1. 登录你的GitHub账号
2. 点击右上角的"+"图标，选择"New repository"
3. 填写仓库信息：
   - **Repository name**：输入仓库名称（例如 `typing-practice-app`）
   - **Description**：输入简短描述（例如 `A simple typing practice web app with English quotes`）
   - **Visibility**：选择 "Public"（公开）
   - 勾选 "Add a README file"（可选）
   - 点击 "Create repository"

#### 2. 初始化本地Git仓库并提交代码

打开终端，导航到你的项目文件夹：

```bash
cd /Users/merlinzhu/Documents/项目-简单打字练习/复刻简化版_版本 2_加模拟音效_副本
```

执行以下命令初始化Git仓库并提交代码：

```bash
# 初始化Git仓库
git init

# 创建.gitignore文件（可选但推荐）
echo "# 忽略系统文件\n.DS_Store\n# 忽略IDE配置文件\n.idea/\n.vscode/\n" > .gitignore

# 将所有文件添加到暂存区
git add .

# 提交更改
git commit -m "Initial commit: Complete typing practice app with tutorial"
```

#### 3. 连接本地仓库到GitHub

复制你在GitHub上创建的仓库的URL（例如 `https://github.com/你的用户名/typing-practice-app.git`），然后执行：

```bash
# 添加远程仓库
git remote add origin https://github.com/你的用户名/你的仓库名.git

# 验证远程仓库设置
git remote -v
```

#### 4. 推送到GitHub

```bash
# 将本地代码推送到GitHub
git push -u origin main
```

如果这是你第一次使用Git推送，可能会弹出GitHub登录窗口，请输入你的GitHub账号信息。

#### 5. 启用GitHub Pages（让网站可访问）

1. 在GitHub仓库页面，点击 "Settings"
2. 在左侧导航栏中选择 "Pages"
3. 在 "Source" 部分：
   - 选择分支：`main`
   - 选择文件夹：`/(root)`
   - 点击 "Save"
4. 等待几分钟，页面会显示你的网站URL（例如 `https://你的用户名.github.io/你的仓库名/`）

### 常见问题解决

- **推送失败**：如果出现 "fatal: could not read Username for 'https://github.com'" 错误，请确保你已安装GitHub CLI并登录：
  ```bash
  # 安装GitHub CLI（如果尚未安装）
  brew install gh
  # 登录GitHub
  gh auth login
  ```

- **GitHub Pages不显示**：确保你的仓库中有 `index.html` 文件，并且GitHub Pages设置正确。通常需要等待1-2分钟才能生效。

- **更新代码**：当你对项目进行修改后，可以通过以下命令更新GitHub上的代码：
  ```bash
  git add .
  git commit -m "描述你的修改"
  git push
  ```

恭喜！你的打字练习网页现在已经发布到GitHub上，任何人都可以通过你获得的GitHub Pages URL访问它。这是你作为开发者的第一个在线项目，值得骄傲！

