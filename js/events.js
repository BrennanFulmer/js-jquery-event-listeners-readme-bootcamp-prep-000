//define functions here

function getIt() {
  $(`p`).click(function() {
    alert("Hey!");
  });
}

function frameIt() {
  let pic = $(`img`);
  pic.load(function() {
    pic.addClass("tasty");
  });
}

function pressIt() {
  $(`#typing`).keydown()
}

function submitIt() {
  
}



$(document).ready(function(){

// call functions here

});


