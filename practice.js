var countDown = 10
var h1ele = document.createElement('h1')
document.body.style.textAlign = "center"
document.body.append(h1ele)

//METHOD1
const intervalID = setInterval(()=>{
    if (countDown > 0){
        h1ele.innerText = "";
        h1ele.innerText = countDown;
        countDown -= 1;
    }
    else{
        clearInterval(intervalID);
        h1ele.innerText = ""
        h1ele.innerText = "HAPPY DIWALI";
    }
},1000
)

//METHOD2
// const intervalID = setInterval(()=>{
//     h1ele.innerText = "";
//     h1ele.innerText = countDown;
//     countDown -= 1;
// },1000)

// setTimeout(()=>{
//     clearInterval(intervalID);
//     h1ele.innerText = ""
//     h1ele.innerText = "HAPPY DIWALI";
//     console.log("here")
// },11000)