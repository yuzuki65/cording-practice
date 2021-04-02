'use strict';
//アコーディオン
// $('.bl_accordion_body').hide(); //初期は非表示
$('.bl_accordion_btn').click(function () {
  // ここのthisはクリックされた対象。slideToggleされるのは普段hideとなっているdd
  $(this).parent('dt').next('dd').slideToggle();
  // toggleClassでis_openクラスを付け外すことで開閉時の動作を制御。CSSでクラス有無によりdisplay切り替え。
  $(this).toggleClass('is_open');
})



//ドロワー

$('.bl_header_dorawer').hide(); //初期は非表示
$('.el_hamberger').click(function () {
  // ここのthisはクリックされた対象。fadeToggleされるのは普段hideとなっているnav.bl_header_dorawer
  $(this).parent('div').children('.bl_header_dorawer').fadeToggle(500);
  $('body').toggleClass('is_noscroll');
  $(this).parent('div').children('.bl_header_dorawer').toggleClass('is_active');
  $(this).toggleClass('is_active');
})


if( $(window).width() < 768 ){
  $('.bl_globalNav_item>a').click(function () {
    $(this).parents('nav').fadeOut(500);
    $(this).parents('nav').removeClass('is_active');
    $(this).parents('nav').next('button').next('button').removeClass('is_active');
    $('body').removeClass('is_noscroll');
  })
}

//フォームのsubmitボタンにdisabledの判定機能
$(document).ready(function () {
  const $submitBtn = $('#js-submit')
  // formのinputとtextareaに変化があったとき発火。
  $('#form input,#form textarea').on('change', function () {
    //もし、inputのタイプ属性のvalue値？が空でなければ・・・
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      //もしprivacyCheckがcheckedされている状態であったら・・・
      $('#form #privacyCheck').prop('checked') === true
    ) {
    //送信ボタンの無効処理しない＝有効
      $submitBtn.prop('disabled', false);
    //それ以外の場合は送信ボタンを無効に（cssでopacityもつける）
    } else {
      $submitBtn.prop('disabled', true);
    }
  });
});


//スムーススクロール
$(function(){
// #で始まるアンカーをクリックした場合に処理
  $('a[href^="#"]').click(function(){
    // クリックした出発地点の値取得
    var href= $(this).attr("href");
    // 移動先を取得（href属性が#またはhref属性がない状態であれば、$('html');へのリンク＝ページトップへ移動、そうでなけれ変数$('href')の中身が到着地点になる。
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を0px調整する。値を30にすると30px下にずらすことができる。
    var adjust = -70;
    // スクロールの速度
    var speed = 400; // ミリ秒
    // 到着地点を調整
    var position = target.offset().top + adjust;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    $('.bl_header_dorawer').hide();
    //drawer表示時にスムーススクロール発動でハンバーガーボタンを元に戻す
    $('.el_hamberger').removeClass('is_active');
    $('.el_hamberger').children('span').removeClass('is_active');
    return false;
  });
});

// グーグルフォームの挙動制御
$(document).ready(function () {
  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSej3C0tTtuMwcATOz1KUyv5KsCkqc4EwQre8ZX7kIuxhVU9ow/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          // $(".is_endMessage").slideDown();
          // $("#js-submit").fadeOut();
          window.location.href = "thanks.html";
        },
        200: function () {
          $(".is_falseMessage").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});