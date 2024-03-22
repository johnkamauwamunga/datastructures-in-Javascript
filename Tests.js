// find duplicate characrwes

var str='i love lucy nyawera';

let str1=[];
 // console.log(typeof(str));


 var charArray=str.split('');

 console.log(charArray);

 let char=[];

 function isCharRepeated(charArray){
   // var count=0;

    for(var i=0; i< charArray.length-1; i++)
    {
        if(char.includes(charArray[i]))
        {
            console.log(charArray[i],' appears again')
        }else{
            char.push(charArray[i]);
        }
    }
 }

 isCharRepeated(charArray);


 // check if number is prime nu,ber

 function isPrime(num){
    if(num <= 1){
        return false;
    }

    for(let i= 2; i<= Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }

    return true
 }

 // function to print  numbers 
 function primeGenerator(){
    console.log("prime numbers from 1  to 50");
 
    for(let i =1; i <= 50; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
 }

 primeGenerator();

 //isPrime(4)