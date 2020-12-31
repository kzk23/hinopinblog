---
title: このブログサイトの作り方
description: 簡単なんで是非やってみてください
img: https://res.cloudinary.com/hinopin/image/upload/f_auto,q_auto/v1609292036/hinopin-blog/create-my-blogsite_gpndos.webp
alt: create-my-blogsite
author: 
  name: hinopin
  bio: 好奇心が旺盛で色んなことに興味が沸きます。知識をインプットすることが好きなのですが逆にアウトプットすることが苦手なのでアウトプットする場としてこのBlogを始めました。
  img: https://res.cloudinary.com/hinopin/image/upload/f_auto,q_auto/v1609292036/hinopin-blog/auther_hinopin_wpmkll.webp
tags:
  - coding
---


## Nuxt.jsを採用した経緯について
このサイトはJavaScriptのフレームワークであるNuxt.jsを用いて作成しています。以前運用していたBlogサイトはDjangoというPythonのフレームワークを用いていたのですがNuxtにcontentというBlogサイトを構築するのに最適な機能が追加されたのでこちらで作成しました。

もともとDjangoをバックエンドに, Nuxt.jsをフロントエンドにしてWebアプリを作ろうかなと思っていたのでこの勉強も兼ねてNuxt.jsを採用しています。

## Githubのsource code
ここからダウンロードして使ってください。
https://github.com/kzk23/hinopinblog


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
