// var getCurrency = function () {
//     // format the github api url
//     var from = $("#from").val();
//     var to = $("#to").val();
//     var amount = $("#amount").val();
//     var apiUrl = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`;

//     // make a request to the url
//     fetch(apiUrl).then(function (response) {
//       response.json().then(function (data) {
//         console.log(data);
//       });
//     });
//   };

$(document).ready(function(){

  $("amount").focus( function(){
  console.log("I am focus");
  
  });

});

  // // listen for the submit event
  // $("#convert").on("submit", function (event) {
  //   event.preventDefault();
  //   getCurrency();

  // });

  // // listen for the change event
  // $("#amount").on("change", function (event) {
  //   event.preventDefault();
  //   $('amount').focus();
  //   $()
  //   getCurrency();
  // });

  // // listen for the change event
  // $("#from").on("change", function (event) {
  //   event.preventDefault();
  //   getCurrency();
  // });

  // // listen for the change event
  // $("#to").on("change", function (event) {
  //   event.preventDefault();
  //   getCurrency();
  // }
  // );


/*
1) Add event listener(click) for Convert button
2) Create 3 variables to store user input values amount, from, and to textboxes
3) make an API call and pass from, to and amount parameter values
4) Response from API call will give you a result amount. Add that as a value to an empty textbox which shows converted amount

*/