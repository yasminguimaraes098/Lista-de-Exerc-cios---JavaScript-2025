btn = document.getElementById("btnExibir");

btn.addEventListener("click",txtExibir);

function txtExibir(){
    txtExibir = document.getElementById("txtCaixa").value
    alert(txtExibir.toUpperCase())
    
}