'use strict';

import SortedSet from 'collections/sorted-set';
import Rank from './Enums'
import Suit from './Enums'

function Card (CardNum) {
    switch (CardNum%100) {
        case 2:
            this.rank = Rank.TWO;
            break;
        case 3:
            this.rank = Rank.THREE;
            break;
        case 4:
            this.rank = Rank.FOUR;
            break;
        case 5:
            this.rank = Rank.FIVE;
            break;
        case 6:
            this.rank = Rank.SIX;
            break;
        case 7:
            this.rank = Rank.SEVEN;
            break;
        case 8:
            this.rank = Rank.EIGHT;
            break;
        case 9:
            this.rank = Rank.NINE;
            break;
        case 10:
            this.rank = Rank.TEN;
            break;
        case 11:
            this.rank = Rank.JACK;
            break;
        case 12:
            this.rank = Rank.QUEEN;
            break;
        case 13:
            this.rank = Rank.KING;
            break;
        case 14:
            this.rank = Rank.ACE;
            break;
    }
    switch (CardNum/100) {
        case 1:
            this.suit = Suit.DIAMONDS;
            break;
        case 2:
            this.suit = Suit.CLUBS;
            break;
        case 3:
            this.suit = Suit.HEARTS;
            break;
        case 4:
            this.suit = Suit.SPADES;
            break;
    }
}

Card.prototype.getRank = function (){
    return this.rank;
}

Card.prototype.getSuit = function (){
    return this.suit;
}