'use strict';

const weights = [3, 4, 5, 8, 9];
const prices = [1, 6, 4, 7, 6];

const S = [];
function generateSum(weight, price, maxWeight) {

    let n = weights.length;

    for (let i = 0; i <= maxWeight; i++) {
        S[i] = new Array(n + 1).fill(0);
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= maxWeight; j++) {
            if (weights[i - 1] <= j) {
                S[j][i] = Math.max(S[j][i - 1], S[j - weights[i - 1]][i - 1] + prices[i - 1]);
            } else {
                S[j][i] = S[j][i - 1];
            }

        }
    }
    const maxCost = S[maxWeight][n];
    console.log(`Cost counted successfully`);
    return maxCost;
}


const cost = generateSum(weights, prices, 13);
console.log(cost);
console.log(S);