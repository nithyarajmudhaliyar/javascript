let count = 0;

function cc(card) {
  // Increase count for low cards
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count++;
  }
  // Do nothing for neutral cards: 7, 8, 9
  else if (card === 7 || card === 8 || card === 9) {
    // count unchanged
  }
  // Decrease count for high cards
  else {
    count--;
  }

  // Decide Bet or Hold
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
