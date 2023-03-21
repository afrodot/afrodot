/**
*****************************************************************
* AUTHOR :: NCodeArt
* PROJECT :: NC-Roll Coming-Soon Page
* VERSION :: 0.05
* 
* This file is licensed to NCodeArt. 
* it's not allowed to copy or reuse it Copyright NCodeArt 2015
*****************************************************************
*/

var nc = {};
var scroll = true;
var verticalCenter = true;
var fitSection = true;

/*----------  VALIDATION  ----------*/
nc.elcheck = function(el) {
	'use strict';
	if ($(el).length > 0) {
		return true;
	} else {
		return false;
	};
}

/*----------  MEDIAQUARY  ----------*/
$.mediaquery({
	minWidth     : [ 200, 480, 600, 768, 992, 1200 ],
	maxWidth     : [ 1199, 991, 767, 599, 479 ],
	minHeight    : [ 400, 800 ],
	maxHeight    : [ 800, 400 ]
});

/*----------  MOBILE MENU  ----------*/
nc.mobmenu = function(el) {
	'use strict';
	$(el).touch({
		tap: true
	}).on("tap", function(e) {
		var nav = $(this).attr('data-nav');
		if ($(nav).hasClass('open')) {
			$(nav).removeClass('open');
			$(this).find('.fa').removeClass('fa-times').addClass('fa-bars');
		} else {
			$(nav).addClass('open m-nav');
			$(this).find('.fa').removeClass('fa-bars').addClass('fa-times');
		};
	});
}

nc.animationEffect = function(obj){
	 $($(obj).find(".animated")).each(function(index, el) {
    	$(this).addClass($(this).attr("data-anim"));
    });
}

/*----------  FULLPAGE SCROLL  ----------*/
nc.fullPageScroll = function(obj, scroll, verticalCenter, fitSection){
	if ($(obj).attr('data-menu') === 'yes') {
		$(obj).fullpage({
			anchors: ['home', 'services', 'portfolio', 'contact', 'notify'],
			menu: '#myMenu',
			navigation: true,
			navigationTooltips: ['Home', 'Services', 'Contact', 'Mail'],
			autoScrolling: scroll,
			verticalCentered: verticalCenter,
			fitToSection: fitSection,
			afterLoad: function(anchorLink, index){
	            var loadedSection = $(this);
	           	nc.animationEffect(loadedSection);
	        }
		});
	} 
	else{
		$(obj).fullpage({
			navigation: true,
			navigationTooltips: ['Home', 'Services', 'Contact', 'Mail'],
			autoScrolling: scroll,
			verticalCentered: verticalCenter,
			fitToSection: fitSection,
			afterLoad: function(anchorLink, index){
	            var loadedSection = $(this);
	           	nc.animationEffect(loadedSection);
	        }
		});
	};
}

/*----------  NAVIGATION  ----------*/
nc.navigation = function(obj){
	var navIn, navOut, navLinks;
	if($(obj).data('navIn') != '' && $(obj).data('navOut') != ''){
		navIn = $(obj).attr("data-navIn");
		navOut = $(obj).attr("data-navOut");
		navLinks = $(obj).attr("data-navLink");
	}
	else{
		navIn = "fadeInRight";
		navOut = "fadeOutRight";
		navLinks = "fadeInDown";
	}
	$(obj).removeClass(navIn+" "+navOut);
	$("#main-wrapper").on("click", "#menu-button", function(){
		$(obj).removeClass(navOut);
		$(obj).addClass(navIn+" on");
		var li = $(obj+" ul > li").length;
		var i = 1;
		$(obj+" ul > li").each(function(index, el) {
			$(this).addClass("delay-0-"+i+"s");
			i=i+1;
		});
		$(obj+" ul > li").addClass(navLinks);
	});
	$(obj+" .close-button").on("click", function(){
		$(obj).removeClass(navIn);
		$(obj).addClass(navOut);
		setTimeout(function(){
			$(obj).removeClass("on");
		},800);
	});

	$(obj+" .nav-link").on("click", function(){
		$(obj).removeClass(navIn);
		$(obj).addClass(navOut);
		setTimeout(function(){
			$(obj).removeClass("on");
		},800);
	});
}

/*----------  EQUAL HEIGHT  ----------*/
nc.eqh = function(parentObj, childObj, a) {
	'use strict';
	if (nc.elcheck(parentObj)) {
		$(parentObj).each(function(index, el) {
			if (a == "destroy") {
				$(this).equalize("destroy");
			} else {
				$(this).equalize({
					target: $(childObj)
				});
			};	
		});
	};
}

