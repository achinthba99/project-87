var canvas = new fabric.Canvas('myCanvas');
thor_x = 10;
thor_y = 10;

var thor_object = "";
var block_image = "";

 block_h = 30;
 block_w = 30;
  
 function player_update(){
     fabric.Image.fromURL("THOR.jpg",function(Img){
         thor_object = Img;
         thor_object.scaleToHeight(150);
         thor_object.scaleToWidth(140);

         thor_object.set({
           top:thor_y,
           left:thor_x  
         });
         canvas.add(thor_object);
     });
 }
 function new_image(get_image){
     fabric.Image.fromURL(get_image , function(Img){
         block_image = Img;
         block_image.scaleToHeight(block_h);
         block_image.scaleToWidth(block_w);

         block_image.set({
             top:thor_y,
             left:thor_x
         });
         canvas.add(block_image);
     });
 }
 window.addEventListener("keydown",my_keydown);
function my_keydown(e){
  keypressed = e.keyCode;
  if(keypressed == '38'){
    up();
  }
  if(keypressed == '40'){
    down();
  }
  if(keypressed == '37'){
    left();
  }
  if(keypressed == '39'){
    right();
  }
  if(keypressed == '70'){
    new_image('ironman_face.png');
  }
  if(keypressed == '66'){
    new_image('hulkd_body.png');
  }
  if(keypressed == '76'){
    new_image('ironman_legs.png');
  }
  if(keypressed == '72'){
    new_image('captain_america_left_hand.png');
  }
  if(keypressed == '82'){
    new_image('spiderman_right_hand.png');
  }
  if(e.shiftKey == true && keypressed == '80'){
    block_h = block_h + 10;
    block_w = block_w + 10;
    document.getElementById("current_width").innerHTML = block_w ;
    document.getElementById("current_height").innerHTML = block_h ;
  }
  if(e.shiftKey == true && keypressed == '77'){
   block_h = block_h - 10;
   block_w = block_w - 10;
   document.getElementById("current_width").innerHTML = block_w ;
   document.getElementById("current_height").innerHTML = block_h ;
 }
}