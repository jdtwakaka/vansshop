$("button").eq(0).click(function() {
	$.ajax({
		url: "../interface/register.php",
		type: "post",
		data: {
			username: $("input").eq(0).val(),
			password: $("input").eq(1).val()
		},
		success: function(res) {
			if (res.code) {
				alert("注册成功");
				location.href = "./login.html"
			}
		},
		dataType: 'json'
	})

})
