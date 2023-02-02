# <p align = "center"> Track it </p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Mateus Gueler-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/MatGueler/projeto10-trackit?color=4dae71&style=flat-square" />
</p>

## :clipboard: Descrição

O **TrackIt** é um projeto para o usuário controlar os seus hpabitos diários. O usuário pode criar ou apagar um hábito, informando os dias específicos para realiza-lo, além disso consegue marcar os hábitos já realizados e hábitos que ainda faltam.

## :computer: Tecnologias e Conceitos

- REST APIs
- Node.js (v16.17.0)
- JavaScript
- React
- Vercel

---

## :rocket: Rotas

```yml
Endpoint: '/'
    - Rota para o usuário fazer login com sua conta
```

```yml
Endpoint: '/cadastro'
    - Rota para o usuário criar sua conta
```

```yml
Endpoint: '/hoje (autenticada)'
    - Rota onde o usuário pode controlar todos os seus hábitos do dia
```

```yml
Endpoint: '/habitos (autenticada)'
    - Rota para criar e apagar hábitos do usuário
```

```yml
Endpoint: '/historico (autenticada)'
    - Rota para observar o histórico de hábitos do usuário
```

---

## 🏁 Rodando a aplicação

-Deploy

A aplicação front-end está disponível em deploy na plataforma [VERCEL](https://vercel.com), basta acessar o link abaixo:

[Track it](https://projeto10-trackit-puce.vercel.app/)

- Local

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app), portanto, certifique-se de ter a última versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, clone este repositório em sua máquina:

```
git clone git@github.com:MatGueler/projeto10-trackit.git
```

Em seguida, dentro da pasta, execute o seguinte comando para instalar as dependências.

```
npm install
```

Terminado o processo, basta iniciar a aplicação:

```
npm run start
```
