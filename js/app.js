document.addEventListener("DOMContentLoaded", function(){

  function showDropDownMenu(){
    var menu = document.querySelectorAll("nav>ul>li");
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
  };
  showDropDownMenu();

  function hideDescription(){
    var pics = document.querySelectorAll(".pic");
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
  };
  hideDescription();

  function slideFotos(){
    var btnPrev = document.getElementById("btnPrev");
    var btnNExt = document.getElementById("btnNext");
    var sliderPics = document.querySelectorAll(".img-list li");
    var counterVisiblePic = 0;
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
  };
  slideFotos();


  function showListPanel(listArrow, listPanel){
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
  };

  //function which count total cost of each chair
  function totalCost(array){
    return array.reduce(function(a,b){
        return a+b;
    });
  };

  function sumOrder(){
    var listArrow = document.querySelectorAll(".div_arrow");
    var listPanelLists = document.querySelectorAll(".list_panel li");
    var listPanels = document.querySelectorAll(".list_panel");
    var transportCheckBox = document.getElementById("transport");
    //variables from summary_panel
    var title = document.querySelector(".title");
    var color = document.querySelector(".color");
    var pattern = document.querySelector(".pattern");
    var transport = document.querySelector(".transport");
    var titleValue = document.querySelector(".title.value");
    var colorValue = document.querySelector(".color.value");
    var patternValue = document.querySelector(".pattern.value");
    var transportValue = document.querySelector(".transport.value");
    var sumValue = document.querySelector(".sum");
    var suma = [0, 0, 0, 0];

   showListPanel(listArrow, listPanels);

    for(var j=0; j<listPanelLists.length; j++){
      listPanelLists[j].addEventListener("click", function(event){
        var listLabel = this.parentNode.previousElementSibling.previousElementSibling;
        listLabel.innerHTML = this.innerText;
        this.parentNode.style.display = "none";
        if(this.parentNode === listPanels[0]){
          title.innerHTML = this.innerText;
          titleValue.innerHTML = this.dataset.price + " zł";
          suma[0] =  parseInt(this.dataset.price);
          var print = totalCost(suma);
          sumValue.innerHTML = print + " zł";
        }else if(this.parentNode === listPanels[1]){
          color.innerHTML = this.innerText;
          colorValue.innerHTML = this.dataset.price + " zł";
          suma[1] =  parseInt(this.dataset.price);
          var print = totalCost(suma);
          sumValue.innerHTML = print + " zł";
        }else{
          pattern.innerHTML = this.innerText;
          patternValue.innerHTML = this.dataset.price + " zł";
          suma[2] =  parseInt(this.dataset.price);
          var print = totalCost(suma);
          sumValue.innerHTML = print + " zł";
        }
      });
    }

    transportCheckBox.addEventListener("change", function(event){
      if(transportCheckBox.checked === true){
        transport.innerHTML =  "Transport";
        suma[3] = parseInt(this.dataset.transportPrice)
        var print = totalCost(suma);
        transportValue.innerHTML = this.dataset.transportPrice + " zł";
        sumValue.innerHTML = print + " zł";
      }else{
        transport.innerHTML ="";
        suma[3] = 0;
        var print = totalCost(suma);
        transportValue.innerHTML = "";
        sumValue.innerHTML = print + " zł";
      }
    });
  };
  sumOrder();
});
