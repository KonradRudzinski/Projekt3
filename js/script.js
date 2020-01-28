/* wczytywanie obrazu */
var image = new Image();
var canvas = document.getElementById('canvas');

window.addEventListener('load', function () {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img'); // $('img')[0]
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            img.onload = imageIsLoaded;
            image.src = img.src;
        }
    });
});

function imageIsLoaded() {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        ctx.drawImage(image, 0, 0);
        document.getElementById('part1').style.display = "block";
    };
};

/* x = wybrany filtr */

var x = document.getElementById('opcja');

function zastosuj() {
    if(x.value == 'kontrast'){   
        if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.filter = 'contrast('+document.getElementById("customRange1").value+'%)';
        ctx.drawImage(image, 0, 0);
    };
    }
        if(x.value == 'saturacja'){   
         if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.filter = 'saturate('+document.getElementById("customRange1").value+'%)';
        ctx.drawImage(image, 0, 0);
    };
    }
        if(x.value == 'szarosc'){  
         if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.filter = 'grayscale('+document.getElementById("customRange1").value+'%)';
        ctx.drawImage(image, 0, 0);
    };
    }
        if(x.value == 'sepia'){ 
         if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.filter = 'sepia('+document.getElementById("customRange1").value+'%)';
        ctx.drawImage(image, 0, 0);
    };
    }
}

/* reset */

function reset(){
    var ctx = canvas.getContext('2d');
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        ctx.drawImage(image, 0, 0);
}

/* pobieranie */

function zapisz(el){
    var image = canvas.toDataURL("image/jpg");
    el.href = image;
}



  
        