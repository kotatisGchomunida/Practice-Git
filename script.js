// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
    $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
	
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
        $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
        VivusInit(); //印象編 9-4-1 SVG アニメーションの初期設定
        VivusAnime();//印象編 9-4-1 SVG アニメーションの関数を呼ぶ
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    
   //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg').on('animationend', function() {    
    fadeAnime();//印象編 4 最低限おぼえておきたい動きの関数を呼ぶ
	SmoothTextAnime();//印象編 8-16テキストが滑らかに出現の関数を呼ぶ
    particleTextAnime();//印象編 5-17粒子が集まってテキストになる関数を呼ぶ
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる    

});// ここまでページが読み込まれたらすぐに動かしたい場合の記述
