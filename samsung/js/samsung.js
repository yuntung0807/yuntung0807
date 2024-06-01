$(function () {

  //彈出視窗
  $(document).on('click', '.all-box .alert', function (e) {
    e.preventDefault();
    Swal.fire({
      width: 900,
      title: "<p style='margin-bottom:5px';>活動詳情</p>",
      html: "<ul style='text-align:left;'><li style='margin-bottom:10px';>1.於燦坤3C門市或燦坤線上購物網站購買皆可參加本活動，但本活動需具有「燦坤實體有效會員」身分，如您是透過燦坤線上購物購買時，請確認您於購買(訂單成立)時已將您的「燦坤線上購物會員帳號」完成「燦坤實體有效會員」身分綁定，如購買(訂單成立)時未完成綁定，則無法參加。另獎項寄送前須完成綁定燦坤新版APP「名稱：TK3C」方符回饋資格，如中獎者未於獎項寄送前完成綁定燦坤新版APP，則燦坤3C不會將獎項寄出。​</li>" +
        "<li style='margin-bottom:10px';>2.凡於活動期間(2023/5/16-5/31)，以會員資格消費滿指定金額，憑發票即可參加以下抽獎活動：" +
        "<li style='margin-bottom:10px;padding-left:10px';>(1) 活動一：不限商品，單張發票消費金額滿5,000元(含)，抽出1名送星宇航空台北仙台來回機票一張(價值:時價)。​</li>" +
        "<li style='margin-bottom:10px;padding-left:10px';>(2) 活動二：購買四大家電(空調、冰箱、洗衣機、電視)，單張發票消費金額滿15,000元(含)，抽台中金典酒店栢麗廳雙人自助餐券2名(價值$1,518/張)。​</li>" +
        "<li style='margin-bottom:10px;padding-left:10px';>(3) 活動三：購買資通訊/遊戲軟體類商品，單張發票消費金額滿3,000元(含)，抽藝奇套餐裡券兩張2名(價值$858/張)。​</li>" +
        "<li style='margin-bottom:10px;padding-left:10px';>(4) 活動四：購買小家電類商品，單張發票消費滿2,000元(含)，抽遠雄海洋公園單次門票兩張4名(價值$990/張)、不限次數年票一張1名(價值$1,990/張)。​</li>" +
        "<li style='margin-bottom:10px';>3.消費滿額之金額以實際發票開立金額認定，部分商品(Apple、小米、dyson)除外。各活動滿額計算僅限各活動指定商品消費金額，其他商品恕不累計。​</li>" +
        "<li style='margin-bottom:10px';>4.中獎名單將於2023/6/13公告於FACEBOOK粉絲專頁「燦坤3C」，並將透過會員資料所留存之個人聯絡資料以簡訊通知中獎，倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>" +
        "<li style='margin-bottom:10px';>5.中獎者請於2023/6/20前回填中獎通知函：(1)攜帶身分證件、中獎發票至「原消費門市」，出示中獎簡訊並填寫中獎通知函完成；或(2)私訊「燦坤3C」粉絲專頁，提供姓名/電話/中獎簡訊畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整者或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%))。​</li>" +
        "<li style='margin-bottom:10px';>6.經核對符合活動條件者(如已完成綁定燦坤新版APP「名稱：TK3C」)，燦坤3C會將獎項寄至中獎者中獎通知函載地址 (限台灣本島地區且不可為郵政信箱)，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>" +
        "<li style='margin-bottom:10px';>7.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。各獎項票券使用期限與預訂規則等，悉依券面記載事項及票券服務提供者網站規定為準，敬請中獎者於效期內使用，逾期作廢，並請妥善保管，遺失恕不受理補發。(請留意，若持票人逾期未使用導致作廢，但因燦坤3C確實已有提供此一獎項的兌換券/兌換證明，故依稅法相關規定仍會列入本年度之個人綜合所得稅申報)。​</li>" +
        "<li style='margin-bottom:10px';>8.若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理:​</li>" +
        "<li style='margin-bottom:10px;padding-left:10px';>(1) 提供獎品前：燦坤3C將不會寄送獎品。​</li>" +
        "<li style='margin-bottom:10px;padding-left:10px';>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>" +
        "<li style='margin-bottom:10px';>9.涉及大宗採購且(或)有議價時，因已經過議價給予價格優惠，該筆交易(發票)將無法參與本活動。活動未盡事宜以燦坤3C公告為準，燦坤3C保留活動最終解釋修改變更之權利。</li>",
      showCloseButton: true,
      position: 'center',
      // returnFocus: false,
      confirmButtonText: '<a href="https://www.tk3c.com/member/official_card_member_add.aspx?ec=top_samsung_celebration" target="_blank">立即綁卡</a>',
      confirmButtonColor: '#e0a74a'
    })
  });

  $('.bg01').last().after(`<a class='store' href='https://events.tk3c.com/events_net/tk3csamsungshop/index.aspx?ec=top_samsung_celebration' target='_blank'><img src='https://events.cdn-tkec.tw/events_net/events_net/top_samsung_celebration/images/store.png'></a>`);
});