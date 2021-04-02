'use strict';
//swiper・・・スライダープラグインの設定
var swiper = new Swiper('.swiper-container', {
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  //アクティブなスライドを中央にする。はみ出しスライド指定時はマスト
  centeredSlides:true,
  // スライドの表示数。はみ出ししたいときは奇数にする必要あり。小数点以下ははみ出し分の幅となる。
  slidesPerView:1.5,
  //間隔56px
  spaceBetween: 30,
  // 一番左の表示（全）をHTML○番目のカードに指定
  initialSlide: 1,
  loop: true,
  // 5000msec＝5秒でスライド
  autoplay: {
    delay: 5000,
  },
  // 769px以上でのレスポンシブ挙動変更
  breakpoints: {
    769: {
      slidesPerView: 3.8,
      spaceBetween: 56,
    }
  },
});

// AOSプラグイン発動・・・ふわっと表示
AOS.init();