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

    threeText.anchor.set(0.5);
     threeText.x = app.screen.width / 2;
     threeText.y = app.screen.height / 2;

function funcx()
   {
       twoText.anchor.set(0.5);
       twoText.x = app.screen.width / 2;
       twoText.y = app.screen.height / 2;
   }

function funcx3()
   {
     oneText.anchor.set(0.5);
     oneText.x = app.screen.width / 2;
     oneText.y = app.screen.height / 2;
   }


var timeleft = 3;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    
  }
  else {
   
  }
  timeleft -= 1;
}, 1000);


app.stage.addChild(threeText);
app.stage.addChild(graphics);

