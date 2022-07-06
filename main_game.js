var game = new Phaser.Game(640,480,Phaser.Canvas,'gameDiv');

var gameState = {
 preload : function preload(){

 },
 
 create : function create(){

 },

 update : function update(){

 }
};

game.state.add('mainstate', gameState);
game.state.start('mainstate');