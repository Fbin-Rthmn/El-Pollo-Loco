class MovableObject extends DrawableObject{
    speed = 0.15
    speedY = 0;
    acceleration = 2;
    energy = 100;
    lastHit = 0;

    playAnimation(images) {
        let i = this.currentImage % images.length; //let i = 0 % 6; % => Modulo der mathem. Rest
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    isColliding(obj) {
        // return this.x + this.width > mo.x &&
        //         this.y + this.height > mo.y &&
        //         this.x < mo.x &&
        //         this.y < mo.y + mo.height
        return  (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) && 
                (this.y + this.offsetY + this.height) >= obj.y &&
                (this.y + this.offsetY) <= (obj.y + obj.height) && 
                obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    }

    hit() {
        this.energy -= 5;
        if(this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //differenz in ms
        timepassed = timepassed / 1000; //differenz in s
        return timepassed < 0.5;
    }

    isDead() {
        return this.energy == 0;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if(this instanceof ThrowableObject) {
            return true;
        } else {
        return this.y < 170;
        }
    }

    moveRight() {
        this.x += this.speed;
    }
        
    moveLeft() {
        this.x -= this.speed;
    }

    jump(y) {
        this.speedY = y;
    }
}