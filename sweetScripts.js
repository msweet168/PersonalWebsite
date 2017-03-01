function showAbout() {
    var x = document.getElementById('aboutDIV');
    var y = document.getElementById('portfolioDIV');
    var z = document.getElementById('contactDIV');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
        z.style.display = 'none';
    } else {
        x.style.display = 'none';
        y.style.display = 'none';
        z.style.display = 'none';
    }
}

function showPortfolio() {
    var y = document.getElementById('aboutDIV');
    var x = document.getElementById('portfolioDIV');
    var z = document.getElementById('contactDIV');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
        z.style.display = 'none';
    } else {
        x.style.display = 'none';
        y.style.display = 'none';
        z.style.display = 'none';
        
    }
}

function showContact() {
    var z = document.getElementById('aboutDIV');
    var y = document.getElementById('portfolioDIV');
    var x = document.getElementById('contactDIV');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
        z.style.display = 'none';
    } else {
        x.style.display = 'none';
        y.style.display = 'none';
        z.style.display = 'none';
    }
}