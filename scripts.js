function validate(){
    var name = document.getElementById("nome").value;
    var subject = document.getElementById("sobrenome").value;
    var phone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("mensagem").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 3){
      text = "Por favor insira um nome válido.";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length <2){
      text = "Por favor insira um sobrenome válido.";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Por favor insira um telefone válido.";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Por favor insira um e-mail válido.";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 40){
      text = "Por favor escreva uma mensagem com no minímo 40 carácteres.";
      error_message.innerHTML = text;
      return false;
    }
    alert("Formulário enviado com sucesso!");
    return true;
  }

