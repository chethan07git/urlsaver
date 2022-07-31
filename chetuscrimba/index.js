mylead=[];
const inpt=document.getElementById("text-el");
const btnc=document.getElementById("btn");  
const unli=document.getElementById("unl");
const del=document.getElementById('del');
const delmsg=document.getElementById('delmsg');
const savetb=document.getElementById('savetb');

// console.log(localStorage.getItem(mylead))
// localStorage.setItem('myname',"chethan B");
// let n=localStorage.getItem('myname');
// console.log(n)
// localStorage.clear();
// console.log(localStorage.getItem('myname'))
console.log(mylead)
let urlfromstorage= localStorage.getItem("urls"); 
console.log(urlfromstorage)
// to load from localstorage after refreshing or logging in app and add to mylead 

if(urlfromstorage){
    console.log(typeof mylead+"   entered   ");
    mylead=JSON.parse(localStorage.getItem("urls"));
    console.log("refresh"+ mylead)
    refresh();
}

del.addEventListener('click',function()
{
    localStorage.setItem('urls',"");
    mylead=[];
    unli.innerHTML=''
    delmsg.innerHTML=`<i>LOCAL STORAGE IS CLEARED!!!</i>`
    inpt.placeholder="Enter the url "

})
let tabs=[{tab:"linkedin.com"}];
savetb.addEventListener('click',function()
{        // to get the current window tab url
    chrome.tabs.query({active:true,currentWindow:true},function(tabs)
    {     // tabs will be having key=url and value=windowURL
        // configure the manifest json to work this
        mylead.push(tabs[0].url);console.log(mylead)
        localStorage.setItem("urls",JSON.stringify(mylead));
        renderall();
        console.log(mylead);
    })
    
})

btnc.addEventListener("click",function()
{
    console.log("clicked");

    if (inpt.value)
    {
     mylead.push(inpt.value); 
     delmsg.innerHTML=''

     renderall();}
    else {console.warn("empty input")};  //pushing input value to an array
    // unli.innerHTML+="<li>"+inpt.value+"</li>";
    localStorage.setItem("urls",JSON.stringify(mylead));  //to add in the localstorage
    console.log(localStorage.getItem('urls'));
    inpt.value='';  // to reset text box to blank
    console.log(mylead);
})
function renderall()
{ let listitm="";
    for (let i=0;i<mylead.length;i++)
    {
    listitm+=
    `<li>
    <a target='_blank' href= '${mylead[i]}'> 
    ${mylead[i]}
    </a> </li>` ;
    }
    unli.innerHTML=listitm;
}
function refresh()
{    
    for (let i=0;i<mylead.length;i++)
    {
    unli.innerHTML+=
    `<li>
    <a target='_blank' href= '${mylead[i]}'> 
    ${mylead[i]}
    </a> </li>` ;
    }
}
    
