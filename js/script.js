



$(document).ready(function () {
$(".project-details").hide()
$(".show_hide").on("click", function () {
var txt = $(".project-details").is(":visible") ? "Show details" : "Hide details"
$(".show_hide").text(txt)
$(this).next(".project-details").slideToggle(200)
})
})
