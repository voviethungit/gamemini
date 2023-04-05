// https://www.facebook.com/Benzdapoetvip/ 
var cards = document.querySelectorAll(".card");
var matched = 0;
var cardOne, cardTwo;
var disableDeck = false;
function flipCard(_a) {
    var clickedCard = _a.target;
    if (cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if (!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        var cardOneImg = cardOne.querySelector(".back-view img").src, cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}
function matchCards(img1, img2) {
    if (img1 === img2) {
        matched++;
        if (matched == 8) {
            setTimeout(function () {
                return shuffleCard();
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(function () {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);
    setTimeout(function () {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}
function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(function () { return Math.random() > 0.5 ? 1 : -1; });
    cards.forEach(function (card, i) {
        card.classList.remove("flip");
        var imgTag = card.querySelector(".back-view img");
        imgTag.src = "src/images/img-".concat(arr[i], ".png");
        card.addEventListener("click", flipCard);
    });
}
shuffleCard();
cards.forEach(function (card) {
    card.addEventListener("click", flipCard);
});
