window.onload = function(){
    declarviewevents();
    
    }
    
    
    function declarviewevents(){
        let save_btn = document.querySelector("#save_btn");
        save_btn.addEventListener("click" ,function(){
         let input_val =document.querySelector("#id_input").value;
     
    alert("הטופס נשלח בהצלחה")
    localStorage.setItem("user",input_val)
         console.log
     }  )
    
    }

  
        