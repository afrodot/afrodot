( function( $ ) {
    
    var pxl_swiper_handler = function( $scope, $ ) {
 
        var breakpoints = elementorFrontend.config.breakpoints,
            carousel = $scope.find(".pxl-swiper-container");
       
        if(carousel.length == 0){
            return false;
        }

        var data = carousel.data(), 
            settings = data.settings,
            carousel_settings = {
                direction: settings['slide_direction'],
                effect: settings['slide_mode'],
                wrapperClass : 'pxl-swiper-wrapper',
                slideClass: 'pxl-swiper-slide',
                slidesPerView: settings['slides_to_show'],
                slidesPerGroup: settings['slides_to_scroll'],
                slidesPerColumn: settings['slide_percolumn'],
                spaceBetween: settings['slides_gutter'],
                navigation: {
                    nextEl: $scope.find(".pxl-swiper-arrow-next"),
                    prevEl: $scope.find(".pxl-swiper-arrow-prev"),
                },
                pagination : {
                    type: settings['dots_style'],
                    el: $scope.find('.pxl-swiper-dots'),
                    clickable : true,
                    modifierClass: 'pxl-swiper-pagination-',
                    bulletClass : 'pxl-swiper-pagination-bullet',
                    renderCustom: function (swiper, element, current, total) {
                        return current + ' of ' + total;
                    }
                },
                speed: settings['speed'],
                watchSlidesProgress: true,
                watchSlidesVisibility: true,
                breakpoints: {
                    0 : {
                        slidesPerView: settings['slides_to_show_xs'],
                        slidesPerGroup: settings['slides_to_scroll'],
                    },
                    576 : {
                        slidesPerView: settings['slides_to_show_sm'],
                        slidesPerGroup: settings['slides_to_scroll'],
                    },
                    768 : {
                        slidesPerView: settings['slides_to_show_md'],
                        slidesPerGroup: settings['slides_to_scroll'],
                    },
                    992 : {
                        slidesPerView: settings['slides_to_show_lg'],
                        slidesPerGroup: settings['slides_to_scroll'],
                    },
                    1200 : {
                        slidesPerView: settings['slides_to_show'],
                        slidesPerGroup: settings['slides_to_scroll'],
                    },
                    1400 : {
                        slidesPerView: settings['slides_to_show_xxl'],
                        slidesPerGroup: settings['slides_to_scroll'],
                    }
                },
                on: {
                    init : function (swiper){
                        $scope.find('.swiper-slide .pxl-animate').each(function(){
                            var data = $(this).data('settings');
                            $(this).removeClass('animated '+data['animation']).addClass('pxl-invisible');
                        });
                        $scope.find('.pxl-swiper-slide .pxl-animate').each(function(){
                            var data = $(this).data('settings');
                            var cur_anm = $(this);
                            setTimeout(function () {  
                                $(cur_anm).removeClass('pxl-invisible').addClass('animated ' + data['animation']);
                            }, data['animation_delay']);

                        });
                    },
                    slideChange: function (swiper) {
                        $scope.find('.swiper-slide .pxl-animate').each(function(){
                            var data = $(this).data('settings');
                            $(this).removeClass('animated '+data['animation']).addClass('pxl-invisible');
                        });
                        $scope.find('.pxl-swiper-slide .pxl-animate').each(function(){
                            var data = $(this).data('settings');
                            var cur_anm = $(this);
                            setTimeout(function () {  
                                $(cur_anm).removeClass('pxl-invisible').addClass('animated ' + data['animation']);
                            }, data['animation_delay']);

                        });
                         
                    }
                },
            }; 
            if(settings['center_slide'] == 'true')
                carousel_settings['centeredSlides'] = true;
            // loop
            if(settings['loop'] === 'true'){
                carousel_settings['loop'] = true;
            }
            // auto play
            if(settings['autoplay'] === 'true'){
                carousel_settings['autoplay'] = {
                    delay : settings['delay'],
                    disableOnInteraction : settings['pause_on_interaction']
                };
            } else {
                carousel_settings['autoplay'] = false;
            }
            
        carousel.each(function(index, element) {
            
            var swiper = new Swiper(carousel, carousel_settings);
             
            if(settings['autoplay'] === 'true' && settings['pause_on_hover'] === 'true'){
                $(this).on({
                    mouseenter: function mouseenter() {
                        this.swiper.autoplay.stop();
                    },
                    mouseleave: function mouseleave() {
                        this.swiper.autoplay.start();
                    }
                });
            }

            $scope.find(".swiper-filter-wrap .filter-item").on("click", function(){
                var target = $(this).attr('data-filter-target');
                var parent = $(this).closest('.pxl-swiper-slider');
                $(this).siblings().removeClass("active");
                $(this).addClass("active");

                if(target == "all"){
                    parent.find("[data-filter]").removeClass("non-swiper-slide").addClass("swiper-slide");
                    swiper.destroy();
                    swiper = new Swiper(carousel, carousel_settings);

                }else {
                     
                    parent.find(".swiper-slide").not("[data-filter^='"+target+"'], [data-filter*=' "+target+"']").addClass("non-swiper-slide").removeClass("swiper-slide");
                    parent.find("[data-filter^='"+target+"'], [data-filter*=' "+target+"']").removeClass("non-swiper-slide").addClass("swiper-slide");
                    
                    swiper.destroy();
                    swiper = new Swiper(carousel, carousel_settings);
                }
            });
        });

        
    };


    var pxl_slider_handler = function( $scope, $ ) {
        var breakpoints = elementorFrontend.config.breakpoints,
            carousel = $scope.find(".pxl-slider-container");
        if(carousel.length == 0){
            return false;
        }

        var data = carousel.data(), 
            settings = data.settings,
            custom_dots = data.customdot,
            carousel_settings = {
                direction: settings['slide_direction'],
                effect: settings['slide_mode'],
                wrapperClass : 'pxl-slider-wrapper',
                slideClass: 'pxl-slider-item',
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerColumn: 1,
                spaceBetween: 0,
                navigation: {
                  nextEl: $scope.find(".pxl-slider-arrow-next"),
                  prevEl: $scope.find(".pxl-slider-arrow-prev"),
                },
                pagination : {
                    type: settings['dots_style'],
                    el: $scope.find('.pxl-slider-dots'),
                    clickable : true,
                    modifierClass: 'pxl-slider-pagination-',
                    bulletClass : 'pxl-slider-pagination-bullet',
                    formatFractionCurrent: function (number) {
                        return ('0' + number).slice(-2);
                    },
                    formatFractionTotal: function (number) {
                        return ('0' + number).slice(-2);
                    },
                    renderFraction: function (currentClass, totalClass) {
                        return '<span class="' + currentClass + '"></span>' +
                               '<span class="divider"></span>' +
                               '<span class="' + totalClass + '"></span>';
                    },
                    renderCustom: function (swiper, element, current, total) {
                        return current + ' of ' + total;
                    }
                },
                speed: settings['speed'],
                watchSlidesProgress: true,
                watchSlidesVisibility: true,
                autoplay: settings['autoplay'],
                on: {
                    init : function (swiper){
                         
                        elementorFrontend.waypoint($scope.find('.pxl-animate'), function () {
                            var $this = $(this),
                                data = $this.data('settings');
                            if(typeof data['animation'] != 'undefined'){
                                setTimeout(function () {
                                    $this.removeClass('pxl-invisible').addClass('animated ' + data['animation']);
                                }, data['animation_delay']);
                            }
                        });
                    },
                    slideChangeTransitionStart : function (swiper){
                        var activeIndex = this.activeIndex;
                        var current = this.slides.eq(activeIndex);
                         
                        $scope.find('.swiper-slide .pxl-animate').each(function(){
                            var data = $(this).data('settings');
                            $(this).removeClass('animated '+data['animation']).addClass('pxl-invisible');
                        });
                        current.find('.pxl-animate').each(function(){
                            var  $item = $(this), 
                                data = $item.data('settings');
                            setTimeout(function () {
                                $item.removeClass('pxl-invisible').addClass('animated ' + data['animation']);
                            }, data['animation_delay']);
                        });
                        
                    },
                    slideChange: function (swiper) {
                        
                        var activeIndex = this.activeIndex;
                        var current = this.slides.eq(activeIndex);
                        $scope.find('.swiper-slide .pxl-animate').each(function(){
                            var data = $(this).data('settings');

                            $(this).removeClass('animated '+data['animation']).addClass('pxl-invisible');
                        });
                        current.find('.pxl-animate').each(function(){
                            var  $item = $(this), 
                                data = $item.data('settings');
                            setTimeout(function () {
                                $item.removeClass('pxl-invisible').addClass('animated ' + data['animation']);
                            }, data['animation_delay']);
                        });
                         
                    },
                },
                autoHeight: true
            };

            if(settings['loop'] === 'true'){
                carousel_settings['loop'] = true;
            }
            // auto play
            if(settings['autoplay'] === 'true'){
                carousel_settings['autoplay'] = {
                    delay : settings['delay'],
                    disableOnInteraction : settings['pause_on_interaction']
                };
            } else {
                carousel_settings['autoplay'] = false;
            }
            // Effect
            if(settings['slide_mode'] === 'cube'){
                carousel_settings['cubeEffect'] = {
                  shadow: false,
                  slideShadows: false,
                  shadowOffset: 0,
                  shadowScale: 0, //0.94,
                };
            }
            if(settings['slide_mode'] === 'coverflow'){
                carousel_settings['centeredSlides'] = true;
                carousel_settings['coverflowEffect'] = {
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                };
            }
             
        
        carousel.each(function(index, element) {
            setTimeout(function () {
                var swiper = new Swiper(carousel, carousel_settings);
                if(settings['autoplay'] === 'true' && settings['pause_on_hover'] === 'true'){
                    $(this).on({
                        mouseenter: function mouseenter() {
                            this.swiper.autoplay.stop();
                        },
                        mouseleave: function mouseleave() {
                            this.swiper.autoplay.start();
                        }
                    });
                }
            }, 800);
            
        });    
         
    };
    // Make sure you run this code under Elementor.
    $( window ).on( 'elementor/frontend/init', function() {
        // Swipers
        elementorFrontend.hooks.addAction( 'frontend/element_ready/pxl_team_carousel.default', pxl_swiper_handler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/pxl_post_carousel.default', pxl_swiper_handler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/pxl_history.default', pxl_swiper_handler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/pxl_testimonial_carousel.default', pxl_swiper_handler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/pxl_clients.default', pxl_swiper_handler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/pxl_service_carousel.default', pxl_swiper_handler );
        
        // Sliders
        elementorFrontend.hooks.addAction( 'frontend/element_ready/pxl_slider.default', pxl_slider_handler );
        
    } );
} )( jQuery );