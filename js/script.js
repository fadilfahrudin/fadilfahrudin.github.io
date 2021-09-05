// event pada saat link di klik
$('.page-scroll').on('click', function (event) {

    // mengambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen yang bersankutan
    var elemenTujuan = $(tujuan);

    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'easeInExpo');
    event.preventDefault();
});

// paralex

// about
$(window).on('load', function () {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    // Jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 1.80 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll + '%)'
    });

    // Portfolio
    if (wScroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .thumbnail').eq(i).addClass('muncul')
            }, 300 * (i + 1));
        })

    }
});