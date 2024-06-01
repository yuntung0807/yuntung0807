document.addEventListener("DOMContentLoaded", function (event) {
  //新增看更多按鈕
  let events = [
    { "url": "https://events.tk3c.com/events_net/outdoor/index.html?ec=FORCAR", "pc": "FORCAR/images/202308/bn_weekendPC.jpg", "mobile": "FORCAR/images/202308/bn_weekendM.jpg" },
    { "url": "https://events.tk3c.com/events_net/summer_outdoor/index.html?ec=FORCAR", "pc": "FORCAR/images/202308/bn_travelPC.jpg", "mobile": "FORCAR/images/202308/bn_travelM.jpg" },
  ];

  let proTexts = [
    { "url": "https://www.tk3c.com/dic1.aspx?cid=111383&aid=6463&ec=FORCAR" },
    { "url": "https://www.tk3c.com/dic2.aspx?cid=111383&aid=22234&hid=111925&ec=FORCAR" },
    { "url": "https://www.tk3c.com/dic1.aspx?cid=111383&aid=6462&ec=FORCAR" },
  ];

  let eventHtml = appendBanksRespen(events, 'event', 'page');
  $('.event-box').append(eventHtml);

  let today = new Date();
  let future = new Date('2023/01/30');

  $('.bg01').eq(0).appendTo($('.event-group .events'));
  $('.protitle').eq(0).remove();

  for (let i = 0; i < proTexts.length; i++) {
    $('.protitle').eq(i).find('a').attr("href", proTexts[i].url);
    $('.protitle').eq(i).find('a').attr('target', '_blank');
  }

  for (let x = 1; x < $('.bg01').length; x++) {
    if (x == 1 || x == 6 || x == 7) {
      $('.bg01').eq(x).addClass('num-4');
    } else {
      $('.bg01').eq(x).addClass('num-8');
    }
  }

  setTimeout(() => {
    $('.background .text').css('opacity', 1);
  }, 5000);

  remake();

  function remake() {
    if ($('.bg01 ul li').length > 4) {
      $('.bg01 ul').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: true,
        responsive: [
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 577,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      });
    };
  }

  setTimeout(() => {

    let event = new Swiper('.event-container', {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      effect: 'flip',
      flipEffect: {
        slideShadows: false,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
    });

    event.loopDestroy();
    event.update();
  }, 20);

});