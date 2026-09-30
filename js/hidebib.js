// adapted from: http://www.robots.ox.ac.uk/~vedaldi/assets/hidebib.js
function hideallbibs()
{
    var papers = document.querySelectorAll('.paper');
    for (var i = 0; i < papers.length; ++i) {
        var bib = papers[i].querySelector('pre');
        if (bib) {
            bib.style.display = 'none';
        }
    }
}

function togglebib(paperid)
{
    var paper = document.getElementById(paperid);
    var bib = paper.querySelector('pre');
    if (bib) {
        bib.style.display = (bib.style.display === 'none') ? 'block' : 'none';
    }
}
