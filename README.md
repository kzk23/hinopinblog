# NuxtとContentでブログサイトを作ってみました

## Nuxt.jsを採用した経緯について
このサイトはJavaScriptのフレームワークであるNuxt.jsを用いて作成しています。以前運用していたBlogサイトはDjangoというPythonのフレームワークを用いていたのですがNuxtにcontentというBlogサイトを構築するのに最適な機能が追加されたのでこちらで作成しました。

もともとDjangoをバックエンドに, Nuxt.jsをフロントエンドにしてWebアプリを作ろうかなと思っていたのでこの勉強も兼ねてNuxt.jsを採用しています。

![hinopin blog](https://user-images.githubusercontent.com/45329260/102309991-674e2a00-3fad-11eb-9940-662866ae7b8e.jpg)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run gengerate

# deploy to GCP
$ gclloud app deploy
```
