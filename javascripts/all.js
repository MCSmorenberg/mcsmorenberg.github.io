// This is where it all goes :)
(function(){
  var welcomeHeader = document.querySelector('.welcomeHeader');
  var welcomeBody = document.querySelector('.welcomeBody');

  // Welcome text onload
  setTimeout(function(){
    welcomeHeader.classList.add("has-landed");

  }, 900);

  setTimeout(function(){
    console.log(welcomeBody);
    welcomeBody.classlist.add("has-landed-to");
  }, 1300);
})();
