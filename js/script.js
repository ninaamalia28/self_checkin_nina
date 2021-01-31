function loadData() {

	initialLoad()
}

function initialLoad() {
	setTimeout(function () {
		$(".preloader").hide()
	}, 1000)

}


document.getElementById("text").style.fontSize = "94px" ; 
document.getElementById("text").style.fontWeight = "bold";
var count = 0;
var counta = "A0";
  var countEl = document.getElementById("text");
  function plus(){
      count+=1;
      countEl.innerHTML = counta + count;
  }
  function minus(){
    if (count > 1) {
      count-=1;
      countEl.innerHTML = count;
    }  
  }

  document.getElementById("plus").onclick = function(){
    plus()
  };