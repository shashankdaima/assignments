/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const beforeComputation = new Date();
    const beforeComputationInSeconds = Math.floor(beforeComputation.getTime() / 1000);
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += i;
    }
    const afterComputation = new Date();
    const afterComputationInSeconds = Math.floor(afterComputation.getTime() / 1000);

    return afterComputationInSeconds - beforeComputationInSeconds;
}
// console.log(calculateTime(4567758909)); //~~ 5 seconds.