window.addEventListener("load", initEvent);
var f_num;
var s_num;

function initEvent() {
    f_num = document.querySelector("#box_1");
    s_num = document.querySelector("#box_2");
    var btns = document.querySelectorAll("button");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", calc);
    }
}

function calc() {
    var opr = event.srcElement.innerHTML;
    var expression = f_num.value + opr + s_num.value;
    // console.log(expression);
    var result = eval(expression);
    document.querySelector("#result").innerHTML = result;
}