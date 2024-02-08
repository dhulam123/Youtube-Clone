var container = document.querySelector('.container');
var thumbsup = document.getElementById('thumbsup');
var upcolor = document.getElementById('upcolor')
var downcolor = document.getElementById('downcolor')
container.addEventListener("dblclick",function(){
    console.log(thumbsup)  
    thumbsup.style.display="block";
    downcolor.style.color="white"
    thumbsup.style.animation = "thumbsup linear 0.2s" 

    setTimeout(function(){
        upcolor.style.color = "blue"
        thumbsup.style.display="none"
    },1000)
})
upcolor.addEventListener("click",function(){
    if(upcolor.style.color=="blue"){
        upcolor.style.color="white";
    }else{
        upcolor.style.color="blue"
        downcolor.style.color="white"
    }
})
downcolor.addEventListener("click",function(){
    upcolor.style.color = "white"
    downcolor.style.color = "blue"
})


