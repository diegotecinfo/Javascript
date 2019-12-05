// ALGUMAS DAS PLATAFORMAS QUE UTILIZAM JAVASCRIPT
	GOOGLE
	YOUTUBE
	LINKEDIN
	NETFLIX
	FACEBOOK
	UBER
	PAYPAL

 
// O QUE O JAVASCRIPT FAZ?
 	COM O JAVASCRIPT É POSSIVEL REALIZAR PRATICAMENTE TUDO O QUE VOCÊ DESEJA CRIAR


// CONCEITO DE CLIENTE X SERVIDOR
	UM EXEMPLO PRATICO NO MOMENTO, O NOSSO COMPUTADOR É O CLIENTE E ESTÁ ACESSANDO DADOS DO SERVIDOR DO YOUTUBE PARA ASSISTIR O CURSO DE JAVASCRIPT
	O QUE FAZ A INTERAÇÃO ENTRE CLIENTE X SERVIDOR NO CASO APRESENTADO É O NAVEGADOR, ATRAVÉS DA URL (WWW.YOUTUBE.COM.BR) QUE DIGITAMOS, SOMOS DIRECIONADOS
	PARA UM SERVIDOR ESPECÍFICO


// JAVASCRIPT RODA NO CLIENTE OU NO SERVIDOR?
	O JAVASCRIPT É UMA TECNOLOGIA "CLIENT SIDE", OU SEJA RODA MUITO BEM PARA O CLIENTE
	O MESMO TAMBÉM FUNCIONADO NO LADO DO SERVIDOR PORÉM NÃO É MUITO UTILIZADO DESSA FORMA


// TECNOLOGIAS ENVOLVIDAS EM UM SITE NO LADO DO CLIENTE
	UM SITE É CONSTITUIDO POR TRÊS TECNOLOGIAS QUE FUNCIONAM NO CLIENTE
	
	HTML - RESPONSÁVEL POR TODO CONTÉUDO
	CSS - RESPONSÁVEL PELA FORMATAÇÃO DE TODO CONTÉUDO, PELO DESIGNER, PARA QUE O SITE TENHA UMA LAYOUT AGRADÁVEL PARA QUEM ESTÁ ACESSANDO.
	JAVASCRIPT - RESPONSÁVEL POR TODA A PROGRAMAÇÃO, FUNCIONAMENTO, INTERAÇÕES E COMPORTAMENTO DO SITE

// FRAMEWORKS PARA JAVASCPRIT
	JQUERY
	ANGULAR
	REACT
	VUE
	ELECTRON

// LIVROS PARA TUDO JAVASCRIPT
	JAVASCRIPT O GUIA DEFINITIVO
	JAVASCRIPT GUI DO PROGRAMADOR

// GUIA DE REFERENCIA GRATUITO
	GUIA DA MOZILLA : https://developer.mozilla.org/pt-BR/docs/Web/Reference
	GUIA DA ECMA : https://www.ecma-international.org/publications/standards/Ecma-262-arch.htm

// COMANDOS
	SEMPRE EM LETRAS MINUSCULAS, POIS O MESMO É CASE SENSITIVE

// VARIAVEIS
	O NOME DE CADA VARIAVEL É CHAMADA DE IDENTIFICADOR, E EXISTEM REGRAS PARA ESSES IDENTIFICADORES

	1 - PODEM COMEÇAR COM UMA LETRA, $ OU _ (UNDERLINE)
	2 - NÃO PODEM COMEÇAR COM NUMEROS
	3 - E POSSIVEL UTILIZAR LETRAS E NUMEROS
	4 - E POSSIVEL UTILIZAR ACENTOS E SIMBOLOS
	5 - NÃO PODEM CONTER ESPAÇO
	6 - NÃO PODEM SER PALAVRAS RESERVADAS

	DIRCAS
	- O JAVASCRIPT E CASE SENSITIVE, OU SEJA CARACTERES MINUSCULOS SÃO DIFERENTES DE CARACTERES MINUSCULOS
	- SEMPRE UTILIZAR NOMES COERENTES PARA AS VARIAVEIS

// TIPOS PRIMITIVOS (TIPOS DE VARIAVEIS)
	- NUMBER: SÃO VARIAVEIS QUE ARMAZENAM NUMEROS
	- STRING: SÃO VARIAVEIS QUE ARMAZENAM TEXTOS OU NUMEROS EM FORMA DE TEXTO
	- BOOLEAN: TRUE X FALSE

//COMO CONVERTER STRING PARA NUMBER
	- EXEMPLOS
		var n1 = Number.parseFloat(prompt('Digite um número: ')) //Number.parseFloat converte para números reais, com casas decimais
		var n2 = Number.parseInt(prompt('Digite outro número: ')) //Number.parseInt converte para números inteiros
		var n3 = Number(prompt('Digite outro número: ')) //Number() realiza a conversão e reconhece se o número e inteiro ou real

//CONVERSÃO DE NUMBER PARA STING
	- EXEMPLOS
		String(número que deseja converter)
		número_que_deseja_converter.toString()

//COMO APRESENTAR OS RESULTADOS NA TELA UTILIZANDO VARIAVEIS E PLACEHOLDER
	- EXEMPLO
		var nome = 'Diego'
		var idade = 27
		var nota = 10

		`O aluno ${nome} com ${idade} de idade tiou a nota ${nota}` //utilização do placeholder ao invés de concatenar
		'O aluno Diego com 27 de idade tiou a nota 10' // resultado na tela

//COMO VERIFICAR QUANTOS CARACTERES POSSUI A STRING
		s.length /* o valor "s" é a variável onde está a String .lenghth faz a leitura e contagem dos caracteres*/

//COMO CONVERTER ALGO PARA LETRAS MAIUSCULAS
	s.toUpperCase() /*o valor "s" é a variavel que converter e o .toUpperCase() realiza a conversão*/

//COMO CONVERTER ALGO PARA LETRAS MINUSCULAS
	s.toLowerCase() /*o valor "s" é a variavel que converter e o .toLowerCase() realiza a conversão*/

//ESCREVE NA TELA ALGO QUE VOCÊ DESEJA
	document.write('qualquer informaação')

//FIXAR UMA QUANTIDADE ESPECIFICA DE CASAS DECIMAIS EM NUMEROS NUMBER
	var n1 = 1545.5
	n1.toFixed(2) //o que está entre os parenteses define quantas casas decimais serão exibidas
	n1.toFized(2).replace('.',',') //replace substitiu algum valor por outro neste caso o ponto por virgula.

//COMANDO PARA EXIBIR RESULTADOS COM AS INFORMAÇÕES DO BRASIL OU DE OUTRO PAIS - VALOR MONETÁRIO
	n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
	n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
	n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})

	/* aula 07*/







