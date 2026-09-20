
function wildOptions(checkbox) {
    var wildcardOptions;
    wildcardOptions = document.getElementById('wildcard-options');
    if (checkbox.checked == true) {
        wildcardOptions.style.display = 'block';
    }
    else {
        wildcardOptions.style.display = 'none';
    }
}

function staggOptions(checkbox) {
    var staggerOptions;
    var radio1;
    var radio2;
    staggerOptions = document.getElementById('stagg-options');
    if (checkbox.checked == true) {
        staggerOptions.style.display = 'block';
    }
    else {
        staggerOptions.style.display = 'none';
        radio1 = document.getElementById('tl-off');
        radio2 = document.getElementById('tl-on');
        radio1.checked = false;
        radio2.checked = false;
    }
}

function rowLockOptions(checkbox) {
    var rowOptions;
    rowOptions = document.getElementById('row-options');
    if (checkbox.checked == true) {
        rowOptions.style.display = 'block';
    }
    else {
        rowOptions.style.display = 'none';
    }
}
