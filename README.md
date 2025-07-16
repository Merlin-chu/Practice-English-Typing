# Practice English Typing

## 项目介绍
这是一个简单的英文打字练习网页应用，旨在帮助用户通过键盘练习提高英文打字速度和准确性。应用包含英文名言警句文本，并配有打字音效反馈，提供沉浸式的打字练习体验。

## 功能特点
- 随机显示英文名言警句（附带中文翻译）
- 实时打字状态显示（当前位置、正确率）
- 打字音效反馈（正确/错误按键提示）
- 练习结果统计（打字速度WPM、错误率）
- 响应式设计，适配不同屏幕尺寸
- 简洁直观的用户界面

## 使用方法
1. 打开网页后，系统会自动加载一段英文练习文本
2. 点击输入框开始打字练习
3. 按照屏幕上方显示的英文文本进行输入
4. 正确输入时字符会变为绿色，错误时会显示红色
5. 完成所有文本输入后，系统会显示您的打字速度和准确率
6. 点击"重新开始"按钮可以更换文本并重新开始练习

## 项目结构
```
├── README.md           # 项目说明文档
├── TUTORIAL.md         # 详细使用教程
├── index.html          # 主页面HTML
├── simple-type.css     # 样式表
├── simple-type.js      # 核心功能脚本
├── kevin-kelly-quotes-with-translation.txt  # 英文名言及翻译
└── assets/sounds/
    └── typewriter-sound.wav  # 打字音效文件
```

## 本地运行指南
1. 确保您的电脑已安装Python
2. 打开终端，导航到项目目录
3. 运行命令启动本地服务器：
   ```bash
   python3 -m http.server 8080
   ```
4. 在浏览器中访问：http://localhost:8080

## 技术栈
- HTML5
- CSS3
- JavaScript (ES6+)
- 原生Web API（Audio, DOM操作等）
# Practice-English-Typing

A simple English typing practice tool with audio feedback.
