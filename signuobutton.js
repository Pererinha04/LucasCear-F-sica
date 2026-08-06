document.getElementById("botaoCadastro").addEventListener("click", function () {

  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  // Verifica se os campos estão preenchidos
  if (email === "" || senha === "") {
    document.getElementById("mensagem").textContent = "Preencha todos os campos.";
    return;
  }

  console.log(localStorage.getItem("emails"));
  // Pega os emails já cadastrados
  const emails = JSON.parse(localStorage.getItem("emails")) || [];

  // Verifica se o email já existe
  const jaExiste = emails.find(e => e.email === email);
  if (jaExiste) {
    document.getElementById("mensagem").textContent = "Email já cadastrado.";
    return;
  }

  // Adiciona o novo email na lista
  emails.push({ email, senha });

  // Salva no localStorage
  localStorage.setItem("emails", JSON.stringify(emails));

  document.getElementById("mensagem").textContent = "Cadastro realizado com sucesso!";

  // Redireciona após 1 segundo
  setTimeout(function () {
    window.location.href = "";
  }, 1000);

}); 