var globalData = []
var currentidx = 0
const mainDiv = document.createElement('div')
mainDiv.classList.add("container")

const table = document.createElement('table');
table.className = 'table table-bordered'
const thead = document.createElement('thead');
const trele = document.createElement('tr');
['id','name','email'].forEach((columnname)=>{
    const hele = document.createElement('th');
    hele.innerText =columnname;
    trele.appendChild(hele);
})
thead.append(trele);
const tbody = document.createElement('tbody')
table.append(thead,tbody);

const btnsDiv = document.createElement('div');

const btns = [
    {type:"button",name:"prev",id:"prev"},
    {type:"button",name:"next",id:"next"}
]

btns.forEach((btn)=>{
    const newBtn = document.createElement('button');
    newBtn.id = btn.id;
    newBtn.style.margin = "20px"
    if(btn.name == "next"){
        newBtn.innerText = "Next";
        newBtn.setAttribute('onClick',"funnext()")
    }
    else{
        newBtn.innerText = "Prev";
        newBtn.setAttribute('onClick',"funprev()")

    }
    newBtn.style.width = '100px'
    btnsDiv.append(newBtn);  

})
table.style.justifyContent="center"
table.style.textAlign = "center"
mainDiv.append(table,btnsDiv)
mainDiv.style.textAlign ="center"
document.body.append(mainDiv)
document.body.style.textAlign = "center"
fetch("https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json")
.then((response)=>{
    return response.json()
}
)
.then((data)=>{
    globalData = data
    data.slice(0,5).forEach(({id,name,email})=>{
        const innertr = document.createElement('tr');
        const innerid = document.createElement('td');
        innerid.innerText = id
        const innername = document.createElement('td');
        innername.innerText = name
        const inneremail = document.createElement('td');
        inneremail.innerText = email
        innertr.append(innerid,innername,inneremail);
        tbody.append(innertr)
    })  
})

const funnext = ()=> {
    
    currentidx += 5
    // currentidx = currentidx*5
    var nextidx = currentidx + 5
    if(currentidx < 100){
        tbody.innerText = ""
    globalData.slice(currentidx,nextidx).forEach(({id,name,email})=>{
      
        const innertr = document.createElement('tr');
        const innerid = document.createElement('td');
        innerid.innerText = id
        const innername = document.createElement('td');
        innername.innerText = name
        const inneremail = document.createElement('td');
        inneremail.innerText = email
        innertr.append(innerid,innername,inneremail);
        tbody.append(innertr)
    })    
}
else{
    currentidx = 95
}
}

const funprev = ()=> {
    currentidx -= 5
    var nextidx = currentidx + 5
    console.log(currentidx,nextidx)
    console.log("here")
    if(currentidx >= 0){
        tbody.innerText = ""
        console.log("here")
        globalData.slice(currentidx,nextidx).forEach(({id,name,email})=>{
      
        const innertr = document.createElement('tr');
        const innerid = document.createElement('td');
        innerid.innerText = id
        const innername = document.createElement('td');
        innername.innerText = name
        const inneremail = document.createElement('td');
        inneremail.innerText = email
        innertr.append(innerid,innername,inneremail);
        tbody.append(innertr)
    })
    }
    else{
        currentidx = 0;
    }
}