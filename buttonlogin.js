document.getElementById("botaoLogin").addEventListener("click", function() {

  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  // Pega os usuários salvos no localStorage
  const emails = JSON.parse(localStorage.getItem("emails")) || [];
  // Verifica se existe algum usuário com esse login e senha
  const encontrado = emails.find(e => e.email === email && e.senha === senha);

  if (encontrado) {
    document.getElementById("mensagem").textContent = "Login feito com sucesso!";

    setTimeout(function() {
      window.location.href = "";
    }, 1000);

  } else {
    document.getElementById("mensagem").textContent = "Usuário ou senha incorretos.";
  }

});