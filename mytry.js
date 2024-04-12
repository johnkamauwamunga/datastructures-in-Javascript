const fs=require('fs');


const ln = fs.readFileSync('./mytry.txt', 'utf-8').trim().split('\n');

// let lines= JSON.parse(str);



// Given lines as a string
// let lines = `John kamau mwangi 1000
// Jane wanjama 4000
// Salome salim 1300
// Hannah annabel 25k`;

// Remove numbering per line

let cleandata=[];

ln.forEach(line=>{


    // this is the regular expression.. check it out.
    line= line.replace(/^\d+\.\s*/gm, ''); //remove numbering per line

    line = line.replace(/(\d+)k/g, (match, p1)=> parseInt(p1)* 1000) // concert say 25k to 25 000
    

    // output cleaned lines
    let parsedline=line.split(" ");

    //console.log(line);

    cleandata.push(parsedline)

})
//let dataArr=JSON.parse(cleandata);

//console.log(cleandata)

let numericalparts=[];

let strings=[];

let totalContribution=0;

cleandata.forEach(lines=>{

    lines.forEach(line=>{
        let numericalpart= line.match(/\d+/);

        if(numericalpart){
            numericalparts.push(parseInt(numericalpart[0]))
           // totalContribution=totalContribution+numericalpart[0];

        }
    })
   
})

//console.log('total contribution ',numericalparts);

numericalparts.forEach(data=>{
totalContribution=totalContribution+data;
})

console.log(totalContribution)

let totals=numericalparts.reduce((sum,value)=> sum+ value, 0);

console.log('totals is ',totals);

// cleandata.forEach(line=>{

// let num=Number(line);

// if(isNaN(num)){
//     strings.push(line);
// }
// else{
//     numericals.push(num);
// }
// })

console.log(strings)
// Convert figures like "25k" to "25000"
// cleanedLines = cleanedLines.replace(/(\d+)k/g, (match, p1) => {
//     return parseInt(p1) * 1000;
// });

// // Output the cleaned lines
// console.log(cleanedLines);

// let allString=[];
// let allNumbers=[];

// let totalSum=0;

// lines.forEach(line => {
    

//     let parts=line.split(" ");

//     parts.forEach(part=>{

//         let num=Number(part);

//         if(isNaN(num)){
//         allString.push(part)
//         }
//         else{
//             allNumbers.push(num);
//             totalSum=totalSum+num;
//         }
//     })
// });

// console.log('all figures ',allNumbers,' total sum', totalSum);