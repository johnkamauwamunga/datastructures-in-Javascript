// function diagonalDifference(arr) {
//     let n = arr.length;
//     let primaryDiagonalSum = 0;
//     let secondaryDiagonalSum = 0;

//     // Calculate the sum of the primary diagonal
//     for (let i = 0; i < n; i++) {
//         primaryDiagonalSum += arr[i][i];
//     }

//     // Calculate the sum of the secondary diagonal
//     for (let i = 0; i < n; i++) {
//         secondaryDiagonalSum += arr[i][n - 1 - i];
//     }

//     // Return the absolute difference between the sums of the diagonals
//     return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
// }

// Example usage
let arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

// function matrixFunc(arr){

//    // console.log(arr)
//     const n=arr.length;
//     let primarydiag=0;
//     let secondarydiag= 0;

//     for(let i=0; i < n ; i++){
//      primarydiag =primarydiag+ arr[i][i];
//     }

//  //   console.log(primarydiag);

//     for(let i=0; i<n; i++){
//         secondarydiag=secondarydiag + arr[i][n-1 -i];
//     }

//    // console.log(secondarydiag)

//    return Math.abs(secondarydiag - primarydiag);
// }


//console.log(matrixFunc(arr));
//console.log(diagonalDifference(arr)); // Output: 15



function matrixSum(arr){

    const n=arr.length;

     let primarysum=0;
     let secondary=0

     for(let i=0; i<n; i++){
         primarysum=primarysum+arr[i][i];

     }

     for(let i=0; i< n ; i++){
secondary=secondary + arr[i][n-1 -i]
     }

     return secondary;

}

console.log(matrixSum(arr));