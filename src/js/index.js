var mySwiper = new Swiper('.swiper-container', {
	autoplay: true, //可选选项，自动滑动
	autoplay: {
		delay: 1500,
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

$(".topright-nav li").click(function() {

})

function getSend(url) {
	// 如果后面想接.then,那么返回值必须是一个promise对象
	var p1 = new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.onload = function() {
			resolve(xhr.responseText);
		}
		xhr.send()
	})
	return p1;

}
$(".headnav>ul>li").mouseenter(function() {

	// $(this).append("<div class='t1'></div>")
	getSend('../interface/list.json')
		.then(function(res) {
			var data = JSON.parse(res);
			$.each(data, (index, i) => {
				$('.t1').append(
					`
								<dl class="dl1">
								        <a href="#">
										<dt><img src=${i.path}></dt>
										<dd>${i.name}</dd>
										<dd><em>${i.price}</em></dd>
										</a>
									</dl>
		
									`
				)
			})
		})
	// showDiv();
	$(this).children(".t1").stop().slideDown(500, "linear");
})


$(".headnav>ul>li").mouseleave(function() {
	$(this).children(".t1").stop().slideUp(500, "linear", function() {

	});
	$(".t1").empty()
})

//下拉列表

$(".tab ul li").mouseenter(function() {
	$(".t2").remove()
	$(".tab ul li").css({
		background: ""
	})
	$(this).css({
		background: "red"
	})
	$(this).append("<div class='t2'></div>");
	getSend('../interface/list2.json')
		.then(function(res) {
			var data = JSON.parse(res);
			$.each(data, (index, i) => {
				$('.t2').append(
					`<ul>
						<li>
						<img src=${i.path}>
					    <a href="javascript:;">${i.name}</a>
						</li>
						</ul>
						`
				);
			})
		})
	$(this).children(".t2").stop().show();
})


$(".tab ul li").mouseleave(function() {
	$(this).children(".t2").stop().hide()
	$(".tab ul li").css({
		background: ""
	})

})
//侧边列表

var intDiff = parseInt(86400); //倒计时总秒数量

function timer(intDiff) {
	window.setInterval(function() {
		var hour = 0,
			minute = 0,
			second = 0; //时间默认值		
		if (intDiff > 0) {
			hour = Math.floor(intDiff / (60 * 60));
			minute = Math.floor(intDiff / 60) - (hour * 60);
			second = Math.floor(intDiff) - (hour * 60 * 60) - (minute * 60);
		}
		if (minute <= 9) minute = '0' + minute;
		if (second <= 9) second = '0' + second;

		$('#hour_show').html('<s id="h"></s>' + hour + '时');
		$('#minute_show').html('<s></s>' + minute + '分');
		$('#second_show').html('<s></s>' + second + '秒');
		intDiff--;
	}, 1000);
}

$(function() {
	timer(intDiff);
});
//倒计时

$(".rigtht dl").mouseenter(function() {
	$(this).css({
		position: "relative",
		top: "-5px",
		boxShadow: "0 15px 30px 0 rgba(0,0,0,0.1)"
	})
})

$(".rigtht dl").mouseleave(function() {
	$(this).css({
		position: '',
		top: '',
		boxShadow: ''
	})
})
//鼠标悬停

$(".vdbox dl").mouseenter(function() {
	$(this).css({
		position: "relative",
		top: "-5px",
		boxShadow: "0 15px 30px 0 rgba(0,0,0,0.1)"
	})
})

$(".vdbox dl").mouseleave(function() {
	$(this).css({
		position: '',
		top: '',
		boxShadow: ''
	})
})
//鼠标悬停

$(".d2").mouseenter(function() {
	$(this).css({
		position: "relative",
		top: "-5px",
		boxShadow: "0 15px 30px 0 rgba(0,0,0,0.1)"
	})
})

$(".d2").mouseleave(function() {
	$(this).css({
		position: '',
		top: '',
		boxShadow: ''
	})
})
