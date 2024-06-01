document.addEventListener("DOMContentLoaded", function () {
  let events = [
    { "url": "https://events.tk3c.com/events_net/icewash2209/index.html?ec=pet_expo", "pc": "99nightSale/images/bn_wash.jpg", "mobile": "99nightSale/images/bn_washM.jpg" },
    { "url": "https://events.tk3c.com/events_net/green_subsidy/index.html?ec=pet_expo", "pc": "99nightSale/images/bn_green.jpg", "mobile": "99nightSale/images/bn_greenM.jpg" },
    { "url": "https://events.tk3c.com/events_net/freshman_third/index.html?ec=pet_expo", "pc": "99nightSale/images/bn_freshmen3.jpg", "mobile": "99nightSale/images/bn_freshmen3M.jpg" },

  ];


  let eventHtml = appendBanksRespen(events, 'event', 'page');


  $('.event-group').append(eventHtml);



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