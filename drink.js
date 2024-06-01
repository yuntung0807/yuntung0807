document.addEventListener("DOMContentLoaded", function () {
  let links = [
    { "name": "果汁機", "url": "https://www.tk3c.com/dic2.aspx?cid=83188&aid=4963&hid=12700&ec=drinking" },
    { "name": "氣泡水機", "url": "https://www.tk3c.com/dic2.aspx?cid=83188&aid=4963&hid=26604&ec=drinking" },
    { "name": "現沖咖啡", "url": "https://www.tk3c.com/dic1.aspx?cid=83187&aid=22279&ec=drinking" },
    { "name": "調理機", "url": "https://www.tk3c.com/dic2.aspx?cid=83188&aid=4963&hid=12701&ec=drinking" },
    { "name": "製冰機", "url": "https://www.tk3c.com/dic2.aspx?cid=83188&aid=4963&hid=12700&ec=drinking" },
    { "name": "淨水", "url": "https://www.tk3c.com/dic1.aspx?cid=83188&aid=19820&ec=drinking" },
    { "name": "開飲機", "url": "https://www.tk3c.com/dic1.aspx?cid=83187&aid=18760&ec=drinking" },
  ];

  //活動BANNER輪播
  let banners = [
    { "url": "https://www.tk3c.com/dic2.aspx?cid=111723&aid=22434&hid=120670&ec=drinking", "image": "drinking/images/bn_pana.jpg" },
    { "url": "https://www.tk3c.com/dic2.aspx?cid=111723&aid=22539&hid=121396&ec=drinking", "image": "drinking/images/bn_sharp.jpg" },
  ];



  const today = new Date();


  if (today >= new Date('2023/07/28')) {
    $('.all-box li').first().find('a').attr('href', 'https://events.tk3c.com/events_net/fatherDay2023/index.html?ec=live_gaming2307');
    $('.all-box li').first().find('img').attr('src', 'https://events.tk3c.com/events_net/events_net/summer_outdoor/images/sp_a.png');
  }

  if (today >= new Date('2023/08/01')) {
    $('.special-box li').last().addClass('incoming');
    $('.sale-group .pc').attr('src', 'https://events.tk3c.com/events_net/events_net/summer_outdoor/images/discount08.jpg');
    $('.sale-group .mobile').attr('src', 'https://events.tk3c.com/events_net/events_net/summer_outdoor/images/discount08M.jpg');
  }

  let bannerHtml = appendBanks(banners, 'banner', 'arrow');
  $('.event-group').append(bannerHtml);


  readMore(links);

  for (let x = 0; x < links.length; x++) {
    $('.bg01').eq(x).after(`<a class="more" href="${links[x].url}">看更多<a>`);
  }


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
      confirmButtonText: '<a href="https://www.facebook.com/TDdd331/?ec=drinking" target="_blank">成為粉絲</a>',
      confirmButtonColor: '#366f97'
    })

  });

  setTimeout(() => {
    let pro = new Swiper('.pro-group .pro', {
      autoplay: {
        delay: 2200,
        disableOnInteraction: false
      },
      spaceBetween: 5,
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3,
        }
      },
      navigation: {
        nextEl: '.next2',
        prevEl: '.prev2',
      },
    });

    pro.loopDestroy();
    pro.update();


    new Swiper('.event-group .banner-container', {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      spaceBetween: 10,
      loopAdditionalSlides: 2,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 2,
        }
      },
    });
  }, 25);
});