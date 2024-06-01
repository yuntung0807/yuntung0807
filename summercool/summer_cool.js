document.addEventListener("DOMContentLoaded", function () {
  let links = [
    { "name": "空調", "url": "https://events.tk3c.com/events_net/airConditionerLAB/index.html?ec=summercool2023" },
    { "name": "移動空調", "url": "https://www.tk3c.com/dic1.aspx?cid=11225&aid=13580&ec=summercool2023" },
    { "name": "風扇", "url": "https://events.tk3c.com/events_net/fan_hot/index.html?ec=summercool2023" },
    { "name": "水冷扇", "url": "https://www.tk3c.com/dic2.aspx?cid=11058&aid=17040&hid=71645&ec=summercool2023" },
    { "name": "自製冰飲", "url": "https://www.tk3c.com/dic1.aspx?cid=83188&aid=4963&ec=summercool2023" },
    { "name": "現沖咖啡", "url": "https://www.tk3c.com/dic1.aspx?cid=83187&aid=22279&ec=summercool2023" },
    { "name": "冰箱", "url": "https://www.tk3c.com/dictitleurl.aspx?cid=12504&ec=summercool2023" },
  ];

  let events = [
    { "url": "https://events.tk3c.com/events_net/airConditionerLAB/index.html?ec=summercool2023", "pc": "summercool2023/images/bn_ac.jpg", "mobile": "summercool2023/images/bn_acM.jpg" },
    { "url": "https://events.tk3c.com/events_net/summer_camp/index.html?ec=summercool2023", "pc": "summercool2023/images/bn_camp.jpg", "mobile": "summercool2023/images/bn_campM.jpg" },
    { "url": "https://events.tk3c.com/events_net/summer_games/index.html?ec=summercool2023", "pc": "summercool2023/images/bn_game.jpg", "mobile": "summercool2023/images/bn_gameM.jpg" },
    { "url": "https://events.tk3c.com/events_net/freshman_start/index.html?ec=summercool2023", "pc": "summercool2023/images/bn_fresh.jpg", "mobile": "summercool2023/images/bn_freshM.jpg" },
    // { "url": "https://events.tk3c.com/events_net/father23/index.html?ec=summercool2023", "pc": "summercool2023/images/bn_father.jpg", "mobile": "summercool2023/images/bn_fatherM.jpg" },
  ];

  let banners = [
    { "url": "https://www.tk3c.com/dic2.aspx?cid=111723&aid=22434&hid=120670&ec=summercool2023", "image": "summercool2023/images/bn_pana.jpg" },
    { "url": "https://www.tk3c.com/dic2.aspx?cid=12504&aid=22579&hid=121240&ec=summercool2023", "image": "summercool2023/images/bn_samsung.jpg" },
    { "url": "https://www.tk3c.com/dic2.aspx?cid=12504&aid=22579&hid=121247&ec=summercool2023", "image": "summercool2023/images/bn_sampo.jpg" },
    { "url": "https://www.tk3c.com/dic2.aspx?cid=111723&aid=22875&hid=121383&ec=summercool2023", "image": "summercool2023/images/bn_whirlppol.jpg" },
    { "url": "https://www.tk3c.com/dic2.aspx?cid=111723&aid=23207&hid=121379&ec=summercool2023", "image": "summercool2023/images/bn_chimei.jpg" },
  ];

  let cards = [
    { "url": "https://www.facebook.com/TDdd331/?ec=airConditionerLAB", "image": "summer2023/images/sp_05_0707.png" },
    { "url": "https://www.tk3c.com/events/eventgift.aspx?ec=airConditionerLAB", "image": "summer2023/images/sp_03_0707.png" },
];

  //看更多連結
  readMore(links);

  let cardHtml = appendBanks(cards, 'card');
  let eventHtml = appendBanksRespen(events, 'event', 'page');
  let bannerHtml = appendBanks(banners, 'banner');
  $('.sp-area .card').append(cardHtml);
  $('#card-area .swiper-slide').eq(0).addClass('alert');
  $('.event-box').append(eventHtml);
  $('.banner-box').append(bannerHtml);

  //彈跳視窗
  $(document).on('click', '.special-box .long a', function (e) {
    e.preventDefault();
    Swal.fire({
      width: 900,
      html: '<img src="https://www.tk3c.com/image/product/desc/202302/%E5%8F%83%E8%80%83%E8%87%AA%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E8%B2%A1%E6%94%BF%E9%83%A8FB%E5%AE%98%E7%B6%B2%20%E8%A9%B3%E6%83%85%E8%B3%87%E8%A8%8A%E8%AB%8B%E6%9F%A5%E8%A9%A2%E6%94%BF%E5%BA%9C%E7%B6%B2%E7%AB%99.jpg" width="100%">' +
        '<img src="https://www.tk3c.com/image/product/desc/202302/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202023-02-02%20163504(1).jpg" width="100%">' +
        '<img src="https://www.tk3c.com/image/UserFiles/img/sgs.jpg" width="100%"></img>',
      padding: '1em',
      showCloseButton: true,
      position: 'center',
      returnFocus: false,
      confirmButtonText: '確定',
      confirmButtonColor: '#000'
    })
  });

  //彈出視窗
  $(document).on('click', '#card-area .alert', function (e) {
    e.preventDefault();
    Swal.fire({
        width: 900,
        title: "<p style='margin-bottom:5px';>活動詳情</p>",
        html: "<ul style='text-align:left;'>" +
            "<li style='margin-bottom:10px';>1.活動期間(2023/7/7-7/20)按讚【燦坤線上購物】Facebook粉絲團指定貼文、分享，並於指定貼文留言處tag兩位好友+留言【SUMMER！揪起來放價 增粉抽大獎~】 (留言及分享均應設定為「公開」)，粉絲團人數達一定人數(不累計)抽好禮：​</li>" +
            "<li style='margin-bottom:10px;padding-left:10px';>(1)滿10,000人，抽1名送jabra不鏽鋼水壺。​</li>" +
            "<li style='margin-bottom:10px;padding-left:10px';>(2)滿15,000人，抽1名送TP-link路由器。​</li>" +
            "<li style='margin-bottom:10px;padding-left:10px';>(3)滿30,000人，抽1名送TESCOM吹風機。​</li>" +
            "<li style='margin-bottom:10px';>2.每個 Facebook帳號限中獎1次，重複中獎者以1次計。​</li>" +
            "<li style='margin-bottom:10px';>3.中獎名單將於2023/8/15個別公告於「燦坤線上購物」Facebook粉絲團，請務必於2023/8/22前私訊小編並回覆領獎資訊，以確保得獎資格，若中獎者因個人因素無法於期前完成私訊，視同放棄中獎資格，不得要求補發，獎項名額不遞補。小編收到私訊後會提供中獎通知函回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部(台北市內湖區堤頂大道一段331號5樓 燦坤公司)，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整者或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%))。​</li>" +
            "<li style='margin-bottom:10px';>4.經核對符合活動條件者，實體獎項部分，燦坤會將獎項寄至中獎者中獎通知函載地址 (限台灣本島地區且不可為郵政信箱)，若因地址/收件人錯誤、無人收件等不可歸責於燦坤之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>" +
            "<li style='margin-bottom:10px';>5.燦坤得於辦理本次兌獎之目的範圍內，使用您所提供之個人資料（姓名、身分證字號、戶籍地址、會員卡號、聯絡電話、聯絡地址、電子郵件）；燦坤亦得委託協力廠商負責執行本次兌獎之各項事務，該廠商得於必要範圍內使用您之個人資料。​</li>" +
            "<li style='margin-bottom:10px';>6.本活動參加者FB帳號需為真實身份，不得使用人頭帳號、假帳號參加，參加者若以惡意之電腦程式或其他明顯違反活動公平性之方式，惡意混淆或影響活動結果者，一經燦坤發現或經第三人檢舉經查屬證實，燦坤有權立即取消活動資格(抽獎資格/中獎資格等)，如已取得獎品，應返還獎品等值金額，燦坤並將對於任何破壞本活動之行為追究法律責任。​</li>" +
            "<li style='margin-bottom:10px';>7.活動未盡事宜以燦坤線上購物公告為主，燦坤保留活動最終解釋、修改、變更之權利。​</li>",
        showCloseButton: true,
        position: 'center',
        returnFocus: false,
        confirmButtonText: '<a href="https://www.facebook.com/TDdd331/?ec=father23" target="_blank">成為粉絲</a>',
        confirmButtonColor: '#366f97'
    })

});


  setTimeout(() => {
    new Swiper('.card-container', {
      loop: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false
      },
      effect: 'fade',
      fadeEffect: {
          crossFade: true
      },
  });
    new Swiper('.event-container', {
      autoplay: {
        delay: 1800,
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

    new Swiper('.banner-container', {
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
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
  }, 20);
});