const app = new PIXI.Application({ antialias: true,  background: '' });
document.body.appendChild(app.view);

const bg = PIXI.Sprite.from('assets/play-scene.png');

const graphics = new PIXI.Graphics();

graphics.lineStyle(10, 0xFFFFFF, 1);
graphics.beginFill(0, 50, 1);
graphics.drawCircle(app.screen.width / 2, app.screen.height / 2 , 55);
graphics.endFill();

const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 60,
    fontWeight: 'bold',
    fill: ['#ffffff'],
    lineJoin: 'round',
});

  const threeText = new PIXI.Text('3', style);
threeText.anchor.set(0.5);
threeText.x = app.screen.width / 2;
threeText.y = app.screen.height / 2;

app.stage.addChild(threeText);
app.stage.addChild(graphics);

