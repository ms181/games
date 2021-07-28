document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    
    {
      name:'1',
      img:'images/1.png'
    },
    {
      name:'1',
      img:'images/1.png'
    },
    {
      name:'2',
      img:'images/2.png'
    },
    {
      name:'2',
      img:'images/2.png'
    },
    {
      name:'3',
      img:'images/3.png'
    },
    {
      name:'3',
      img:'images/3.png'
    },
    {
      name:'4',
      img:'images/4.png'
    },
    {
      name:'4',
      img:'images/4.png'
    },
    {
      name:'5',
      img:'images/5.png'
    },
    {
      name:'5',
      img:'images/5.png'
    },
    {
      name:'6',
      img:'images/6.png'
    },
    {
      name:'6',
      img:'images/6.png'
    }
    
    ]
    
    
    
    
    
    
  const grid = document.querySelector('.items');
  const resultDisplay = document.querySelector('#result');
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

   resultDisplay.textContent = 0;

 function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.classList.add('image' , i);
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    cardArray.sort(() => 0.5 - Math.random());
    }
  }




function checkForMatch(){
  const cards = document.querySelectorAll('img');
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  
    if(optionOneId == optionTwoId){
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }
    
    
    
    
    else if (cardsChosen[0] === cardsChosen[1]) {
    
    cards[optionOneId].setAttribute('src', 'images/white.png');
    cards[optionTwoId].setAttribute('src', 'images/white.png');
    cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
    cardsWon.push(cardsChosen);
  }
  
  else{
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
  }
  
  cardsChosen = []
  cardsChosenId = []
  
  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = '>>';
    setTimeout(function() {
      i = timeCount;
      i -= 5;
      timeCount = i;
      grid.innerHTML = '';
      createBoard();
      cardsWon = [];
      cardsWon = [];
      cardsChosenId = [];
      cardsChosen = [];
    }, 10);
  }
}


function flipCard(){
  var cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute('src', cardArray[cardId].img)
  
  if(cardsChosen.length === 2){
    setTimeout(checkForMatch, 250);
  }
}



timeCount = 30;
levelCount = 0;



var levelArea = document.querySelector('#level');

setInterval(function(){
  if (timeCount == 30) {
  levelCount = 1;
}
else if (timeCount == 25){
  levelCount = 2;
}
else if (timeCount == 20){
  levelCount = 3;
}
else if (timeCount == 15){
  levelCount = 4;
}
else if (timeCount == 10){
  levelCount = 5;
}
  levelArea.innerHTML = levelCount;
if (timeCount < 10) {
  alert('you won');
  timeCount = 30;
  i = timeCount;
  timeCount = i;
  grid.innerHTML = '';
      createBoard();
      cardsWon = [];
      cardsWon = [];
      cardsChosenId = [];
      cardsChosen = [];
  
}
},10)
  



createBoard();


i = timeCount;
  

setInterval(function() {
  
  document.querySelector('#time-left').innerHTML = i;
  i--;
  
  if (i < 1) {
    alert('you lose');
    i = 30;
    cardArray.sort(() => 0.5 - Math.random());
    grid.innerHTML = '';
    cardsWon = [];
    cardsChosenId = [];
    cardsChosen = [];
    createBoard();
  }
}, 1000);

 const wonBoard = document.getElementById('wonBoard');




  
  
  
  
});