/*----------  FULL HEIGHT & WIDTH  ----------*/
nc.fullwh = function (obj) {
	'use strict';
	// global vars
	var winWidth = $(window).width();
	var winHeight = $(window).height();
	// set initial div height / width
	$(obj).css({
		'width': winWidth,
		'height': winHeight,
	});
}

/*----------  BACKGROUND SLIDER  ----------*/
nc.bgSlider = function (setting) {
	'use strict';
	$(setting.obj).vegas({
		delay: setting.delay,
		slides: setting.slides,
		animation: setting.effect
	});
}

/*----------  COUNTDOWN-CLOCK  ----------*/
nc.countdown = function (obj) {
	'use strict';

	var countdownHtml  = '<div class="inner-dashboard">';
	countdownHtml += '	<!-- DAYS -->';
	countdownHtml += '	<div class="dash days_dash">';
	countdownHtml += '	 <div class="inner-dash">';
	countdownHtml += '	 <div class="digit">0</div>';
	countdownHtml += '	 <div class="digit">0</div>';
	countdownHtml += '	 <div class="digit">0</div>';
	countdownHtml += '	 </div>';
	countdownHtml += '	 <span class="dash_title">days</span>';
	countdownHtml += '	</div>';
	countdownHtml += '	<!-- HOURS -->';
	countdownHtml += '	<div class="dash hours_dash">';
	countdownHtml += '	 <div class="inner-dash">';
	countdownHtml += '	 <div class="digit">0</div>';
	countdownHtml += '	 <div class="digit">0</div>';
	countdownHtml += '	 </div>';
	countdownHtml += '	 <span class="dash_title">hours</span>';
	countdownHtml += '	</div>';
	countdownHtml += '	<!-- MINIUTES -->';
	countdownHtml += '	<div class="dash minutes_dash">';
	countdownHtml += '	 <div class="inner-dash">';
	countdownHtml += '	 <div class="digit">0</div>';
	countdownHtml += '	 <div class="digit">0</div>';
	countdownHtml += '	 </div>';
	countdownHtml += '	 <span class="dash_title">minutes</span>';
	countdownHtml += '	</div>';
	countdownHtml += '	<!-- SECONDS -->';
	countdownHtml += '	<div class="dash seconds_dash">';
	countdownHtml += '	 <div class="inner-dash">';
	countdownHtml += '	 <div class="digit">0</div>';
	countdownHtml += '	 <div class="digit">0</div>';
	countdownHtml += '	 </div>';
	countdownHtml += '	 <span class="dash_title">seconds</span>';
	countdownHtml += '	</div>';
	countdownHtml += '</div>';

	$(obj).html(countdownHtml);

	var config = {
		day   : parseInt($(obj).attr("data-day"),10),
		month : parseInt($(obj).attr("data-month"),10),
		year  : parseInt($(obj).attr("data-year"),10),
		hour  : parseInt($(obj).attr("data-hr"),10),
		min   : parseInt($(obj).attr("data-min"),10),
		sec   : parseInt($(obj).attr("data-sec"),10)
	}

	// DESKTOP CLOCK
	$(obj).countDown({
		targetDate: {
			'day': 	 config.day,
			'month': config.month,
			'year':  config.year,
			'hour':  config.hour,
			'min': 	 config.min,
			'sec': 	 config.sec
		},
		omitWeeks: true
	});
}

/*----------  GETVAR  ----------*/
nc.getvar = function (v, default_v, val_type) {
	'use strict';
	if (val_type == 'n') {
		return v ? parseInt(v,10) : default_v;
	} 
	if (val_type == 'b') {
		if (v == 'true') { return true; }
		else if (v == 'false') { return false; }
		else { return default_v; }
	}
	if (val_type == 's') {
		if (v == 'false') {
			return false;
		} else {
			return v ? v : default_v;
		};
		
	}
}

/*----------  OWLCAROUSEL  ----------*/
nc.owlitems = function (arr) {
	'use strict';
	if (typeof(arr) == "string" && arr != 'false') {
		var t1 = arr.split('|');
		var t2 = {};
		$.each(t1, function(index, val) {
			var str = val;
			var newarr = str.split(',');
			t2[newarr[0]] = {}
			t2[newarr[0]] = {items: parseInt(newarr[1],10)};
		});
		return t2;
	}else if(arr === 'false'){
		return {};
	}else{
		return false;
	}
}

