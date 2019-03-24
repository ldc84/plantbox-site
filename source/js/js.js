
// --------------------------------------------------------------------------------
// window width
// load Event
// --------------------------------------------------------------------------------
let deviceChx = null;

const plantbox = {
  init(){
    plantbox.sizeCheck();
  },
  sizeCheck(){
    const win = $(window);
    win.on('load resize', function(){
      const wid = $(this).width();

      (wid < 767) ? deviceChx = 'mobile' : deviceChx = 'pc' ;
    });
    console.log(deviceChx);
  },
  main(){
    const win = $(window);
    const main = $('#main');
    const section1 = main.find('.section01');
    const section1Cover = section1.find('.cover');

    // section1
    win.on('load', function(){
      section1Cover.addClass('active');
    });
  }
}

$(function(){
  plantbox.init();
  AOS.init();
})