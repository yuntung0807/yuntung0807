document.addEventListener("DOMContentLoaded", function () {
  let events = [
    { "url": "https://events.tk3c.com/events_net/freshman_house/index.html?ec=cooltime", "pc": "cooltime/images/freshman_930x120PC.jpg", "mobile": "cooltime/images/freshman_738x410M.jpg" },
    // { "url": "https://events.tk3c.com/events_net/summerhotout/index.html?ec=cooltime", "pc": "cooltime/images/summerout_930x120PC.jpg", "mobile": "cooltime/images/summerout_738x410M.jpg" },
    { "url": "https://events.tk3c.com/events_net/airConditionerLAB/index.html?ec=cooltime", "pc": "cooltime/images/airconditioner_930x120PC.jpg", "mobile": "cooltime/images/airconditioner_738x410M.jpg" },
    { "url": "https://events.tk3c.com/events_net/health2021/index.html?ec=cooltime", "pc": "cooltime/images/home_930x120PC.jpg", "mobile": "cooltime/images/home_738x410M.jpg" }
  ];
  
  let links = [
    { "name": "必買強品", "url": "" },
    { "name": "冰飲", "url": "https://www.tk3c.com/dic1.aspx?cid=83188&aid=4963ec=cooltime" },
    { "name": "飲水機", "url": "https://www.tk3c.com/dic1.aspx?cid=83188&aid=19820&ec=cooltime" },
    { "name": "金礦咖啡", "url": "https://events.tk3c.com/events_net/crowncoffee/index.html?ec=cooltime" },
    { "name": "超低甜甜價", "url": "https://www.tk3c.com/product/201205benefits/index.aspx?ec=cooltime" },
  ];

  let eventHtml = appendBanksRespen(events, 'event', 'page');

  $('.event-group').append(eventHtml);


  readMore(links);

  for (let x = 1; x < links.length; x++) {
    $('.bg01').eq(x).append(`<a class="more" href="${links[x].url}"><img src="https://events.cdn-tkec.tw/events_net/events_net/beauty2023/images/cta.png" /><a>`);
  }

  $(document).on('scroll', function () {
    if ($(this).scrollTop() > $('.special-box').offset().top - 200) {
      $('.background2').addClass('fixed');
    } else {
      $('.background2').removeClass('fixed');
    }
  });

  //背景滾動
  scrollUp($('.item'));

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