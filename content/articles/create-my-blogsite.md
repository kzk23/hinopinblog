---
title: NuxtとContentでブログサイトを作ってみました
description: 簡単なんで是非やってみてください
img: https://user-images.githubusercontent.com/45329260/102309991-674e2a00-3fad-11eb-9940-662866ae7b8e.jpg
alt: create-my-blogsite
author: 
  name: hinopin
  bio: 好奇心が旺盛で色んなことに興味が沸きます。知識をインプットすることが好きなのですが逆にアウトプットすることが苦手なのでアウトプットする場としてこのBlogを始めました。
  img: https://user-images.githubusercontent.com/45329260/102092181-1fbb8700-3e63-11eb-9c31-7d6f4f3ffcde.jpg
tags: coding
---


## Nuxt.jsを採用した経緯について
このサイトはJavaScriptのフレームワークであるNuxt.jsを用いて作成しています。以前運用していたBlogサイトはDjangoというPythonのフレームワークを用いていたのですがNuxtにcontentというBlogサイトを構築するのに最適な機能が追加されたのでこちらで作成しました。

もともとDjangoをバックエンドに, Nuxt.jsをフロントエンドにしてWebアプリを作ろうかなと思っていたのでこの勉強も兼ねてNuxt.jsを採用しています。


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
