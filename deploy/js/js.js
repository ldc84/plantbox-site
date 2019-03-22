
// --------------------------------------------------------------------------------
// window width
// load Event
// --------------------------------------------------------------------------------
let deviceChx;

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
  }
}

$(function(){
  plantbox.init();
})