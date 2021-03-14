'use strict';

function getDogImage(numOfDogs) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogs}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));

    if(numOfDogs > 50){
        return alert("Please choose a number equal to or less than 50")
    } else if(numOfDogs = NaN){
        return alert ("Please insert a number into the field")
    }

}

function displayResults(responseJson) {
  console.log(responseJson);
  //clears the results 
  $('.results').html('');
  //appends each img to the results 
  responseJson.message.forEach(img => {
      $('.results').append(`<img src="${img}" class="results">`)
  });
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let numOfDogs = $('input[type="number"]').val();
    getDogImage(numOfDogs);
    
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});