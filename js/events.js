//define functions here

function getIt() {
  $(`p`).click( () => {
    alert("Hey!");
  });
}

function frameIt() {
  let pic = $(`img`);
  pic.load( () => {
    pic.addClass("tasty");
  });
}

function pressIt() {
  $(`#typing`).keydown( (button) => {
    if (button.key == `g` || button.key == `G`) {
      
    }
  });
}

function submitIt() {
  
}



$(document).ready(function(){

// call functions here

});


