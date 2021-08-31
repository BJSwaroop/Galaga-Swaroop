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
        const speed = 15;
        var c = launcher.getBoundingClientRect()
        console.log(e.keyCode)
        if(e.keyCode == '32'){
            var newBullet = document.createElement("div");
        newBullet.classList.add("bullet");
        newBullet.classList.add("newbullet");

        newBullet.innerHTML = '<img  style= "height: 1rem;" src="bullet.png" alt="">'
        
        
        document.body.firstElementChild.children[1].appendChild(newBullet);
            shoot();
            


        }
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
        
        console.log(launcher_translate)
        launcher.style.transform = `translate(${launcher_translate[0]}px,${launcher_translate[1]}px)`
        
    }
    document.onkeydown = checkKey;
    var bullet = document.querySelector(".bullet");
    var aliens = document.querySelectorAll(".alien"); 


}