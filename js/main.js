// general fire function wow.js

 //wow.js start

 new WOW().init();

 //wow.js end



 //loading start

$(document).ready(function(){

  $(".loading").fadeOut(2000);
$("body").css({"overflow":"auto"})

})

 //loading end

 //home start

 //navbar start
 let aboutOfset=$(".about").offset().top;
 
$(window).scroll(function(){

  let scrollValue=$(window).scrollTop();
  
// change navbar color start
if(scrollValue>aboutOfset){
  $(".navbar").css({"background-color":"gray"});
}
else{
  $(".navbar").css({"background-color":"transparent"});
}

// change navbar color end

// start top button 

if(scrollValue>aboutOfset){
  $(".top_button").fadeIn(1000);
 

}
else{
  $(".top_button").fadeOut(1000);
}


// end top button 



})
// start top button  click

$(".top_button").click(function(){
      
  $("body").animate({scrollTop:0},2000)
})
// end top button  click

// start make nav work smooth section

 $(".home .nav-link").click(function(){
  let currentRef= $(this).attr("href");
  let topOfset=$(currentRef).offset().top;
  $("body").animate({scrollTop:topOfset},2000)


 })

// end make nav work smooth section



//navbar start

// display navbar in scroll up and none in scoll down  start 
let nav=document.querySelector(".navbar");
var lastScrollTop = 0;


window.addEventListener("scroll", function(){ 
var st = window.pageYOffset || document.documentElement.scrollTop;
if (st > lastScrollTop){
 nav.style.display="none";
} else {
nav.style.display="flex";
}
lastScrollTop = st 
}, false);
// display in scroll up and none in scoll down  end


  //navbar end

  $(".home").click(function(){
     $(".home_caption ").animate({opacity:"0"});
     $(".home_caption ").animate({opacity:"1",transform:"scale(.5)"},3000);
   

    });
 //home start

// about start
 // type js start
   var typed = new Typed('#type', {
    strings: [ 'Wed sites','softwires','Apps','Wed sites'],
    smartBackspace: true ,
    typeSpeed: 50,
    backSpeed: 50,
    loop:true,
    loopCount: Infinity,
   }); 
 // type js end   
   



//about end

// services start
  
// to animate svg 

let offsetTeam=$(".team").offset().top;


$(window).scroll(function(){

 let x= $(window).scrollTop();

  if(x>offsetTeam){
    $("svg").addClass("Layer_1");
  }
 })
// services start

//make footer behind start

let contactOset =$(".contact").offset().top;
$(window).scroll(function(){
  let srollContact= $(window).scrollTop();
  if(srollContact>contactOset){
    $(".foot").addClass("footer_sticky");
  }
  else{
    $(".foot").removeClass("footer_sticky");
  }
})
//make footer behind  end