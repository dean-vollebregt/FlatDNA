const toBeColored = document.querySelectorAll('#difference');

function updateColor(){

  toBeColored.forEach(function(differenceId){
    if(differenceId.innerText.includes("-")){
      differenceId.style.color = "green";
    }else {
      differenceId.style.color = "red";
    }
  });
}

updateColor();