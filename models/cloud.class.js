class Cloud extends MovableObject {
    y = 20;
    width = 420;
    height = 250;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 720; //Zufallszahl generieren
        this.animate();
    }



    animate() {
        this.moveLeft();
    }
}