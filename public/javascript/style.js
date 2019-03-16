function updateColor(){
    let toBeColored = document.querySelectorAll('#difference');

    toBeColored.forEach(function(differenceId){
        if(differenceId.innerText.includes("-")){
            differenceId.style.color = "green";
        }else {
            differenceId.style.color = "red";
        }
    });
}
