$(document).ready(function(){
	//사이즈 변수 선언(공통 사용)
	var winWidth = window.innerWidth || document.documentElement.clientWidth;//미디어쿼리 사이즈와 $(window).width()가 인식하는 px단위 사이즈가 달라서 선언한 변수 : clinentWidth 와 innerWidth의 사이즈는 동일하나 innerWidth는 익스플로러 9 미만 버전은 인식하지 못하므로 동시선언
	
	//상단공지 닫기
	$('.topInfo .close').on('click',function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		var HeaderH1 = $('.header1').height()
		var HeaderH2 = $('.header2').height()
		var HeaderH =  HeaderH1 + HeaderH2;
		var windowH = $(window).height();
		divH = windowH - HeaderH;
		$('.wholeMenu .menuArea .menuList .divMenuList').css('height',divH-85);
		$('.topInfo').slideUp(200);
		return false;
	});

	//슬라이드메뉴 상단 고정
	var fixPosition = $('.topInfo').height();
	var fixPosition2 = $('.headerTop').height();
	var scroll = $(window).scrollTop();
	 
	$(window).on('scroll load',function(){
		fixPosition = $('.topInfo').height();
		fixPosition2 = $('.header1').height();
		scroll = $(window).scrollTop();
		if(scroll > fixPosition2){
			$('.header2').addClass( 'fixed' );
			$('.header1').addClass( 'fixed' );

			$('#divTopMenu').addClass('fixed');
			$('.wholeMenuBtn').addClass('fixed');
		}else{
			$('.header1').removeClass( 'fixed' );
			$('.header2' ).removeClass( 'fixed' );
			if(!($('#divTopMenu > ul > li.topMenu').hasClass('on'))){
				$('.header').removeClass('topMenuOn');
				$('#divTopMenu').removeClass('fixed');
				$('.wholeMenuBtn').removeClass('fixed');
			}
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

			// TopMenu 반전
			$('.header').addClass('topMenuOn');
			$('#divTopMenu').addClass('fixed');
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
		
		// TopMenu 반전
		fixPosition = $('.topInfo').height();
		fixPosition2 = $('.header1').height();
		$('.header').removeClass('topMenuOn');
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
		$('.header').removeClass('topMenuOn');
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

	/* 인기검색어 슬라이드 */
	var keywordRanking = function(){
		if(!$('.keywordList ul').is(":animated")){
			$('.keywordList ul').animate({"top":-48},1500,function(){
				$('.keywordList ul li').first().appendTo($('.keywordList ul'));
				$('.keywordList ul').css('top','0')
			});
		}
	};
	// 자동재생
	var keywordRanking2 = function(){
		intervalKeyWord = setInterval(function(){
			keywordRanking()},3000);
	};
	keywordRanking2();

	$('#keywordRanking .keywordList').on('mouseover click',function(){
		$('.keywordAll').addClass('on'); 
		return false;
	});
	$('.keywordAll').on('mouseleave',function(){
		$('.keywordAll').removeClass('on');
	});
	$('#keywordRanking .keywordList a').on('focus', function(){
		$('.keywordAll').addClass('on');
		$('.keywordAll li:first-of-type a').focus();
	});
	$('.searchSelect').on('focus', function(){
		$('.keywordAll').removeClass('on');
	});
	$('body').click(function(e){
		if(!$('.keywordAll').has(e.target).length){
			$('.keywordAll').removeClass('on');
		}
	});
	/* 인기검색어 슬라이드 */

	// 자동완성
	$('.autoComBtn').on('click', function(){
		$('.autoComW').addClass('on');
		$('.autoComW .autoComContent ul li:first-of-type a').focus();
		return false;
	});

	$('.autoComClose').on('click', function(){
		$('.autoComW').removeClass('on');
		$('.autoComBtn').focus();
		return false;
	});

	$('body').click(function(e){
		if(!$('.autoComW').has(e.target).length){
			$('.autoComW').removeClass('on');
		}
	});

	// DotDotDot
	$('.notice > ul > li .noticeContent .noticeFirst .noticeFirstContent p').dotdotdot({
		ellipsis: "\u2026 ",
		watch: "true"
	});
    $('.bookListW .bookList div a .bookInfo .bookTitle').dotdotdot({
		ellipsis: "\u2026 ",
		watch: "true"
	});
	$('.bookListW .bookList div a .bookInfo .writer').dotdotdot({
		ellipsis: "\u2026 ",
		watch: "true"
	});

	/* quick 다음버튼 */
	$('.quickMenuW .next').click(function(){
		var listWidth = $('.quickMenu ul li').width();
		if(!$('.quickMenu ul').is(":animated")){
			$('.quickMenu ul').animate({"left":-listWidth},300,function(){
				$('.quickMenu ul li').first().appendTo($('.quickMenu ul'));
				$('.quickMenu ul').css('left','0')
			});
		}
		return false;
	});

	/* quick 이전버튼 */
	$('.quickMenuW .prev').click(function(){
		var listWidth = $('.quickMenu ul li').width();
		if(!$('.quickMenu ul').is(":animated")){
			$('.quickMenu ul').css('left',-listWidth);
			$('.quickMenu ul li').last().prependTo($('.quickMenu ul'));
			$('.quickMenu ul').animate({"left":"0"},300);
		}
		return false;			
	});

	// 공지사항 탭 
	$('.notice > ul > li > a').on('click focus',function(){
		$(this).parent().addClass('on').siblings().removeClass('on');
		return false;
	});
	$('.noticeW .noticeType1 .title a').on('mouseleave focusout',function(){
		$(this).parent().removeClass('on');
	});

    /* 도서관일정 다음버튼 */
	$('.scheduleListW .next').click(function(){
		var listWidth = $('.scheduleList ul.on li').width();
		if(!$('.scheduleList ul.on').is(":animated")){
			$('.scheduleList ul.on').animate({"left":-listWidth},300,function(){
				$('.scheduleList ul.on li').first().appendTo($('.scheduleList ul.on'));
				$('.scheduleList ul.on').css('left','0')
			});
		}
		return false;
	});

	/* 도서관일정 이전버튼 */
	$('.scheduleListW .prev').click(function(){
		var listWidth = $('.scheduleList ul.on li').width();
		if(!$('.scheduleList ul.on').is(":animated")){
			$('.scheduleList ul.on').css('left',-listWidth);
			$('.scheduleList ul.on li').last().prependTo($('.scheduleList ul.on'));
			$('.scheduleList ul.on').animate({"left":"0"},300);
		}
		return false;			
	});

	/* 도서관 일정 Month 슬라이드 */
	$('.scheduleMonth .prev').click(function(){
		var currentMonth = $('.scheduleMonth ul li.on').index();
		$('.scheduleMonth ul li').removeClass('on');
		$('.scheduleMonth ul li').eq(currentMonth-1).addClass('on');
		$('.scheduleList ul').removeClass('on');
		$('.scheduleList ul').eq(currentMonth-1).addClass('on');
		currentMonth--;
		console.log(currentMonth)
		return false
	});
	$('.scheduleMonth .next').click(function(){
		var currentMonthCnt = $('.scheduleMonth ul li').length;
		var currentMonth = $('.scheduleMonth ul li.on').index();
		if((currentMonthCnt-1) == currentMonth){
			currentMonth=0;
		}else if(currentMonthCnt > currentMonth){
			currentMonth++;
		}
		$('.scheduleMonth ul li').removeClass('on');
		$('.scheduleMonth ul li').eq(currentMonth).addClass('on');

		$('.scheduleList ul').removeClass('on');
		$('.scheduleList ul').eq(currentMonth).addClass('on');

		console.log(currentMonth);
		return false
	});
	/* 도서관 일정 Month 슬라이드 */
	$('.tabListW .bookList').slick({
		slide: 'div',	
		infinite : true,
		slidesToShow : 5,	
		slidesToScroll : 1,	
		speed : 500,	
		arrows : true, 		
		vertical : false,
		prevArrow : "<a href='#' class='slickPrev'>Previous</a>",		// 이전 화살표 모양 설정
		nextArrow : "<a href='#' class='slickNext'>Next</a>",	// 다음 화살표 모양 설정
		draggable : true,	
		responsive: [ // 반응형 웹 구현 옵션
			{ 
				breakpoint: 1450, //화면 사이즈 1450px
				settings: {	
					slidesToShow:4
				} 
			},
			{ 
				breakpoint: 1024, //화면 사이즈 719px
				settings: {	
					slidesToShow:3,
					arrows : false, 
					centerMode: true,
  					centerPadding: '60px',
				} 
			},{ 
				breakpoint: 920, //화면 사이즈 719px
				settings: {	
					slidesToShow:2,
					arrows : false, 
					centerMode: true,
  					centerPadding: '120px',
				} 
			},{ 
				breakpoint: 800, //화면 사이즈 719px
				settings: {	
					slidesToShow:2,
					arrows : false, 
					centerMode: true,
  					centerPadding: '60px',
				} 
			},
			{ 
				breakpoint: 690, //화면 사이즈 719px
				settings: {	
					slidesToShow:2,
					arrows : false, 
					centerMode: true,
  					centerPadding: '30px',
				} 
			},
			{ 
				breakpoint: 580, //화면 사이즈 719px
				settings: {	
					slidesToShow:1,
					arrows : false, 
					centerMode: true,
  					centerPadding: '120px',
				} 
			},
			{ 
				breakpoint: 520, //화면 사이즈 719px
				settings: {	
					slidesToShow:1,
					arrows : false, 
					centerMode: true,
  					centerPadding: '90px',
				} 
			},{ 
				breakpoint: 450, //화면 사이즈 719px
				settings: {	
					slidesToShow:1,
					arrows : false, 
					centerMode: true,
  					centerPadding: '60px',
				} 
			},{ 
				breakpoint: 380, //화면 사이즈 380px
				settings: {	
					slidesToShow:1,
					arrows : false, 
					centerMode: true,
  					centerPadding: '50px',
				} 
			},{ 
				breakpoint: 350, //화면 사이즈 330px
				settings: {	
					slidesToShow:1,
					arrows : false, 
					centerMode: true,
  					centerPadding: '30px',
				} 
			}
		]
	});
	$('.collectionList .bookList').slick({
		slide: 'div',	
		infinite : true,
		slidesToShow : 5,	
		slidesToScroll : 1,	
		speed : 500,	
		arrows : true, 		
		vertical : false,
		prevArrow : "<a href='#' class='slickPrev'>Previous</a>",		// 이전 화살표 모양 설정
		nextArrow : "<a href='#' class='slickNext'>Next</a>",	// 다음 화살표 모양 설정
		draggable : true,	
		responsive: [ // 반응형 웹 구현 옵션
			{ 
				breakpoint: 1450, //화면 사이즈 1450px
				settings: {	
					slidesToShow:4
				} 
			},
			{ 
				breakpoint: 1024, //화면 사이즈 719px
				settings: {	
					slidesToShow:3,
					arrows : false, 
					centerMode: true,
  					centerPadding: '60px',
				} 
			},{ 
				breakpoint: 920, //화면 사이즈 719px
				settings: {	
					slidesToShow:2,
					arrows : false, 
					centerMode: true,
  					centerPadding: '120px',
				} 
			},{ 
				breakpoint: 800, //화면 사이즈 719px
				settings: {	
					slidesToShow:2,
					arrows : false, 
					centerMode: true,
  					centerPadding: '60px',
				} 
			},
			{ 
				breakpoint: 690, //화면 사이즈 719px
				settings: {	
					slidesToShow:2,
					arrows : false, 
					centerMode: true,
  					centerPadding: '30px',
				} 
			},
			{ 
				breakpoint: 580, //화면 사이즈 719px
				settings: {	
					slidesToShow:1,
					arrows : false, 
					centerMode: true,
  					centerPadding: '120px',
				} 
			},
			{ 
				breakpoint: 520, //화면 사이즈 719px
				settings: {	
					slidesToShow:1,
					arrows : false, 
					centerMode: true,
  					centerPadding: '90px',
				} 
			},{ 
				breakpoint: 450, //화면 사이즈 719px
				settings: {	
					slidesToShow:1,
					arrows : false, 
					centerMode: true,
  					centerPadding: '60px',
				} 
			},{ 
				breakpoint: 380, //화면 사이즈 380px
				settings: {	
					slidesToShow:1,
					arrows : false, 
					centerMode: true,
  					centerPadding: '50px',
				} 
			},{ 
				breakpoint: 350, //화면 사이즈 330px
				settings: {	
					slidesToShow:1,
					arrows : false, 
					centerMode: true,
  					centerPadding: '30px',
				} 
			}
		]
	});
	$('.databaseList .bookList').slick({
		slide: 'div',	
		infinite : true,
		slidesToShow : 5,	
		slidesToScroll : 1,	
		speed : 500,	
		arrows : true, 		
		vertical : false,
		prevArrow : "<a href='#' class='slickPrev'>Previous</a>",		// 이전 화살표 모양 설정
		nextArrow : "<a href='#' class='slickNext'>Next</a>",	// 다음 화살표 모양 설정
		draggable : true,	
		responsive: [ // 반응형 웹 구현 옵션
			{ 
				breakpoint: 1450, //화면 사이즈 1450px
				settings: {	
					slidesToShow:4
				} 
			},
			{ 
				breakpoint: 1024, //화면 사이즈 719px
				settings: {	
					slidesToShow:3,
					arrows : false, 
					centerMode: true,
  					centerPadding: '60px',
				} 
			},
			{ 
				breakpoint: 800, //화면 사이즈 719px
				settings: {	
					slidesToShow:2,
					arrows : false, 
					centerMode: true,
  					centerPadding: '120px',
				} 
			},
			{ 
				breakpoint: 690, //화면 사이즈 719px
				settings: {	
					slidesToShow:2,
					arrows : false, 
					centerMode: true,
  					centerPadding: '90px',
				} 
			},
			{ 
				breakpoint: 630, //화면 사이즈 719px
				settings: {	
					slidesToShow:2,
					arrows : false, 
					centerMode: true,
  					centerPadding: '60px',
				} 
			},
			{ 
				breakpoint: 560, //화면 사이즈 719px
				settings: {	
					slidesToShow:2,
					arrows : false, 
					centerMode: true,
  					centerPadding: '30px',
				} 
			},
			{ 
				breakpoint: 500, //화면 사이즈 719px
				settings: {	
					slidesToShow:1,
					arrows : false, 
					centerMode: true,
  					centerPadding: '120px',
				} 
			}
			,
			{ 
				breakpoint: 460, //화면 사이즈 719px
				settings: {	
					slidesToShow:1,
					arrows : false, 
					centerMode: true,
  					centerPadding: '70px',
				} 
			},{ 
				breakpoint: 400, //화면 사이즈 719px
				settings: {	
					slidesToShow:1,
					arrows : false, 
					centerMode: true,
  					centerPadding: '60px',
				} 
			},{ 
				breakpoint: 380, //화면 사이즈 380px
				settings: {	
					slidesToShow:1,
					arrows : false, 
					centerMode: true,
  					centerPadding: '50px',
				} 
			},{ 
				breakpoint: 350, //화면 사이즈 330px
				settings: {	
					slidesToShow:1,
					arrows : false, 
					centerMode: true,
  					centerPadding: '40px',
				} 
			}
		]
	});

	$(document).ready(function(){
		var TabTotal = $('.tabListW .tabList ul li.on .bookList').slick("getSlick").slideCount;
		var collectionTotal = $('.collectionList .bookList').slick("getSlick").slideCount;
		var databaseTotal = $('.databaseList .bookList').slick("getSlick").slideCount;
		$('.tabListW .slickCounter .total').text(TabTotal);
		$('.collectionList .slickCounter .total').text(collectionTotal);
		$('.databaseList .slickCounter .total').text(databaseTotal);
	});

	$('.tabListW ul li.on .bookList').on('init', function(event, slick) {
		$('.tabListW ul li.on .slickCounter .current').text(slick.currentSlide + 1);
	})
	.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		$('.tabListW ul li.on .slickCounter .current').text(nextSlide + 1);
	});
	$('.collectionList .bookList').on('init', function(event, slick) {
		$('.collectionList .slickCounter .current').text(slick.currentSlide + 1);
	})
	.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		$('.collectionList .slickCounter .current').text(nextSlide + 1);
	});
	$('.databaseList .bookList').on('init', function(event, slick) {
		$('.databaseList .slickCounter .current').text(slick.currentSlide + 1);
	})
	.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		$('.databaseList .slickCounter .current').text(nextSlide + 1);
	});

	$('.tabList a.tab').on('click focus', function(){
		var total = $(this).siblings().children('.bookList').slick("getSlick").slideCount;
		$('.tabListW .slickCounter .total').text(total);
		$('.tabListW .tabList a.tab').parent().removeClass('on')
		$(this).parent().addClass('on');
		$('.tabListW .tabList .bookListW').hide();
		$('.tabListW .tabList li.on .bookListW').show();
		$('.tabListW .bookList').slick('setPosition');
		$(this).siblings().children('.bookList').on('init', function(event, slick) {
			$('.tabListW ul li.on .slickCounter .current').text(slick.currentSlide + 1);
		})
		.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			$('.tabListW ul li.on .slickCounter .current').text(nextSlide + 1);
		});
		return false;
	});

	$(document).ready(function(){
		var tabCnt = $('.tabList > div > ul > li').length;
		if(tabCnt > 3){
			$('.contents4').addClass('tabBox');
		}
	});
		
	// 하단 배너링크 마우스오버
	$(document).on('mouseover','.bannerList div a',function(e){
		var src = $(this).children('img').data('oversrc');
		if(src != ''){
			$(this).children('img').attr('src',src);
		}
	});
	$(document).on('mouseout','.bannerList div a',function(e){
		var src = $(this).children('img').data('orgsrc');
		if(src != ''){
			$(this).children('img').attr('src',src);
		}
	});
		
	$('.bannerList').slick({
		slide: 'div',	
		infinite : true,
		slidesToShow : 6,	
		slidesToScroll : 1,	
		speed : 500,	
		autoplay : true,
		autoplaySpeed : 3000, 	
		arrows : true, 		
		vertical : false,
		prevArrow : $('.bannerPrev'),
		nextArrow : $('.bannerNext'),
		draggable : true,	
		responsive: [ // 반응형 웹 구현 옵션
			{  
				breakpoint: 1560, //화면 사이즈 1560px
				settings: {
					slidesToShow:5 
				} 
			},
			{ 
				breakpoint: 1150, //화면 사이즈 1150
				settings: {	
					slidesToShow:4,
				} 
			},
			{ 
				breakpoint: 900, //화면 사이즈 900
				settings: {	
					slidesToShow:3
				} 
			},
			{ 
				breakpoint: 800, //화면 사이즈 800
				settings: {	
					slidesToShow:2
				} 
			},
			{ 
				breakpoint: 550, //화면 사이즈 550px
				settings: {	
					slidesToShow:1
				} 
			}
		]
	});

	$('.bannerListW .play').click(function(){
		$('.bannerList').slick('slickPlay');
		$(this).hide();
		$('.btnW .pause').show();
		$('.btnW .pause').focus();
		return false;
	});
	
	$('.bannerListW .pause').click(function(){
		$('.bannerList').slick('slickPause');
		$(this).hide();
		$('.btnW .play').css('display','inline-block');
		$('.btnW .play').focus();
		return false;
	});

	/*팝업*/
	$('.popupImg').slick({
		slide: 'div',	
		infinite : true,
		slidesToShow : 1,	
		slidesToScroll : 1,	
		speed : 200,	
		autoplay : true,
		autoplaySpeed : 3000, 	
		arrows : true, 		
		vertical : false,
		fade: true,
		cssEase: 'linear',
		prevArrow : $('.popupPrev'),
		nextArrow : $('.popupNext'),
	}); 
	
	$('.popupImgW .control .play').click(function(){
		$('.popupImg').slick('slickPlay');
		$(this).hide();
		$('.popupImgW .control .pause').show();
		$('.popupImgW .control .pause').focus();
		return false;
	});
	
	$('.popupImgW .control .pause').click(function(){
		$('.popupImg').slick('slickPause');
		$(this).hide();
		$('.popupImgW .control .play').css('display','inline-block');
		$('.popupImgW .control .play').focus();
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