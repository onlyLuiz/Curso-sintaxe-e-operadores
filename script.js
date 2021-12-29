
function numeros(n1, n2){
    if(!n1 || !n2) return "Você deve informar dois números!"; // Retorna mensagem se não for inserido nem um valor
    
        
    const primeiraFrase = criaPrimeiraFrase(n1, n2);
    const segundaFrase = criarSegundaFrase(n1, n2);
    
    return `${primeiraFrase}${segundaFrase}` // Retornando o resultado
}
// Retornando primeira frase com o resultado
function criaPrimeiraFrase(n1, n2) {
    let iguais = '';
    if(n1 !== n2){
    iguais = 'não';
}
    return `Os numeros ${n1} e ${n2} ${iguais} são iguais.`;
}
// Retornando segunda frase com o resultado
function criarSegundaFrase(n1,n2) {
    const soma = n1 + n2; // Função soma
        
    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const comparacao10 = soma > 10;// Se maior que 10
    const comparacao20 = soma > 20; // Se maior que 20
    
    if(comparacao10) {
        resultado10 = 'maior';
    }
    if(comparacao20) {
        resultado20 = 'maior';
    }
    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20. `;
}   
    console.log(numeros(15, 5));    

