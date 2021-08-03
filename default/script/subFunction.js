$(document).ready(function(){
	//사이즈 변수 선언(공통 사용)
	var winWidth = window.innerWidth || document.documentElement.clientWidth;//미디어쿼리 사이즈와 $(window).width()가 인식하는 px단위 사이즈가 달라서 선언한 변수 : clinentWidth 와 innerWidth의 사이즈는 동일하나 innerWidth는 익스플로러 9 미만 버전은 인식하지 못하므로 동시선언
	
	// PC, MOBILE 구별
	function deviceCheck() {
		// 디바이스 종류 설정
		var pcDevice = "win16|win32|win64|mac|macintel"; //PC
	
		// 접속한 디바이스 환경
		if ( navigator.platform ) {
			if ( pcDevice.indexOf(navigator.platform.toLowerCase()) < 0 ) {
				$('.mTSButton').css('display','none');
				$('#divTabMenu > div.long').css('margin','0');
			}
		}
	}
	deviceCheck();

	// layer PopUp
	var _focus;

	// 바구니 담기 레이어 팝업
	$('.addBasket').on('click',function(){
		$(this).parent().find('.layerPopup').addClass('on');
		$('.blackBg').addClass('mo');
		$(this).next().find('.firstFocus').focus();
		return false;
	});
	$('.addBasketLayer .layerClose').on('click',function(){
		$('.layerPopup').removeClass('on');
		$('.blackBg').removeClass('mo');
		$('.addBasket').focus();
		return false;
	});
	// 바구니 담기 레이어 팝업

	// 내서재 담기 레이어 팝업
	$('.insertMyList').on('click',function(){
		$(this).parent().find('.layerPopup').addClass('on');
		$('.blackBg').addClass('mo');
		$(this).next().find('.firstFocus').focus();
		return false;
	});
	$('.insertMyListLayer .layerClose').on('click',function(){
		$('.layerPopup').removeClass('on');
		$('.blackBg').removeClass('mo');
		$('.insertMyList').focus();
		return false;
	});
	// 내서재 담기 레이어 팝업

	// 예약 레이어 팝업
	$('.reservationBtn').on('click',function(){
		$(this).parent().find('.layerPopup').addClass('on');
		$('.blackBg').addClass('mo');
		$(this).next().find('.firstFocus').focus();
		return false;
	});
	$('.reservationLayer .layerClose').on('click',function(){
		$('.layerPopup').removeClass('on');
		$('.blackBg').removeClass('mo');
		$('.reservationBtn').focus();
		return false;
	});
	// 예약 레이어 팝업

	// 서가부재도서 신청 레이어 팝업
	$('.missrepo').on('click',function(){
		$(this).parent().find('.layerPopup').addClass('on');
		$('.blackBg').addClass('mo');
		$(this).next().find('.firstFocus').focus();
		return false;
	});
	$('.missrepoLayer .layerClose').on('click',function(){
		$('.layerPopup').removeClass('on');
		$('.blackBg').removeClass('mo');
		$('.missrepo').focus();
		return false;
	});
	// 서가부재도서 신청 레이어 팝업

	// 내보내기 레이어 팝업
	$('.export').on('click',function(){
		$(this).parent().find('.layerPopup').addClass('on');
		$('.blackBg').addClass('mo');
		$(this).next().find('.firstFocus').focus();
		return false;
	});
	$('.exportLayer .layerClose').on('click',function(){
		$('.layerPopup').removeClass('on');
		$('.blackBg').removeClass('mo');
		$('.export').focus();
		return false;
	});
	// 내보내기 레이어 팝업

	// 서평쓰기 레이어 팝업
	$('.commentWriteBtn').on('click',function(){
		$(this).parent().find('.layerPopup').addClass('on');
		$('.blackBg').addClass('mo');
		$(this).next().find('.firstFocus').focus();
		return false;
	});
	$('.commentWriteLayer .layerClose').on('click',function(){
		$('.layerPopup').removeClass('on');
		$('.blackBg').removeClass('mo');
		$('.commentWriteBtn').focus();
		return false;
	});
	
	//서평쓰기 별 선택
	$('.selectW').click(function(){
		if($(this).hasClass('on')){
			$('.selectBox .srchSelectBox .OptList').slideUp(200);
			$(this).removeClass('on');
			return false;
		}else{
			$('.selectBox .srchSelectBox .OptList').slideDown(200);
			$(this).addClass('on');
			return false;
		}
	});

	//서평쓰기 별 영역외 클릭시 닫기
	$('body').click(function(e){
		if(!$('.selectW').has(e.target).length){
			$('.selectBox .srchSelectBox .OptList').stop().slideUp(200);
			$('.selectW').removeClass('on');
		}
	});

	//서평쓰기 별 select Box
	$('.OptList > ul > li > a').click(function(e){
		var optText = $(this).children('span').text();
		$(this).parent().parent().parent().parent().prev().find('label').html($(this).parent().html());//옵션선택시 텍스트 변경
		$(this).parent().parent().parent().parent().siblings().children('select').find('option').removeAttr('selected');
		$(this).parent().parent().parent().parent().siblings().children('select').find('option').filter(function() {return this.text == optText;}).attr('selected', 'selected');
		$('.selectBox .srchSelectBox .OptList').stop().slideUp(200);
		$('.selectW').removeClass('on');
		return false;
	});
 	// 서평쓰기 레이어 팝업

	// 태그 추가 레이어 팝업
	$('.tagWriteBtn').on('click',function(){
		$(this).parent().find('.layerPopup').addClass('on');
		$('.blackBg').addClass('mo');
		$(this).next().find('.firstFocus').focus();
		return false;
	});
	$('.tagWriteLayer .layerClose').on('click',function(){
		$('.layerPopup').removeClass('on');
		$('.blackBg').removeClass('mo');
		$('.tagWriteBtn').focus();
		return false;
	});
	// 태그 추가 레이어 팝업
	
	// Marc View popup
	$('.marcView .open').on('click', function(){
		$('.marcPopup').fadeIn(300);
		$('.marcView .marcPopup .close').focus();
		return false;
	});
	$('.marcView .marcPopup .close').on('click', function(){
		$('.marcPopup').fadeOut(300);
		$('.marcView .open').focus();
		return false;
	});
	// Marc View popup

	// 일별예약 레이어 팝업
	$('.roomRes').on('click',function(){
		_focus = $(this);
		$('.resLayer').addClass('on');
		$('.blackBg').addClass('mo');
		$('.resLayer').attr("tabindex", 0).show().focus();
		$('.resLayer .layerClose').on('click',function(){
			$('.layerPopup').removeClass('on');
			$('.blackBg').removeClass('mo');
			_focus.focus();
			return false;
		});
		return false;
	});
	// 일별예약 레이어 팝업

	// 시설예약 열기/닫기
	$('.popupRoomContent .popupContentHeader').on('click',function(){
		if($(this).parent().hasClass('on')){
			$(this).siblings().stop().slideDown();
			$(this).parent().removeClass('on');
		}else{
			$(this).siblings().stop().slideUp();
			$(this).parent().addClass('on');
		}
		return false;
	});
	// 시설예약 열기/닫기

	// 일별예약 레이어 팝업
	$('.applyForm').on('click',function(){
		_focus = $(this);
		$('.applyForm').addClass('on');
		$('.blackBg').addClass('mo');
		$('.applyForm').attr("tabindex", 0).show().focus();
		$('.applyForm .layerClose').on('click',function(){
			$('.layerPopup').removeClass('on');
			$('.blackBg').removeClass('mo');
			_focus.focus();
			return false;
		});
		return false;
	});
	// 일별예약 레이어 팝업

	// 그래프보기 레이어 팝업
	$('.seatGraphViewPopup').on('click',function(){
		_focus = $(this);
		$('.seatGraphView').addClass('on');
		$('.blackBg').addClass('mo');
		$('.seatGraphView').attr("tabindex", 0).show().focus();
		$('.seatGraphView .layerClose').on('click',function(){
			$('.layerPopup').removeClass('on');
			$('.blackBg').removeClass('mo');
			_focus.focus();
			return false;
		});
		return false;
	});
	// 그래프보기 레이어 팝업

	// 예약신청 레이어 팝업
	$('.seatResApplyPopup a').on('click',function(){
		_focus = $(this);
		$('.resInfoTable').addClass('on');
		$('.blackBg2').addClass('mo');
		$('.resInfoTable').attr("tabindex", 0).show().focus();
		$('.resInfoTable .layerClose').on('click',function(){
			$('.resInfoTable').removeClass('on');
			$('.blackBg2').removeClass('mo');
			_focus.focus();
			return false;
		});
		return false;
	});
	// 예약신청 레이어 팝업

	// 예약정보 레이어 팝업
	$('.bookingInfoTableBtn').on('click',function(){
		_focus = $(this);
		$('.bookingInfoTable').addClass('on');
		$('.blackBg').addClass('mo');
		$('.bookingInfoTable').attr("tabindex", 0).show().focus();
		$('.bookingInfoTable .layerClose').on('click',function(){
			$('.bookingInfoTable').removeClass('on');
			$('.blackBg').removeClass('mo');
			_focus.focus();
			return false;
		});
		return false;
	});
	// 예약정보 레이어 팝업

	// 입력예시 레이어 팝업
	$('.exBtn').on('click',function(){
		_focus = $(this);
		$('.exInputPopup').addClass('on');
		$('.blackBg').addClass('mo');
		$('.exInputPopup').attr("tabindex", 0).show().focus();
		$('.exInputPopup .layerClose').on('click',function(){
			$('.exInputPopup').removeClass('on');
			$('.blackBg').removeClass('mo');
			_focus.focus();
			return false;
		});
		return false;
	});
	// 입력예시 레이어 팝업

	// 제출자정보 수정 레이어 팝업
	$('.editBtn1').on('click',function(){
		_focus = $(this);
		$('.editPopup1').addClass('on');
		$('.blackBg').addClass('mo');
		$('.editPopup1').attr("tabindex", 0).show().focus();
		$('.editPopup1 .layerClose').on('click',function(){
			$('.editPopup1').removeClass('on');
			$('.blackBg').removeClass('mo');
			_focus.focus();
			return false;
		});
		return false;
	});
	// 제출자정보 수정 레이어 팝업

	// 메타정보 수정 레이어 팝업
	$('.editBtn2').on('click',function(){
		_focus = $(this);
		$('.editPopup2').addClass('on');
		$('.blackBg').addClass('mo');
		$('.editPopup2').attr("tabindex", 0).show().focus();
		$('.editPopup2 .layerClose').on('click',function(){
			$('.editPopup2').removeClass('on');
			$('.blackBg').removeClass('mo');
			_focus.focus();
			return false;
		});
		return false;
	});
	// 메타정보 수정 레이어 팝업

	// 원문정보 수정 레이어 팝업
	$('.editBtn3').on('click',function(){
		_focus = $(this);
		$('.editPopup3').addClass('on');
		$('.blackBg').addClass('mo');
		$('.editPopup3').attr("tabindex", 0).show().focus();
		$('.editPopup3 .layerClose').on('click',function(){
			$('.editPopup3').removeClass('on');
			$('.blackBg').removeClass('mo');
			_focus.focus();
			return false;
		});
		return false;
	});
	// 원문정보 수정 레이어 팝업

	// 저작권정보 수정 레이어 팝업
	$('.editBtn4').on('click',function(){
		_focus = $(this);
		$('.editPopup4').addClass('on');
		$('.blackBg').addClass('mo');
		$('.editPopup4').attr("tabindex", 0).show().focus();
		$('.editPopup4 .layerClose').on('click',function(){
			$('.editPopup4').removeClass('on');
			$('.blackBg').removeClass('mo');
			_focus.focus();
			return false;
		});
		return false;
	});
	// 저작권정보 수정 레이어 팝업

	
	// 레이어 팝업 black BackGround
	$('.blackBg').on('click',function(){
		$('.layerPopup').removeClass('on');
		$('.blackBg').removeClass('mo');
		return false;
	});
	$('.blackBg2').on('click',function(){
		$('.resInfoTable').removeClass('on');
		$('.blackBg2').removeClass('mo');
		return false;
	});
	// 레이어 팝업 black BackGround
		
	/* 탭메뉴 */
	if($('#divTabMenu').length > 0){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		$("#divTabMenu").mThumbnailScroller({
			type:"click-50",
			theme:"buttons-out"
		});
		$("#divTabMenu").mThumbnailScroller("scrollTo", $('#divTabMenu .selected'));	
		if($('#divTabMenu > div ul').width()>$('#divTabMenu > div').width()){
			$("#divTabMenu > div").addClass('long');
		}else{
			$("#divTabMenu").mThumbnailScroller("destroy");
		}
		//resize
		$(window).resize(function(){
			$("#divTabMenu").mThumbnailScroller({
				type:"click-50",
				theme:"buttons-out"
			});
			$("#divTabMenu").mThumbnailScroller("scrollTo", $('#divTabMenu .selected'));	
			if($('#divTabMenu > div ul').width()>$('#divTabMenu > div').width()){
				$("#divTabMenu > div").addClass('long');
			}else{
				$("#divTabMenu > div").removeClass('long');
				$("#divTabMenu").mThumbnailScroller("destroy");
			}
		});
	}

	//mobile table
	if ($('.mobileTable').length > 0) {
		$('.mobileTable').footable({
			breakpoints: {
				phone: 719
				, tablet: 1024
			}
		});
	};

	// brief

	// 소장정보 open
	$('.locationInfo > a').on('click',function(){
		if($(this).parent().hasClass('on')){
			$(this).parent().siblings().stop().slideUp();
			$(this).parent().removeClass('on');
		}else{
			$(this).parent().siblings().stop().slideDown();
			$(this).parent().addClass('on');
		}
		return false;
	});

	$('.holdingList .checkInBtn').on('click', function(){
		$(this).parent().parent().parent().parent().parent().parent().parent().parent().find('.checkIn').slideToggle(300);
		return false
	});
	$('.holdingList .bindingBtn').on('click', function(){
		$(this).parent().parent().parent().parent().parent().parent().parent().parent().find('.binding').slideToggle(300);
		return false
	});

	// facet More open
	$('.facetTit1').on('click',function(){
		if($(this).hasClass('on')){
			$(this).siblings().stop().slideUp();
			$(this).removeClass('on');
		}else{
			$(this).siblings().stop().slideDown();
			$(this).addClass('on');
		}
		return false;
	});
	$('.facetTit2').on('click',function(){
		if($(this).hasClass('on')){
			$(this).parent().siblings().stop().slideUp();
			$(this).removeClass('on');
		}else{
			$(this).parent().siblings().stop().slideDown();
			$(this).addClass('on');
		}
		return false;
	});


	$('.listMoreView').on('click',function(){
		if($(this).parent().siblings().hasClass('on')){
			$(this).parent().siblings().removeClass('on');
			$(this).removeClass('on')
			$(this).text('더보기');
		}else{
			$(this).parent().siblings().addClass('on');
			$(this).addClass('on')
			$(this).text('접기')
		}
		return false;
	});

	// Tablet, Mobile facet
	$('.facetNav').on('click',function(){
		if($('.facetContent').hasClass('on')){
			$('.facetContent').removeClass('on');
		}else{
			$('.facetContent').addClass('on');
		}
		return false;
	});

	// 영역외 클릭시 facet 닫기
	$('body').click(function(e){
		if(!$('.facetContent').has(e.target).length){
			$('.facetContent').removeClass('on');
		}
	});

	// detail

	// 검색 상세 section 열기/닫기
	$('.searchHeader h3 a').on('click',function(){
		if($(this).parent().parent().parent().hasClass('on')){
			$(this).parent().parent().siblings().stop().slideUp();
			$(this).parent().parent().parent().removeClass('on');
		}else{
			$(this).parent().parent().siblings().stop().slideDown();
			$(this).parent().parent().parent().addClass('on');
		}
		return false;
	});
	
	// load시 section open
	$(document).ready(function(){
		$('.searchInfo.on').find('.searchContents').stop().slideDown(0);
	});

	// 다국어 View popup
	$('.btnLanguage.open').on('click', function(){
		$('.languagePopup').fadeIn(300);
		$('.languagePopup .popupTit .close').focus();
		return false;
	});
	$('.languagePopup .popupTit .close').on('click', function(){
		$('.languagePopup').fadeOut(300);
		$('.btnLanguage').focus();
		return false;
	});

	//slick
	$(document).ready(function(){
		if($('.bookDataW').length){
			$('.bookData').slick({
				slide: 'div',	
				infinite : true,
				slidesToShow : 5,	
				slidesToScroll : 1,	
				speed : 500,	
				arrows : true, 		
				vertical : false,
				prevArrow : "<button type='button' class='slickPrev'>Previous</button>",		// 이전 화살표 모양 설정
				nextArrow : "<button type='button' class='slickNext'>Next</button>",	// 다음 화살표 모양 설정
				draggable : true,	
				responsive: [ // 반응형 웹 구현 옵션
					{  
						breakpoint: 1440, //화면 사이즈 1440px
						settings: {
							slidesToShow:4 
						} 
					},
					{ 
						breakpoint: 1050, //화면 사이즈 1050px
						settings: {	
							slidesToShow:3 
						} 
					},
					{ 
						breakpoint: 719, //화면 사이즈 719px
						settings: {	
							slidesToShow:2
						} 
					},
					{ 
						breakpoint: 499, //화면 사이즈 499px
						settings: {	
							slidesToShow:1
						} 
					}
				]
			});
			$('.myLoanBook .recomBookData').slick({
				slide: 'div',	
				infinite : true,
				slidesToShow : 6,	
				slidesToScroll : 1,	
				speed : 500,	
				arrows : true, 		
				vertical : false,
				prevArrow : "<button type='button' class='slickPrev'>Previous</button>",		// 이전 화살표 모양 설정
				nextArrow : "<button type='button' class='slickNext'>Next</button>",	// 다음 화살표 모양 설정
				draggable : true,	
				responsive: [ // 반응형 웹 구현 옵션
					{  
						breakpoint: 1440, //화면 사이즈 1440px
						settings: {
							slidesToShow:5 
						} 
					},
					{ 
						breakpoint: 1024, //화면 사이즈 1050px
						settings: {	
							slidesToShow:4
						} 
					},
					{ 
						breakpoint: 870, //화면 사이즈 1024px
						settings: {	
							slidesToShow:3
						} 
					},
					{ 
						breakpoint: 660, //화면 사이즈 1024px
						settings: {	
							slidesToShow:2
						} 
					},
					{ 
						breakpoint: 460, //화면 사이즈 1024px
						settings: {	
							slidesToShow:1
						} 
					}
				]
			});
			$('.recomBooks .recomBookData').slick({
				slide: 'div',	
				infinite : true,
				slidesToShow : 6,	
				slidesToScroll : 1,	
				speed : 500,	
				arrows : true, 		
				vertical : false,
				prevArrow : "<button type='button' class='slickPrev'>Previous</button>",		// 이전 화살표 모양 설정
				nextArrow : "<button type='button' class='slickNext'>Next</button>",	// 다음 화살표 모양 설정
				draggable : true,	
				responsive: [ // 반응형 웹 구현 옵션
					{  
						breakpoint: 1440, //화면 사이즈 1440px
						settings: {
							slidesToShow:5 
						} 
					},
					{ 
						breakpoint: 1024, //화면 사이즈 1050px
						settings: {	
							slidesToShow:4
						} 
					},
					{ 
						breakpoint: 800, //화면 사이즈 1024px
						settings: {	
							slidesToShow:3
						} 
					},
					{ 
						breakpoint: 600, //화면 사이즈 1024px
						settings: {	
							slidesToShow:2
						} 
					},
					{ 
						breakpoint: 420, //화면 사이즈 1024px
						settings: {	
							slidesToShow:1
						} 
					}
				]
			});
			$('.newBook .recomBookData').slick({
				slide: 'div',	
				infinite : true,
				slidesToShow : 3,	
				slidesToScroll : 1,	
				speed : 500,	
				arrows : true, 		
				vertical : false,
				prevArrow : "<button type='button' class='slickPrev'>Previous</button>",		// 이전 화살표 모양 설정
				nextArrow : "<button type='button' class='slickNext'>Next</button>",	// 다음 화살표 모양 설정
				draggable : true,	
				responsive: [ // 반응형 웹 구현 옵션
					{ 
						breakpoint: 1240, //화면 사이즈 1024px
						settings: {	
							slidesToShow:2
						} 
					},
					{ 
						breakpoint: 1024, //화면 사이즈 1024px
						settings: {	
							slidesToShow:4
						} 
					},
					{ 
						breakpoint: 800, //화면 사이즈 1024px
						settings: {	
							slidesToShow:3
						} 
					},
					{ 
						breakpoint: 600, //화면 사이즈 1024px
						settings: {	
							slidesToShow:2
						} 
					},
					{ 
						breakpoint: 420, //화면 사이즈 1024px
						settings: {	
							slidesToShow:1
						} 
					}
				]
			});
			
			// slick slide 로드시 display:block
			$('.searchHeader h3 a').on("click", function() {
				$('.bookData').css('display', 'block'); 
				$('.bookData').get(0).slick.setPosition()
				$('.bookData').get(1).slick.setPosition()
				$('.bookData').get(2).slick.setPosition()
				$('.bookData').get(3).slick.setPosition()
			});
			// 검색 상세 slick slide
			$(document).ready(function(){
				var TabTotal = $('.myLoanBook .recomBookData').slick("getSlick").slideCount;
				$('.bookDataW .slickCounter .total').text(TabTotal);
			});
		
			$('.myLoanBook .recomBookData').on('init', function(event, slick) {
				$('.bookDataW .slickCounter .current').text(slick.currentSlide + 1);
			})
			.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
				$('.bookDataW .slickCounter .current').text(nextSlide + 1);
			});
		}
	});
	$(document).ready(function(){
		//slick 
		if($('.bookDataW').length){
			$('.bookDataW .bookData div a .author').dotdotdot({
				ellipsis: "\u2026 ",
				watch: "true"
			});
		}
		if($('.bookDataW').length){
			$('.bookDataW .recomBookData div a .bookTitle').dotdotdot({
				ellipsis: "\u2026 ",
				watch: "true"
			});
		}
		if($('.bookDataW').length){
			$('	.bookDataW .bookData div a .bookTitle').dotdotdot({
				ellipsis: "\u2026 ",
				watch: "true"
			});
		}
		// 추천도서 폴더형
		if($('.collectionItem').length){
			$('.collectionItem ul li a span').dotdotdot({
				ellipsis: "\u2026 ",
				watch: "true"
			});
		}
		//게시판 이미지게시판
		if($('.collectionTable').length){
			$('.collectionTable ul li a .txt').dotdotdot({
				ellipsis: "\u2026 ",
				watch: "true"
			});
		}
		//서지 상제 서평
		if($('.replyCommentW').length){
			$('.replyCommentW p').dotdotdot({ 
				ellipsis: "...",
				watch :"true",
				warp : "word",
				after: "a.detailBtn"
			});
		}
		if($('.searchTxt').length){
			$('.searchTxt p').dotdotdot({ 
				ellipsis: "...",
				watch :"true",
				warp : "word",
				after: "a.detailBtn"
			});
		}
	});

	// comment 열기/닫기
	$('.commentW > li .replyCommentW a').on('click',function(){
		if($(this).parent().hasClass('on')){
			$(this).parent().removeClass('on');
			$(this).text('펼쳐보기');
		}else{
			$(this).parent().addClass('on');
			$(this).text('접어보기');
		}
		return false;
	});

	$(document).ready(function(){
		commentHeight();
	});
	$(window).on('resize',function(){
		commentHeight();
	});

	var commentHeight = function(){
		$('.commentW > li').each(function (index){
			var commentList = $('.commentW > li').eq(index);
			var commentH = $(commentList).find('div.replyCommentW').find('p').height();
			if(commentH < 44){
				$(commentList).find('div.replyCommentW').find('a').css('display','none');
				$(commentList).find('div.replyCommentW').find('p').removeClass('commentH');
			}else{
				$(commentList).find('div.replyCommentW').find('a').css('display','inline-block');
				$(commentList).find('div.replyCommentW').find('p').addClass('commentH');
			}
		});
	};

	$(".commentW > li .replyCommentW a").click(function() {
		var dot = $(this).prev(".replyComment");
		var isTruncated = dot.triggerHandler("isTruncated");
		if ( isTruncated ) {
		  dot.trigger("destroy");
		  dot.addClass('on');
		  $(this).addClass('on');
		} else {
		  dot.removeClass('on');
		  $(this).removeClass('on');
			// dot.dotdotdot({
			// 	height: auto
			// });  
		}
		return false;
	});

	$(".recommendCnt .recommendBtn").click(function() {
		if($(this).parent().hasClass('likeOn')){
			$(this).parent().removeClass('likeOn');
		}else{
			$(this).parent().addClass('likeOn');

		}
		return false;
	});

	// 초록 열기/닫기
	$('.searchContent .moreView').on('click',function(){
		if($(this).parent().hasClass('on')){
			$(this).parent().removeClass('on');
			$(this).text('펼쳐보기');
		}else{
			$(this).parent().addClass('on');
			$(this).text('접어보기');
		}
		return false;
	});

	/* 링크 네비게이터 */
	$(".stuckMenu ul li a").click(function() {
		var scrollPosition = $($(this).attr("href")).offset().top;
		var i = $(this).parent().index();
		if(i == 0){
			$('html,body').animate({
				scrollTop: 0
			}, 500);
		}else{
			$('html,body').animate({
				scrollTop: scrollPosition - 100
			}, 500);
		}
		$(".stuckMenu ul li").removeClass('on');
		$(this).parent().addClass('on');
		return false;
	});
	$(document).ready(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop >= 200){
			$('.stuckMenu').addClass('fixed');
		}else{
			$('.stuckMenu').removeClass('fixed');
		}
	});
	$(window).on('scroll', function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop >= 200){
			$('.stuckMenu').addClass('fixed');
		}else{
			$('.stuckMenu').removeClass('fixed');
		}
	});

	// 로그인 페이지 input클릭시 placeholder 위치 변경
	$('.joinInfo .item.enabled').on('click',function(){
		$(this).find('input').addClass('active');  
		$(this).next().addClass('active');  
		return false;
	});
	$('.joinInfo .item.enabled input').on('focus',function(){
		$(this).addClass('active');
		$(this).next().addClass('active');
		return false;
	});
	$('.joinInfo .item.enabled input').on('focusout',function(){
		if($(this).val()==''){
			$(this).removeClass('active');
			$(this).next().removeClass('active');
		}
		return false;
	});
	$('.joinInfo .item.enabled .placeholder').click(function(){
		$(this).prev().focus();
		return false;
	});
	// 로그인 페이지 input클릭시 placeholder 위치 변경

	//주제별검색 탭
	$('.subjectDepth01 > li > a').on('click focus',function(){
		var subjectDepth1H = $('.topicCont .subjectDepth01').height();
		var subjectDepth2H = $(this).siblings().height();
		$('.subjectDepth01 > li').removeClass('on')
		$(this).parent().addClass('on');
		$('.subject').height(subjectDepth1H + subjectDepth2H)
		return false;
	});
	$('.subjectDepth02 > li > a').on('click focus',function(){
		var subjectDepth1H = $('.topicCont .subjectDepth01').height();
		var subjectDepth2H = $('.topicCont .subjectDepth01 > li.on > .subjectDepth02').height();
		if($(this).hasClass('hasDepth3')){
	
			$('.subjectDepth02 > li').removeClass('on');
			$(this).parent().addClass('on');	
			var subjectDepth3H = $(this).siblings().height();
			$('.topicCont .subjectDepth01 > li > .subjectDepth02 > li .subjectDepth03').css('top',subjectDepth2H + 10)
			$('.subject').css('height', subjectDepth1H + subjectDepth2H + subjectDepth3H + 50);
			return false;
		}
	});
	
	$(document).ready(function(){
		var dataSearchW = $('.dataSearchW.topicContent').width();
		$('.topicCont .subjectDepth01 > li > .subjectDepth02').css('max-width', dataSearchW - 20);
		var subjectDepth1H = $('.topicCont .subjectDepth01').height();
		var subjectDepth2H = $('.topicCont .subjectDepth01 > li.on > .subjectDepth02').height();
		var subjectDepth3H = $('.topicCont .subjectDepth01 > li > .subjectDepth02 > li.on .subjectDepth03').height();
		if($('.topicCont .subjectDepth01 > li > .subjectDepth02 > li').hasClass('on')){
			$('.subject').css('height',subjectDepth1H + subjectDepth2H + subjectDepth3H + 50)
			$('.topicCont .subjectDepth01 > li > .subjectDepth02 > li .subjectDepth03').css('top',subjectDepth2H + 10)
		}else{
			$('.subject').css('height',subjectDepth1H + subjectDepth2H)
		}
	});
	$(window).on('resize', function(){
		var dataSearchW = $('.dataSearchW.topicContent').width();
		$('.topicCont .subjectDepth01 > li > .subjectDepth02').css('max-width', dataSearchW - 20);
		var subjectDepth1H = $('.topicCont .subjectDepth01').height();
		var subjectDepth2H = $('.topicCont .subjectDepth01 > li.on > .subjectDepth02').height();
		var subjectDepth3H = $('.topicCont .subjectDepth01 > li > .subjectDepth02 > li.on .subjectDepth03').height();
		if($('.topicCont .subjectDepth01 > li > .subjectDepth02 > li').hasClass('on')){
			$('.subject').css('height',subjectDepth1H + subjectDepth2H + subjectDepth3H + 50)
			$('.topicCont .subjectDepth01 > li > .subjectDepth02 > li .subjectDepth03').css('top',subjectDepth2H + 10)
		}else{
			$('.subject').css('height',subjectDepth1H + subjectDepth2H)
		}
	});

	//주제별검색 탭
	$('.subject .prev').click(function(){
		var listWidth = $('.topicCont .subjectDepth01 > li').width();
		if(!$('.topicCont .subjectDepth01 ').is(":animated")){
			$('.topicCont .subjectDepth01 ').css('left',-listWidth);
			$('.topicCont .subjectDepth01 > li').last().prependTo($('.topicCont .subjectDepth01'));
			$('.topicCont .subjectDepth01 ').animate({"left":"0"},0);
		}
		return false;			
	});
	
	$('.subject .next').click(function(){
		var listWidth = $('.topicCont .subjectDepth01 > li').width();
		if(!$('.topicCont .subjectDepth01').is(":animated")){
			$('.topicCont .subjectDepth01').animate({"left":-listWidth},0,function(){
				$('.topicCont .subjectDepth01 > li').first().appendTo($('.topicCont .subjectDepth01'));
				$('.topicCont .subjectDepth01').css('left','0')
			});
		}
		return false;
	});

	// 자동완성
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

	// 시설예약 열기/닫기
	$('.roomHeader .title').on('click',function(){
		if($(this).parent().hasClass('on')){
			$(this).parent().siblings().stop().slideDown();
			$(this).parent().removeClass('on');
		}else{
			$(this).parent().siblings().stop().slideUp();
			$(this).parent().addClass('on');
		}
		return false;
	});
	// 좌석예약 > 예약신청 > 그래프보기, 배치도보기 선택
	$('.tab1 > li > a').on('click focus', function(){
		var cnt = $(this).parent().index();
		$('.legendW ul').removeClass('on')
		$('.legendW ul').eq(cnt).addClass('on');

		$('.tab1 > li').removeClass();
		$(this).parent().addClass('on');
		return false;
	});
	// 좌석예약 > 예약신청 > 그래프보기, 배치도보기 선택

	// 좌석예약 > 예약신청 > 그래프보기 > 코너 선택 탭
	$('.tab2 > li > a').on('click focus', function(){
		$('.tab2 > li').removeClass();
		$(this).parent().addClass('on');
		return false;
	});
	// 좌석예약 > 예약신청 > 그래프보기 > 코너 선택 탭
});