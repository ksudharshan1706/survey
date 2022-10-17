const h1Ele = document.createElement('h1');
h1Ele.id = 'title'
h1Ele.innerText = 'Survey-Forms'

const description = document.createElement('p');
description.id = 'description'
description.innerText = 'Data from survey-forms to table'


document.body.append(h1Ele,description);


const query = document.querySelectorAll("div.container > div.row > div.col > div.row > .col-md-6,.col-lg-3")
console.log(query)
for(var idx= 0;idx<query.length;idx++){
    if(query[idx].textContent != ""){
        const element = document.createElement("label");
        element.textContent = query[idx].textContent;
        query[idx].textContent = "";
        element.setAttribute('name',element.textContent);
        // element.id = element.textContent;
        element.setAttribute('for',element.textContent)
        query[idx].append(element);
    }
    else{
        const element = document.createElement("input");
        if(query[idx-1].textContent == "Pincode:"){
            element.type = "pincode";
        }
        
        else{
        element.type = "text";
        }
        element.id = query[idx-1].textContent;
        
        query[idx].append(element);
    }

}
const query1 = document.querySelectorAll("div.container > div.row > div.col > div.row > div.col-9 > div.row > div.col-3 ")
console.log(query1)
for(var idx= 0;idx<query1.length;idx++){
    if(query1[idx].textContent != ""){
        const element = document.createElement("label");
        element.textContent = query1[idx].textContent;
        element.name = element.textContent;
        element.id = element.textContent;
        element.type = 'text';
        query1[idx].textContent = "";
        query1[idx].append(element);
    }
    else{
        const element = document.createElement("input");
        if(query1[idx-1].textContent == "Male:"){
            element.type = "radio";
            element.value = "Male"
            element.id = "male"
            element.name = "radio"
            
        }
        else if(query1[idx-1].textContent == "Female:"){
            element.type = "radio";
            element.value = "Female"
            element.id = "female"
            element.name = "radio"
        }
        query1[idx].append(element);
    }

}
var submitbtn = document.createElement('input');
submitbtn.setAttribute('type','submit');
submitbtn.setAttribute('onClick','AddData(event)');

const containerbtn = document.querySelectorAll('div.container >div.btn')
containerbtn[0].append(submitbtn)

function AddData(e)
{
e.preventDefault();
var rows="";
var fName=document.getElementById('first-name').value;
var lName=document.getElementById("LastName:").value;
var address=document.getElementById("Address:").value;
var state=document.getElementById("State:").value;
var country=document.getElementById("Country:").value;
var Pincode=document.getElementById("Pincode:").value;
var gender = document.querySelector('input[name="radio"]:checked').value;
console.log(fName,lName)
rows+="<tr><td>"+fName+"</td><td>"+lName+"</td><td>"+address+"</td><td>"+gender+"</td><td>"+Pincode+"</td><td>"+state+"</td><td>"+country+"</td></tr>";
$(rows).appendTo("#list tbody");
}


{/* <label for="radio"> gender</label>
<input type="radio" name="radio" id="male" ><label for="radio">male</label>
<input type="radio" name="radio" id="female"><label for="radio">female */}