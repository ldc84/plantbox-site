
let deviceChx = null;

const plantbox = {
  init(){
    plantbox.sizeCheck();
    AOS.init({duration: 750});
  },
  sizeCheck(){
    const win = $(window);
    win.on('load resize', function(){
      const winWidth = $(this).width();

      (winWidth < 768) ? deviceChx = 'mobile' : deviceChx = 'pc' ;
    });
    console.log(deviceChx);
  },
  main(){
    const win = $(window);
    const main = $('#main');
    const section1 = main.find('.section01');
    const section1Cover = section1.find('.cover');
    const textAniState = [];

    // section1
    win.on('load', function(){
      section1Cover.addClass('active');
    });

    // text animate
    $('.text-animate').each(function(e){
      const textAni = $(this);
      const win = $(window);
      const idx = e;

      textAniState.push(true);

      // 정규식으로 문자 쪼개기
      $('.text-animate p').each(function(){
        const $this = $(this);
        $this.html($this.text().replace(/([^\s]|\w)/g, "<span class='letter'>$&</span>"));
      });

      // window scroll
      win.on('load scroll', function(){
        const winTop = win.scrollTop();
        const winH = win.height();
        const textTop = textAni.offset().top;

        if(textTop <= winTop+winH){
          if(textAniState[idx]) {
            textAniState[idx] = false;
            textAnimate(textAni);
          }
        }
      });
    });
    
    // text animate func
    function textAnimate(text){
      const className = text[0].className.split(' ')[0];
      anime.timeline({loop: false})
      .add({
        targets: `.${className} p .letter`,
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
  }
}

$(function(){
  plantbox.init();
})