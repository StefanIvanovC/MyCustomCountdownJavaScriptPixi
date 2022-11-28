const app = new PIXI.Application({ antialias: true,  background: '' });
document.body.appendChild(app.view);

const graphics = new PIXI.Graphics();
const bg = PIXI.Sprite.from('assets/play-scene.png');

document.body.style.backgroundImage = "url('play-scene.png')"; 


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

const richText = new PIXI.Text('3', style);
richText.anchor.set(0.5);
richText.x = app.screen.width / 2;
richText.y = app.screen.height / 2;

app.stage.addChild(richText);
app.stage.addChild(graphics);

