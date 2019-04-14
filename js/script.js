

//------ Script Open menu

        $( document ).ready(function() {
        console.log( "ready!" );
        $('#iconmenu').click(function() { 
        $(this).toggleClass('iconopen iconclose'); 
        $("#nav").toggleClass('navshow');                
        });
      
         
    //------ Script footer year
   
        var today = new Date(); 
        var year = today.getFullYear();
        document.querySelector('.year').innerHTML = year ; 
             
                 
    //------ Script back to top         
             
        function runScroll() {
          scrollTo(document.body, 0, 600);
        }
        var scrollme;
        scrollme = document.querySelector("#scrollme");
        scrollme.addEventListener("click",runScroll,false)

        function scrollTo(element, to, duration) {
          if (duration <= 0) return;
          var difference = to - element.scrollTop;
          var perTick = difference / duration * 10;

          setTimeout(function() {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop == to) return;
            scrollTo(element, to, duration - 10);
          }, 10);
        }
            
             });
          

    //------ tabs      
        
        function openTab(evt, tabName) {
    // Declare all variables
    var tabcontent; 
    var tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

