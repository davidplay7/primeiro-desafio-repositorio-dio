/* 
//ex1

const david = {
	nome:"David Sousa",
	idade: "26", 
	

//funcao dentro do objeto e um metodo

	endereco: function (){
		return ('rua 1');
	}
}
console.log (david.nome+'\n'+david.idade+'\n'+david.endereco());
*/

/*
//ex2

const david = {
	
}

david.altura = 1.77;

console.log(david);
*/

/*

//ex3

const david = {
	curso: "inglês"
}

delete david.curso;

console.log (david);

*/

/*
const pesso = {
	nome:"David Sousa",
	idade: "26", 
	

//funcao dentro do objeto e um metodo

	descricao: function (){
		
		//this palavra reservada pra chamar uma variavel do objeto 
		
		console.log (`Meu nome é ${this.nome} é minha idade é ${this.idade}`);
	}
}

pessoa.descricao();

*/

/*

const pessoa = {
	nome:"David Sousa",
	idade: "26", 
	

//funcao dentro do objeto e um metodo

	descricao: function (){
		
		//this palavra reservada pra chamar uma variavel do objeto 
		
		console.log (`Meu nome é ${this.nome} é minha idade é ${this.idade}`);
	}
}

const atributo = 'idade';

//acessando nao diretamente

console.log(pessoa[atributo]);

*/

//classe

/*
class Pessoa {
	nome;
	idade;
	
	//metodo
	descrever(){
		console.log (`Meu nome é ${this.nome} é minha idade é ${this.idade}`);
	}
};

const david = new Pessoa();
david.nome = 'David';
david.idade = 26;

david.descrever ();

*/

/*

class Pessoa {
	nome;
	idade;
	anoDeNascimento;
	
	constructor(nome,idade){
		this.nome = nome;
		this.idade = idade;
		this.anoDeNascimento = 2022 - idade;
	}
	
	//metodo
	descrever(){
		console.log (`Meu nome é ${this.nome} é minha idade é ${this.idade}`);
	}
};

const david = new Pessoa('David', 26);

console.log(david);

*/

/*
class Pessoa {
	nome;
	idade;
	anoDeNascimento;
	
	constructor(nome,idade){
		this.nome = nome;
		this.idade = idade;
		this.anoDeNascimento = 2022 - idade;
	}
	
	//metodo
	descrever(){
		console.log (`Meu nome é ${this.nome} é minha idade é ${this.idade}`);
	}
}

const david = new Pessoa('David', 26);
const joao = new Pessoa('Joao', 15);

console.log(david);
console.log(joao);

*/

/*

class Pessoa {
	nome;
	idade;
	anoDeNascimento;
	
	constructor(nome,idade){
		this.nome = nome;
		this.idade = idade;
		this.anoDeNascimento = 2022 - idade;
	}
	
	//metodo
	descrever(){
		console.log (`Meu nome é ${this.nome} é minha idade é ${this.idade}`);
	}
};

function compararPessoas(p1, p2){
	
if (p1.idade > p2.idade){
		console.log (`${p1.nome} é mais velho que ${p2.nome}`);
	} else if (p1.idade < p2.idade){
		console.log (`${p2.nome} é mais velho que ${p1.nome}`);
	} else {
		console.log (`${p1.nome} tem a mesma idade de ${p2.nome}`);
	}
	
};

const david = new Pessoa('David', 26);
const joao = new Pessoa('Joao', 15);

compararPessoas (david, joao);

*/

/*
const dev = {
        nome: 'Renan',
        linguagemPreferida: 'JavaScript'
    };

    console.log(dev.linguagemPreferida);
    
    */
    
    
 /*   

class Pessoa { 
	nome; 
	idade; 
	constructor(nome, idade) { 
		this.nome = nome; 
		this.idade = idade; 
		} } 
		function descreverPessoa(pessoa) { 
			console.log(`Nome: ${pessoa.nome}; Idade: ${pessoa.idade};`); 
			} 
			const renan = new Pessoa('Renan', 30); console.log(descreverPessoa(renan));

*/

/*
class Pessoa { 
	nome; idade; constructor(nome, idade) { 
		this.nome = nome; this.idade = idade; 
		} 
		descrever() { 
			console.log(`Nome: ${this.nome}; Idade: ${this.idade};`); 
			} } 
			new Pessoa('Renan', 30).descrever();

*/


