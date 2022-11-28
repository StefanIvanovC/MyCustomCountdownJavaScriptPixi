const app = new PIXI.Application({ antialias: true });
document.body.appendChild(app.view);

const background = PIXI.Sprite.from('/Assets/play-scene.png');

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

function countdown() {
  threeText.anchor.set(0.5);
  threeText.x = app.screen.width / 2;
  threeText.y = app.screen.height / 2;
 }
  
countdown(threeText);

app.stage.addChild(threeText);
app.stage.addChild(graphics);

