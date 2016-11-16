document.addEventListener('DOMContentLoaded', function () {


    /*
     * Create 'container' - the main wrapper, and set width of it;
     *
     */

    var container = document.createElement('div');
    document.body.appendChild(container);
    container.style.width = '176px';

    /*
     * Create 'fragment' and 'div';
     * Set Attribute of 'div';
     *
     */

    var fragment = document.createDocumentFragment();

    var div = document.createElement('div');
    div.setAttribute('style','border:1px solid black; width:20px; height:20px; float:left;');

    /*
     * Generate div elements and add to fragment;
     *
     */

    for (var i = 0; i < 64; i++) {

        var newDiv = div.cloneNode(true);
        fragment.appendChild(newDiv);

    }

    container.appendChild(fragment);

    /*
     * Сolorize cells;
     *
     */

    var divs = container.querySelectorAll('div');

    for (var j = 0; j < divs.length; j++) {

        if (Math.floor(j/8 + j) % 2 === 0) {
            divs[j].style.backgroundColor = 'black';

        } else {
            divs[j].style.backgroundColor = 'white';
        }
    }


});

