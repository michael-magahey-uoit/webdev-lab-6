$(document).ready(function() {
	$("td").click(function () {
		$(this).replaceWith("<td id=\"activeItem\"><input id=\"activeInput\" class=\"" + $(this).attr("class") + "\" value=\"" + $(this).html() + "\"></input></td>");
		$("#activeInput").keypress(function (event) {
			if (event['code'] == "Enter")
			{
				$("#activeItem").replaceWith("<td class=\"" + $("#activeInput").attr("class") + "\">" + $("#activeInput").val() + "</td>");
			}
		});
	});
});