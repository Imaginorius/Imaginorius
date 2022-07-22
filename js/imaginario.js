

/*
document.querySelectorAll("li").forEach(n => n.addEventListener("click", () => {

    ham.style.display = "none"
    head.style.backgroundColor = "";
    x.classList.remove("displaychange");

}))

*/
function hamburgerdisplay(x) {
    var ham = document.getElementById("menu");
    var head = document.querySelector("header");
   
   



    if (ham.style.display === "block") {
        x.classList.toggle("displaychange");
        ham.style.display = "none";
        head.style.backgroundColor = "";
        head.style.height="";
       
       
    }

    else {
        x.classList.toggle("displaychange");
        ham.style.display = "block";
        head.style.backgroundColor = "rgb(16, 38, 51, 0.9)";
        head.style.height= "100vh";
        
      
        
        
    }


    document.querySelectorAll("li").forEach(n => n.addEventListener("click", () => {

        ham.style.display = "none"
        head.style.backgroundColor = "";
        x.classList.remove("displaychange");

    }))


}


function displaymenu() {
    var ham = document.getElementById("menu");
    var head = document.querySelector("header");
    var burger = document.querySelectorAll(".barre_hamburger");
    var hamburg = document.getElementById("hamburger");
   
    

    if (innerWidth > 900 ) {
        head.style.backgroundColor = "";
        ham.style.display = "block";
        burger.classList.remove("displaychange")    
    }

    hamburg.classList.add("displaychange");
    
    if (innerWidth < 900 ) {
        ham.style.display = "none";
        head.style.backgroundColor = "";
        hamburg.classList.toggle("displaychange"); 
      
    }

    
   
    


}









/*
document.querySelectorAll("li").forEach(n => n.addEventListener("click", ()=> {
    ham.style.display = "none"
    head.style.backgroundColor = "";
    x.classList.toggle("displaychange");


}))

document.querySelectorAll("li").forEach(n => n.addEventListener("click", ()=> {
    ham.style.display = "block";
    head.style.backgroundColor = "#33c1bd";
    x.classList.toggle("displaychange");


}))

*/
