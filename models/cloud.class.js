class Cloud extends MovableObject {
    y = 20;
    width = 420;
    height = 250;
    speed = 0.15;

    constructor(positionX) {
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = positionX + Math.random() * 150; //Zufallszahl generieren
        this.animate();
    }



    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000/60);
        
    }
}