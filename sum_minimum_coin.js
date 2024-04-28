function minCoins(coins, total) {
  const dp = new Array(total + 1).fill(Infinity);
  dp[0] = 0; // 0 koin untuk total 0

  for (let i = 1; i <= total; i++) {
    for (const coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[total] === Infinity ? -1 : dp[total];
}

const coins = [1, 5, 10, 25, 50, 100];
const total = 269;
console.log("Jumlah minimum koin untuk 269 adalah:", minCoins(coins, total));
