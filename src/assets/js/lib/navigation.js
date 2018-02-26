import $ from 'jquery';

const navigation = () => {
  let toggleBarsWrapper = $(".toggle-bar-wrapper");
  let navMenuText = toggleBarsWrapper.find("span");
  let bar1 = toggleBarsWrapper.find("b:nth-child(1)");
  let bar2 = toggleBarsWrapper.find("b:nth-child(2)");
  let bar3 = toggleBarsWrapper.find("b:nth-child(3)");
  let overlayNavContent = $(".overlay-nav-content");
  let overlayNavContent2 = $(".overlay-nav-content-2");
  let overlayBlock = $(".overlay-block");

    let tl = new TimelineMax({ paused:true });

    tl.to(bar1, 0.3, { y: 10,})
      .to(bar1, 0.6, { rotation: -135, ease: Back.easeOut});

    tl.to(bar3, 0.3, { y: -10,}, 0)
       .to(bar3, 0.6, { rotation: 135, ease: Back.easeOut}, "-=0.6");

    tl.to(bar2, 0.6, { x: 100, opacity: 0, ease: Back.easeIn}, -0.6);
    tl.to(navMenuText, 0.6, { x: 150, opacity: 0, ease: Back.easeIn}, -0.6);

    tl.to(overlayNavContent, 1, { x: "0", ease: Back.easeOut }, 0.5);
    tl.to(overlayNavContent2, 1, { x: "0", ease: Back.easeOut }, 0.5);
    tl.to(overlayBlock, 1, { x: "0", }, 0.5);

  toggleBarsWrapper.click(function(){
    if(tl.reversed()){
       tl.play();
     }else{
       tl.reverse();
     };
  });
}

export default navigation;
