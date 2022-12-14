const backgroundImg = PIXI.Sprite.from('Assets/play-scene.png');
const app = new PIXI.Application({ antialias: true , background: backgroundImg});
document.body.appendChild(app.view);

const graphics = new PIXI.Graphics();
app.stage.addChild(graphics);

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

const three = new PIXI.Text('3', style);
const two = new PIXI.Text('2', style);
const one = new PIXI.Text('1', style);

     three.anchor.set(0.5);
     three.x = app.screen.width / 2;
     three.y = app.screen.height / 2;

     two.anchor.set(0.5);
     two.x = app.screen.width / 2;
     two.y = app.screen.height / 2;
 
     one.anchor.set(0.5);
     one.x = app.screen.width / 2;
     one.y = app.screen.height / 2;
 
function makeAlertThree(){ 
  app.stage.addChild(three);
};
setInterval(makeAlertThree, 0);

function makeAlertTwo(){ 
  three.x = app.screen.width * 2;
  app.stage.addChild(two);
};
setInterval(makeAlertTwo, 1000);

function makeAlertOne(){ 
  two.x = app.screen.width * 2;
  app.stage.addChild(one);
};
setInterval(makeAlertOne, 2000);
