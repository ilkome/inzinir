
/*
	proscom.ru
	Simple Communication
*/


$(document).ready(function() {
	
	//	Page article content nav
	// ==================================================
	$(".box-page-nav a").on("click", function(e){
		console.log("this");
		var thisis = $(this);
		var currentLi = thisis.closest("li");
		var child = thisis.closest("li").find("ol li");
		target = $(e.target);
		//e.preventDefault();

		if(target.hasClass("cat")) {
			if(thisis.closest("li").hasClass("open")) {
				currentLi.removeClass("close open")
				child.slideUp();
			} else {
				currentLi.addClass("open")
				child.slideDown();
			}
		}
	})

	// ==================================================
	//	ЛЕВОЕ МЕНЮ
	// ==================================================
	//	Скроллер текста
	$(".scroller-box").mCustomScrollbar({
		scrollInertia:150,
		advanced:{
			updateOnContentResize: true
		}
	})

	//	Высота блока
	function sidebarHeight() {
		var documentH = $(window).height();
		var sideHeight = $(".side-extend .bname").outerHeight();
		$(".scroller-box").css("height", documentH-sideHeight);
	}

	//	Ресайз
	$(window).on("resize", function (e) {
	    sidebarHeight()
	});
	
	
	// Открытие / закрытие блоков
	$(".side-extend .bcat-name .toogle").click(function (e) {
		e.preventDefault();
		var thisis = $(this);
		var item = thisis.closest(".bcat");

		if(item.hasClass("active")) {
			thisis.text("+");
			item.removeClass("active");
			item.find(".bcat-con").slideUp();
		} else {
			item.addClass("active");
			thisis.text("-");
			item.find(".bcat-con").slideDown();
		}
	});

	// Открытие второго меню
	$('.sidebar .menu a[data-menu]').on("click", function(e){
		e.preventDefault()
		var thisis = $(this);
		var menu = thisis.data("menu");
		
		sidebarHeight()
		
		$(".sidebar .menu li").removeClass("active")
		thisis.closest("li").addClass("active")
		$(".side-extend-fix").stop().fadeIn()
		$('.sidebar .side-extend').stop().fadeOut(500);
		$('.sidebar .side-extend[data-menu="'+menu+'"]').stop().fadeIn(300)

	})

	// Закрытие второго меню
	$(".sidebar .side-extend .bname .close").on("click", function(e){
		e.preventDefault()
		var thisis = $(this)
		
		$(".side-extend-fix").stop().fadeOut()		
		$(".sidebar .menu li").removeClass("active")
		thisis.closest(".side-extend").stop().fadeOut()
	})

	// Закрытие по клавише Esc 
	$(document).keyup(function(e){
		if (e.keyCode == 27) {
			$(".side-extend-fix").stop().fadeOut()		
			$(".sidebar .menu li").removeClass("active")
			$(".sidebar .side-extend").stop().fadeOut()
		}
	})

	// Закрытие по клику в любой части экрана
	$(document).click(function(e){
		if ($('.sidebar .side-extend:visible').length && !$(e.target).closest('.sidebar').length){
			$(".side-extend-fix").stop().fadeOut()		
			$(".sidebar .menu li").removeClass("active")
			$(".sidebar .side-extend").stop().fadeOut()
		}
	})



	// ==================================================
	//	ХОВЕР ПРИ НАВЕДЕНИИ
	// ==================================================
	$(".hoverbg").hover(
		function() {
			$(this).find(".icon .act").stop().fadeIn(300)
		}, function() {
			$(this).find(".icon .act").stop().fadeOut(300)
		}
	)



	// ==================================================
	//	Свитчер
	// ==================================================
	$("ul.switch").on("click", function(e){
		e.preventDefault()
		thisis = $(this).find(".switch-con")
		box = thisis.closest("ul.switch")
		target = $(e.target)
		//if(target.parent().hasClass("active")) return
		if(thisis.hasClass("right")) {
			box.find(".item").removeClass("active")
			box.find(".item span").text("выкл")
			thisis.removeClass("right")
		} else {
			box.find(".item").addClass("active")
			thisis.addClass("right")
			box.find(".item span").text("вкл")
		}
	})

	// ==================================================
	//	Свитчер
	// ==================================================
	$(".js-show-contacts").on("click", function(e){
		e.preventDefault()
		var thisis = $(this);
		var box = thisis.parent();
		
		thisis.hide();
		$(".js-contacts-box").fadeIn();
	})


	// ==================================================
	//	КАЛЕНДАРЬ
	// ==================================================
	if ( $.isFunction($.fn.datetimepicker) ) {
		$('.calendar-widget-pop').datetimepicker({
			lang:'ru',
			timepicker:false,
			format:'d.m.Y',
			todayButton: false,
		});
		$('.js-open-cal').click(function(){
			$(this).closest(".line").find(".js-calendar-widget").datetimepicker('show');
		});

		$('.calendar-widget-pop2').datetimepicker({
			lang:'ru',
			timepicker:false,
			format:'d.m.Y',
			todayButton: false,
		});

		$('.calendar-widget').datetimepicker({
			lang:'ru',
			timepicker:false,
			format:'d.m.Y',
			inline:true,
			todayButton: false,
		});
	}
	


	// ==================================================
	//	СЛАЙДЕРЫ
	// ==================================================
	if ( $.isFunction($.fn.lightSlider) ) {
		$(".slider-index").lightSlider({
			item: 1,
			loop: true,
			auto: true,
			pause: 4000,
			cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
				swipeThreshold: 100,
		});
	}


	// ==================================================
	//	ГРАФИКИ - ПИРОЖКИ
	// ==================================================
	if ( $.isFunction($.fn.easyPieChart) ) {
		$(function() {
			$('.js-charts-visits').easyPieChart({
				barColor: '#60c6cf',
				trackColor: '#e5e5e5',
				lineWidth: '5',
				size: "57",
				lineCap: "butt",
				scaleColor: "transparent",
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});
		});
		$(function() {
			$('.js-charts-members').easyPieChart({
				barColor: '#989cff',
				trackColor: '#e5e5e5',
				lineWidth: '5',
				size: "57",
				lineCap: "butt",
				scaleColor: "transparent",
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});
		});
		$(function() {
			$('.js-charts-sales').easyPieChart({
				barColor: '#55c69e',
				trackColor: '#e5e5e5',
				lineWidth: '5',
				size: "57",
				lineCap: "butt",
				scaleColor: "transparent",
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});
		});
	}



	// ==================================================
	//	ТАБЫ
	// ==================================================
	function tabsLoad() {
		var hash = window.location.hash;
		if (hash) {
			$('[data-id="'+hash+'"]').addClass("tab-active");
			$('[href="'+hash+'"]').parents(".js-tabs").find("li").removeClass("is-active");
			$('[href="'+hash+'"]').parent().addClass("is-active");
		}
		else {
			$('.js-tabs li:first').addClass("is-active");
			$('.js-tabs-content:first').addClass("tab-active");
		}
		
	}
	tabsLoad();
	$('.js-tabs a').on("click",function (e) {
		if ($(this).parent().hasClass("is-active")) {
			return false;
		}
		else {
			var thisis = $(this);
			var content = thisis.attr("href");
			thisis.parents(".js-tabs").find("li").removeClass("is-active");
			thisis.parent().addClass("is-active");
			thisis.parents(".tabs-box").find(".js-tabs-content").removeClass("tab-active");
			
			var selectedContent = $('[data-id="'+content+'"]');
			selectedContent.addClass("tab-active");
			slectedContentHeight = selectedContent.innerHeight();

			selectedContent.closest(".tabs-wrapper").animate({
				'height': slectedContentHeight
			}, 200);

			window.location.hash = this.hash;
			return false;
		}
	});



	// ==================================================
	//	ТЕКСТ - РАЗМЕР ШРИФТА
	// ==================================================
	$(function (){
		var	$content = $('.js-content'),
				$plus = $('.js-fz-plus'),
				$minus = $('.js-fz-minus'),
				$plusLineHeight = $('.js-lh-plus'),
				$minusLineHeight = $('.js-lh-minus'),
				active = 'is-active',
				fontLarge = 'fz-large',
				fontDef = 'fz-default',
				fontSmall = 'fz-small',
				lineheightLarge = 'lh-large',
				lineheightDef = 'lh-default',
				lineheightSmall = 'lh-small';
		// line-height
		$plusLineHeight.on('click', function() {
			if($content.hasClass(lineheightDef)) {
				$content.removeClass(lineheightDef);
				$content.addClass(lineheightLarge);
				$minusLineHeight.removeClass(active);
				$(this).addClass(active);
			}
			if($content.hasClass(lineheightSmall)) {
				$content.removeClass(lineheightSmall);
				$content.addClass(lineheightDef);
				$(this).removeClass(active);
				$minusLineHeight.removeClass(active);
			}
		});
		$minusLineHeight.on('click', function() {
			if($content.hasClass(lineheightDef)) {
				$content.removeClass(lineheightDef);
				$content.addClass(lineheightSmall);
				$plusLineHeight.removeClass(active);
				$(this).addClass(active);
			}
			if($content.hasClass(lineheightLarge)) {
				$content.removeClass(lineheightLarge);
				$content.addClass(lineheightDef);
				$(this).removeClass(active);
				$plusLineHeight.removeClass(active);
			}
		});
		// font-size
		$plus.on('click', function() {
			if($content.hasClass(fontDef)) {
				$content.removeClass(fontDef);
				$content.addClass(fontLarge);
				$minus.removeClass(active);
				$(this).addClass(active);
			}
			if($content.hasClass(fontSmall)) {
				$content.removeClass(fontSmall);
				$content.addClass(fontDef);
				$(this).removeClass(active);
				$minus.removeClass(active);
			}
		});
		$minus.on('click', function() {
			if($content.hasClass(fontDef)) {
				$content.removeClass(fontDef);
				$content.addClass(fontSmall);
				$plus.removeClass(active);
				$(this).addClass(active);
			}
			if($content.hasClass(fontLarge)) {
				$content.removeClass(fontLarge);
				$content.addClass(fontDef);
				$(this).removeClass(active);
				$plus.removeClass(active);
			}
		});
	});



	//	Popup page development
	// ==================================================
	$('.js-open-coming-soon').on("click", function(e) {
		e.preventDefault();
		swal({
			title: "Раздел в разработке!",
			type: "info",
			confirmButtonText: "Закрыть"
		});
	});

	// Summernote
	$('.summernote').summernote();
});