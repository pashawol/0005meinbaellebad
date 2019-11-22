const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile : [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile : document.querySelector(".menu-mobile--js"),
	menuMobileLink : [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body : document.querySelector("body"),
 
	// /magnificPopupCall
	toggleMenu() {
		let  _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.addEventListener('click', function() {

				_this.btnToggleMenuMobile.forEach(function (element) {
					element.classList.toggle("on");
				});
				_this.menuMobile.classList.toggle("active");
				_this.body.classList.toggle("fixed");
				
				return false;
			});
		});
	},

	closeMenu() {
		let  _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");
			
		});
		_this.menuMobile.classList.remove("active");
		_this.body.classList.remove("fixed");
		
	},

	mobileMenu() {
		// закрыть/открыть мобильное меню
		let  _this = this;

		_this.toggleMenu();
		_this.menuMobileLink.forEach(function (element)  {
			element.addEventListener('click',  function (e) {
				console.log(element);
				_this.closeMenu(); 
				
			});
		})
		document.addEventListener('mouseup', function (event)   {
			let container = event.target.closest(".menu-mobile--js.active"); // (1)
			if (!container) {
				_this.closeMenu(); 
				
			}
		});
	},
	// /mobileMenu

  

};

function eventHandler() {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});
 
	JSCCommon.mobileMenu();

 

	// /закрыть/открыть мобильное меню

	function heightses() {

		const w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		const topH = $("header ").innerHeight();

		$(window).scroll(function() {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил
		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function() {
		heightses();

	});

	heightses();

	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function() {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});
 
	// $('.s-gal__slider\
	// ,.slider-for2 ')
	// 	.on('lazyLoaded', function (event, slick, image, imageSource) {
	// 		image.parent().css('background-image', 'url(' + image.attr('src') + ')');
	// 	});
	// slider
	let defaltSlider = {
		watchOverflow: true,
		spaceBetween: 0, 
		loop: true, 
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	}
	const swiper4 = new Swiper('.one-slider--js', {
		// slidesPerView: 5,
		...defaltSlider,
		slidesPerView: '1',
	
	});
	
	const swiper5 = new Swiper('.slider-4--js', {
		// slidesPerView: 5,
		...defaltSlider,
		spaceBetween: 30, 
		slidesPerView: 1,
		lazy: {
			loadPrevNext: true,
		},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			576: {
				slidesPerView: 2
			},
			// when window width is >= 480px
			768: {
				slidesPerView: 3
			},
			// when window width is >= 640px
			1200: {
				slidesPerView: 4
			}
		}
	});

	// modal window

  

};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}