nc.slider = function (owlObj) {
	
	'use strict';

	var resObj = {
		0    : { items:1 },
		420  : { items:2 },
		600  : { items:3 },
		768  : { items:3 },
		980  : { items:4 }
	}

	var owlEle = $(owlObj + ' .owl-carousel');

	var config = {
		center             : nc.getvar($(owlObj).attr('data-center'), false, 'b'),
		stagePadding       : nc.getvar($(owlObj).attr('data-stpd'), 0, 'n'),
		items              : nc.getvar($(owlObj).attr('data-items'), 5, 'n'),
		margin             : nc.getvar($(owlObj).attr('data-margin'), 0, 'n'),
		nav                : nc.getvar($(owlObj).attr('data-nav'), false, 'b'),
		dots               : nc.getvar($(owlObj).attr('data-pager'), false, 'b'),
		slideby            : nc.getvar($(owlObj).attr('data-slideby'), 1, 'n'),
		rbase              : nc.getvar($(owlObj).attr('data-rbase'), $(owlObj).parent(), 's'),
		res                : $(owlObj).attr('data-itemrange') ? nc.owlitems($(owlObj).attr('data-itemrange')) : resObj,
		animOut            : nc.getvar($(owlObj).attr('data-out'), 'fadeOut', 's'),
		animIn             : nc.getvar($(owlObj).attr('data-in'), 'fadeIn', 's'),
		autoplay           : nc.getvar($(owlObj).attr('data-autoplay'), false, 'b'),
		autoplayTimeout    : nc.getvar($(owlObj).attr('data-timeout'), 3000, 'n'),
		autoplayHoverPause : nc.getvar($(owlObj).attr('data-hstop'), true, 'b'),
		loop               : nc.getvar($(owlObj).attr('data-loop'), false, 'b'),
		autoWidth          : nc.getvar($(owlObj).attr('data-awidth'), false, 'b'),
		autoHeight         : nc.getvar($(owlObj).attr('data-hauto'), true, 'b'),
		touchDrag          : nc.getvar($(owlObj).attr('data-tdrag'), true, 'b'),
		mouseDrag          : nc.getvar($(owlObj).attr('data-mdrag'), true, 'b'),
		pullDrag           : nc.getvar($(owlObj).attr('data-pdrag'), true, 'b'),
		contentHeight      : nc.getvar($(owlObj).attr('data-h'), true, 'b')
	}
	$(owlObj).animate({opacity:1}, 300, function(){

		 owlEle.owlCarousel({
			center                : config.center,
			stagePadding          : config.stagePadding,
			items                 : config.items,
			margin                : config.margin,
			nav                   : config.nav,
			dots                  : config.dots,
			slideBy               : config.slideby,
			navText               : ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
			responsiveBaseElement : config.rbase,
			responsive            : config.res,
			loop                  : $(owlObj+" .owl-carousel > .item").length > 1 ? config.loop : false,
			animateOut            : config.animOut, //'slideOutDown',
			animateIn             : config.animIn, //'flipInX',
			autoplay              : config.autoplay,
			autoplayTimeout       : config.autoplayTimeout,
			autoplayHoverPause    : config.autoplayHoverPause,
			autoHeight            : config.autoHeight,
			autoWidth             : config.autoWidth,
			touchDrag             : config.touchDrag,
			mouseDrag             : config.mouseDrag,
			pullDrag              : config.pullDrag,
			autoplaySpeed : 2000,

			onInitialized: function () {
				owlEle.animate({opacity: 1}, 300);
				if (owlEle.find('.feedback-box1').length > 0) {
					config.contentHeight ? nc.eqh(owlEle, ".feedback-box1", "") : false;
				}
				if (owlEle.find('.feedback-box3').length > 0) {
					config.contentHeight ? nc.eqh(owlEle, ".feedback-box3 .feedback", "") : false;
				}
				if (owlEle.find('.feedback-box4').length > 0) {
					config.contentHeight ? nc.eqh(owlEle, ".feedback-box4 .feedback", "") : false;
				}
			}
		});

		$(owlObj).find('.carousel-btn .prev').on('click', function() { owlEle.trigger('prev.owl.carousel'); });
		$(owlObj).find('.carousel-btn .next').on('click', function() { owlEle.trigger('next.owl.carousel'); });

	});
}

