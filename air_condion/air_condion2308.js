$(function () {

    let links = [
        { "url": "https://www.tk3c.com/search.aspx?q=%E7%A9%BA%E8%AA%BF&ec=airConditionerLAB" },
        { "url": "https://www.tk3c.com/dic1.aspx?cid=11225&aid=13580&ec=airConditionerLAB" }
    ];

    let brands = [
        { "image": "airConditionerLAB/images/2308/panasonic.png", "url": "https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=11238&ec=airConditionerLAB" },
        { "image": "airConditionerLAB/images/2308/daikin.png", "url": "https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=11237&ec=airConditionerLAB" },
        { "image": "airConditionerLAB/images/2308/hitachi.png", "url": "https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=11236&ec=airConditionerLAB" },
        { "image": "airConditionerLAB/images/2308/mitsu.png", "url": "https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=37503&ec=airConditionerLAB" },
        { "image": "airConditionerLAB/images/2308/sampo.png", "url": "https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=11240&ec=airConditionerLAB" },
        { "image": "airConditionerLAB/images/2308/teco.png", "url": "https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=11239&ec=airConditionerLAB" },
        { "image": "airConditionerLAB/images/2308/LG.png", "url": "https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=104083&ec=airConditionerLAB" },
        { "image": "airConditionerLAB/images/2308/heran.png", "url": "https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=71512&ec=airConditionerLAB" },
        { "image": "airConditionerLAB/images/2308/fujitsu.png", "url": "https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=111598&ec=airConditionerLAB" },
        { "image": "airConditionerLAB/images/2308/chimei.png", "url": "https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=115784&ec=airConditionerLAB" },
        { "image": "airConditionerLAB/images/2308/kolin.png", "url": "https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=111163&ec=airConditionerLAB" },
        { "image": "airConditionerLAB/images/2308/sharp.png", "url": "https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=107383&ec=airConditionerLAB" },
    ];


    let products = [
        { "url": "https://www.tk3c.com/pt.aspx?pid=206229&ec=airConditionerLAB", "image": "airConditionerLAB/images/2308/206229.png" },
        { "url": "https://www.tk3c.com/pt.aspx?pid=206717&ec=airConditionerLAB", "image": "airConditionerLAB/images/2308/206717.png" },
        { "url": "https://www.tk3c.com/pt.aspx?pid=218112&ec=airConditionerLAB", "image": "airConditionerLAB/images/2308/225386.png" },
        { "url": "https://www.tk3c.com/pt.aspx?pid=225386&ec=airConditionerLAB", "image": "airConditionerLAB/images/2308/238438.png" },
        { "url": "https://www.tk3c.com/pt.aspx?pid=225367&ec=airConditionerLAB", "image": "airConditionerLAB/images/2308/225367.png" },
    ];

    let events = [
        { "url": "https://events.tk3c.com/events_net/2021airconditioning/index.html?ec=airConditionerLAB", "image": "airConditionerLAB/images/202301/bn01_b.jpg" },
        { "url": "https://www.tk3c.com/Events/2018Air/index.aspx?ec=airConditionerLAB", "image": "airConditionerLAB/images/1001/bn02.jpg" },
    ];

    let floorTabs = [
        { "image": "airConditionerLAB/images/2305/tab1.png" },
        { "image": "airConditionerLAB/images/2305/tab2.png" },
        { "image": "airConditionerLAB/images/2305/tab3.png" },
        { "image": "airConditionerLAB/images/2305/tab4.png" },
    ];

    let floorTab2 = [
        { "image": "airConditionerLAB/images/2305/tab5.png" },
        { "image": "airConditionerLAB/images/2305/tab6.png" },
        { "image": "airConditionerLAB/images/2305/tab7.png" },
        { "image": "airConditionerLAB/images/2305/tab8.png" },
    ];

    let floorTab3 = [
        { "image": "airConditionerLAB/images/2308/bt01.png" },
        { "image": "airConditionerLAB/images/2308/bt02.png" },
        { "image": "airConditionerLAB/images/2308/bt03.png" },
        { "image": "airConditionerLAB/images/2308/bt04.png" },
    ];



    //輪播商品區
    let eventHtml = appendBanks(events, 'event', 'page');
    let proHtml = appendBanks(products, 'pro');
    let brandHtml = appendBanks(brands, 'brand');
    let path = "https://events.tk3c.com/events_net/events_net/";
    var product;
    var tab;
    var brand;
    var num = 0;



    $('.event-box').append(eventHtml);
    $('.background .product').append(proHtml);
    $('.brand-box').append(brandHtml);



    //夏季出清
    $('.bg01').eq(0).appendTo($('.outlet-group .outlet'));
    if ($('.outlet-group .outlet li').length > 4) {
        let swiperHtml = '<div class="box">' +
            '<div class="swiper-wrapper"></div>' + '</div>' +
            '<div class="swiper-button-prev prev"></div>' +
            '<div class="swiper-button-next next"></div>';
        $('.outlet-group .outlet .bg01').find('ul').append(swiperHtml);
        $('.outlet-group .outlet .bg01').find('li').addClass('swiper-slide');
        $('.outlet-group .outlet .bg01').find('.swiper-wrapper').append($('.outlet-group .outlet .bg01 li'));
    }

    let swiper3Html = '<div class="swiper-container sa">' +
        '<div class="swiper-wrapper"></div>' + '</div>' +
        '<div class="swiper-button-prev prev2"></div>' +
        '<div class="swiper-button-next next2"></div>';

    setTimeout(() => {
        $('.sale-box .sale').prepend($('.bg01').eq(1));
        $('.sale-box .sale .bg01').find('ul').append(swiper3Html);
        $('.sale-box .sale .bg01').find('li').addClass('swiper-slide');
        $('.sale-box .sale .bg01').find('.swiper-wrapper').append($('.sale-box .sale .bg01 li'));
    }, 8);

    let foorHtml = `
            <section class="floor-box floor" id="floor1">
                <h2 class="title">
                    <a href="https://www.tk3c.com/dic1.aspx?cid=11225&aid=4704&ec=airConditionerLAB" target="_blank">
                    <img src="https://events.tk3c.com/events_net/events_net/airConditionerLAB/images/2308/S2.png">
                    </a>
                </h2>

                <div class="box">
                    <ul class='tab'></ul>
                    <div class="floor-content"></div>
                </div>
            </section>

            <section class="floor-box2 floor" id="floor2">
            <h2 class="title">
                <a href="https://www.tk3c.com/dic1.aspx?cid=11225&aid=4702&ec=airConditionerLAB" target="_blank">
                <img src="https://events.tk3c.com/events_net/events_net/airConditionerLAB/images/2308/S3.png">
                </a>
            </h2>
            <div class="box">
                <ul class='tab'></ul>
                <div class="floor-content"></div>
            </div>
        </section>
        `;

    setTimeout(() => {
        $('.bg01').not('section .bg01').eq(0).after(foorHtml);
    }, 9);



    for (let index = 0; index < floorTabs.length; index++) {
        let tabHtml = `<li><a data-id="${index + 1}"><img src="${path + floorTabs[index].image}"></a></li>`;

        setTimeout(() => {
            $('#floor1 .floor-content').append($('.bg01').eq(index + 3));
            $('.floor-box .tab').append(tabHtml);
        }, 12);
    }



    for (let x = 0; x < floorTab2.length; x++) {
        let tab2Html = `<li><a data-id="${x + 1}"><img src="${path + floorTab2[x].image}"></a></li>`;
        setTimeout(() => {
            $('#floor2 .floor-content').append($('.bg01').eq(x + 7));
            $('.floor-box2 .tab').append(tab2Html);
        }, 18);
    }

    let floorHtml3 = `
    <section class="floor-box3 floor" id="floor3">
    <h2 class="title">
        <a href="https://www.tk3c.com/dictitleurl.aspx?cid=11058&ec=airConditionerLAB" target="_blank">
        <img src="https://events.tk3c.com/events_net/events_net/airConditionerLAB/images/2308/S5.png">
        </a>
    </h2>

    <div class="box">
        <ul class='tab'></ul>
        <div class="floor-content"></div>
    </div>
</section>
    `;

    $('.bg01').eq(11).after(floorHtml3);

    for (let x = 0; x < floorTab3.length; x++) {
        let tab3Html = `<li><a data-id="${x + 1}"><img src="${path + floorTab3[x].image}"></a></li>`;
        setTimeout(() => {
            $('.bg01').eq(x + 12).appendTo($('#floor3 .floor-content'));
            $('.floor-box3 .tab').append(tab3Html);
        }, 19);
    }

    setTimeout(() => {
        $('.floor-box .floor-content .bg01').first().show();
        $('.floor-box2 .floor-content .bg01').first().show();
        $('.floor-box3 .floor-content .bg01').first().show();
        $('.floor-box .tab li').first().addClass('active');
        $('.floor-box2 .tab li').first().addClass('active');
        $('.floor-box3 .tab li').first().addClass('active');
    }, 20);

    $(document).on('click', '.floor .tab li a', function (e) {
        e.preventDefault();

        var id = $(this).data('id') - 1;

        if ($(this).parent().parent().parent().parent().hasClass('floor-box')) {
            $(this).parent().addClass('active').siblings('.floor-box .tab li').removeClass('active');
            $('.floor-box .floor-content .bg01').eq(id).fadeIn().siblings('.floor-box .floor-content .bg01').hide();
        } else if ($(this).parent().parent().parent().parent().hasClass('floor-box2')) {
            $(this).parent().addClass('active').siblings('.floor-box2 .tab li').removeClass('active');
            $('.floor-box2 .floor-content .bg01').eq(id).fadeIn().siblings('.floor-box2 .floor-content .bg01').hide();
        } else if ($(this).parent().parent().parent().parent().hasClass('floor-box3')) {
            $(this).parent().addClass('active').siblings('.floor-box3 .tab li').removeClass('active');
            $('.floor-box3 .floor-content .bg01').eq(id).fadeIn().siblings('.floor-box3 .floor-content .bg01').hide();
        }
    });


    $('.protitle').each(function (i, v) {
        if (i != 1 && i != 10) {
            $(this).remove();
        }

        switch (i) {
            case 0:
            case 1:
            case 3:
            case 4:
                //$(this).remove();
                break;
        }

        if (i >= 0 && i < 30) {
            $('.aside-container .aside-content li').eq(i).hide();
            $('.nav-footer .box-area.type li').eq(i).hide();
        }
    });



    $('.aside-container .aside-content ul').prepend(`
        <li><a href='#outlet'>夏季出清</a></li>
        <li><a href='#brand'>強檔大牌</a></li>
        <li><a href="#pro4127" onclick="ProcessGaEvent("airConditionerLAB" ,"click","熱銷空調首選")">熱銷空調首選</a></li>
        <li><a href='#floor1'>分離式空調</a></li>
        <li><a href='#floor2'>窗型空調</a></li>
        <li><a href="#pro4130" onclick="ProcessGaEvent("airConditionerLAB" ,"click","移動式冷氣")">移動式冷氣</a></li>
        <li><a href='#floor3'>風扇專區</a></li>
    `);

    $('.nav-footer .box-area.type ul').prepend(`
       <li><a href='#outlet'>夏季出清</a></li>
       <li><a href='#brand'>強檔大牌</a></li>
       <li><a href="#pro4127" onclick="ProcessGaEvent("airConditionerLAB" ,"click","熱銷空調首選")">熱銷空調首選</a></li>
        <li><a href='#floor1'>分離式空調</a></li>
        <li><a href='#floor2'>窗型空調</a></li>
        <li><a href="#pro4130" onclick="ProcessGaEvent("airConditionerLAB" ,"click","移動式冷氣")">移動式冷氣</a></li>
        <li><a href='#floor3'>風扇專區</a></li>
    `);

    readMore(links);



    //彈出視窗
    $(document).on('click', '.alert1 a', function (e) {
        e.preventDefault();
        Swal.fire({
            width: 900,
            html: '<img src="https://www.tk3c.com/image/product/desc/202302/%E5%8F%83%E8%80%83%E8%87%AA%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E8%B2%A1%E6%94%BF%E9%83%A8FB%E5%AE%98%E7%B6%B2%20%E8%A9%B3%E6%83%85%E8%B3%87%E8%A8%8A%E8%AB%8B%E6%9F%A5%E8%A9%A2%E6%94%BF%E5%BA%9C%E7%B6%B2%E7%AB%99.jpg" width="100%">' +
                '<img src="https://www.tk3c.com/image/product/desc/202302/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202023-02-02%20163504(1).jpg" width="100%">',
            padding: '1em',
            showCloseButton: true,
            position: 'center',
            returnFocus: false,
            confirmButtonText: '確定',
            confirmButtonColor: '#000'
        })
    });

    $(document).on('click', '.alert2 a', function (e) {
        e.preventDefault();
        Swal.fire({
            width: 900,
            html: '<img src="https://www.tk3c.com/image/UserFiles/img/sgs.jpg" width="100%">',
            showCloseButton: true,
            position: 'center',
            returnFocus: false,
            confirmButtonText: '確定',
            confirmButtonColor: '#000'
        })
    });

    $(document).on('click', '.alert3 a', function (e) {
        e.preventDefault();
        Swal.fire({
            width: 900,
            html: '<img src="https://events.tk3c.com/events_net/events_net/airConditionerLAB/images/2307/taipei_more.jpg" width="100%">' +
                '<img src="https://events.tk3c.com/events_net/events_net/airConditionerLAB/images/2307/taipei_more2.jpg" width="100%">',
            showCloseButton: true,
            position: 'center',
            returnFocus: false,
            confirmButtonText: '確定',
            confirmButtonColor: '#000'
        })
    });

    setTimeout(() => {
        new Swiper('.brand-box .brand-container', {
            autoplay: {
                delay: 1500,
                disableOnInteraction: false
            },
            slidesPerColumnFill: 'row',
            spaceBetween: 10,
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                },
                600: {
                    slidesPerView: 3,
                    slidesPerColumn: 3,
                },
                992: {
                    slidesPerView: 4,
                    slidesPerColumn: 3,
                }

            },
        });


        new Swiper('.outlet-group .box', {
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            spaceBetween: 10,
            loopAdditionalSlides: 4,
            navigation: {
                nextEl: '.next',
                prevEl: '.prev'
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


        new Swiper('.pro-container', {
            loop: true,
            effect: 'cube',
            cubeEffect: {
                slideShadows: false,
                shadow: false
            },
            autoplay: {
                delay: 1700,
                disableOnInteraction: false
            },
        });

        new Swiper('.event-container', {
            loop: true,
            observer: true,
            observeParents: true,
            autoHeight: true,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
        });

        new Swiper('.sale-box .sa', {
            speed: 700,
            loop: true,
            initialSlide: 2,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            effect: "coverflow",
            loopAdditionalSlides: 4,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            autoHeight: true,
            hideOnClick: true,
            coverflowEffect: {
                rotate: 25,
                stretch: 0,
                depth: 135,
                modifier: 1,
                slideShadows: false
            },
            navigation: {
                nextEl: '.next2',
                prevEl: '.prev2'
            }
        });

        new Swiper('.event2-container', {
            loop: true,
            observer: true,
            observeParents: true,
            autoHeight: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
        });

        let gift = new Swiper('.gift-box .gift', {
            autoplay: {
                delay: 1600,
                disableOnInteraction: false
            },
            spaceBetween: 10,
            breakpoints: {
                0: {
                    slidesPerView: 2,
                },
                600: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 3,
                }

            },
        });

        gift.loopDestroy();
        gift.update();
    }, 30);

    function resetSlide() {
        setTimeout(() => {
            brand = new Swiper('.brand-box .brand', {
                speed: 600,
                loop: true,
                observer: true,
                observeParents: true,
                autoplay: {
                    delay: 2200,
                    disableOnInteraction: false
                },
                loopAdditionalSlides: 2,
                autoHeight: true,
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
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
        }, 15);
    }

});