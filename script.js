function logar(){
    var usuario= document.getElementById('inputUsuario').value
    var senha= document.getElementById('inputSenha').value
    if ((usuario=='admin'|| usuario=="admin@admin.com") && senha=='Opaa'){
        window.location.href="home.html"
        
    }else{
        alert("Usuario/Senha incorretos! Tente Novamente!")       
    }


}
