开发笔记
===

从零开始搭建一个项目，看看自己需要用到哪些工具或者插件。

- webpack：用于模块化打包，所以响应地，还需要：
    - js-loader
    - sass-loader
    - 图片压缩或者转 data url
    - webpack-dev-server
- 测试

为了可以使用最新的 js 语法：

```shell
npm install babel-loader babel-core babel-preset-es2015 babel-preset-es2015 babel-preset-stage-2 --save-dev
```

为了可以正常地编译代码，需要在项目根目录新建一个 `.babelrc` 文件，在里面指定 `preset`：

```javascript
{
    "preset": ["es2015", "stage-2"],
    "plugins": ["transform-runtime"]
}
```

其中 `transform-runtime` 是为了可以不必手动引入一些新特性的 polyfill 

为了统一代码风格（使用 airbnb 的配置）：

```shell
npm install --save-dev eslint eslint-loader babel-eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-html
```

其中 `eslint-plugin-html` 是用于检查 `*.vue` 文件。

为了使用 Vue 及单个文件风格的组件化开发：

```shell
npm install --save-dev vue vue-loader
```

如果使用了 Vue 2.0，需要在 webpack 的配置文件中配置 `resolve` 选项。[具体原因请看](https://github.com/vuejs-templates/webpack/issues/215)

```javascript
{
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue'
        }
    }
}
```

为了使用 sass：

```shell
npm install node-sass sass-loader --save-dev
```

## 关于组件化的思考

类似于 Vue 的组件组织方式是非常巧妙的
