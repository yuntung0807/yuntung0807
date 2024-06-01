document.addEventListener("DOMContentLoaded", function () {
    let links = [
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=117913&ec=live3cEP" },
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=11124&ec=live3cEP" },
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=44823&ec=live3cEP" },
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=114130&ec=live3cEP" },
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=79023&ec=live3cEP" },
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=16917&ec=live3cEP" },
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=14719&ec=live3cEP" },
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=43403&ec=live3cEP" },
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=16917&ec=live3cEP" },
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=12356&ec=live3cEP" },
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=111383&ec=live3cEP" },
    ];
  
    let specials = [
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=43403&ec=live3cEP", "image": "live3cEP/images/0914/C1.png" },
      { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=43403&ec=live3cEP", "image": "live3cEP/images/0914/C2.png" },
    ];

    let specials2 = [
        { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=79023&ec=live3cEP", "image": "live3cEP/images/0914/C8.png" },
        { "url": "https://www.tk3c.com/dic2.aspx?cid=111383&aid=6462&hid=112134&ec=live3cEP", "image": "live3cEP/images/0914/C9.png" },
      ];
  
    //活動BANNER輪播1
    let banner1 = [
      { "url": "https://events.tk3c.com/events_net/23_99outdoor/index.html?ec=live3cEP", "image": "23_99shopping/images/bn_outdoorM.jpg" },
      { "url": "https://www.tk3c.com/dic1.aspx?cid=11124&aid=5261&ec=live3cEP", "image": "freshman_third/images/bn_lenovo2.jpg" },
    ];
  
    //活動BANNER輪播2
    let banner2 = [
      { "url": "https://events.tk3c.com/events_net/202308SamsungLaunch/index.html?ec=live3cEP", "image": "23_99shopping/images/bn_samsungM.jpg" },
      { "url": "https://www.tk3c.com/dic1.aspx?cid=11124&aid=23587&ec=live3cEP", "image": "23_99shopping/images/bn_msi09.jpg" },
    ];
  
    let slide = [
      { "url": "https://events.tk3c.com/events_net/gpmgm?ec=live3cEP", "image": "23_99shopping/images/sp05a.png" },
      { "url": "", "image": "23_99shopping/images/sp08a.png" },
    ];
  
    let slide2 = [
      { "url": "https://events.tk3c.com/events_net/5ius7pibrave/index.html?ec=live3cEP#pro07", "image": "23_99shopping/images/sp09.png" },
      { "url": "https://events.tk3c.com/events_net/5ius7pibrave/index.html?ec=live3cEP#pro07", "image": "23_99shopping/images/sp10.png" },
    ];
  
  
    let spHtml = appendBanks(specials, 'sp');
    let sp2Html = appendBanks(specials2, 'sp');
    let banner1Html = appendBanks(banner1, 'banner1');
    let banner2Html = appendBanks(banner2, 'banner2');
    $('.special-box .flip').append(spHtml);
    $('.special-box .short').append(sp2Html);
    $('.banner1').append(banner1Html);
    $('.banner2').append(banner2Html);
  
  
    for (let x = 0; x < links.length; x++) {
      $('.bg01').eq(x).after(`
      <a class="more" href="${links[x].url}" target="_blank">看更多</a>
      `);
    }
  
    setTimeout(() => {
      new Swiper('.special-box .sp-container', {
        loop: true,
        autoplay: {
          delay: 1700,
          disableOnInteraction: false,
        },
        effect: 'flip',
        flipEffect: {
          slideShadows: false,
        },
      });
  
      new Swiper('.all-box .slide-container', {
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
      });
  
      new Swiper('.all-box .slide2-container', {
        autoplay: {
          delay: 1800,
          disableOnInteraction: false
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
      });
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
    }, 10);
  });