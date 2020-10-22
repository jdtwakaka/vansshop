show()

function show() {
	$.ajax({
		url: "../interface/showlist.php",
		success: function(res) {
			if (res.code) {
				if (res.data) {
					$(".list-head").show();
					$(".null").hide();
					$("tbody").empty();
					$.each(res.data, function(index, item) {
						$("tbody").append(
							`
						
						<tr id="${item.product_id}">
						<td><input class="s-checkbox" type="checkbox"/></td>
						    <td>${item.product_name}</td>
						    <td>
						        <img src="${item.product_img}" alt="">
						    </td>
						    <td>${item.product_price}</td>
						    <td>
						        <span class='add'>+</span>
						        <span>${item.product_num}</span>
						        <span class="cut">-</span>
						    </td>
						    <td class="del">删除</td>
						</tr>						
						`
						)
					})
				}
			} else {
				$(".list-head").hide()
				$(".null").show()
			}
		},
		dataType: "json",

	})
}

$("tbody").click(function(e) {
	var target = e.target;
	if ((target.className == "add" || (target.className == "cut"))) {
		$.ajax({
			url: "../interface/updatewq.php",
			data: {
				id: $(target).parents("tr").attr("id"),
				type: target.className

			},
			success: function(res) {
				if (res.code) {
					show()
				}
			},
			dataType: "json"
		})
	} else if (target.className == "del") {
		$.ajax({
			url: "../interface/delwq.php",
			data: {
				id: $(target).parents("tr").attr("id")
			},
			success: function(res) {
				if (res.code) {
					show();
				}
			},
			dataType: "json"
		})
	}
})
$(".null button").click(function() {
	location.href = "./index.html"
})

$(".checkall").change(function() {
	$(".s-checkbox, .checkall").prop("checked", $(this).prop("checked"));

});
//全选框

function showprice() {

	var sum = ($("td span:nth-of-type(2)").text()) * ($("tr td:nth-of-type(4)").text())

	$(".count").html(sum)
};
$(".checkall").click(function() {
	if ($(".checkall").prop("checked")) {
		showprice()
	} else {
		$(".count").empty()
	}
})
