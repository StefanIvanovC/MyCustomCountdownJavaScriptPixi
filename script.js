const app = new PIXI.Application({ antialias: true,  background: 'play-scene.png' });
document.body.appendChild(app.view);

const graphics = new PIXI.Graphics();

document.body.style.backgroundImage = "url('play-scene.png')"; 

graphics.lineStyle(10, 0xFFFFFF, 1);
graphics.beginFill(0,10, 1);
graphics.drawCircle(400, 250, 50);
graphics.endFill();
const basicText = new PIXI.Text('Basic text in pixi');
basicText.x = 50;
basicText.y = 100;

app.stage.addChild(basicText);

const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    lineJoin: 'round',
});

const richText = new PIXI.Text('3', style);
richText.x = 50;
richText.y = 220;

app.stage.addChild(richText);
app.stage.addChild(graphics);
