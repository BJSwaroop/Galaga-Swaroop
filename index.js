var launcher = document.querySelector(".jet");
var launcher_translate = [0,0]
function shoot(bullet,x){

    var animation = bullet.animate([
            {transform: `translate(${x}px,-1200px)` } // here the bullets x axis is fixed so that it can 
        ],3000)
    animation.onfinish =() =>{
            document.body.firstElementChild.removeChild(bullet);
        }
    setInterval(function(){
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
                    document.body.firstElementChild.removeChild(alien)
                    document.body.firstElementChild.removeChild(bullet)
              }
            })
            },100)
        })
    

}
function checkKey(e){
    // This function is to move the jet in horizontal axis and also to add bullets on hitting space
    const speed = 8; 
    
    if(e.keyCode == '32')
    {
        var newBullet = document.createElement("div");
        newBullet.classList.add("bullets");
        document.body.firstElementChild.appendChild(newBullet);
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
        
    console.log(launcher_translate[0])
    launcher.style.transform = `translate(${launcher_translate[0]}px,${launcher_translate[1]}px)`
    newBullet.style.transform = `translate(${launcher_translate[0]}px,${launcher_translate[1]}px)`


    
}
document.onkeydown = checkKey;