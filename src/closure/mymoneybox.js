// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`Money in the box: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(10);


function moneyBox() {
  let savCoins = 0;

  function countCoins(coins) {
    savCoins += coins;
    console.log(`Money in the box: $${savCoins}`);
  }

  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(10);

const moneyBoxAna = moneyBox();
moneyBoxAna(5);
moneyBoxAna(10);