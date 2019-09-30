// Event Binding

// window.addEventListener("load", function() {
//     document.getElementById("btn").addEventListener("click", show);
// });

window.addEventListener("load", initEvent);

function initEvent() {
    document.getElementById("btn").addEventListener("click", show);
}

function show() {
    console.log("Show called...");
    var username = document.getElementById("box_1");
    document.getElementById("output").innerHTML = username.value;
}