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
const twoText = new PIXI.Text('2', style);
const oneText = new PIXI.Text('1', style);


function funcx()
   {
   // your code here
   // break out here if needed
   setTimeout(funcx, 3000);
   }

funcx();
  
  
            
}, 1000);


app.stage.addChild(threeText);
app.stage.addChild(graphics);

