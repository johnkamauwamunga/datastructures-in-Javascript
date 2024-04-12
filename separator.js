let str=`["John kamau 1000","Jane ngure 200","Hezro Ngure 500"]`;


// parse the lines to array

let lines= JSON.parse(str)

console.log(lines)

let allNumbers=[];

let allNames=[];

let sumtotal=0

lines.forEach(line => {
    // split lines by spaces

    let parts=line.split(" ");

    let strings=[];
    let numbers=[];

    parts.forEach(part =>{
        let num= Number(part);

        if(isNaN(num)){
            strings.push(part)
            allNames.push(part)
        }
        else{
            numbers.push(num)
            allNumbers.push(num)
            sumtotal=sumtotal+num;
        }
    })
});
///let str1= str.split(" ");

console.log("all numbers ", allNumbers,' sum total is ', sumtotal);

// let numbers=[];
// let names=[];

// str1.forEach(part =>{

//     let num=  Number(part);

//     if(isNaN(num)){
//         names.push(part);
//     }else{
//         numbers.push(num);
//     }
// })

// console.log("Numbers ", numbers);
// console.log("names ", names);