1.全局安装 cnpm i webpack webpack-cli -g
2.局部安装 cnpm i webpack webpack-cli -D
3.webpack，默认的入口目录是src，而默认的入口文件是index.js
4.webpack，默认的出口目录是dist，而默认的出口文件是main.js
5.npm init -y，然后可以修改scripts，加上build项
6.在package.json里可以设置build以及dev
    webpack --mode production   产品模式(所有代码被压缩、混淆)
    webpack --mode development  开发模式(所有代码未被处理)
7.手动设置入口及出口文件的路径
    webpack --mode mode(production/development) 入口文件路径 --output 出口文件路径
8.ES6要转成ES5
    1)cnpm i babel-core babel-loader babel-preset-env -D
    2).babelrc的配置操作，设置 presets 为 env
    3)有两种方式可以进行语法转换
        a)package.json中可以设置 --module-bind js=babel-loader
        2)设置webpack.config.js配置文件，对.js文件进行正则匹配，应用babel-loader进行语法转换
9.react的语法解析
    1)cnpm i react react-dom -S，react模块的安装
    2)cnpm i babel-preset-react -D
    3).babelrc的配置操作，设置 react 项
    4)react程序的编写
10.需要html的支持
    1)cnpm i html-webpack-plugin -D
    2)设置plugins，只要ctrl+c,ctrl+v复制粘贴官方文档，实现了html文件自动引入js的操作
    3)cnpm i html-loader -D
    4)可以实现对html文件进行压缩处理
11.需要css支持，并且实现css文件的单独抽离
    1)cnpm i mini-css-extract-plugin css-loader -D
    2)添加plugins插件以及rules加载器的配置
    3)会自动将css进行单独抽离，并且在html中自动引入css
12.需要服务支持
    1)cnpm i webpack-dev-server -D
    2)package.json中将webpack修改成webpack-dev-server --open就可以了
13.static静态变量的设置在webpack编译时失败，需要安装 cnpm i babel-preset-stage-0 -D，再修改.babelrc配置文件，加入stage-0的语法解析

Es6-->ES5差异
1.getDefaultProps-->static defaultProps
2.getInitialState-->contructor(){ this.state = {}} 或者是 state = {}
3.组件创建方式
    React.createClass--->无状态组件 const Comp = ()=>{ reutrn (jsx) }
    React.createClass--->有状态组件 class Comp extends React.Component{}
4.this指向问题
    1)在按钮等地方 this.xx.bind(this)
    2)在construct this.xx = this.xx.bind(this)
    3)使用箭头函数(推荐方式)
5.钩子函数之间不需要用,进行连接
