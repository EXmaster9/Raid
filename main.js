//     //   ) )                        
//    //___/ /   ___     ( )  ___   /  
//   / ___ (   //   ) ) / / //   ) /   
//  //   | |  //   / / / / //   / /    
// //    | | ((___( ( / / ((___/ /  
// Code by: EliDaCoder and LXmaster
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// v is an object in which we will store our image variables
var v = {};
window.onload = function() {
  v.ground = new Image();
  v.ground.src = "ground.png"
  // drawing the ground image on the canvas; just for testing
  ctx.drawImage(v.ground,5,5);
}
