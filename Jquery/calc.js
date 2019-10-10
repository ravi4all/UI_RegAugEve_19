$(document).ready(function() {
    $("button").click(function(e) {
        var opr = $(this).html();
        var f_num = $("#box_1").val();
        var s_num = $("#box_2").val();
        var expr = f_num + opr + s_num;
        var result = eval(expr);
        $("#res").html(result);
    });
});