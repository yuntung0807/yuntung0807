document.addEventListener("DOMContentLoaded", function () {

  var location = window.location.pathname.split('/'),
    links = [];

  if (location[2] == "valentineForGirl") {
    links = [
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=11124&ec=valentineForGirl" },
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=117913&ec=valentineForGirl" },
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=44823&ec=valentineForGirl" },
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=114130&ec=valentineForGirl" },
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=14719&ec=valentineForGirl" },
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=10890&ec=valentineForGirl" },
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=12406&ec=valentineForGirl" },
    ];
  } else {
    links = [
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=11124&ec=valentineForBoy" },
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=43403&ec=valentineForBoy" },
      { "url": "https://www.tk3c.com/dic1.aspx?cid=117916&aid=23091&ec=valentineForBoy" },
      { "url": "https://events.tk3c.com/events_net/PLAYGAMES/index.html?ec=valentineForBoy" },
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=111383&ec=valentineForBoy" },
      { "url": "https://events.tk3c.com/events_net/freshman_third/index.html?ec=valentineForBoy" },
      { "url": "https://www.tk3c.com/dic2.aspx?cid=119275&aid=23433&hid=120451&ec=valentineForBoy" },
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=4640&ec=valentineForBoy" },
    ];
  }

  let banks = [
    { "url": `https://events.tk3c.com/events_net/events_net/banks/bank.html?ec=${location[2]}`, "image": "freshman_start/images/bank1.png" },
    { "url": `https://events.tk3c.com/events_net/events_net/banks/bank.html?ec=${location[2]}`, "image": "freshman_start/images/bank2.png" },
    { "url": `https://events.tk3c.com/events_net/events_net/banks/bank.html?ec=${location[2]}`, "image": "freshman_start/images/bank3.png" },
    { "url": `https://events.tk3c.com/events_net/events_net/banks/bank.html?ec=${location[2]}`, "image": "freshman_start/images/bank4.png" },
    { "url": `https://events.tk3c.com/events_net/events_net/banks/bank.html?ec=${location[2]}`, "image": "freshman_start/images/bank5.png" },
    { "url": `https://events.tk3c.com/events_net/events_net/banks/bank.html?ec=${location[2]}`, "image": "freshman_start/images/bank6.png" },
  ];

  //活動BANNER輪播1
  let banner1 = [
    { "url": `https://events.tk3c.com/events_net/airConditionerLAB/index.html?ec=${location[2]}`, "image": "fatherDay2023/images/bn_airM.jpg" },
    { "url": `https://events.tk3c.com/events_net/freshman_house/index.html?ec=${location[2]}`, "image": "fatherDay2023/images/bn_house.jpg" },
    { "url": `https://events.tk3c.com/events_net/valentinePlayGame/index.html?ec=${location[2]}`, "image": "2023Valentine/images/bn_gameM.jpg" },
  ];

  //活動BANNER輪播2
  let banner2 = [
    { "url": `https://events.tk3c.com/events_net/2020TVforever/index.html?ec=${location[2]}`, "image": "fatherDay2023/images/bn_tv.jpg" },
    { "url": `https://events.tk3c.com/events_net/green_subsidy/index.html?ec=${location[2]}`, "image": "summer2023/images/bn_greenM.jpg" },
    { "url": `https://events.tk3c.com/events_net/freshman_third/index.html?ec=${location[2]}`, "image": "fatherDay2023/images/bn_fresh3.jpg" },
  ];




  let bankHtml = appendBanks(banks, 'bank');
  let banner1Html = appendBanks(banner1, 'banner1');
  let banner2Html = appendBanks(banner2, 'banner2');

  $('.bank-group').append(bankHtml);
  $('.banner1').append(banner1Html);
  $('.banner2').append(banner2Html);


  //輪播區
  $('.bg01').first().appendTo($('.sale-group .sale'));


  $('.protitle').first().remove();
  $('.aside-container .aside-content li').eq(2).remove();
  $('.nav-footer .box.area.type li').eq(2).remove();



  setTimeout(() => {

    new Swiper('.banner1-container', {
      autoplay: {
        delay: 1500,
        disableOnInteraction: false
      },
      effect: 'flip',
      flipEffect: {
        slideShadows: false,
      },
      autoHeight: true,
    });

    new Swiper('.banner2-container', {
      autoplay: {
        delay: 1800,
        disableOnInteraction: false
      },
      effect: 'flip',
      flipEffect: {
        slideShadows: false,
      },
      autoHeight: true,
    });

    special = new Swiper('.sale-group .sp', {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loopAdditionalSlides: 4,
      spaceBetween: 10,
      autoHeight: true,
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 3
        },
        992: {
          slidesPerView: 4,
        }
      },
    });

    new Swiper('.bank-container', {
      loop: true,
      autoplay: {
        delay: 1300,
        disableOnInteraction: false,
      },
      loopAdditionalSlides: 2,
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
  }, 20);
});