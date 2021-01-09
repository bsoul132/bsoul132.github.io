//Check div for the search, if it has search then show it else remove it
function searchInput() {

    var acc = document.getElementsByClassName("commandInfo");
    var i;

    for (i = 0; i < acc.length; i++) {
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      let textValue = acc[i].textContent || a.innerText;
      if(textValue.toUpperCase().indexOf(filter) > -1){
        acc[i].style.display = ""
      }else{
        acc[i].style.display = "none";
      }
    }
}