$(document).ready(function(){
	//사이즈 변수 선언(공통 사용)
	var winWidth = window.innerWidth || document.documentElement.clientWidth;//미디어쿼리 사이즈와 $(window).width()가 인식하는 px단위 사이즈가 달라서 선언한 변수 : clinentWidth 와 innerWidth의 사이즈는 동일하나 innerWidth는 익스플로러 9 미만 버전은 인식하지 못하므로 동시선언
	
	//슬라이드메뉴 상단 고정
	var fixPosition = $('.topInfo').height();
	var fixPosition2 = $('.headerTop').height();
	var scroll = $(window).scrollTop();
	 
	$(window).on('scroll load',function(){
		fixPosition = $('.topInfo').height();
		fixPosition2 = $('.header1').height();
		scroll = $(window).scrollTop();
		if($('.topInfo').css('display') == 'block'){//상단팝업 있을경우
			if(scroll > fixPosition+fixPosition2){
				$('.header2').addClass( 'fixed' );
				$('.header1').addClass( 'fixed' );
			}else{
				$('.header2' ).removeClass( 'fixed' );
				$('.header1').removeClass( 'fixed' );
			}
		}else{
			if(scroll > fixPosition2){
				$('.header2').addClass( 'fixed' );
				$('.header1').addClass( 'fixed' );
				$('.wholeMenu').addClass('fixed');
			}else{
				$('.header2' ).removeClass( 'fixed' );
				$('.header1').removeClass( 'fixed' );
				$('.wholeMenu').removeClass('fixed');
			}
		}
		// 전체메뉴 위치
		if(scroll > 1){
			$('.wholeMenu').addClass('fixed');
		}else{
			$('.wholeMenu').removeClass('fixed');
		}
	});

	$('.header1 .globalMenu > ul > li.profile .myMenuBtn').click(function(){
		$('.myMenuArea').show();
		$('.myMenuListW .close').focus();
		return false;
	});
	$('.myMenuListW .close').click(function(){
		$('.myMenuArea').hide();
		$('.header1 .globalMenu > ul > li.profile .myMenuBtn').focus();
		return false;
	});

	// 슬라이드 메뉴
	$("#divTopMenu>ul>li>a").on('click focus',function(){
        if($("#divTopMenu>ul>li.on").length < 1){
			$(this).parent().addClass("on").siblings().removeClass("on");
			$(this).siblings().stop().slideDown();
		}else{
			$(this).parent().addClass("on").siblings().removeClass("on");
			$("#divTopMenu>ul>li>div").hide();
			$(this).stop().next().show();
		}
        $('.blackBg').addClass('on');
        return false;
	});
	
	// 슬라이드 메뉴 닫기
	$('.blackBg').on('click', function(){
		$("#divTopMenu>ul>li>div").slideUp(300);
		$("#divTopMenu>ul>li").removeClass('on');

		$('.wholeMenu').removeClass('on');
		$('.wholeMenu .menuClose').removeClass('on');
		$('html, body').css('overflow','visible');
		$('.blackBg').removeClass('on');
		return false;
	});

	$(window).resize(function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		if(winWidth < 1025){
			if(!$('.wholeMenu').hasClass('on')){
				$('.blackBg').removeClass('on');
			}else{
				$('.blackBg').addClass('on');
				$('.blackBg').addClass('mo');
			}
			if(!$('.divMenuList > ul > li > div > ul > li').hasClass('on')){
				$('.divMenuList > ul > li > div > ul > li > ul').slideUp(300);
			}
			$("#divTopMenu>ul>li").removeClass('on')
			$("#divTopMenu>ul>li>div").slideUp();
			$('.header').removeClass('topMenuOn');
		}else{
			// mo -> pc 3dept On
			$('.divMenuList > ul > li > div > ul > li > ul').slideDown(300);
			$('.divMenuList > ul > li > div > ul > li').removeClass('on');
			$('.blackBg').removeClass('mo');
			if(!$('#divTopMenu > ul > li').hasClass('on')){
				$('.blackBg').removeClass('on');
			}
		}
	});


	// 전체메뉴
	$('.wholeMenuBtn').click(function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		$('html, body').css('overflow','hidden');
		$('.wholeMenu').addClass('on');
		$('.wholeMenu .menuClose').focus();
		if(winWidth < 1025){
			$('.blackBg').addClass('on');
			$('.blackBg').addClass('mo');
		}
		return false;
	});
	$('.wholeMenuBtn').on('focus', function(){
		$("#divTopMenu>ul>li>div").slideUp(300);
		$("#divTopMenu>ul>li").removeClass('on');
		$('.blackBg').removeClass('on');
	});
	$('.menuClose').click(function(){
		$('.wholeMenu').removeClass('on');
		$('.wholeMenu .menuClose').removeClass('on');
		$('html, body').css('overflow','visible');
		$('.wholeMenuBtn').focus();
		if(winWidth < 1025){
			$('.blackBg').removeClass('on');
			$('.blackBg').removeClass('mo');
		}
		return false;
	});

	// Mobile WholeMenu 1dept
	$('.divMenuList > ul > li > a').on('click',function(){
		if(winWidth < 1024){
			$('.divMenuList > ul > li').removeClass('on');
			$(this).parent().addClass('on');
		}
		return false;
	});
	// Mobile WholeMenu 2dept
	$('.divMenuList > ul > li > div > ul > li > a').on('click',function(){
		if(winWidth < 1025){
			if($(this).parent().hasClass('on')){
				$(this).parent().removeClass('on');
				$(this).siblings().slideUp(300);
			}else{
				$('.divMenuList > ul > li > div > ul > li').removeClass('on');
				$('.divMenuList > ul > li > div > ul > li > ul').slideUp(300);
				$(this).parent().addClass('on');
				$(this).siblings().slideDown(300);
			}
		}
		return false;
	});

	/* 관련사이트 */
	$('.relationSite > a').click(function(e){
		if($(this).parent().hasClass('on')){
			$(this).parent().removeClass('on');
			$('.relationSite ul').stop().slideUp();
			return false;
		}else{
			$(this).parent().addClass('on');
			$('.relationSite ul').stop().slideDown();
			return false;
		}
	});

	// 영역외 클릭시 관련사이트 닫기
	$('body').click(function(e){
		if(!$('.relationSite').has(e.target).length){
			$('.relationSite ul').stop().slideUp();
			$('.relationSite').removeClass('on');
		}
	});
	
});