x = parseInt(prompt("Digite um número inteiro maior que 0:"))
nome = prompt("Digite seu nome completo:")

  if (x > 0) {
      for (i = 0; i < x; i++) {
        document.write(nome + "<br>");
      }
    } else {
      document.write("O número informado não é válido.");
    }

    