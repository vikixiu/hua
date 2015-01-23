var screenW = screen.width,
	screenH = screen.height;
var scale = screenW/640,
	newHeight = screenH/scale;
var isIpad = navigator.userAgent.toLowerCase().indexOf('ipad')>-1 ? true:false;  


Swiper.prototype.plugins.progress=function(t){function e(){for(var e=0;e<t.slides.length;e++){var i=t.slides[e];i.progressSlideSize=s?t.h.getWidth(i):t.h.getHeight(i),i.progressSlideOffset="offsetLeft"in i?s?i.offsetLeft:i.offsetTop:s?i.getOffset().left-t.h.getOffset(t.container).left:i.getOffset().top-t.h.getOffset(t.container).top}a=s?t.h.getWidth(t.wrapper)+t.wrapperLeft+t.wrapperRight-t.width:t.h.getHeight(t.wrapper)+t.wrapperTop+t.wrapperBottom-t.height}function i(e){var i,e=e||{x:0,y:0,z:0};i=1==t.params.centeredSlides?s?-e.x+t.width/2:-e.y+t.height/2:s?-e.x:-e.y;for(var o=0;o<t.slides.length;o++){var n=t.slides[o],r=1==t.params.centeredSlides?n.progressSlideSize/2:0,h=(i-n.progressSlideOffset-r)/n.progressSlideSize;n.progress=h}t.progress=s?-e.x/a:-e.y/a,t.params.onProgressChange&&t.fireCallback(t.params.onProgressChange,t)}var a,s="horizontal"==t.params.mode,o={onFirstInit:function(){e(),i({x:t.getWrapperTranslate("x"),y:t.getWrapperTranslate("y")})},onInit:function(){e()},onSetWrapperTransform:function(t){i(t)}};return o}


var hua={
  progerss:{},
  mySwiper:{}
};



