const app = new PIXI.Application({ antialias: true,  background: 'play-scene.png' });
document.body.appendChild(app.view);

const graphics = new PIXI.Graphics();



graphics.lineStyle(10, 0xFFBD01, 1);
graphics.beginFill(0xC34288, 1);
graphics.drawCircle(400, 250, 50);
graphics.endFill();

app.stage.addChild(graphics);
