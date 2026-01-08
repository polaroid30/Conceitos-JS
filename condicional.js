// Calculo de Soma, Media e Aprovacao de Alunos
let nota1 = 8
let nota2 = 7

let soma = (nota1 + nota2);
let media = (soma / 2)

if( media >= 7){
    console.log("Aluno Aprovado: " + media);
}else if(media <= 3){  
    console.log("Aluno Reprovado: " + media)
}else{
    console.log("Aluno de Recuperação: " + media)
}

//Verificar Idade

let idade = 70

if(idade <= 17){
    console.log("Menor De Idade")
}else if(idade >= 60){
    console.log("Idoso")
}else{
    console.log("Maior de idade")
}

// Login Basico

let user = "admin"
let passwoard = "1234"

let userDigitado = "admin"
let passwoardDigitada = "12345"

if(userDigitado === user && passwoardDigitada === passwoard){
    console.log("Login Autorizado")
}


else if(userDigitado === user && passwoardDigitada !== passwoard){
    console.log("Senha Incorreta")
}

else{
    console.log("Usuario Invalido")
}

// Numero maior 

let a = 1;
let b = 1;
let c = 1;

if(a > b && a > c){
    console.log("O elemento A é o maior numero")
}else if(b > a && b > c){
    console.log("O elemento B é o maior numero")
}else if(c > a && c > b){
    console.log("O elemento C é o maior numero")
}else{
    console.log("Empate de numeros")
}


// Classificar nota

let nota = 7

if(nota <= 3 ){
    console.log("Pessimo")
}
else if(nota <= 5 ){
    console.log("Ruim")
}
else if(nota <= 7){
    console.log("Regular")
}
else if(nota <= 9){
    console.log("Bom")
}  
else if(nota <= 10){
    console.log("Excelente")
}
else{
    console.log("Nota Invalida")
}

//Sistema de Multas

let velocidade = 80
let limite = 60



