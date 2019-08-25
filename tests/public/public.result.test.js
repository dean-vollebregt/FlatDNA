

let assert = chai.assert;
let expect = chai.expect;

//
// const toBeColored = document.querySelectorAll('#difference');
//
// function updateColor(){
//
//   toBeColored.forEach(function(differenceId){
//     if(differenceId.innerText.includes("-")){
//       differenceId.style.color = "green";
//     }else {
//       differenceId.style.color = "red";
//     }
//   });
// }
//
// updateColor();


describe('updateColor', function() {

  before(function(){
    let div = document.createElement("div");
    div.id = "difference";
    div.innerHTML =  "<p id='difference'>Difference: -10 </p>" +
                     "<p id='difference'>Difference: 10 </p>";
    document.body.appendChild(div);

    //let toBeColored = document.querySelectorAll('#difference');

  });

  after(function(){
    document.body.removeChild(div)
  });

  it('should color undervalued differences green', function() {
    let toBeColored = document.querySelectorAll('#difference');
    expect(toBeColored[0].style).to.equal('color: green');
  });

  it('should color overvaued differences red', function() {

    expect(sunriseSunsetHTML.innerHTML).to.equal('color: green');
  });




});
