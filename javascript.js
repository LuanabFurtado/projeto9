var n = parseInt(prompt('Digite um número (caso ele seja divisível por 2 e seja maior do que 0 e menor que 100 irá atender aos critérios):'));
if(n%2 === 0 && n > 0 && n < 100){
    alert('O número atende aos critérios');
}
else{
    alert('O número não atende aos critérios');
}
