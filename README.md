# 前言
使用到tinymce富文本编辑器，由于官方并没有设置段落间距插件，所以自己开发了一个段落间距扩展插件，和tinymce-vue配套使用。
# 简述
目前只有一个可自定义设置的段落间距插件，可以配置为toolbar，也可以配置成菜单项。
# 使用方法
## 方式一：
使用npm安装:
```
npm install tinymce-paragraphspacing
```
使用import导入：
```
import 'tinymce-paragraphspacing'
```

### toolbar设置方式
tinymce初始化配置：
```
init: {
  language_url: `/tinymce/langs/zh_CN.js`,
  language: 'zh_CN',
  skin_url: `/tinymce/skins/ui/oxide-dark`,
  convert_urls: false,
  height: "100%",
  width: "100%",
  plugins: 'paragraphspacing',
  toolbar: 'uodo redo | paragraphspacing',
  statusbar: true,
  branding: false, 
  resize: false,
  content_style: '* {margin: 0; padding: 0;}'
},
```
paragraphspacing插件有两个配置项：
```
paragraphspacing：设置段落间距值
paragraphspacing_options:设置插件相关配置项，比如图标颜色，线条宽度等
```
#### paragraphspacing
paragraphspacing默认的值为：'0px 3px 5px 10px 15px 20px 30px 50px'，如下图：

![paragraphspacing默认值](https://github.com/yog-zhang/assets/blob/main/images/tinymce_2.png 'paragraphspacing默认值')

也可以自定义设置paragraphspacing的值：
```
init: {
  language_url: `/tinymce/langs/zh_CN.js`,
  language: 'zh_CN',
  skin_url: `/tinymce/skins/ui/oxide-dark`,
  convert_urls: false,
  height: "100%",
  width: "100%",
  plugins: 'paragraphspacing',
  toolbar: 'uodo redo | paragraphspacing',
  // 自定义设置paragraphspacing的值
  paragraphspacing: '0px 20px 40px',
  statusbar: true,
  branding: false, 
  resize: false,
  content_style: '* {margin: 0; padding: 0;}'
},
```
如图：

![paragraphspacing自定义值](https://github.com/yog-zhang/assets/blob/main/images/tinymce_3.png 'paragraphspacing自定义值')

#### paragraphspacing_options
paragraphspacing_options目前支持以下字段设置：
```
fillStyle: 字符串类型，定义填充的内部颜色，同css样式设置，比如'#ffffff',如果不设置，默认继承tinymce的设置
strokeStyle: 字符串类型，定义线条轮廓颜色，同css样式设置，比如'#ffffff',如果不设置，默认继承tinymce的设置
strokeWidth: 数字类型或者字符串(必须是可转换为数字的字符串)，定义线条轮廓宽度，比如20或'20', 如果不设置，默认继承tinymce的设置
```
paragraphspacing_options字段非必填，不设置paragraphspacing_options的话，所有字段默认继承tinymce的设置。

设置如下：
```
init: {
  language_url: `/tinymce/langs/zh_CN.js`,
  language: 'zh_CN',
  skin_url: `/tinymce/skins/ui/oxide-dark`,
  convert_urls: false,
  height: "100%",
  width: "100%",
  plugins: 'paragraphspacing',
  toolbar: 'uodo redo | paragraphspacing',
  // 自定义设置paragraphspacing的值
  paragraphspacing: '0px 20px 40px',
  // 自定义设置paragraphspacing_options
  paragraphspacing_options: {
    fillStyle: '#880099',
    strokeStyle: '#993399',
    strokeWidth: 30
  },
  statusbar: true,
  branding: false, 
  resize: false,
  content_style: '* {margin: 0; padding: 0;}'
},
```
### menu菜单设置方式
```
init: {
  language_url: `/tinymce/langs/zh_CN.js`,
  language: 'zh_CN',
  skin_url: `/tinymce/skins/ui/oxide-dark`,
  convert_urls: false,
  height: "100%",
  width: "100%",
  plugins: 'paragraphspacing',
  toolbar: 'uodo redo | paragraphspacing',
  // 自定义menu
  menu: {
    format: {title: '格式', items: 'paragraphspacing'},
  },
  // 自定义设置paragraphspacing的值
  paragraphspacing: '0px 20px 40px',
  statusbar: true,
  branding: false, 
  resize: false,
  content_style: '* {margin: 0; padding: 0;}'
},
```
如图：

![paragraphspacing菜单设置方式](https://github.com/yog-zhang/assets/blob/main/images/tinymce_4.png 'paragraphspacing菜单设置方式')

## 方式二：
[下载paragraphspacing](https://github.com/yog-zhang/tinymce-plugins/releases/download/v0.0.2/paragraphspacing.zip '下载paragraphspacing插件')

新建一个plugins文件夹(默认在vue框架下)，将下载好的paragraphspacing插件文件放置在该文件夹下

![新建tinymce插件文件夹](https://github.com/yog-zhang/assets/blob/main/images/tinymce_1.png 'tinymce插件文件夹')

vue组件中导入：
```
import '@/plugins/tinymce/paragraphspacing/index.js'
```
配置方法以及使用方法同方式一
 
