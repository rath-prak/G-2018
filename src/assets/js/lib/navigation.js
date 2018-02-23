import $ from 'jquery';

const navigation = () => {
  let toggleBars = $(".toggle-bars");
  let bar1 = toggleBars.find("b:nth-child(1)");
  let bar2 = toggleBars.find("b:nth-child(2)");
  let bar3 = toggleBars.find("b:nth-child(3)");
  let overlayNavContent = $(".overlay-nav-content");
  let overlayNavContent2 = $(".overlay-nav-content-2");

    let tl = new TimelineMax({ paused:true });

    tl.to(bar1, 0.3, { y: 15,})
      .to(bar1, 0.6, { rotation: -135, ease: Back.easeOut});

    tl.to(bar3, 0.3, { y: -15,}, 0)
       .to(bar3, 0.6, { rotation: 135, ease: Back.easeOut}, "-=0.6");

    tl.to(bar2, 0.6, { x: 100, opacity: 0, ease: Back.easeIn}, -0.6);

    tl.to(overlayNavContent, 1, { x: "50%", ease: Back.easeOut }, 0.5);
    tl.to(overlayNavContent2, 1, { x: "0", ease: Back.easeOut }, 0.5);

  toggleBars.click(function(){
    if(tl.reversed()){
       tl.play();
     }else{
       tl.reverse();
     };
  });
}

export default navigation;
