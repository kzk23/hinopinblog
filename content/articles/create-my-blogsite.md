---
title: このブログサイトの作り方
description: 簡単なんで是非やってみてください
img: https://drive.google.com/uc?export=view&id=1nAlT1Yo46rgpCEPdOCnplmYqvqv5hKyq
alt: create-my-blogsite
author: 
  name: hinopin
  bio: 好奇心が旺盛で色んなことに興味が沸きます。知識をインプットすることが好きなのですが逆にアウトプットすることが苦手なのでアウトプットする場としてこのBlogを始めました。
  img: https://drive.google.com/uc?export=view&id=1y0STLOe9L05lPE8qNHxbV5O1OMzsyW_M
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
