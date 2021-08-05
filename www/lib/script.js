// This is a JavaScript file

window.onload= function(){
  const consultar = document.querySelector("#consultar");
  const monga = document.querySelector("#monga");

  consultar.addEventListener("click", function(){
fetch(`https://api.hgbrasil.com/weather?woeid=460161${consultar.value }`, {
    method: "get",
     mode:'cors',
     cache:'default'
     }).then(response=>{
    response.json().then(Text => {
      monga.value = Text['consultar'];
    })
  }) 
})
}