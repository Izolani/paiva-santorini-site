// rolagem suave do menu
document.querySelectorAll("nav a").forEach(link => {
link.addEventListener("click", function(e){

if(this.hash !== ""){
e.preventDefault();

const hash = this.hash;

document.querySelector(hash).scrollIntoView({
behavior: "smooth"
});
}
});
});


// mensagem de boas vindas
window.onload = function(){
console.log("Site Paiva Santorini carregado com sucesso.");
}