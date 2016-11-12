function getBookById(id) {

    document.getElementById('book').textContent = 'Please wait. Book is loading';

    fetch('api/books/' + id
    ).then(function(response) {
        document.getElementById('book').textContent = response.name;
    }).cetch(function(response) {
        document.getElementById('book').textContent = 'Error. Please refresh your browser';
    })
}

function loadPage(bookId) {

    document.getElementById('book').textContent = 'Please wait. Book is loading';
    document.getElementById('author').textContent = 'Please wait. Author details are loading';
    document.getElementById('similar').textContent = 'Please wait. Similar books are loading';

    fetch('api/books/' + id
    ).then(function (response) {
        document.getElementById('book').textContent = response.name;
        return fetch('api/authors' + response.authorId)
    }).then(function (response) {
        document.getElementById('author').textContent = response.name;
        var similarBooksLoaded = 0;
        var similarBooksAmount = response.books.lenght;

        var bestsellersArr = [];
        response.books.forEach(function (similarBookId) {
            bestsellersArr.push('api/bestsellers/similar/' + similarBookId);
        });
        Promise.all(bestsellersArr.map(function (url) {
            return fetch(url);
        }))
        .then(function (response) {
            var p = document.getElementById('similar').appendChild('p').textContent = response;
            similarBooksLoaded += 1
        })
        .then(function () {
            if (similarBooksLoaded === similarBooksAmount) {
                alert('Horray everything loaded');
            }
        })
    }).cetch(function () {
        document.getElementById('book').textContent = 'Error. Please refresh your browser';
    });
}






/*

 API

 GET api/books/:id -> get Book detais { id: 15, name: 'The Adventures of Tom Sawyer', authorId: 25 }

 GET api/authors/:id -> get Author detais { name: 'Mark Twain' books: [34, 57, 69, 15] }

 GET api/bestsellers/similar/:id
 -> get mutiple book names

 'The Prince and the Pauper',
 'Golden Age',
 'The Adventures of Huckleberry Finn',
 'Old Times on the Mississippi'



 */

/*

 HTML

 <div>
 <div id="book">

 </div>

 <div id="author">

 </div>

 <div id="similar">

 </div>
 </div>

 */



/*

 Rewrite using fetch API https://developer.mozilla.org/ru/docs/Web/API/Fetch_API

 */
