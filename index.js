window.onload() = function() {

  const start_audio = new Audio("start.mp3");
  start_audio.play();
}
  


function loader(){
  
  const start_audio = new Audio("start.mp3");
start_audio.play();
var launcher = document.querySelector(".jet");
var points = document.querySelector("points")
var hit = 0;
var launcher_translate = [0,0]
function shoot(bullet,x){
    const audio = new Audio("firing.mp3");
    audio.play();

    var animation = bullet.animate([
            {transform: `translate(${x}px,-1200px)` } // here the bullets x axis is fixed so that it can 
        ],3000)
    animation.onfinish =() =>{
            document.body.children[1].removeChild(bullet);
        }
    var animateBullets = setInterval(function(){
    var aliens = document.querySelectorAll(".aliens");
    
    aliens.forEach(alien => {
        var bullets = document.querySelectorAll(".bullets");
        bullets.forEach(newBullet =>{
            var bd = newBullet.getBoundingClientRect()
            var al = alien.getBoundingClientRect()

        
            
            if (
                bd.left >= al.left &&
                bd.right <= al.right &&
                bd.top <= al.top &&
                bd.bottom <= al.bottom
              ){
                    hit++;
                    console.log(hit)
                    document.body.children[1].removeChild(bullet)
                    const start_audio = new Audio("kill.mp3");
                    start_audio.play();
                    
                    document.body.children[1].removeChild(alien)
                    clearInterval(animateBullets)

              }
            })
            },100)
        })
    

}
function checkKey(e){
    // This function is to move the jet in horizontal axis and also to add bullets on hitting space
    const speed = 10; 
    
    if(e.keyCode == '32')
    {
        var newBullet = document.createElement("div");
        newBullet.classList.add("bullets");
        document.body.children[1].appendChild(newBullet);
        shoot(newBullet,launcher_translate[0]);          
    }   
    if(e.keyCode == '38' && launcher_translate[1] > 0){
            launcher_translate[1] -= speed;
    }
    else if(e.keyCode == '40' && launcher_translate[1] > 0){
            launcher_translate[1] += speed;
    }
    else if(e.keyCode == '37' && launcher_translate[0] >= -700){
            launcher_translate[0] -= speed;
    }
    else if(e.keyCode == '39' && launcher_translate[0] <= 770){
            launcher_translate[0] += speed;
    }
        
    launcher.style.transform = `translate(${launcher_translate[0]}px,${launcher_translate[1]}px)`
    newBullet.style.transform = `translate(${launcher_translate[0]}px,${launcher_translate[1]}px)`


    
}
document.onkeydown = checkKey;

// function for animating the aliens in the dom
var movealiens = setInterval(() => {
    var aliens = document.querySelectorAll(".aliens");
    
      for (var i = 0; i < aliens.length; i++) {
        //Now I have to increase the top of each alien,so that the aliens can move downwards..
        var alien = aliens[i]; //getting each alien
        var alientop  = alien.getBoundingClientRect().top
        console.log(alientop)
        
        //475 => boardheight - alienheight + 25
        if (alientop >= 4075) {
          alert("Game Over");
          clearInterval(movealiens);
          window.location.reload();
  
        }
    }
  }, 450);



}
