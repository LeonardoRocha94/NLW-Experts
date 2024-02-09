const perguntas = [
    {
      pergunta: 'O que significa JavaScript?',
      respostas: [
        'Just Style Sheets',
        'Java Styled Markup',
        'JavaScript é uma linguagem de programação de alto nível'
      ],
      correta: 2
    },
    {
      pergunta: 'Qual palavra-chave é usada para declarar variáveis constantes?',
      respostas: [
        'let',
        'var',
        'const'
      ],
      correta: 2
    },
    {
      pergunta: 'O que é um array em JavaScript?',
      respostas: [
        'Um tipo de dado que representa uma única peça de informação',
        'Uma coleção ordenada de valores',
        'Uma função que manipula dados'
      ],
      correta: 1
    },
    {
      pergunta: 'Como você faz um comentário de linha única em JavaScript?',
      respostas: [
        '// Comentário',
        '/* Comentário */',
        '-- Comentário'
      ],
      correta: 0
    },
    {
      pergunta: 'O que é o DOM em JavaScript?',
      respostas: [
        'Documento Orientado a Modelos',
        'Data Object Model',
        'Documento Objeto Modelo'
      ],
      correta: 2
    },
    {
      pergunta: 'Qual é a finalidade do operador "+" em JavaScript?',
      respostas: [
        'Concatenar strings',
        'Multiplicar números',
        'Dividir variáveis'
      ],
      correta: 0
    },
    {
      pergunta: 'O que é um callback em JavaScript?',
      respostas: [
        'Uma função passada como argumento para outra função',
        'Um método de loop',
        'Um tipo de variável'
      ],
      correta: 0
    },
    {
      pergunta: 'Qual método é usado para converter uma string em um número inteiro?',
      respostas: [
        'parseInt()',
        'stringToInteger()',
        'toInteger()'
      ],
      correta: 0
    },
    {
      pergunta: 'Qual é o resultado da expressão 5 + "5" em JavaScript?',
      respostas: [
        '55',
        '10',
        'Erro'
      ],
      correta: 0
    },
    {
      pergunta: 'Qual é a finalidade do operador "+" em JavaScript?',
      respostas: [
        'Concatenar strings',
        'Multiplicar números',
        'Dividir variáveis'
      ],
      correta: 0
    }
  
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal =document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' +  totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
   const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent = item.pergunta
  
   for(let resposta of item.respostas) {
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.respostas.indexOf(resposta)
     dt.querySelector('input').onchange = (Event) => {
       const estaCorreta = event.target.value == item.correta
  
       corretas.delete(item)
       if(estaCorreta) {
         corretas.add(item)
       }
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
     }
  
     
     
     
     quizItem.querySelector('dl').appendChild(dt)
  
   }
  quizItem.querySelector('dl dt').remove()
  
   //Coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
  