window.onload = function() {

  //setTimeout(function(){
    $('#pageLoading').addClass('hide')
    $('.swiper-container,.u-globalAudio,#arrow').removeClass('hide'); 
    //$('.swiper-container,.swiper-slide').height(newHeight); 
    $('audio').get(0).play()
  //},50)
	
  hua.mySwiper = new Swiper('.swiper-container',{
    mode:"vertical",
	progress:!0,
	resistance:"100%",
	loop:true,
	longSwipesRatio:.3,
	noSwiping:true,
	//freeMode:true,
	onProgressChange:function(t){
    
  		hua.progerss.c=t.activeIndex;
      if(!isIpad){
    		for(var e=0;e<t.slides.length;e++){
    			hua.progerss.s=t.slides[e];
          hua.progerss.o=hua.progerss.s.progress;
    			if(hua.progerss.o>0){
    				hua.progerss.i=hua.progerss.o*t.width;
    				hua.progerss.a=0;
    			}else{
    				hua.progerss.i=0;
    				hua.progerss.a=1-Math.min(Math.abs(hua.progerss.o),1);				
    			}
    			hua.progerss.s.style.boxShadow="0px 0px 10px rgba(255,255,255,"+hua.progerss.a+")";
    			t.setTransform(hua.progerss.s,"translate3d(0,"+hua.progerss.i+"px,0)");				
    		}
      }
  		if(hua.progerss.c>0){
  		hua.progerss.g=$(t.slides[hua.progerss.c])?$(t.slides[hua.progerss.c]):false;
      hua.progerss.h=$(t.slides[hua.progerss.c-1])?$(t.slides[hua.progerss.c-1]):false; 
  			hua.progerss.d=t.slides[hua.progerss.c].progress;
        hua.progerss.r=t.slides[hua.progerss.c-1].progress,
  			hua.progerss.bh=hua.progerss.d*t.height;
  			hua.progerss.rh=hua.progerss.r*t.height;	
        if(hua.progerss.c<3 || /*hua.progerss.c==6 || hua.progerss.c==7 || hua.progerss.c==8 ||*/ hua.progerss.c==12 || hua.progerss.c==13|| hua.progerss.c==19){
  			//if(hua.progerss.c<3 || (hua.progerss.c+'').indexOf('5,6,7,8,14,16')!=-1){
          if(hua.progerss.g){
            hua.progerss.g.find('.img-animate').each(function(n,_img){
              $(_img).css('top',0-hua.progerss.bh*0.3*(n+1)+'px')
            })
          }
          if(hua.progerss.h){
            hua.progerss.h.find('.img-animate').each(function(n,_img){
              $(_img).css('top',0-hua.progerss.rh*0.3*(n+1)+'px')
            })
          }
  				
  				
  			}
  		}
    
	},
	onTouchStart:function(t){
		for(var e=0;e<t.slides.length;e++)t.setTransition(t.slides[e],0);
	},
	onTouchEnd:function(e){
    var _i = e.activeIndex,
        _y = e.positions.current + e.height*_i,s=_y/e.height;
		if(_i == 2){
			//$('.slide2-1').fadeIn(500);
		}
    
    if(_i == 3 && Math.abs(e.positions.current)<e.height*3){
      e.swipeTo(2)
    }
    
    
	},
	onSetWrapperTransition:function(t,e){for(var i=0;i<t.slides.length;i++)t.setTransition(t.slides[i],e)},
	onSlideChangeEnd:function(e){
		e.activeSlide();
		$('.img-animate').not('.img-animate-stay').removeAttr('style');	
    if(e.activeIndex==16){
      $('.slide26').addClass('slide26-bg')
    }else{
      $('.slide26').removeClass('slide26-bg')
    }
    /*if(e.activeIndex == 2){
      $('.slide2-1').fadeIn(500);
    }	*/
	},
  onSetWrapperTransform:function(swiper,transform){
   		var _i = swiper.activeIndex,
   			_y = 0-(transform.y + swiper.height*_i),s=_y/swiper.height;
        //console.log(s);
      if(_i==5){
        if(s>0 || s==0&&swiper.touches.diff<0){
          $('.slide-hua').addClass('slide-hua-bg').find('.img-animate').show()
        }else{
          $('.slide-hua').removeClass('slide-hua-bg').find('.img-animate').hide();
        }
      }
       
    } 
    //等等..
  }); 
  for(var a=0;a<hua.mySwiper.slides.length;a++){hua.mySwiper.slides[a].style.zIndex=20+a;}

  //no swiping pages	


  var y3=0, ends3=0,d3=0;
  $('.slide03').on('touchstart',function(e){
    e.preventDefault();
    y3=e.originalEvent.targetTouches[0].pageY;
  })
  .on('touchmove',function(e){
    e.preventDefault();
    d3=y3-e.originalEvent.targetTouches[0].pageY;
    var s=ends3+d3/hua.mySwiper.height;

    $(this).find('.img-animate-1').css({'right':Math.max(-280,Math.min(0,(s*3-1)*280))+'px','left':'auto'});
    $(this).find('.img-animate-2').css('left',Math.max(0,Math.min(250,s*3*250))+'px'); 
    /*if($('.img-animate-1').offset().left==0 && d3>0){
      hua.mySwiper.swipeNext()
    }else if($('.img-animate-1').offset().left==280 && d3<0){
      hua.mySwiper.swipePrev()
    } */ 
  }).on('touchend',function(e){
    e.preventDefault();
    ends3=ends3+d3/hua.mySwiper.height; y3=0;
    if($('.img-animate-1').offset().left==0 && d3>0){
      hua.mySwiper.swipeNext()
    }else if($('.img-animate-1').offset().left==280 && d3<0){
      hua.mySwiper.swipePrev()
    }
  })

  $('.u-globalAudio').on('click',function(){
    if($(this).hasClass('z-play')){
      var $this = $(this).removeClass('z-play').addClass('z-pause');
      $this.find('audio').get(0).pause();
      $this.find('span').text('关闭').addClass('z-show');
      setTimeout(function(){$this.find('.z-show').removeClass('z-show')},500)
    }else{
      var $this = $(this).removeClass('z-pause').addClass('z-play');
      $this.find('audio').get(0).play();
      $this.find('span').text('开启').addClass('z-show');
      setTimeout(function(){$this.find('.z-show').removeClass('z-show')},500)
    }
    
  })

var isplay=true;
  $('#video-cover').click(function(){
    isplay=$('.u-globalAudio').hasClass('z-play')?true:false;
    $('.u-globalAudio,#arrow').hide()
    if(isplay){$('.u-globalAudio').trigger('click')}
    
    $(this).hide()
    $('#video-wrapper').removeClass('hide').addClass('z-show').find('video').get(0).play()
  })
  $('.u-video-close').on('click',function(){
    $('#video-wrapper').addClass('hide').removeClass('z-show').find('video').get(0).pause()
    $('#video-cover, .u-globalAudio,#arrow').show()
    if(isplay){$('.u-globalAudio').trigger('click')}
  })

  $('#arrow').on('click',function(){
    hua.mySwiper.swipeNext();
  })

  $('audio').get(0).addEventListener('ended', function () {  
      this.play()
 
  }, false);  
   
}