/*----------  VIDEO-BACKGROUND  ----------*/
nc.videoBg = function (obj, imglist) {
	'use strict';
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	if( isMobile.any() ){
		$(obj).css("display","none");
		/*$(obj).vegas({
			slides: [
				{ src: "images/bg-1.jpg" },
				{ src: "images/bg-2.jpg" },
				{ src: "images/bg-3.jpg" },
				{ src: "images/bg-4.jpg" }
			]
			slides: imglist
		});*/
	}
	else{
		$(obj).css("display","block");
		$(obj).YTPlayer();
	}
}

/*----------  FORM  ----------*/
nc.global_validation = {
	form: '',
	rules: { 
		email            : { required: true, email: true },
		name             : { required: true },
		message          : { required: true },
		phone            : { required: true, number: true },
		date             : { required: true, date: true },
	},
	msg: {
		email: {email: "Please, enter a valid email"}
	},
	successMsg : "<div class='msg-success alert alert-success' role='alert'>Thank you for contact us. We will contact you as soon as possible.</div>",
	errorMsg   : "<div class='msg-error alert alert-danger' role='alert'>Oops! Looks like something went wrong. Please try again later.</div>"
}

nc.formVaidate = function (obj) {
	'use strict';
	if (obj.msgpos == 'append') {
		$(obj.form).validate({
			onfocusout: false,
			onkeyup: false,
			rules: obj.rules,
			messages: obj.msg,
			errorPlacement: function(error, element) {
				if (obj.msgpos == 'append') {
					error.appendTo( element.closest("form").find('.msg-wrp'));
				};
			},
			highlight: function(element) {
				$(element)
			},                    
			success: function(element) {
				element.text('').addClass('valid');
			}
		});
	} else {
		$(obj.form).validate({
			onfocusout: false,
			onkeyup: false,
			rules: obj.rules,
			messages: obj.msg,
			highlight: function(element) {
				$(element)
			},                    
			success: function(element) {
				element.text('').addClass('valid');
			}
		});
	};
	
}

nc.resetForm = function (form) {
	'use strict';
	$(form).find('input[type="text"], input[type="email"], textarea').val(null);
}

nc.contactForm = function($form, formData, validate_data){
	'use strict';
	$form.find('.error').hide();

	if ($form.valid()) {
		var $btn = $(this).button('loading');
		$.ajax({
			url: $form.attr('action'),
			type: 'POST',
			data: formData,
			success: function(data) {
				$form.find(".msg-success").remove();
				$form.prepend(validate_data.successMsg);
				$btn.button('reset');
				$form.find(".msg-success").delay(4000).fadeOut('400', function() {
					$(this).remove();
					$.magnificPopup.close();
				});
				nc.resetForm($form);
				
			},
			error: function() {
				$form.find(".msg-error").remove();
				$form.prepend(validate_data.errorMsg);
				$btn.button('reset');
				$form.find(".msg-error").delay(4000).fadeOut('400', function() {
					$(this).remove();
					$.magnificPopup.close();
				});
			}
		});
	} else {
		$form.find(".error").delay(2000).fadeOut('400', function() {
			$(this).remove();
		});	
	};
}

nc.formWidget = function (obj) {
	'use strict';

	var config = {
		popup_selector : $(obj).attr('data-popup') ? '.'+$(obj).attr('data-popup') : false,
		form_selector  : obj,
	}
	var $form = $(config.form_selector);

	// Validation rules
	nc.global_validation.form = config.form_selector;
	var validate_data = nc.global_validation;
	
	// Form validation
	nc.formVaidate(validate_data);

	// Pop up form
	// if (config.popup_selector) {
	// 	nc.inlinePopup(config.popup_selector);	
	// };

	// Date picker
	if ($form.find(".date-pick").length > 0) {
		$form.find(".date-pick").each(function(index, el) {
			$(this).datepicker({
				clearBtn: true,
				todayHighlight: true,
				autoclose: true
			});		
		});
	};

	// Date time picker
	if ($form.find(".datetime-pick").length > 0) {
		$form.find(".datetime-pick").each(function(index, el) {
			$(this).datetimepicker();
		});
	};
	
	// Form
	$form.find('button').off('click').on('click', function(e) {
		e.preventDefault();
		nc.contactForm($form, $form.serializeObject(), validate_data);
		return false;
	});
}

$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		
		// Field labels
		var field_label = $('[name='+this.name+']').attr('data-label') ? $('[name='+this.name+']').attr('data-label') : this.name;

		// Field values
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push({val: this.value, label: field_label} || '');
		} else {
			//o[this.name] = this.value || '';
			o[this.name] = {val: this.value, label: field_label} || '';
		}
	});
	return o;
};

