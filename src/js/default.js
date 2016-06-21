function selectText(targetId) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(targetId));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(targetId));
        window.getSelection().addRange(range);
    }
}

function reverseEmail(site, addr) {
    var str = site + '@' + addr;
    return str.split("").reverse().join("");
}

function updateEmail(id) {
    var link = document.getElementById(id);

    link.innerHTML = reverseEmail('moc.liamg', 'nagersemaj.a');
    link.setAttribute('href', "mailto:" + reverseEmail('moc.liamg', 'nagersemaj.a'));
}

function showContent() {
    var myElements = document.querySelectorAll(".hide-until-load");

    for (var i = 0; i < myElements.length; i++) {
        myElements[i].style.visibility = 'visible';
    }
}

window.onscroll = function() {
    updateEmail('email');
}

window.onload = function() {
    showContent();
}
