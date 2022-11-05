const h1Ele = document.createElement('h1');
h1Ele.id = 'title'
h1Ele.innerText = 'Survey-Forms'

const description = document.createElement('p');
description.id = 'description'
description.innerText = 'Data from survey-forms to table'
description.style.textAlign = "center"
h1Ele.style.textAlign = "center"


document.body.append(h1Ele,description);
description.style.textAlign = "center"


const formEle = document.createElement('form');
formEle.setAttribute('id','survey-form')
formEle.setAttribute('class','survey-form')
const fields = [
    
    { type: 'text', name: 'firstName', id: 'first-name',placeholder:'firstname', label: "First Name",required:true },
    { type: 'text', name: 'lastname', id: 'last-name',placeholder:"lastname", label: "Last Name",required:true},
    { type: 'email', name: "email", id: 'email',placeholder:"email", label: "Email address",required:true },
    { type: 'text', name: 'address', id: 'address', label: "Address",required:true },
    { type: 'pincode', name: 'pincode', id: 'pincode', label: "Pincode",required:true },
    { type: 'text', name: 'state', id: 'state', label: "State",required:true },
    { type: 'text', name: 'country', id: 'country', label: "Country",required:true },
    { type: 'textarea', name: 'comments', id: 'comments', label: "comments" }
  ];

const genderFields = [
  { type: 'radio', name: 'radio', id: 'male', label: "Male" },
    { type: 'radio', name: 'radio', id: 'female', label: "Female" }
]

const FoodFields = [
  { type: 'checkbox', name: "vegbiriyani", id: 'vegbiriyani', label: "Veg-Biriyani" },
  { type: 'checkbox', name: 'chickenbiriyani', id: 'chickenbiriyani', label: "Chicken Biriyani" },
  { type: 'checkbox', name: 'rumalroti', id: 'rumalroti', label: "Rumal Roti" },
  { type: 'checkbox', name: 'panipuri', id: 'panipuri', label: "Pani Puri" },
  { type: 'checkbox', name: 'gulabjamoon', id: 'gulabjamoon', label: "Gulab Jammon" },
];

fields.map((obj)=>{
    const divEle = document.createElement('div');
    divEle.classList.add('m-3');
    divEle.classList.add('form-group');

    const labelEle = document.createElement('label');
    if(obj.id === "email"){
      labelEle.setAttribute('id',obj.id+'-label')
    }
    else if(obj.id === "pincode"){
      labelEle.setAttribute('id','number-label')
    }
    else if(obj.id === "first-name"||obj.id === "last-name"){
      labelEle.setAttribute('id','name-label')
    }
    
    labelEle.setAttribute('for',obj.id);
    labelEle.classList.add('form-lable');
    labelEle.innerHTML = obj.label;

    divEle.appendChild(labelEle);
    if(obj.type == "textarea"){
      var inputEle = document.createElement('textarea');  
    }
    else{
    var inputEle = document.createElement('input');
    }
    inputEle.setAttribute('id',obj.id);
    if(obj.required){
      inputEle.setAttribute('required',obj.required)
    }
    if(obj.id === "email"||obj.id ==="first-name"||obj.id === "last-name"){
      inputEle.setAttribute("placeholder",obj.placeholder)
    }
    inputEle.setAttribute('name',obj.name);
    inputEle.setAttribute('type',obj.type);
    inputEle.classList.add('form-control');


    divEle.appendChild(inputEle);
    formEle.append(divEle)
}) 

const genderHeading = document.createElement('h2');
genderHeading.classList.add('m-3');
genderHeading.innerHTML = "Gender:"
formEle.append(genderHeading)

genderFields.map((obj)=>{
  const genderDiv = document.createElement('div');
  genderDiv.classList.add('form-check','m-3');

  const genEle = document.createElement('input');
  genEle.classList.add('form-check-input');
  genEle.setAttribute('type',obj.type);
  genEle.setAttribute('id',obj.id);
  genEle.setAttribute('name',obj.name);
  genEle.setAttribute('value',obj.id);
  // genderDiv.appendChild(genEle)

  const genLabel = document.createElement('label');
  genLabel.setAttribute('for',obj.id);
  genLabel.classList.add('form-check-label');
  genLabel.innerText = obj.label;

  // genderDiv.appendChild(genLabel);
  genderDiv.append(genEle,genLabel);
  formEle.append(genderDiv);
})

