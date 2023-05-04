function exercicio1(){
/*Crie uma função que recebe 3 notas de um aluno por parâmetro e
uma letra. Se a letra for A a função deve calcular a média aritmética,
se for P, a média ponderada (peso: 5, 3 e 2).*/

    function calcularMedia(nota1, nota2, nota3, letra){

        let media = 0;

        switch(letra){
            case 'A':
                media = (nota1+nota2+nota3)/3;
            break;

            case 'P':
                media = (nota1*5+nota2*3+nota3*2)/10;
            break

            default:
                console.log('A letra digitada não é uma opção válida.');
        }

        return media;
    }

    let media = calcularMedia(8, 7, 6, 'P');

    console.log(media);

    media = calcularMedia(8, 7, 6, 'A');

    console.log(media);
}

function exercicio2(){
/*Crie uma função que recebe um valor inteiro e retorne verdadeiro se
for ímpar ou falso se for par.*/

    function verificarImpar(int){
        if(int%2===1){
            return true;
        }else{
            return false;
        }
    }

    let resultadoImpar = verificarImpar(3);

    if(resultadoImpar===true){
        console.log(`O número passado como parâmetro é ímpar.`);
    }else if(resultadoImpar===false){
        console.log(`O número passado como parâmetro é par.`);
    }
}

function exercicio3(){
/*Crie uma função que recebe por parâmetro um valor inteiro e
positivo e retorne verdadeiro se o número for primo ou falso se não
for.*/

    function isPrime(int){
        let isPrime = true;

        for(let i=2;i<int;i++){
            if(int%i===0){
                isPrime=false;
            }
        }

        return isPrime;
    }

    let Primo = isPrime(17);

    if(Primo){
        console.log(`O número passado por parâmetro é primo.`);
    }else{
        console.log(`O número passado por parâmetro não é primo.`);
    }
}

function exercicio4(){
/*Crie uma função que recebe por parâmetro o tempo de duração de
uma fábrica expressa em segundos e retorna esse tempo em horas,
minutos e segundos.

Ex:
Entrada: 3672
Saída: 1:1:12*/

    let hora = 0;
    let minuto = 0;
    let segundo = 0;

    function converterSegundos(segundos){

        if(segundos>=3600){
            hora = Math.floor(segundos/3600);
            segundos = segundos-(hora*3600);
            if(segundos>=60&&segundos<=3600){
                minuto = Math.floor(segundos/60);
                segundos = segundos-(minuto*60);
                if(segundos<60){
                    segundo = segundos;
                }
            }
        }else if(segundos>=60&&segundos<=3600){
            minuto = Math.floor(segundos/60);
            segundos = segundos-(minuto*60);
            if(segundos<60){
                segundo = segundos;
            }
            }else if(segundos<60){
                segundo = segundos;
            }      
    }

    converterSegundos(3672);

    console.log(`${hora}:${minuto}:${segundo}`);
}

function exercicio5(){
/*Crie uma função que recebe um valor inteiro e retorne verdadeiro se
é um valor perfeito ou falso se não for. Um valor é dito perfeito quando 
ele é igual a soma dos seus divisores excetuando ele próprio.*/
    
    let sum = 0
    
    function findPerfectNumber(number){
       
        for(let i = 1; i < number; i++){
            if(number % i === 0){
            sum += i
            }
        }

        if(sum === number){
            return true
        }else{
            return false;
        }

    }

    let resultado = findPerfectNumber(6);
    console.log(resultado)
}

function exercicio6(){
/*Crie uma função chamada acessoAoSite() que não tenha
parâmetro. Esta função será chamada ao abrir a página e mostrará
um alerta informando “Bem vindo ao site”.*/

    function acessoAoSite(){
        console.log('Bem-vindo ao site.');
    }
    
    acessoAoSite();

}

function exercicio7(){
/*Crie uma função chamada mostrarMensagem() que não tenha
parâmetro. Esta função será chamada ao abrir a página e mostrará
uma mensagem no console.log() informando “Acesso à aplicação
NomeAplicação” e um alerta informando “Bem vindo à aplicação
NomeApliação”. Sendo que o nome da aplicação deve ser salvo em
uma variável para mostrar nas mensagens.*/

let aplicacao = "Aplicação";

    function mostrarMensagem(){
    
    console.log(`Acesso à aplicação ${aplicacao}.`);
    
    alert(`Bem-vindo à aplicação ${aplicacao}.`)
    }
    
    mostrarMensagem();
}

function exercicio8(){
/*Crie uma função chamada mostrarDobro(num), que recebe um
parâmetro sendo um número inteiro. Esta função será chamada ao
abrir a página e mostrará um alerta com o resultado. Exemplo: “O
dobro do número 5 é 10.”*/

function mostrarDobro(num){
    alert(`O dobro de ${num} é: ${2 * num} `)
}
mostrarDobro(6);
}

function exercicio9(){
/*Crie uma função chamada calcularMedia(nota1, nota2, nota3,
nome), que recebe 4 parâmetros sendo três inteiros e um texto
(String). Esta função será chamada ao abrir a página e mostrará um
alerta com a média. Exemplo: “João, sua média é 70.” A função
também deve mostrar no console.log() as notas recebidas. Exemplo
“Nota 1: 60,Nota 2: 70,Nota 3: 80”.*/

    
    calcularMedia(7, 9, 6, 'João');
    
    function calcularMedia(nota1, nota2, nota3, nome){
        
        let media = (nota1+nota2+nota3)/3;
        console.log(`Nota 1: ${nota1}.`);
        console.log(`Nota 2: ${nota2}.`);
        console.log(`Nota 3: ${nota3}.`);
        console.log(`${nome} sua média é ${media}.`);
    }
    
   
}

