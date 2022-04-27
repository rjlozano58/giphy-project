let ApiUrl = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1";

$(".search-button").click(function(){
  let userInput = $(".search-term").val();
  ApiUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`;
  $(".display").empty();
  fetch(ApiUrl)

  .then(function(response){
    return response.json();
  })

  .then(function(API){
    let randomNum = Math.random() * API.data.length;
    console.log(randomNum);
    console.log(API.data[0].images.original.url);
    $(".display").html(`<img src="${API.data[0].images.original.url}">`);
  });
  
});
console.log("blah");
