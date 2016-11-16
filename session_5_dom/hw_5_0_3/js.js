document.addEventListener('DOMContentLoaded', function () {

    /*
     * function which set or get attribute:
     * accept
     *      - node - target node;
     *      - attribute which get or set;
     *      - value of attribute for set;
     *
     */

    function setGetAttr(node, atr, value) {

        if (arguments.length === 2) {
            return node.getAttribute(atr);

        } else if (arguments.length === 3) {
             return node.setAttribute(atr, value);
        }


    }

    var titanic = document.getElementsByTagName('titanic')[0];
    var ninja = document.getElementsByTagName('ninja')[0];
    var chucknorris = document.getElementsByTagName('chucknorris')[0];
    var lego = document.getElementsByTagName('lego')[0];

    console.log(setGetAttr(titanic, 'style'));
    console.log(setGetAttr(ninja, 'color'));

    setGetAttr(lego, 'style', 'display:block');
    setGetAttr(chucknorris, 'speed', 'Infinity');


});