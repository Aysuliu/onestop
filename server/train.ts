// // TASK ZJ:
// function reducedNestedArray(arr: any[]): number {
//   let sum = 0;
//   for(const i of arr) {
//     if(Array.isArray(i)) {
//       sum += reducedNestedArray(i);
//     } else {
//       sum += i;
//     }
//   }
//   return sum;
// };

// console.log(reducedNestedArray([1, [1, 2,[4]]]));
// console.log(reducedNestedArray([1, [1, 2,[1]], 3]));
// console.log(reducedNestedArray([1, [1, 2,[1]], 3, [1, 2,[1]]]));



// TASK ZK
function printNumbers(): void {
    let cnt = 1;
    const interval = setInterval(() => {
        console.log(cnt);
        if(cnt === 5) {
            clearInterval(interval);
        }
        cnt++;
    }, 1000);
}

console.log(printNumbers());