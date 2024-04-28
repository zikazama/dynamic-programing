function coinCombinations(coins, total) {
  const dp = new Array(total + 1).fill(0);
  dp[0] = 1; // 1 cara untuk total 0

  for (const coin of coins) {
    for (let i = coin; i <= total; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[total];
}

const coins = [1, 5, 10, 25, 50, 100];
const total = 269;
console.log(
  "Banyak kombinasi koin untuk 269 adalah:",
  coinCombinations(coins, total)
);
