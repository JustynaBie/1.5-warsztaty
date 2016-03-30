document.addEventListener("DOMContentLoaded", function(){
  var menu = document.querySelectorAll("nav>ul>li");
  var pics = document.querySelectorAll(".pic");
console.log(pics);


  for(var i=0; i<menu.length; i++){
    menu[i].addEventListener("mouseover", function(event){
    var menuDD = this.children[0];
    menuDD.style.display = "block";
    });

    menu[i].addEventListener("mouseout", function(event){
    var menuDD = this.children[0];
    menuDD.style.display = "none";
    });
  }

  for(var j=0; j<pics.length-1;j++){
    pics[j].addEventListener("mouseover", function(){
      var hideText = this.children[0];
      hideText.style.visibility = "hidden";
    });

    pics[j].addEventListener("mouseout", function(){
      var hideText = this.children[0];
      hideText.style.visibility = "visible";
    });
  }


});
