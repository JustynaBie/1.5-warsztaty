document.addEventListener("DOMContentLoaded", function(){
  var menu = document.querySelectorAll("nav>ul>li");
  var pics = document.querySelectorAll(".pic");
  var btnPrev = document.getElementById("btnPrev");
  var btnNExt = document.getElementById("btnNext");
  var sliderPics = document.querySelectorAll(".img-list li");
  var counterVisiblePic = 0;
  var listArrow = document.querySelectorAll(".list_arrow");





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

  sliderPics[counterVisiblePic].style.display = "inline-block";

 btnPrev.addEventListener("click", function(event){
   sliderPics[counterVisiblePic].style.display = "none";
   counterVisiblePic--;
   if(counterVisiblePic < 0) {
     counterVisiblePic = sliderPics.length - 1;
   }
   sliderPics[counterVisiblePic].style.display = "inline-block";
 });

  btnNext.addEventListener("click", function(event){
    sliderPics[counterVisiblePic].style.display = "none";
    counterVisiblePic++;
    if(counterVisiblePic >= sliderPics.length){
        counterVisiblePic = 0;
      }
    sliderPics[counterVisiblePic].style.display = "inline-block";
  });

  for(var i=0; i<listArrow.length; i++){
    listArrow[i].addEventListener("click", function(event){
      var listPanel = this.nextElementSibling;
      if(listPanel.style.display === "none"){
         listPanel.style.display = "block";
      }else{
         listPanel.style.display = "none";
      }

    });
  }
});
