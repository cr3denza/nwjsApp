window.onload = function(){
    var header = document.getElementById('header');
    var textNode = document.createTextNode('LIFE IS TOO SHORT');

    header.style.color = 'Sky';
    header.style.font = 'Helvetica';
    header.align = 'Center';
    header.appendChild(textNode);
    document.body.appendChild(header);

    var cr3denza = document.createElement('img');
    var hanos = document.createElement('img');
    var flack3r = document.createElement('img');

    cr3denza.src = 'cr3denza.png';
    cr3denza.style.position = 'absolute';
    cr3denza.width = 100;
    cr3denza.height = 100;

    hanos.src = 'hanos.jpg';
    hanos.style.position = 'absolute';
    hanos.width = 30;
    hanos.height = 30;

    flack3r.src = 'flack3r.jpg';
    flack3r.style.position = 'absolute';
    flack3r.width = 30;
    flack3r.height = 30;

    document.body.appendChild(cr3denza);
    document.body.appendChild(hanos);
    document.body.appendChild(flack3r);

    cr3denza.style.top = 200 + 'px';
    cr3denza.style.left = 250 + 'px';

    var flacAngle = 0;
    var hanoAngle = 0;

    setInterval(function(){
        var flacLeft = 250 + 150 * Math.cos (flacAngle);
        var flacTop = 200 + 150 * Math.sin(flacAngle);
        var hanoLeft = flacLeft + 50 * Math.cos(hanoAngle);
        var hanoTop = flacTop + 50 * Math.sin(hanoAngle);

        flack3r.style.left = flacLeft + 'px';
        flack3r.style.top = flacTop + 'px';
        hanos.style.left = hanoLeft + 'px';
        hanos.style.top = hanoTop + 'px';

        flacAngle += 0.1;
        hanoAngle += 0.3;

        //document.body.innerHTML = '<p>' + new Date() + '<p>';
    }, 1000/30);

    cr3denza.addEventListener('click', function(){
        alert('hey');
    });
}

