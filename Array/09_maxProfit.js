// const max = (arr) => {
//   let max = arr[0];
//   let min = arr[0];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (max < arr[i]) max = arr[i];
//     if (min > arr[i]) min = arr[i];
//   }
//   return { min, max };
// };
// console.log(maxProfit([4,2,5,1,6,9,3]));

function maxProfit(prices) {
    let minPrice = Infinity; // Instead of Math.min()
    let maxProfit = 0;       // Instead of Math.max()

    for (let price of prices) {
        // Manually find the minimum price so far
        if (price < minPrice) {   // Checking if (price < minPrice) is O(1)
            minPrice = price;
        }

        // Manually calculate max profit
        let profit = price - minPrice;
        if (profit > maxProfit) {   // Checking if (profit > maxProfit) is O(1).
            maxProfit = profit;
        }
    }

    return maxProfit;
}

