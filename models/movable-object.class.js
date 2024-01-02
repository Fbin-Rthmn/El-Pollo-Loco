class MovableObject {
    x = 100;
    y = 264;
    img;
    height = 150;
    width = 100;
    speed = 0.15
    imageCache = {};
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img; 
        });

    }

    moveRight() {
        console.log('Moving right');
    }
        
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length; //let i = 0 % 6; % => Modolu der mathem. Rest
        // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0 ...
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}