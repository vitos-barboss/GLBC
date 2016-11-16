document.addEventListener('DOMContentLoaded', function () {

    /*
     * function which insert newNode after targetElement:
     * accept
     *      - targetElement - element after which insert newNode;
     *      - newNode - new insert node;
     *
     */

    function insertAfter(targetElement, newNode) {

        targetElement.parentNode.insertBefore(newNode, targetElement.nextSibling);

    }

    var first = document.getElementById('first');
    var second = document.createElement('div');
    second.textContent = 'Second';

    insertAfter(first, second); // insert 'Second' after 'First'

});