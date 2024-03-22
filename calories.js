
 //***************************** */ part 1   ***************************************************/

const fs = require('fs');

const ln = fs.readFileSync('./calories.txt', 'utf-8').trim().split('\n');

//console.log(ln);
const groups=[];

let currentgroup=[];

for(const line of ln){

    if(line.trim()===''){
        groups.push(currentgroup);

        currentgroup=[];
    }else{
        currentgroup.push(parseInt(line));
    }
}
 groups.push(currentgroup);

 //console.log(groups);

 let maxsubgroup

 let maxsum =-1

 for (const group1 of groups) {
    const subgroupSum = group1.reduce((sum, value) => sum + value, 0);

   
    if (subgroupSum > maxsum) {
        maxsum = subgroupSum;
        maxsubgroup = group1;
    }
}

//console.log('Group with Greatest Sum:', maxsubgroup);
console.log('Part 1 \n Greatest Sum:', maxsum);

// greatest amt of calories is 66616



 //***************************** */ part 2   ***************************************************/

const subgroupSum = groups.map(group => group.reduce((sum, value) => sum + value, 0));

  // Initialize variables to store the leader subgroups and their sums
let leadergroup = [];
let totalLeaderSum = 0;

// Repeatedly find the top subgroup and add it to the leadergroup
for (let i = 0; i < Math.min(3, groups.length); i++) {
    // Find the index of the subgroup with the maximum sum
    const maxIndex = subgroupSum.indexOf(Math.max(...subgroupSum));

    leadergroup.push(groups[maxIndex]);
    totalLeaderSum += subgroupSum[maxIndex];

  //pop leader sum
    groups.splice(maxIndex, 1);
    subgroupSum.splice(maxIndex, 1);
}

//console.log('Leader Groups:', leadergroup);
console.log('part 2 \n Total Sum of 3 Leader Groups:', totalLeaderSum);

/// leadership groups have calories add up to 199172