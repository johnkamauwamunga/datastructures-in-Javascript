// part 1

const fs= require('fs');

const ln=fs.readFileSync('./calories.txt', 'utf-8').trim().split('\n');

//console.log(ln);
let groups=[];

let currentgroup=[];

for( const line of ln){
    if(line.trim()===''){
        groups.push(currentgroup);

        currentgroup=[]
    }else{
        currentgroup.push(parseInt(line));
    }
}

groups.push(currentgroup);

//console.log(groups);

let maxsubgroup;

let maxsum=0;

for(const group of groups){

    const subgroupSum=group.reduce((sum, value)=>sum + value, 0);

    if(subgroupSum>maxsum){
        maxsum=subgroupSum;
        maxsubgroup=group
    }
}

console.log('part 1 \n Max sum is',maxsum)

 //***************************** */ part 2   ***************************************************/

 const subgroupSum = groups.map(group => group.reduce((sum, value) => sum + value, 0));

 //console.log('part 2 \n subgroup sum', subgroupSum);

 let maxIndex=0;
 for (let i = 0; i < Math.min(3, groups.length); i++) {
    // Find the index of the subgroup with the maximum sum
    maxIndex = subgroupSum.indexOf(Math.max(...subgroupSum));
 }

 console.log('maximum index ',subgroupSum[maxIndex]);