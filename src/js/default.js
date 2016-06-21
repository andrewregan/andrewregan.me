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

window.onscroll = function() {
    updateEmail('email');
}
