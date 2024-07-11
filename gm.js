alert ('seja bem vindo ao sistema de cadastro de funcionario')
 var funcionario = []

 while(true){
    alert('1 - cadrasta funcionario\n2 - mostrar funcionario\n3 excluir funcionario\n4 - sair')
    var opção = prompt('escolha uma opção:')
    if(opção == '1'){
        var nome = prompt ('digite seu nome do funcionario')
        var idade = prompt('digite a sua idade do funcionario')
        var email = prompt('digite o seu email do funcionario')
          funcionario.push(nome)
    }
    
else if(opção == 2){
    funcionario.forEach(function(dados){
        alert(dados)
    })
}
else{  
    alert('saiu')
     break
}

 }
 
