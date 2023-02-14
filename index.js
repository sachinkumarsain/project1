let anchor=document.querySelector('.left a') 
let input=document.querySelector('.form')
let anchor1=document.querySelector('.head a')
let anchor2=document.querySelector('.frist')
let total1=document.querySelector('.wapper')
let add =document.querySelector('.add')
let uname =document.querySelector('.form .name')
let username=document.querySelector('.username')
let total2=document.querySelector('.wapper2')
let music=document.querySelector('page2a1')

anchor1.onclick=(e)=>{
    e.preventDefault()
    input.style.display='block'
}
anchor.onclick=(e)=>{
    e.preventDefault()
    if(add.innerHTML===''){
        alert('add user') 
    }
    else{
        total1.style.display='none'
        total2.style.display='block'
    }
}
anchor2.onclick = (e) => {
    e.preventDefault()
    alert('complate')
    add.style.display = 'block'
    anchor1.style.display = "none"
    input.style.display = "none"
    add.innerHTML=uname.value
    username.innerHTML=uname.value
}
