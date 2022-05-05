

var select = document.getElementById("select");


select.addEventListener("change", function () {

    let oldSelect = document.getElementsByClassName('active')[0];
    oldSelect.classList.remove('active');

    let val = this.value;

    let nowSelect = document.getElementsByClassName(val)[0];
    nowSelect.classList.add('active');

});