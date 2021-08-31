window.onload = ()=> {
    var launcher = document.querySelector(".launcher");
    var launcher_translate = [0,0];
    function shoot(){
        var newbullet = document.querySelector(".newbullet");
        
        var animation = newbullet.animate([
            {transform: "translate(0,-900px)" }
        ],300)
        animation.onfinish =() =>{
            document.body.firstElementChild.children[1].removeChild(newbullet);
        }
        
        // bullet.style.transform = "translate(0,-900px)"
        // console.log("Hello")
    }
    function checkKey(e){
        const speed = 8;
        var c = launcher.getBoundingClientRect()
        console.log(e.keyCode)
        if(e.keyCode == '38'){
            if(c.top> 523){
                launcher_translate[1] -= speed;
            }
        }
        else if(e.keyCode == '40'){
            if(c.bottom < window.innerHeight - 20){
                launcher_translate[1] += speed;
            }
        }
        else if(e.keyCode == '37'){
            if(c.left> 10){
                launcher_translate[0] -= speed;
            }
        }
        else if(e.keyCode == '39'){
            if(c.right < window.innerWidth - 10){
                launcher_translate[0] += speed;
            }
        
        }
        if(e.keyCode == '32'){
            var newBullet = document.createElement("div");
        newBullet.classList.add("bullet");
        newBullet.classList.add("newbullet");

        newBullet.innerHTML = '<img  style= "height: 1rem;" src="bullet.png" alt="">'
        
        
        document.body.firstElementChild.children[1].appendChild(newBullet);
            shoot();
            


        }

        
        console.log(launcher_translate)
        launcher.style.transform = `translate(${launcher_translate[0]}px,${launcher_translate[1]}px)`
        
    }
    collision = function(r1,r2) {
            return Math.max(r1.top, r2.top) < Math.min(r1.bottom, r2.bottom) && Math.min(r1.right,r2.right) > Math.max(r1.left , r2.left);
    }
    document.onkeydown = checkKey;
    var bullets = document.querySelectorAll(".bullet");
    var aliens = document.querySelectorAll(".alien"); 
    setInterval(()=> {

        aliens.forEach((alien) => {
            var al = alien.getBoundingClientRect()
            bullets.forEach((bullet) => {
                var br = bullet.getBoundingClientRect()
                console.log(br)
                if(collision(al,br)){
                    hit(alien);
                    document.body.firstElementChild.children[1].removeChild(bullet);
                }
            });

        });
    }, 100
     )
}