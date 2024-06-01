$(function () {
    var today = new Date();
    var futureB = new Date('2023/06/01 00:00');
    var future = new Date('2023/05/17 19:00');
    var future2 = new Date('2023/05/18 09:15');
    var future3 = new Date('2023/05/19 10:30');
    var future4 = new Date('2023/05/21 15:11');
    var future5 = new Date('2023/05/23 13:23');
    var future6 = new Date('2023/05/24 13:20');
    var future7 = new Date('2023/05/26 08:36');
    var future8 = new Date('2023/05/28 10:15');
    var future9 = new Date('2023/05/30 15:40');
    var future10 = new Date('2023/05/31 11:15');
    var nums = [0, 0, 0, 0, 0, 0, 0, 0];
  
    let product1 = [
      { "url": "https://www.tk3c.com/pt.aspx?pid=219313&ec=tk3cgroup", "image": "tk3cgroup/images/23116/PT_A01.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=219313&ec=tk3cgroup", "image": "tk3cgroup/images/23116/PT_A02.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=219313&ec=tk3cgroup", "image": "tk3cgroup/images/23116/PT_A03.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=219313&ec=tk3cgroup", "image": "tk3cgroup/images/23116/PT_A04.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=219313&ec=tk3cgroup", "image": "tk3cgroup/images/23116/PT_A05.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=219313&ec=tk3cgroup", "image": "tk3cgroup/images/23116/PT_A06.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=219313&ec=tk3cgroup", "image": "tk3cgroup/images/23116/PT_A07.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=219313&ec=tk3cgroup", "image": "tk3cgroup/images/23116/PT_A08.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=219313&ec=tk3cgroup", "image": "tk3cgroup/images/23116/PT_A09.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=219313&ec=tk3cgroup", "image": "tk3cgroup/images/23116/PT_A10.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=219313&ec=tk3cgroup", "image": "tk3cgroup/images/23116/PT_A11.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=219313&ec=tk3cgroup", "image": "tk3cgroup/images/23116/PT_A12.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=219313&ec=tk3cgroup", "image": "tk3cgroup/images/23116/PT_A13.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=219313&ec=tk3cgroup", "image": "tk3cgroup/images/23116/PT_A14.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=219313&ec=tk3cgroup", "image": "tk3cgroup/images/23116/PT_A15.jpg" },
    ];
  
    let product2 = [
      { "url": "https://www.tk3c.com/pt.aspx?pid=217910&ec=tk3cgroup", "image": "tk3cgroup/images/23116/PTB_01.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=217910&ec=tk3cgroup", "image": "tk3cgroup/images/23116/PTB_02.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=217910&ec=tk3cgroup", "image": "tk3cgroup/images/23116/PTB_03.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=217910&ec=tk3cgroup", "image": "tk3cgroup/images/23116/PTB_04.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=217910&ec=tk3cgroup", "image": "tk3cgroup/images/23116/PTB_05.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=217910&ec=tk3cgroup", "image": "tk3cgroup/images/23116/PTB_06.jpg" },
    ];
  
    let product3 = [
      { "url": "https://www.tk3c.com/pt.aspx?pid=223256&ec=tk3cgroup", "image": "tk3cgroup/images/23116/ptC_01.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=223256&ec=tk3cgroup", "image": "tk3cgroup/images/23116/ptC_02.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=223256&ec=tk3cgroup", "image": "tk3cgroup/images/23116/ptC_03.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=223256&ec=tk3cgroup", "image": "tk3cgroup/images/23116/ptC_04.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=223256&ec=tk3cgroup", "image": "tk3cgroup/images/23116/ptC_05.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=223256&ec=tk3cgroup", "image": "tk3cgroup/images/23116/ptC_06.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=223256&ec=tk3cgroup", "image": "tk3cgroup/images/23116/ptC_07.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=223256&ec=tk3cgroup", "image": "tk3cgroup/images/23116/ptC_08.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=223256&ec=tk3cgroup", "image": "tk3cgroup/images/23116/pt9.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=223256&ec=tk3cgroup", "image": "tk3cgroup/images/23116/pt11.gif" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=223256&ec=tk3cgroup", "image": "tk3cgroup/images/23116/pt12.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=223256&ec=tk3cgroup", "image": "tk3cgroup/images/23116/pt14.gif" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=223256&ec=tk3cgroup", "image": "tk3cgroup/images/23116/pt15.gif" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=223256&ec=tk3cgroup", "image": "tk3cgroup/images/23116/pt16.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=223256&ec=tk3cgroup", "image": "tk3cgroup/images/23116/pt17.gif" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=223256&ec=tk3cgroup", "image": "tk3cgroup/images/23116/pt18.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=223256&ec=tk3cgroup", "image": "tk3cgroup/images/23116/pt19.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=223256&ec=tk3cgroup", "image": "tk3cgroup/images/23116/pt20.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=223256&ec=tk3cgroup", "image": "tk3cgroup/images/23116/pt21.jpg" },
    ];
  
    let product4 = [
      { "url": "https://www.tk3c.com/pt.aspx?pid=226808&ec=tk3cgroup", "image": "tk3cgroup/images/23116/ptD_01.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=226808&ec=tk3cgroup", "image": "tk3cgroup/images/23116/ptD_02.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=226808&ec=tk3cgroup", "image": "tk3cgroup/images/23116/ptD_03.jpg" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=226808&ec=tk3cgroup", "image": "tk3cgroup/images/23116/ptD_04.jpg" },
    ];
  
    // let pro1Html = appendBanks(product1, 'pro1', 'arrow');
    // let pro2Html = appendBanks(product2, 'pro2', 'arrow');
    // let pro3Html = appendBanks(product3, 'pro3', 'arrow');
    // let pro4Html = appendBanks(product4, 'pro4', 'arrow');
  
  
    // $('.product1').append(pro1Html);
    // $('.product2').append(pro2Html);
    // $('.product3').append(pro3Html);
    // $('.product4').append(pro4Html);
  
    //周末連結
    let newLinks = [
      { "url": "https://www.tk3c.com/pt.aspx?pid=219039_tg&ec=tk3cgroup" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=219871_tg&ec=tk3cgroup" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=216013_tg&ec=tk3cgroup" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=239332_tq&ec=tk3cgroup" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=236683_tq&ec=tk3cgroup" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=239585_tg&ec=tk3cgroup" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=229170-group&ec=tk3cgroup" },
      { "url": "https://www.tk3c.com/pt.aspx?pid=229213-group&ec=tk3cgroup" },
    ];
  
    if (today < futureB) {
      $('.timerarea').append("<b>敬請期待!</b>");
      $('.price .login').addClass('disabled');
    }
  
    //新增倒數計時
    if (today > futureB) {
      $('.price .login').removeClass('disabled');
      $('.timerarea').find('b').remove();
      $('.timerarea').countdown({
        until: $.countdown.UTCDate(+8, 2023, 7 - 1, 6, 23, 59, 59), format: 'DHMS',
        layout: '<i>{dnn}天</i><i>{hnn}時</i><i>{mnn}分</i><i>{snn}秒</i>',
        onExpiry: timeUpMsg
      });
    }
  
    count();
  
    setTimeout(() => {
      for (let i = 0; i < $('.swiper-container').length; i++) {
        var $this = $(this);
        $this.addClass('pro' + (i + 1) + '-container');
        $this.find('.swiper-button-prev').addClass('btn-prev-' + (i + 1));
        $this.find('.swiper-button-next').addClass('btn-next-' + (i + 1));
  
        var swiper = new Swiper('.pro' + (i + 1) + '-container', {
          speed: 500,
          loop: true,
          initialSlide: 2,
          autoplay: {
            delay: 1600,
            disableOnInteraction: false
          },
          observer: true,
          effect: "coverflow",
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          hideOnClick: true,
          coverflowEffect: {
            rotate: 20,
            stretch: 5,
            depth: 180,
            modifier: 1,
            slideShadows: false
          },
          navigation: {
            nextEl: '.btn-next-' + (i + 1),
            prevEl: '.btn-prev-' + (i + 1),
          },
        });
  
        swiper.update();
      }
    }, 45);
  
    function count() {
      for (var x = 0; x < $('.price-group').length; x++) {
        $('.price-group').eq(x + 1).find('.buttons a').eq(1).addClass('login');
        $('.price-group').eq(x + 1).find('.login').attr('data-id', x + 1);
  
        if (today >= new Date('2023/05/19 22:00') && today < new Date('2023/05/22')) {
          $('.price-group').eq(x + 1).find('.buttons a').eq(0).attr('href', newLinks[x].url);
        }
        if (nums[x] >= 100) nums[x] = 100;
  
        if (today > future) {
          nums = [2, 3, 2, 3, 4, 1, 0, 0];
        }
  
        if (today > future2) {
          nums = [5, 5, 2, 6, 6, 3, 1, 2];
        }
  
        if (today > future3) {
          nums = [7, 6, 3, 10, 6, 3, 1, 3];
        }
  
        if (today > future4) {
          nums = [7, 6, 3, 12, 6, 3, 1, 3];
        }
  
        if (today > future5) {
          nums = [10, 6, 4, 13, 6, 4, 1, 5];
        }
  
        if (today > future6) {
          nums = [11, 6, 4, 13, 7, 4, 2, 5];
        }
  
        if (today > future7) {
          nums = [13, 8, 6, 16, 7, 4, 2, 5];
        }
  
        if (today > future8) {
          nums = [13, 8, 6, 16, 8, 6, 3, 8];
        }
  
        if (today > future9) {
          nums = [14, 10, 8, 19, 8, 8, 3, 10];
        }
  
        if (today > future10) {
          nums = [15, 10, 10, 20, 10, 10, 3, 10];
        }
  
        //初始更新
        $('section.price').eq(x + 1).find('.number').text(nums[x]);
      }
  
      //點擊登記按鈕
      $(document).on('click', '.price-group .login', function () {
        let id = $(this).data('id');
        if (nums[id] > 100) return false;
        nums[id - 1]++;
  
        $('section.price').eq(id).find('.number').text(nums[id - 1]);
      });
    }
  
  
    //時間到顯示文字
    function timeUpMsg() {
      $('.timerarea').countdown('destroy');
    }
  });