/*----------  BLURIMAGE  ----------*/
nc.blur = function (obj) {
	'use strict';
	var $blurEl = $(obj.container);
	$blurEl.backgroundBlur({
		imageURL : obj.img/*images[0]*/,
		blurAmount : 20,
		imageClass : 'bg-blur',
		overlayClass : 'bg-blur-overlay',
		duration: 500,
		endOpacity : 1
	});
}

/*----------  VIDEO BACKGRUND  ----------*/
nc.videoBg = function (obj, imglist) {
	'use strict';
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	if( isMobile.any() ){
		$(obj).css("display","none");
		/*$(obj).vegas({
			slides: [
				{ src: "images/bg-1.jpg" },
				{ src: "images/bg-2.jpg" },
				{ src: "images/bg-3.jpg" },
				{ src: "images/bg-4.jpg" }
			]
			slides: imglist
		});*/
	}
	else{
		$(obj).css("display","block");
		$(obj).YTPlayer();
	}
}

;(function(){
	'use strict';
	
	$(window).load(function(){
		$(".page-loader-wrapper").fadeOut(800);
	});

	jQuery(document).ready(function($) {

		/*----------  NAVIGATION  ----------*/
		if(nc.elcheck("#menu-button")){
			nc.navigation(".navigation-wrapper");
		}

		/*----------  CHECK ANIMATION  ----------*/
		if (nc.elcheck(".animated")) {
			$(".animated").each(function(index, el) {
		    	$(this).addClass("op");
		    });
		}

		/*----------  SCROLL TO  ----------*/
		if (nc.elcheck("[data-scrollTo]")) {
			$("[data-scrollTo]").on("click", function(){
				var section = $(this).attr("data-scrollTo");
				console.log(section);
				$.fn.fullpage.moveTo(section);
			});
		}		

		/*----------  SET BACKGROUND-IMAGE  ----------*/
		if (nc.elcheck("[data-bgImage]")) {
			$("[data-bgImage]").each(function(index, el) {
				$(this).css({backgroundImage: "url("+$(this).attr("data-bgImage")+")"});
			});
		}

		/*----------  BACKGROUND SLIDER  ----------*/
		if (nc.elcheck("[data-bgslider]")) {
			$("[data-bgslider]").each(function(index, el) {
				var s1 = $(this).attr('data-bgslider');
				var s2 = s1.split('|');
				var bgslides = [];
				$.each(s2, function(index, val) {
					bgslides.push({ src: val });
				});
				var bgslideSetting = {
					obj: this,
					delay: 6000,
					slides: bgslides,
					animation: 'kenburns'
				}
				nc.bgSlider(bgslideSetting);
			});
		};

		/*----------  KENBURN BACKGROUND SLIDER  ----------*/
		if (nc.elcheck("[data-kbgslider]")) {
			$("[data-kbgslider]").each(function(index, el) {
				var s1 = $(this).attr('data-kbgslider');
				var s2 = s1.split('|');
				var bgslides = [];
				$.each(s2, function(index, val) {
					bgslides.push({ src: val });
				});
				$(this).vegas({
					delay: 6000,
					slides: bgslides,
					animation: 'kenburns'
				});
			});
		};

		/*----------  COUNTDOWN-CLOCK  ----------*/		
		if (nc.elcheck(".countdown-widget")) {
			var countdown = 0;
			$(".countdown-widget").each(function(index, el) {
				var obj = 'countdown'+countdown;
				$(this).attr("id", obj);
				nc.countdown("#"+obj);
				countdown++;
			});
		}

		/*----------  OWLCAROUSEL  ----------*/
		if (nc.elcheck(".carousel-widget")) {
			var carousel = 0;
			$('.carousel-widget').each(function(){

				// SET ID ON ALL OBJECTS
				carousel++;
				var owlObj = 'owl'+carousel;
				$(this).css({opacity:0});
				$(this).attr("id", owlObj);
				$(this).addClass(owlObj);
				nc.slider("#"+owlObj);
			});
		}
		
		/*----------  VIDEO-BACKGROUND  ----------*/
		if (nc.elcheck(".videobg")) {
			$(".videobg").each(function(index, el) {
				nc.videoBg(el);
			});
		};

		/*----------  SUBSCRIBE  ----------*/
		if (nc.elcheck("#subscribe")) {
			var $subscribeForm = $('#subscribe');
			var subscribe_validate_data = {
				form: "#subscribe",
				rules: { email: { required: true, email: true } },
				msg: {
						email: {
							required: "Please enter email before submit.",
							email: "Please, enter a valid email"
						}
					},
				msgpos: 'append',
				successMsg: "<div class='msg-success'>Congrats! You are in list. We will inform you as soon as we finish.</div>",
				errorMsg: "<div class='msg-error>Oops! Looks like something went wrong. Please try again later.</div>"
			}
			nc.formVaidate(subscribe_validate_data);
			$('#subscribe').off('click').on('click', '#submit', function(e) {
				e.preventDefault();
				var formData = {
					email: $subscribeForm.find('input').val()
				}
				nc.contactForm($subscribeForm, formData, subscribe_validate_data);
				return false;
			});
		}

		/*----------  FORM  ----------*/
		if (nc.elcheck(".form-widget")) {
			$(".form-widget").each(function(index, el) {
				nc.formWidget(this);
			});
		};

		/*----------  BLURIMAGE  ----------*/
		if (nc.elcheck("[data-blurimg]")) {
			$("[data-blurimg]").each(function(index, el) {
				var blurObj = {
					container: $(this),
					img: $(this).attr('data-blurimg')
				}
				nc.blur(blurObj);
			});
		}
		
		/*----------  POPUP GALLERY  ----------*/
		if (nc.elcheck(".popgallery-widget")) {
			var magnific = 0;
			$('.popgallery-widget').each(function(){

				magnific++;
				var obj = 'popgallery'+magnific;
				$(this).attr("id", obj);
				$(this).addClass(obj);

				$('#'+obj).magnificPopup({
					delegate: '.pop-img',
					type: 'image',
					tLoading: 'Loading image #%curr%...',
					mainClass: 'mfp-img-mobile',
					gallery: {
						enabled: true,
						navigateByImgClick: true,
						preload: [0,1] // Will preload 0 - before current, and 1 after the current image
					},
					image: {
						tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
						titleSrc: function(item) {
							return item.el.attr('title');
						}
					}
				});
			});
		}
		
		/*----------  VIDEO BACKGROUND  ----------*/
		if (nc.elcheck(".videobg")) {
			$(".videobg").each(function(index, el) {
				nc.videoBg(el);
			});
		};

		/*----------  RESPONSIVE  ----------*/
		$.mediaquery("bind", "mq-key", "(min-width: 992px)", {
			enter: function() {
				nc.eqh(".eqh", ".eqh > div", "");
				nc.eqh(".feature-section-3", ".info", "");
				nc.eqh(".feature-section-4", ".info", "");
				nc.eqh(".feature-section-5 .eqh", ".eqh > div", "destroy");
				if (!nc.elcheck(".testimonial-section .carousel-widget")) {
					nc.eqh(".testimonial-section", ".feedback-box1", "");
				}

				/*----------  FULLPAGE SCROLL  ----------*/
				if (nc.elcheck("#section-wrapper.fullPageScroll")) {
					nc.fullPageScroll("#section-wrapper", verticalCenter, scroll, fitSection);
				}
			},
			leave: function() {
				nc.eqh(".eqh", ".eqh > div", "destroy");
				nc.eqh(".feature-section-3", ".info", "destroy");
			}
		});

		$.mediaquery("bind", "mq-key", "(min-width: 200px) and (max-width: 991px)", {
			enter: function() {
				if (nc.elcheck("#section-wrapper.fullPageScroll")) {
					scroll = false;
					verticalCenter = false;
					fitSection = false;
					nc.fullPageScroll("#section-wrapper", scroll, verticalCenter, fitSection);
				}

				$('.nav-transparent').removeClass('nav-transparent');

				if (nc.elcheck(".content-section-8")) {
					$('.content-section-8 .bg-section').appendTo('.content-section-8 .l');	
				}
				$(".nav-wrp").removeClass('show-above').removeClass('bg-glass');
			},
			leave: function() {
				if (nc.elcheck(".content-section-8")) {
					$('.content-section-8 .bg-section').appendTo('.content-section-8');
				}

				$('.nav-wrp').attr('data-glass') === 'y' ? $('.nav-wrp').addClass('bg-glass') : null;
				$('.nav-wrp').attr('data-above') === 'y' ? $('.nav-wrp').addClass('show-above') : null;
			}
		});

	});
})();