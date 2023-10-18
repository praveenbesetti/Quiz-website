const questions =[{
   question : "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
    
         answers:[
            { text: " 120 metres",correct:false} ,
             {text: " 180 metres " ,correct:false} ,
             {text: "  324 metres" ,correct:false },
             {text: "150 metres " ,correct:true},
         ]
},

      {
        question : " A train 125 m long passes a man, running at 5 km/hr inthe same direction in which the train is going, in 10 seconds. The speed of the train is:",
    
      answers:[
         { text: " 45 km/hr",correct:false} ,
          {text: "  50 km/hr " ,correct:true} ,
          {text: "   50 km/hr" ,correct:false },
          {text: " 55 km/hr"  ,correct:false},
      ]},
      {
        question : "  A, B and C can do a piece of work in 20, 30 and 60 days respectively. In how many days can A do the work if he is assisted by B and C on every third day?",
    
        answers:[
           { text: " 12 days",correct:false} ,
            {text: "   15 days " ,correct:true} ,            
            {text: "   16 days" ,correct:false },
            {text: "  18 days"  ,correct:false},
        ]},
        { 
            question : " A alone can do a piece of work in 6 days and B alone in 8 days. A and B undertook to do it for Rs. 3200. With the help of C, they completed the work in 3 days. How much is to be paid to C?",
    
            answers:[
               { text: " Rs. 375",correct:false} ,
                {text: "  Rs. 400" ,correct:true} ,             
                {text: "   Rs. 600" ,correct:false },
                {text: "  Rs. 800"  ,correct:false},
            ]
          },  
            {
              question : "Two students appeared at an examination. One of them secured 9 marks more than the other and his marks was 56% of the sum of their marks. The marks obtained by them are:",
    
            answers:[
               { text: "  39, 30",correct:false} ,
                {text: " 41, 32" ,correct:false} ,             
                {text: " 42, 33" ,correct:true },
                {text: "43, 34"  ,correct:false},
            ]
          },
               {
              question : " A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had:",
    
            answers:[
               { text: "  588 apples",correct:false} ,
                {text: "600 apples" ,correct:false} ,             
                {text: "672 apples" ,correct:false },
                {text: "700 apples"  ,correct:true},
            ]
      },
      {
        question : "A sum of money is to be distributed among A, B, C, D in the proportion of 5 : 2 : 4 : 3. If C gets Rs. 1000 more than D, what is B's share?",

      answers:[
         { text: " Rs. 500",correct:false} ,
          {text: "Rs. 1500" ,correct:false} ,             
          {text: "Rs. 2000" ,correct:true },
          {text: "None of these"  ,correct:false},
      ]
},              
{
  question : " Seats for Mathematics, Physics and Biology in a school are in the ratio 5 : 7 : 8. There is a proposal to increase these seats by 40%, 50% and 75% respectively. What will be the ratio of increased seats?",
answers:[
   { text: "2 : 3 : 4 ",correct:true} ,
    {text: "  6 : 7 : 8" ,correct:false} ,             
    {text: "6 : 8 : 9" ,correct:false},
    {text: "None of these"  ,correct:false},
]
},
{ 
question : " In the first 10 overs of a cricket game, the run rate was only 3.2. What should be the run rate in the remaining 40 overs to reach the target of 282 runs?",
answers:[
   { text: " 6.25  ",correct:true} ,
    {text: "  6.5" ,correct:false} ,             
    {text: "6.75" ,correct:false },
    {text: "7"  ,correct:false},
]
},
{
question : " A grocer has a sale of Rs. 6435, Rs. 6927, Rs. 6855, Rs. 7230 and Rs. 6562 for 5 consecutive months. How much sale must he have in the sixth month so that he gets an average sale of Rs. 6500?",
answers:[
   { text: " Rs. 4991 ",correct:true} ,
    {text: "Rs. 5991 " ,correct:false} ,             
    {text: "Rs. 5991 " ,correct:false },
    {text: "Rs. 6991"  ,correct:false},
]
} ];

 const questionElement =document.getElementById("question");
 const answerButton =document.getElementById("answer-buttons");
 const nextButton =document.getElementById("next-btn");
 

  let currentQuestionIndex =0;
  let score=0;

  function startQuiz()
  {
    currentQuestionIndex =0;
     score=0;
     nextButton.innerHTML ="next";
     showQuestion();
  }
   
  function showQuestion()
    {
       resetState();
       let currentQuestion =questions[currentQuestionIndex];
       let questionNo = currentQuestionIndex +1;
       questionElement.innerHTML =questionNo+ " ." +currentQuestion.question;

       currentQuestion.answers.forEach(answer =>{
         const button =document.createElement("button");
         button.innerHTML =answer.text;
         button.classList.add("btn");
         answerButton.appendChild(button);
         if(answer.correct)
         {
          button.dataset.correct=answer.correct;
         }
         button.addEventListener("click" , selectAnswer);
       });
    } 
            function resetState()
    {
     nextButton.style.display ="none";
     while(answerButton.firstChild)
     {
       answerButton.removeChild(answerButton.firstChild);
     }
    }

    function selectAnswer(e)
    {
      const selectedBtn =e.target;
      const iscorrect =selectedBtn.dataset.correct ==="true";
      if(iscorrect)
      {
        selectedBtn.classList.add("correct")
        score++;
      }
      else{
        selectedBtn.classList.add("incorrect")
      }
      Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
          
        }
        button.disabled =true;
      });
      nextButton.style.display = "block";
    }
        function handleNextButton()
        {
          currentQuestionIndex++;
          if(currentQuestionIndex<questions.length)
           showQuestion();
           else{
              showscore();
           }
        }
       
        function showscore()
        {
          resetState();
          
          questionElement.innerHTML="your score"+"   " +score+"   " +"for"+"  "+ questions.length;
          nextButton.innerHTML="play Again";
          nextButton.style.marginTop ="10px";
          nextButton.style.display="block";
         
        }

    nextButton.addEventListener("click" ,()=>{
      if(currentQuestionIndex <questions.length){
        handleNextButton();
      }
      else{
        startQuiz();
      }
    })
    startQuiz();
  
  
    

     




             


 
 



