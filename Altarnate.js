// string checker
function removeSinglesAndFindAlternating(s) {
    // Step 1: Remove characters that appear only once
    const charCount = {};
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    const filteredS = s.filter(char => charCount[char] > 1);

    // Step 2: Find alternating characters
    const alternating = [];
    for (let i = 0; i < filteredS.length - 1; i++) {
        if (filteredS[i] !== filteredS[i + 1]) {
            alternating.push(filteredS[i] + filteredS[i + 1]);
        }
    }

    // Step 3: Find the largest alternating character sequence
    let largestAlt = '';
    let largestAltCount = 0;
    for (let alt of alternating) {
        const altCount = (filteredS.join('').match(new RegExp(alt, 'g')) || []).length;
        if (altCount > largestAltCount) {
            largestAlt = alt;
            largestAltCount = altCount;
        }
    }

    // Step 4: Print the number of the alternating character
    console.log(largestAlt + ': ' + largestAltCount);
}

const s = ['b', 'e', 'a','b','e','e', 'd','b', 'e', 'd', 'e', 'f', 'e', 'a', 'b'];
//removeSinglesAndFindAlternating(s);

function checker(s){
     // Step 1: Remove characters that appear only once
     const charCount = {};
     for (let char of s) {
         charCount[char] = (charCount[char] || 0) + 1;
     }
 
     const filteredS = s.filter(char => charCount[char] > 1);

    // console.log(filteredS);

      // Step 2: Find alternating characters
    const alternating = [];
    for (let i = 0; i < filteredS.length - 1; i++) {
        if (filteredS[i] !== filteredS[i + 1]) {
            alternating.push(filteredS[i] + filteredS[i + 1]);
        }
    }

    //console.log(alternating);
    //3. Checking alternating patterns

    const patternCount = {};
    for (let ch of alternating) {
        patternCount[ch] = (patternCount[ch] || 0) + 1;
    }

    const filteredPattern = alternating.filter(ch => patternCount[ch] > 1);

   // console.log(filteredS);
console.log(filteredPattern);

 // Step 4: Find the largest alternating character sequence
//  let largestAlt = '';
//  let largestAltCount = 0;
//  for (let alt of alternating) {
//      const altCount = (filteredPattern.join('').match(new RegExp(alt, 'g')) || []).length;
//      if (altCount > largestAltCount) {
//          largestAlt = alt;
//          largestAltCount = altCount;
//      }
//  }

 let largestAlt='';
 let largestAltCount=0;

 let picker=[];
 let counter=0;
 const filterCount = {};

filteredPattern.forEach(element=>{
    if(filterCount[element]){
        filterCount[element]++;
    }else{
        filterCount[element]=1;
    }
})

 // Step 4: Print the number of the alternating character

 let mostFrequentElement;
 let maxCount = 0;
 for (let element in filterCount) {
     if (filterCount[element] > maxCount) {
         mostFrequentElement = element;
         maxCount = filterCount[element];
     }
 }

 
 console.log('greatest ',mostFrequentElement,' count ',maxCount);

}

checker(s);