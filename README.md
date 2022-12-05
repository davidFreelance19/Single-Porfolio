# Frontend Mentor - Single-page design portfolio solution

This is a solution to the [Single-page design portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-design-portfolio-2MMhyhfKVo). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

ユーザーができること:

- デバイスの画面サイズに応じて、サイトに最適なレイアウトを表示します
- ページ上のすべてのインタラクティブ要素のホバー状態を確認できる
- マウス/トラックパッドまたはキーボードのいずれかを使用してスライダーを移動することができる

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [リンク](https://your-solution-url.com)
- Live Site URL: [リンク](https://your-live-site-url.com)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- React - JS library

### What I learned

・Swiper の prev,next ボタンの編集の仕方を学ぶことができた。

To see how you can add code snippets, see below:

```css
.swiper-button-prev,
.swiper-button-next {
	position: static;
	width: 6.4rem !important;
	height: 6.4rem;
	display: inline-block !important;
	margin-top: 3.2rem;
	background-repeat: no-repeat;
	background-color: black;
	background-position: center;
	border-radius: 50%;
	cursor: pointer;
	transition: background-color 0.4s;
}
```

### Useful resources

- [Swiper のボタンの編集](https://dev.to/timo_ernst/how-to-customize-prev-next-buttons-in-react-swiper-js-4lki)
- [スライダーをキーボードで操作する方法](https://codesandbox.io/s/swiper-keyboard-control-react-forked-5ntkuu?file=/src/App.jsx)
