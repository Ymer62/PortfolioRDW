//First essai de scroller TopBar!!!! 
/*
var reveal = document.getElementById('reveal');

cptt = setTimeout(function() { reveal.style.display = 'block'; }, 1000)

document.body.addEventListener('wheel', function(e) {
    console.log(e);
    if (event = 'wheel') {
        clearTimeout(cptt)
        reveal.style.display = 'none';

        cptt = setTimeout(function() { reveal.style.display = 'block'; }, 1000)
    }
})
*/

function debounce(callback, delay) {
    var timer;
    return function() {
        var args = arguments;
        var context = this;
        clearTimeout(timer);

        timer = setTimeout(function() {
            callback.apply(context, args);
        }, delay)

    }
}
let $reveal = document.querySelector('#reveal');
window.addEventListener('wheel', () => {
    $reveal.style.display = 'block';
    debounce(() => {
        $reveal.style.display = 'none';
    }, 1200)()
});