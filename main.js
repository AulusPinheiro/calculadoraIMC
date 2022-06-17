
function limparInput() {
  document.querySelector('#nome').value = "";
  document.querySelector('#altura').value = "";
  document.querySelector('#peso').value = "";

}

function gerar() {

  var name = document.querySelector('#nome');
  var alt = document.querySelector('#altura');
  var pes = document.querySelector('#peso');
  var res = document.querySelector('#resultado');
  var tabela = document.querySelectorAll('.indices');

  var nome = name.value;
  var altura = Number(alt.value);
  var peso = Number(pes.value);

  var imc = parseFloat((peso / (altura * altura)));


  if (nome.length == 0 || altura <= 0 ||peso <= 0) {
    alert("Informe valores corretos");
    res.innerHTML = "";
    tabela[0].style.backgroundColor = '#FFF';
    tabela[1].style.backgroundColor = '#FFF';
    tabela[2].style.backgroundColor = '#FFF';
    tabela[3].style.backgroundColor = '#FFF';
    tabela[4].style.backgroundColor = '#FFF';
    tabela[5].style.backgroundColor = '#FFF';
    tabela[6].style.backgroundColor = '#FFF';
    limparInput();
  
  } else if (imc < 17) {

    res.innerHTML = `Olá, ${nome}! Seu IMC é : ${imc.toFixed(2)} e está marcado na tabela`;
    tabela[0].style.backgroundColor = '#A0E7E5';
    tabela[1].style.backgroundColor = '#FFF';
    tabela[2].style.backgroundColor = '#FFF';
    tabela[3].style.backgroundColor = '#FFF';
    tabela[4].style.backgroundColor = '#FFF';
    tabela[5].style.backgroundColor = '#FFF';
    tabela[6].style.backgroundColor = '#FFF';
    limparInput();
    
    
  } else if (imc >= 17 && imc < 18.40) {

    res.innerHTML = `Olá, ${nome}! Seu IMC é : ${imc.toFixed(2)} e está marcado na tabela`;
    tabela[1].style.backgroundColor = '#A0E7E5';
    tabela[0].style.backgroundColor = '#FFF';
    tabela[2].style.backgroundColor = '#FFF';
    tabela[3].style.backgroundColor = '#FFF';
    tabela[4].style.backgroundColor = '#FFF';
    tabela[5].style.backgroundColor = '#FFF';
    tabela[6].style.backgroundColor = '#FFF';
    limparInput();
    

  } else if (imc >= 18.50 && imc < 25) {

    res.innerHTML = `Olá, ${nome}! Seu IMC é : ${imc.toFixed(2)} e está marcado na tabela`;
    tabela[2].style.backgroundColor = '#A0E7E5';
    tabela[0].style.backgroundColor = '#FFF';
    tabela[1].style.backgroundColor = '#FFF';
    tabela[3].style.backgroundColor = '#FFF';
    tabela[4].style.backgroundColor = '#FFF';
    tabela[5].style.backgroundColor = '#FFF';
    tabela[6].style.backgroundColor = '#FFF';
    limparInput();
    

  } else if (imc >= 25 && imc < 30) {

    res.innerHTML = `Olá, ${nome}! Seu IMC é : ${imc.toFixed(2)} e está marcado na tabela`;
    tabela[3].style.backgroundColor = '#A0E7E5';
    tabela[0].style.backgroundColor = '#FFF';
    tabela[1].style.backgroundColor = '#FFF';
    tabela[2].style.backgroundColor = '#FFF';
    tabela[4].style.backgroundColor = '#FFF';
    tabela[5].style.backgroundColor = '#FFF';
    tabela[6].style.backgroundColor = '#FFF';
    limparInput();
    

  } else if (imc >= 30 && imc < 35) {

    res.innerHTML = `Olá, ${nome}! Seu IMC é : ${imc.toFixed(2)} e está marcado na tabela`;
    tabela[4].style.backgroundColor = '#A0E7E5';
    tabela[0].style.backgroundColor = '#FFF';
    tabela[1].style.backgroundColor = '#FFF';
    tabela[3].style.backgroundColor = '#FFF';
    tabela[2].style.backgroundColor = '#FFF';
    tabela[5].style.backgroundColor = '#FFF';
    tabela[6].style.backgroundColor = '#FFF';
    limparInput();
    

  } else if (imc >= 35 && imc < 40) {

    res.innerHTML = `Olá, ${nome}! Seu IMC é : ${imc.toFixed(2)} e está marcado na tabela`;
    tabela[5].style.backgroundColor = '#A0E7E5';
    tabela[0].style.backgroundColor = '#FFF';
    tabela[1].style.backgroundColor = '#FFF';
    tabela[3].style.backgroundColor = '#FFF';
    tabela[4].style.backgroundColor = '#FFF';
    tabela[2].style.backgroundColor = '#FFF';
    tabela[6].style.backgroundColor = '#FFF';
    limparInput();
    

  } else if (imc > 40) {

    res.innerHTML = `Olá, ${nome}! Seu IMC é : ${imc.toFixed(2)} e está marcado na tabela`;
    tabela[6].style.backgroundColor = '#A0E7E5';
    tabela[0].style.backgroundColor = '#FFF';
    tabela[1].style.backgroundColor = '#FFF';
    tabela[3].style.backgroundColor = '#FFF';
    tabela[4].style.backgroundColor = '#FFF';
    tabela[5].style.backgroundColor = '#FFF';
    tabela[2].style.backgroundColor = '#FFF';
    limparInput();
    
  }
}