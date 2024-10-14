let cardsArr = [
  {
    name: "apple",
    img: "images/apple.png",
  },
  {
    name: "orange",
    img: "images/orange.png",
  },
  {
    name: "banana",
    img: "images/banana.png",
  },
  {
    name: "black grapes",
    img: "images/black.png",
  },
  {
    name: "green grapes",
    img: "images/green.png",
  },
  {
    name: "pineapple",
    img: "images/pineapple.png",
  },
];
let cardsDoubleArr = cardsArr.concat(cardsArr);

// SHuffling the images
let shuffleImages = Array.from(cardsDoubleArr).sort(() => 0.5 - Math.random());
const parentDiv = document.getElementById("card-section");
for (i = 0; i < shuffleImages.length; i++) {
  const childDiv = document.createElement("div");
  childDiv.classList.add("card");
  childDiv.dataset.name = shuffleImages[i].name;
  childDiv.style.backgroundImage = `url(${shuffleImages[i].img})`;

  parentDiv.append(childDiv);
}
let clickCount = 0;
let firstCard = "";
let secondCard = "";

// Matched card
const card_match = () => {
  let match_card = document.querySelectorAll(".selected_div");
  match_card.forEach((curElem) => {
    curElem.classList.add("matchCard");
  });
};

const resetGame = () => {
  clickCount = 0;
  firstCard = "";
  secondCard = "";
  let match_card = document.querySelectorAll(".selected_div");
  match_card.forEach((curElem) => {
    curElem.classList.remove("selected_div");
  });
};

parentDiv.addEventListener("click", (e) => {
  clickCount++;
  if (clickCount < 3) {
    if (clickCount == 1) {
      firstCard = e.target.dataset.name;
      e.target.classList.add("selected_div");
    } else {
      secondCard = e.target.dataset.name;
      e.target.classList.add("selected_div");
    }
    if (firstCard !== "" && secondCard !== "") {
      if (firstCard == secondCard) {
        setTimeout(() => {
          card_match();
          resetGame();
        }, 500);
      } else {
        setTimeout(() => {
          resetGame();
        }, 500);
      }
    }
  }
  if ((e.target.id = "card-section")) {
    parentDiv.classList.remove("selected_div");
  }
});
