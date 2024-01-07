class ThrowableObject extends MovableObject {
    height = 100;
    width = this.height;
    IMGAGE_THROW_BOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.IMGAGE_THROW_BOTTLE);
        this.x = x;
        this.y = y;

        this.throw(); 

    }

    throw() {
        this.speedY = 15;
        this.applyGravity();
        setInterval(() => {
            this.playAnimation(this.IMGAGE_THROW_BOTTLE);         
            this.x += 18;
        },30);
    }
}
