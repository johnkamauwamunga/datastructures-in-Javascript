// linear search
// let linearSerch=(list, values)=>{

//     for(let i=0; i < list.length; i++){
//         if(list[i] === value){
//             console.log('found ',list[i],' at index number ',i);
//         }
//     }

//     console.log(-1);
// } 


function linearSerch(list, value){

    for(let i=0; i<list.length; i++){
        if(list[i]===value){
            console.log('value found');
        }
    }
}
const list=[12, 45, 48, 5, 451, 2, 34, 43, 54, 66];

var value=2;

linearSerch(list, value);

// bisearch

function binSearch(list, value){

    let left=0;
    let right=list.length-1;
    let mid= Math.floor((left+right) /2);

    while(list[mid] !== value && left <=right){
       
        if(list[mid] < value){
            left= mid + 1;
        }

        if(list[mid] > value){
            right=mid -1
        }

        mid=Math.floor((left + right)/2)
    }

    if(list[mid] === value){
        console.log(' bin search value found ',list[mid]);
    }else{
        console.log('value not foun bin seactch')
    }

}

binSearch(list, value);

//binary search

let binarySearch=(list1, val) =>{

let left=0;
let right= list1.length -1;
let mid = Math.floor((left + right)/ 2);

while(list1[mid] !== val && left <= right)
{
    if(val < list1[mid]){
        right=mid - 1;
    }else{
        left = mid + 1;
    }

  mid = Math.floor((left + right)/ 2);
}

if (list1[mid] === val){

    console.log('the value found ',list1[mid]);
   // return mid
}else{
    console.log('welll');
    //return -1
}
}

let list1=[2, 4, 6, 8, 10];

let val =4;

binarySearch(list1, val);


