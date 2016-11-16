document.addEventListener('DOMContentLoaded', function () {

    /*
     * function which:
     * accept
     *      - string(selector);
     * return
     *      - undefined - if nothing find;
     *      - node - if it's single;
     *      - first node - if there’re some quantity of nodes;
     */

    function showNode2(value) {

        var result;

        if (typeof value === 'string') {

            result = document.querySelectorAll(value);

            if (result.length !== 0) {
                return result[0];

            } else {
                return undefined;
            }
        }
    }

    console.log(showNode2('#wrapper'));
    console.log(showNode2('li'));
    console.log(showNode2('#wrapper_3535'));

});