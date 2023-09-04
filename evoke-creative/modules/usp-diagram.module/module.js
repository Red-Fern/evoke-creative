let points = document.getElementsByClassName('usp-point');

for (let i = 0; i < points.length; i++) {
    points[i].addEventListener('click', function() {
        for (let j = 0; j < points.length; j++) {
            points[j].classList.remove('active');
        }

        this.classList.add('active');
    });
}