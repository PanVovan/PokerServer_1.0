'use strict';

function CardCompare(firstCard, secondCard) {
    let rankComparison = (firstCard.getRank() < secondCard.getRank()) ? -1 : ((firstCard.getRank() == secondCard.getRank()) ? 0 : 1);
    return rankComparison != 0 ? rankComparison : (firstCard.getSuit() < secondCard.getSuit()) ? -1 : ((firstCard.getSuit() == secondCard.getSuit()) ? 0 : 1);
}