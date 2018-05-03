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
    if (button.key == `G`) {
      alert("You pressed G!");
    }
  });
}

function submitIt() {
  $(`form`).submit( () => {
    alert("Your form is going to be submitted now.");
  });
}


$(document).ready(function(){

// call functions here

});


