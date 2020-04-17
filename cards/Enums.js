'use strict';

const Rank = Object.freeze({
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10,
    JACK: 11,
    QUEEN: 12,
    KING: 13,
    ACE: 14
});

const Suit = Object.freeze({
    DIAMONDS: 1,
    CLUBS: 2,
    HEARTS: 3,
    SPADES: 4
});

const ClassificationRank  = Object.freeze({
    HIGH_CARD: 1,
    PAIR: 2,
    TWO_PAIR: 3,
    SET: 4,
    WHEEL: 5,
    STRAIGHT: 6,
    FLUSH: 7,
    FULL_HOUSE: 8,
    FOUR_OF_A_KIND: 9,
    STRAIGHT_FLUSH_WHEEL: 10,
    STRAIGHT_FLUSH: 11,
    ROYAL_FLUSH: 12
});