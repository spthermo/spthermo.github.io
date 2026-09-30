function initLinkedInSlider()
{
    var track = document.querySelector('.linkedin-track');
    var prevBtn = document.querySelector('.linkedin-nav.prev');
    var nextBtn = document.querySelector('.linkedin-nav.next');
    if (!track) {
        return;
    }

    function step(direction)
    {
        var post = track.querySelector('.linkedin-post');
        var distance = post ? post.offsetHeight + 20 : track.clientHeight;
        track.scrollBy({ top: direction * distance, behavior: 'smooth' });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function () { step(-1); });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', function () { step(1); });
    }
}
