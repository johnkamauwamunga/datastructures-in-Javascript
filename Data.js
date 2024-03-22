const fs=require('fs');

const ln=fs.readFileSync('calories.txt', 'utf-8').trim().split('\n');

let groups=[]

let currentgroup=[];

for(let line of ln){
    if(line.trim()==='')
    {
        groups.push(currentgroup);

        currentgroup=[];
    }else{
        currentgroup.push(parseInt(line));
    }
}

groups.push(currentgroup);

//console.log(groups);

let maxsum=0;

let maxgroup;

for(let group of groups){
const subgroupsum=group.reduce((sum ,value) => sum + value , 0);

if(subgroupsum > maxsum){
    maxsum=subgroupsum;
    maxgroup= group;
}
}

console.log('greatest group \n',maxgroup,' \n sum of its element ',maxsum);

let minsum= groups.length > 0 ? groups[0].reduce((sum , value) => sum+ value, 0) : 0;

let mingroup = groups.length > 0 ? groups[0] : null;

for (let group of groups){
 const sum=group.reduce((sum, value)=> sum + value, 0);

 if(sum < minsum){
    minsum = sum;
    mingroup=group;
 }

}

console.log('\n minimum group \n',mingroup,' \n sum of its element ',minsum);


let animals=['ant','spider','scorpion','bison','fly'];

console.log(animals.slice(1,4));
