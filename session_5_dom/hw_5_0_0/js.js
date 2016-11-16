document.addEventListener('DOMContentLoaded', function () {

    /*
     * function which:
     * accept
     *      1) string(selector);
     *      2) Node
     * return
     *      1) - undefined - if nothing find;
     *         - node - if it's single;
     *         - array - if there’re some quantity of nodes;
     *      2) type of node;
     */

    var ul = document.getElementsByClassName('list')[0];
    var li = document.getElementsByTagName('li');
    var textNode = ul.childNodes[0];
    var comment = ul.previousSibling.previousSibling;

    function showNode(value) {

        var result;

        if (typeof value === 'string') {

            result = document.querySelectorAll(value);

            if (result.length === 1) {
                return result[0];

            } else if (result.length > 1){
                return result;

            } else {
                return undefined;
            }

        } else if (value instanceof Node) {
            return value.nodeType;
        }

    }

    console.log(showNode('#wrapper_3535'));
    console.log(showNode('#wrapper'));
    console.log(showNode('li'));

    console.log(showNode(ul));
    console.log(showNode(textNode));
    console.log(showNode(comment));

});