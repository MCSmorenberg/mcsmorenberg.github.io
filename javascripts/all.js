// This is where it all goes :)
(function(){
  var welcome = document.querySelector('.welcomeHeader');
  console.log(welcome);
  // Welcome text onload
  setTimeout(function(){
    welcome.classList.add("has-landed");
  }, 500);
})();
