var allelem = document.querySelectorAll(".elem");

allelem.forEach(function(elem) {

          
            elem.childNodes[3].addEventListener("click", function() {
                if(elem.childNodes[3].textContent === "Follow")
                    elem.childNodes[3].textContent = "Following";
                else
                    elem.childNodes[3].textContent = "Follow"; 
              
                
                
            });
          });
          
   
    
