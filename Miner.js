// create a calculator

let multiply =( a, b,) =>{

    let c=a*b;

   // console.log(c)

    return c;
}

multiply(3, 5)

// Hashmap

const hashMap = new Map();

hashMap.set('name','John');

hashMap.set('age','26');

const name = hashMap.get('name');

//console.log('name ',name);

//hashMap.delete('age');

const hasAge= hashMap.has('age');

const size= hashMap.size;

//console.log(size);

//console.log(hasAge);

// using map function

const weekreadings=[10,30,20, 40, 50];

const updatedReading=weekreadings.map(readings => readings + 0.5)

//console.log('updated readings ',updatedReading);

const coldSeasons=weekreadings.filter( readings =>{
    return readings < 40
});

//console.log('cold days ',coldSeasons);

// reduce, factorials

const numbers=[1,2,3,4,5];

const factorial = numbers.reduce((acc, item) => acc * item, 1);

//console.log(factorial);

// number generator
const vals=[1,1,2,3,4,5,6,7,8,9,0,4];

let subvals=[];

let tree =()=>{

    for(let i =0; i<= vals.length-1 ; i++)
    {
        //console.log(vals[i]);
        subvals.push(vals[i]);
        console.log('tree ',subvals);
        //return subvals;
    }
}

tree();