---
title: MacでPycharm開発環境の構築(Django)
description: Webアプリを作成するために最初に行ったこと
img: https://res.cloudinary.com/hinopin/image/upload/f_auto,q_auto/v1609292036/hinopin-blog/create-development-environment-for-mac_j6rh67.webp
author: 
  name: hinopin
  bio: 好奇心が旺盛で色んなことに興味が沸きます。知識をインプットすることが好きなのですが逆にアウトプットすることが苦手なのでアウトプットする場としてこのBlogを始めました。
  img: https://res.cloudinary.com/hinopin/image/upload/f_auto,q_auto/v1609292036/hinopin-blog/auther_hinopin_wpmkll.webp
tags: 
---


今回はPythonで最強のIDEと言われているPycharmをインストールして開発環境を構築してみようと思います。特に学生の方はフル機能のProfessional版も無償で利用できるのでおすすめです。




### どんな人に見てほしいか
これからPythonプログラミングをやってみようという初心者の方(特に学生)。これからDjangoを使ってWebアプリケーションを開発してみたい方。知識のないプログラミング初心者にとって開発環境の構築は意外と敷居が高いものだと思います。今回はそのややこしい過程をすっ飛ばして簡単にPythonプログラミング環境を構築できるPycharmを紹介したいと思います。



### Pycharmとは
PycharmとはPythonのために作られたIDE(Integrated Development Environment / 統合開発環境)です。

IDEとは、ソースコードを記述するエディタ、ソースコードからプログラムを生成するコンパイラ、コードの不正を発見・修正するデバッガなどのプログラム開発ツールをひとまとめにした開発環境のことをいう。
-[統合開発環境 - Wikipedia](https://ja.wikipedia.org/wiki/%E7%B5%B1%E5%90%88%E9%96%8B%E7%99%BA%E7%92%B0%E5%A2%83)より引用


### なぜPycharmか
巷では「最強」との呼び声が高いPycharmですが私には伝えきれないほど様々な機能がついています。今回は私が使おうと思うに至ったメリットを何点か紹介します。

それは超強力なコード補完機能がついていること、様々な開発環境のテンプレートが備わっていること、Gitとの連携機能もついていること、そしてこれらの機能が学生ライセンスで無償で利用できるからです。




### 前提条件
```
$ sw_vers
ProductName:	Mac OS X
ProductVersion:	10.15.4
BuildVersion:	19E287
```




### Pycharmのダウンロード
まずこちら[ダウンロード PyCharm：JetBrainsによるプロの開発者向けのPython IDE](https://www.jetbrains.com/ja-jp/pycharm/download/#section=mac)のページにアクセスし、ダウンロードします。
![image1](https://user-images.githubusercontent.com/45329260/102689001-3df7fd00-423e-11eb-99f7-6922071adda1.png)


ダウンロードが完了したらこのdmgファイルを開いてインストールしていきます。
![image2](https://user-images.githubusercontent.com/45329260/102689037-89121000-423e-11eb-9b72-c48c49ee3a7c.png)


そうするとこのウインドウが表示されるのでドラッグアンドドロップでインストールします。どうやら1 GBほどストレージが必要みたいですね。
![image3](https://user-images.githubusercontent.com/45329260/102689037-89121000-423e-11eb-9b72-c48c49ee3a7c.png)



### Pycahrmの初回起動
LancherpadにPycharmが追加されると思うので起動します。途中このようなポップアップウインドウが表示されるかもしれませんが「開く」で問題ないです。
![image4](https://user-images.githubusercontent.com/45329260/102689133-2cfbbb80-423f-11eb-9124-12a28720a402.png)

起動画面なんかかっこよくないですか😘
![image5](https://user-images.githubusercontent.com/45329260/102689192-882dae00-423f-11eb-94b4-a0c13bb5c18d.png)



まずこのような画面が表示されると思います。学生の方はJetBrainのアカウントを作成して無料ライセンスを取得した後ここからログインすることでPycharmのProfessional版が利用できるようになります。
![image6](https://user-images.githubusercontent.com/45329260/102689215-ab585d80-423f-11eb-81b5-22574054924f.png)

こちら[JetBrains Student Pack（学生・教職員向け無料ライセンス）と申し込み
方法 | JetBrains ブログ](https://blog.jetbrains.com/jp/2019/08/22/2105)の公式サイトに取得方法が載っていますのでやってみてください。
![image7](https://user-images.githubusercontent.com/45329260/102689237-d9d63880-423f-11eb-9fbd-a0ad28e5f5de.png)


無料のCommunity版もありますので「Evaluate for free」のタブからEvaluateのボタンをそのまま押して開始してください。


そうするとこの画面が表示されます。
![image8](https://user-images.githubusercontent.com/45329260/102689267-23268800-4240-11eb-8b85-13f0aa0a61cb.png)
「Create New Project」に進んでみます。




![image9](https://user-images.githubusercontent.com/45329260/102689287-46e9ce00-4240-11eb-938c-44c75a9651b3.png)
Pycahrmのメリットである多種多様なテンプレートがあります。今回はDjangoを選択して開発環境を構築してみようと思います。Djangoのタブに進みます。


![image10](https://user-images.githubusercontent.com/45329260/102689351-acd65580-4240-11eb-82bf-ab2b5213476a.png)
「Location」で開発する作業ディレクトリを選択します。Pycharmはここで仮想環境「Project Interpreter」も作成できます。Pythonのみの場合もそうですがDjangoは様々なライブラリを用いて開発していくので仮想環境を作成してプロジェクトごとに開発環境を分割する方法は生産性を上げるという面からも有効だと思うので使うことをおすすめします。例として上記に示すように「Base interpreter」にPython3を選択してVirtualenvで仮想環境を作成してみます。





仮想環境およびプロジェクトを作成できまた。
![image11](https://user-images.githubusercontent.com/45329260/102689380-e8711f80-4240-11eb-9043-2a66352120c4.png)


ウインドウ下部にある「terminal」を開いてDjangoの開発用サーバーを立てるコマンドを入力するともうDjangoを開発できちゃいます。

```
$ python manage.py runserver
Django version 3.0.5, using settings 'mysite.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```


http://127.0.0.1:8000 にアクセスして下のように表示されれば成功です。これでガツガツ開発できる環境を高速で構築できました。プログラミング初心者が開発を始めようとする時にはまず最初に適切な環境を構築することが重要だと思います。
![image12](https://user-images.githubusercontent.com/45329260/102689389-0179d080-4241-11eb-9fdf-f6f32229a107.png)