//Section 4 start

//Form Validation 
const shoot = () => {
    const form = document.forms["myForm"]["Name"].value;
    const form2 = document.forms["myForm"]["Age"].value;


    if (form == "" || form2 =="") {
        alert("Please Fill The Form");
        return false
        //Wrtting Credintials over Screen Dynamicaly
    }else {
        var name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const height = document.getElementById("height").value;
        const profession = document.getElementById("profession").value;
        
        
        const ageToInt = parseInt(age);
    
         if (ageToInt) {
               alert("Thanks For Putting The Age In Numbers");
         } else {
             alert("Please Fill The Age In Numbers")
         }

       //Text and Delete and Edit Button is here
       $("tbody").prepend(`
       <tr id="removemaaro">
         <td class="divdemo">${name}</td>
         <td class="divdemo">${age}</td>
         <td class="divdemo">${height}</td>
         <td class="divdemo">${profession}</td>
         <td class="divdemo"><button class="btn btn-primary" onclick="delthis()">Delete</button></td>
        
      
       </tr>
      
     `)
       

    }
}




//For Deleting All
const del = () => {
    
    const ask = confirm("Do You Really Want To Delete All?");
    if (ask == null || ask == "") {
    } else {
        if(document.getElementById("btn2").click){
            $(document).ready( () => {
                $(".divdemo").remove();

            })
        }
         
    }
}

//For Deleting One Only
const delthis = () => {     
     $("#removemaaro").remove();
  }




//Editing  
const edit = (event) => {
    if(document.getElementById("editthis").click){
        $(document).ready((event) => {
        var name_changer = document.getElementById("name_Changer").value;
        
        })

    }
}




//Timer  
// setTimeout(() => {
//     if(confirm("Have You Subscribe Us Yet?")){
//         alert("Thanks");
//     }else{
//         alert("Sad To Know :) You Did'nt Liked Us");
//     }
// }, 10000);