const foodHeading = document.createElement('h2');
foodHeading.classList.add('m-3');
foodHeading.innerHTML = "Food:"
formEle.append(foodHeading)

FoodFields.map((obj)=>
{
  const foodDiv = document.createElement('div');
  foodDiv.classList.add('form-check','m-3');

  const foodEle = document.createElement('input');
  foodEle.classList.add('form-check-input');
  foodEle.setAttribute('type',obj.type);
  foodEle.setAttribute('id',obj.id);
  foodEle.setAttribute('name',obj.name);
  foodEle.setAttribute('value',obj.name);
  

  const foodLabel = document.createElement('label');
  foodLabel.setAttribute('for',obj.id);
  foodLabel.classList.add('form-check-label');
  foodLabel.innerText = obj.label;
  foodDiv.append(foodEle,foodLabel);
  formEle.append(foodDiv);
})


// console.log("here",document.querySelectorAll('#survey-form'))
// console.log(document.querySelectorAll('#survey-form .form-group #first-name'))

const btn = document.createElement('button');
btn.id = 'submit';
btn.setAttribute('type', 'submit');
btn.setAttribute('class', 'btn btn-primary');
btn.classList.add("m-3")
btn.innerText = "Submit";
formEle.append(btn);
document.body.appendChild(formEle)


var textarea = document.getElementById('comments');
console.log(textarea.nodeName,textarea.id)
console.log(document.querySelectorAll('#survey-form .form-group'))
//table

const tableElement = document.createElement('table');
tableElement.setAttribute('class', 'table');
tableElement.style.marginTop = '32px'


const createTableElement = (tagName, content) => {
  const tableElement = document.createElement(tagName);
  tableElement.innerHTML = content;
  return tableElement;
}


const thFirstName = createTableElement('th', 'First Name');
const thlastName = createTableElement('th', 'Last Name');
const thEmail = createTableElement('th', 'Email');
const thAddress = createTableElement('th', 'Address');
const thPincode= createTableElement('th', 'Pincode');
const thState = createTableElement('th', 'State');
const thGender = createTableElement('th', 'Gender');
const thCountry = createTableElement('th', 'Country');
const thFood = createTableElement('th', 'Food');
const headTrElement = createTableElement('tr', '');
headTrElement.append(thFirstName, thlastName,thEmail,thAddress,thPincode,thState,thGender, thCountry,thFood);

const tHead = createTableElement('thead', '');
tHead.append(headTrElement);

const tBody = createTableElement('tbody', '');

tableElement.append(tHead, tBody);

document.body.append(tableElement);


formEle.addEventListener('submit',(e)=>{
  e.preventDefault();
  const input = e.target.elements;
  let data = {};
  var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
  var foodItems = ""
  for (var checkbox of markedCheckbox) {
    foodItems += (checkbox.value + ' ');
  }
  data['Food'] = foodItems.trim();
  for (i = 0; i < input.length; i++) {
    if(input[i].name == "radio"){
      var gender = document.querySelector('input[name="radio"]:checked').value;
      data['Gender'] = gender
    }
    else if(input[i].type != "checkbox"){
      data[input[i].name] = input[i].value;
    }
  }
  // console.log(data)
 
    const trElement = createTableElement('tr', '');
    const tfName = createTableElement('td', data['firstName']);
    const tlName = createTableElement('td', data['lastname']);
    const tdEmail = createTableElement('td', data['email']);
    const taddress = createTableElement('td', data['address']);
    const tdpincode = createTableElement('td', data['pincode']);
    const tdstate = createTableElement('td', data['state']);
    const tdgender = createTableElement('td', data['Gender']);
    const tdCountry = createTableElement('td', data['country']);
    const tdFood = createTableElement('td', data['Food']);
      
    trElement.append(tfName,tlName,tdEmail,taddress,tdpincode,tdstate,tdgender, tdCountry,tdFood);
    tBody.appendChild(trElement);
    console.log(tBody)

})