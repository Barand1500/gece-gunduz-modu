const icon=document.getElementById("icon");

icon.addEventListener('click',()=>{
    document.body.classList.toggle('dark-thema');

    if(document.body.classList.contains('dark-thema')){
       icon.classList="fa-regular fa-sun fa-2x"
    }
    else{icon.classList="fa-solid fa-moon fa-2x"}

    localStorage.setItem("thema",document.body.classList);
    localStorage.setItem("icon",icon.classList);
})

if(localStorage.getItem("thema")){
    document.body.classList.add(localStorage.getItem("thema"))
    icon.classList=localStorage.getItem("icon")
}