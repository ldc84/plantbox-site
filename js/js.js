let deviceChx = null;

const plantbox = {
  init: function(){
    plantbox.sizeCheck();
    AOS.init({duration:750});
    if(deviceChx == 'mobile'){ // mobile 사이즈에서만 실행
      plantbox.mGnb();
      plantbox.mScrollMove();
    }
  },
  sizeCheck: function(){
    const win = $(window);
    const winWidth = win.width();
    (winWidth < 768) ? deviceChx = 'mobile' : deviceChx = 'pc' ;
  },
  main: function(){
    const win = $(window);
    const main = $('#main');
    const section1 = main.find('.section01');
    const section3 = main.find('.section03');
    const section4 = main.find('.section04');
    const section7 = main.find('.section07');

    // section1
    section1.addClass('active');

    // scroll event
    win.on('load scroll', function(){
      const winTop = win.scrollTop();
      const winH = win.height();
      const section3Top = section3.offset().top;
      const section4Top = section4.offset().top;
      const section7Top = section7.offset().top;

      // section3 cover
      if(section3Top <= winTop+winH/2){
        section3.addClass('active');
      }
      
      // section4 cover
      if(section4Top <= winTop+winH/2){
        section4.addClass('active');
      }

      // section7 cover
      if(section7Top <= winTop+winH/2){
        section7.addClass('active');
      }

    });

    // text animate
    // $('.text-animate').each(function(e){
    //   const textAni = $(this);
    //   const win = $(window);
    //   const idx = e;

    //   textAniState.push(true);

    //   // 정규식으로 문자 쪼개기
    //   $('.text-animate p').each(function(){
    //     const $this = $(this);
    //     $this.html($this.text().replace(/([^\s]|\w)/g, "<span class='letter'>$&</span>"));
    //   });

    //   // window scroll
    //   win.on('load scroll', function(){
    //     const winTop = win.scrollTop();
    //     const winH = win.height();
    //     const textTop = textAni.offset().top;
    //     const section3Top = section3.offset().top;
    //     const section7Top = section7.offset().top;
        
    //     // section1
    //     section1Cover.addClass('active');

    //     // text action
    //     if(textTop <= winTop+winH){
    //       if(textAniState[idx]) {
    //         textAniState[idx] = false;
    //         textAnimate(textAni);
    //       }
    //     }

    //     // section3 cover
    //     if(section3Top <= winTop+winH/2){
    //       section3Cover.addClass('active');
    //     }

    //     // section7 cover
    //     if(section7Top <= winTop+winH/2){
    //       section7Cover.addClass('active');
    //     }
    //   });
    // });
    
    // text animate func
    function textAnimate(text){
      const className = text[0].className.split(' ')[0];
      anime.timeline({loop: false})
      .add({
        targets: '.'+className+' p .letter',
        translateY: [100,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 750,
        delay: function(el, i) {
          return 300 + 30 * i;
        }
      });
    }
  },
  about: function(){
    const win = $(window);
    const about = $('#about');
    const section1 = about.find('.section01');
    const section3 = about.find('.section03');
    const section4 = about.find('.section04');
    const section5 = about.find('.section05');
    const section6 = about.find('.section06');
    const section7 = about.find('.section07');
    const section8 = about.find('.section08');
    const section9 = about.find('.section09');
    const section10 = about.find('.section10');
    const section11 = about.find('.section11');

    // section1
    section1.addClass('active');

    // window scroll
    win.on('load scroll', function(){
      const winTop = win.scrollTop();
      const winH = win.height();
      const section3Top = section3.offset().top;
      const section5Top = section5.offset().top;
      const section7Top = section7.offset().top;
      const section9Top = section9.offset().top;
      const section11Top = section11.offset().top;

      // section3
      if(section3Top <= winTop+winH/2){
        section3.addClass('active');
      }

      // section4
      section4.addClass('active');

      // section5
      if(section5Top <= winTop+winH/2){
        section5.addClass('active');
      }

      // section6
      section6.addClass('active');

      // section7
      if(section7Top <= winTop+winH/2){
        section7.addClass('active');
      }

      // section8
      section8.addClass('active');

      // section9
      if(section9Top <= winTop+winH/2){
        section9.addClass('active');
      }

      // section10
      section10.addClass('active');

      // section11
      if(section11Top <= winTop+winH/2){
        section11.addClass('active');
      }
    });
    
  },

  vegetable: function(){
    const win = $(window);
    const vegetable = $('#vegetable');
    const section1 = vegetable.find('.section01');
    const section2 = vegetable.find('.section02');
    const section4 = vegetable.find('.section04');

    // section1
    section1.addClass('active');

    // window scroll
    win.on('load scroll', function(){
      const winTop = win.scrollTop();
      const winH = win.height();
      const section2Top = section2.offset().top;

      // section2
      if(section2Top <= winTop+winH/2){
        section2.addClass('active');
      }

      // section4
      section4.addClass('active');
    });
  },

  // mobile
  mGnb: function(){
    const header = $('#header');
    const menu = header.find('.m-menu');
    const menuBox = header.find('.m-menu-box');
    let menuState = true;
    let timer;
    
    menu.on('click', function(){
      clearTimeout(timer);
      if(menuState){
        header.addClass('m-ready');
        timer = setTimeout(timerFuc, 400);
      }else {
        header.removeClass('m-active');
        timer = setTimeout(timerFuc, 400);
      }
      return false;
    });

    function timerFuc(){
      if(!menuState) {
        header.removeClass('m-ready');
        menuState = true;
      }else {
        header.addClass('m-active');
        menuState = false;
      }
    }

  },
  mScrollMove: function(){
    const win = window;
    const hash = win.location.hash;
    const pathname = win.location.pathname;
    const body = $('html, body');
    const mgnb = $('#mGnb');
    const mgnbBtn = mgnb.find('a');
    const menu = $('.m-menu');

    // 메뉴 클릭시
    mgnbBtn.on('click', function(){
      const $this = $(this);
      const href = $this.attr('href');
      const $pathname = href.split('#')[0];
      if(pathname == $pathname){
        menu.trigger('click');
      }
    });
    
    // 페이지 로드시
    if(hash){
      body.animate({
        scrollTop: $(hash).offset().top
      }, 750);
    }

  }
}

$(function(){
  plantbox.init();
})