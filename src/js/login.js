$("button").eq(0).click(function() {
	$.ajax({
		url: "../interface/login.php",
		type:"post",
		data: {
			username: $("input").eq(0).val(),
			password: $("input").eq(1).val()
		},
		success: function(res) {
			if (res.code) {
				location.href="./index.html"
			}else{
				alert("账号密码错误")
			}
		},


		dataType: 'json'
	})

})