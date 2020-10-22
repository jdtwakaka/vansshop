var mySwiper = new Swiper('.swiper-container', {
	autoplay: true, //可选选项，自动滑动
	autoplay: {
		delay: 2000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',


	},
	effect: 'fade',
	flipEffect: {
		slideShadows: true,
		limitRotation: true,
	},
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},

});

$('.swiper-container').hover(function() {
	mySwiper.autoplay.stop();
}, function() {
	mySwiper.autoplay.start();
});

$("button").eq(0).click(function() {
	$.ajax({
		url: "../interface/addwq.php",
		data: {
			id: "1111",
			name: "小米10至尊纪念版",
			img: "../images/xiaomi.jpg",
			price: 5299,
			num: 1
		},
		success: function(res) {
			if (res.code) {
				alert("添加购物车成功");
			}
		},
		dataType: "json"
	})
})

$("button").eq(1).click(function() {
	location.href = "./cart.html"
})
