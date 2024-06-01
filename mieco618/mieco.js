$(function () {

  let banners = [
    { "url": "https://events.tk3c.com/events_net/2023618expert?ec=mi_ecommerce2023", "image": "mi_ecommerce2023/images/bn01_M.jpg" },
    { "url": "https://events.tk3c.com/events_net/23618expert2Ca/index.html?ec=mi_ecommerce2023", "image": "mi_ecommerce2023/images/bn02_M.jpg" },
    { "url": "https://events.tk3c.com/events_net/2020TVforever/index.html?ec=mi_ecommerce2023", "image": "mi_ecommerce2023/images/bn03_M.jpg" },
    { "url": "https://events.tk3c.com/events_net/23618GAMES/index.html?ec=mi_ecommerce2023", "image": "mi_ecommerce2023/images/bn04_M.jpg" },
    { "url": "https://events.tk3c.com/events_net/23618expert3C/index.html?ec=mi_ecommerce2023", "image": "mi_ecommerce2023/images/bn05_M.jpg" },
    { "url": "https://events.tk3c.com/events_net/23618expert2Cb/index.html?ec=mi_ecommerce2023", "image": "mi_ecommerce2023/images/bn06_M.jpg" },
    { "url": "https://events.tk3c.com/events_net/airConditionerLAB/index.html?ec=mi_ecommerce2023", "image": "mi_ecommerce2023/images/bn07_M.jpg" },
  ];

  let bannerHtml = appendBanks(banners, 'banner');

  //超值組合
  swiperProElement($('.special-box .specials'), 0);
  swiperForProduct('.pro');
  $('.bg01').last().after(bannerHtml);

  $('.protitle').each(function (i, v) {
    if (i == 0) {
      $(this).remove();
      $('.aside-container .aside-content li').eq(0).remove();
      $('.nav-footer .box-area.type li').eq(0).remove();
    }
  });

  //背景滾動
  scrollUp($('.item'));


  //小米旗艦館
  $('#banner-area').after("<a class='store' href='https://events.tk3c.com/events_net/2019MI/index.aspx?ec=mi_ecommerce2023' target='_blank'><img src='https://events.cdn-tkec.tw/events_net/events_net/mi_ecommerce2023/images/mi_go.png'></a>")

  setTimeout(() => {
    new Swiper('.banner-container', {
      autoplay: {
        delay: 1400,
        disableOnInteraction: false
      },
      spaceBetween: 10,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3,
        }
      },
    });

    let gift = new Swiper('.gift-box .gift', {
      loop: false,
      observer: true,
      observeParents: true,
      spaceBetween: 10,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        }
      }
    });

    gift.loopDestroy();
    gift.update();

  }, 20);
});