// This is where it all goes :)
(function(){
  var welcome1 = document.querySelector('.welcomeHeader'),
      welcome2 = document.querySelector('.welcomeBody');

  // Welcome text onload
  setTimeout(function(){
    welcome1.classList.add("has-landed");
    welcome2.classlist.add("has-landed-to");
  }, 900);
})();
