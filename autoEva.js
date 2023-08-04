function scoreEva(elem, score) {
    elem.addEventListener('input', console.log, false);
    elem.value = score;
    var event = new UIEvent('change');
    elem.dispatchEvent(event);
}
function e() {
    if (document.getElementsByClassName('el-input__inner')[0] && document.getElementsByClassName('el-input__inner')[1] && document.getElementsByClassName('el-input__inner')[2] && document.getElementsByClassName('el-input__inner')[3] && document.getElementsByClassName('el-input__inner')[4]) {
        clearInterval(interval3);
        scoreEva(document.getElementsByClassName('el-input__inner')[0], 25);
        scoreEva(document.getElementsByClassName('el-input__inner')[1], 60);
        scoreEva(document.getElementsByClassName('el-input__inner')[2], 5);
        scoreEva(document.getElementsByClassName('el-input__inner')[3], 5);
        scoreEva(document.getElementsByClassName('el-input__inner')[4], 5);
        document.getElementsByClassName('el-button--primary')[0].click();
        document.getElementsByClassName('el-button')[0].click();
        interval1 = setInterval("f();", 100);
    }
}
function g() {
    if (document.getElementsByClassName('icon-icon_xueshengziping')[0]) {
        clearInterval(interval2);
        document.getElementsByClassName('icon-icon_xueshengziping')[0].click();
        interval3 = setInterval("e();", 100);
    }
}
function f() {
    if (document.getElementsByClassName('icon-icon_xueshengziping')[0]) {
        clearInterval(interval1);
        document.getElementsByClassName('icon-icon_xueshengziping')[0].click();
        interval3 = setInterval("e();", 100);
    }
    else if (document.getElementsByClassName('el-select-dropdown__item')[10]) {
        clearInterval(interval1);
        document.getElementsByClassName('el-select-dropdown__item')[10].click();
        interval2 = setInterval("g();", 100);
    }
}
interval1 = setInterval("f();", 100);