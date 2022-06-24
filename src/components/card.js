import { icons } from './images';
 export const cards = [

     { 
         className:'work fylo',
         link:'https://fylo-coral-psi.vercel.app/',
         title:"fylo",
         img: icons.github,
         links:'https://github.com/Chifez/fylo',
         animate:"fade-up-left",
         tools:[
            "react","tailwindcss","firebase"
         ],
         description: "Fylo is a simple storage application,that was coined out from building a simple landing page design into a full apllication"
     },
     {
        className:'work weatherApp',
        link:'https://weatherapp-ten-delta.vercel.app/',
        title:"weatherApp",
        img: icons.github,
        links:'https://github.com/Chifez/weatherapp',
        animate:"fade-up-right",
        tools:[
           "react","CSS"
        ],
        description: "A weather apllication that uses a 2 way data fetching system,on initial render it gets the location of its user using the Geolaction API and renders the weather data,also users can search by inputing the desired location"
    },
    {
        className:' work Todo_app',
        link:'#',
        title:"Todo app",
        img: icons.github,
        links:'',
        animate:"fade-up-left",
        tools:[
           "react","CSS"
        ],
        description: "A markdown enabled note taking application, that has an edit and preview section, users can create,delete and update notes"
    },
    {
        className:'work Expense_tracker',
        link:'https://expense-tracker-livid-eight.vercel.app/',
        title:"Expense tracker",
        img: icons.github,
        links:'https://github.com/Chifez/expense-tracker',
        animate:"fade-up-right",
        tools:[
           "javascript","CSS","HTML"
        ],
        description: "A basic Application that can be used to track incomes and spendings"
    },
    {
        className:'work tic_tac_toe',
        link:'https://tic-tac-toe-chifez.vercel.app/',
        title:"Tic tac toe",
        img: icons.github,
        links:'https://github.com/Chifez/tic-tac-toe',
        animate:"fade-up-left",
        tools:[
           "javascript","CSS","HTML"
        ],
        description: "A fun tic-tac-toe web apllication with a good UI"
    },
    {
      className:'work guessing_game',
      link:'https://guess-it.vercel.app/',
      title:"guessing game",
      img: icons.github,
      links:'https://github.com/Chifez/guess-it',
      animate:'fade-up-right',
      tools:[
         "javascript","CSS","HTML"
      ],
      description: "A simple guessing game where users are given 20 tries to guess a secret number"
  },
 ]