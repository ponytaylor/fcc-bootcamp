function translatePigLatin(str) {
  var newstr = "";
  if(str.match('^[aeiou]')){
    newstr = str + "way";
  }
  else{
    var spstr = str.split(/[aeiou]/, 1);
    //console.log(spstr);
    newstr = str.substr(spstr[0].length) + spstr[0] + "ay";
  
  }
  return newstr;
}

translatePigLatin("consonant");

function pairElement(str) {
  var spstr = str.split("");
  var basepairs = [["A","T"],["G","C"]];
 var ans = [];
  spstr.forEach(function(element) {
    var ATind = basepairs[0].indexOf(element);
    var CGind = basepairs[1].indexOf(element);
    //console.log(str + ":" + basepairs[0] + " " +basepairs[1] +" "+ element + " " + ATind + " " + CGind);
     var subans = [];
    if(ATind > -1){
      subans.push(element);
      subans.push(basepairs[0][ATind===0?1:0]);
      ans.push(subans);
    }
     if(CGind > -1){
      subans.push(element);
      subans.push(basepairs[1][CGind===0?1:0]);
      ans.push(subans);
    }
    //console.log(ans.toString());
});
  return ans;
}

pairElement("GCG");

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  
  return bool === true || bool === false;
}

booWho(null);

function uniteUnique(arr) {
  var newarr = [];
  //console.log(arguments.length);
   for (i = 0; i < arguments.length; i++) {
         arguments[i].forEach(function(subelement) {
    if(newarr.indexOf(subelement) == -1)
      newarr.push(subelement);
  });
    }
 
  return newarr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

function convertHTML(str) {
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/\"/g, '&quot;');
  str = str.replace(/\'/g, '&apos;');
  return str;
}

convertHTML("Dolce & Gabbana");

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
   function upperToLower(match, offset, string) {
     if (offset > 0) {
      return " " + match.toLowerCase();
     }
     else return match.toLowerCase();
  }
  str = str.replace(/[A-Z]/g, upperToLower);
  // because I might be adding double spaces, use + to replace them
  str = str.replace(/[\s_]+/g, '-');
  
  //str = str.toLowerCase();
  console.log(str);
  return str;
}

spinalCase('This Is Spinal Tap');

function sumFibs(num) {
  var fib1 = 1;
  var fib2 = 1;
  var fib = fib1 + fib2;
  var sum = fib;
  while(fib <= num){
    if (fib%2 === 1){
      sum += fib;
    }
    fib1 = fib2;
    fib2 = fib;
    fib = fib1 + fib2;
    console.log(fib + " " + sum);
  }
  return sum;
}

sumFibs(4);


function sumPrimes(num) {
  var prime_candidate = 1;
   var sum = 0;
  for (prime_candidate = 2; prime_candidate<=num; prime_candidate++){
    var sq = Math.sqrt(prime_candidate);
    var prime = true;
    for (var i = 2; i<=sq;i++){
      if (prime_candidate%i === 0){
         prime = false;
      }
    }
    if (prime){
      sum += prime_candidate;
    }
    //console.log(prime_candidate + " " + sum);
  }

  return sum;
}

sumPrimes(10);

function findElement(arr, func) {
  var num = arr.findIndex(func);
  return arr[num];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });


function dropElements(arr, func) {
  var retarr = [];
    var num = arr.findIndex(func);
  if (num > -1){
    retarr = arr.slice(num);
  }
  return retarr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });

function binaryAgent(str) {
  var outstr = "";
  var spstr = str.split(" ");
  spstr.forEach(function(binstr) {
    
    outstr += String.fromCharCode(parseInt("0x" + parseInt(binstr, 2).toString(16)));
  });
  //console.log(outstr);
  return outstr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


function steamrollArray(arr) {
  // I'm a steamroller, baby
  var newarr = [];
  var arrs =[];
  for (var i=0; i<arr.length;i++){
    if (!Array.isArray(arr[i])){
       newarr.push(arr[i]);
    }
    else{
      arrs.push(arr[i]);
    }
  }
  while (arrs.length > 0){
    var arrcheck = arrs.shift();
    for (var j=0; j<arrcheck.length;j++){
      if (!Array.isArray(arrcheck[j])){
       newarr.push(arrcheck[j]);
      }
    else{
      arrs.push(arrcheck[j]);
    }
    }
  
  }
  //console.log(newarr);
  return newarr;
}

steamrollArray([1, [2], [3, [[4]]]]);



// I think I'm running into some limitation here, it doesn't get to the larger numbers.
function smallestCommons(arr) {
  var ans = 0;
  var found = false;
  var start = arr[0] < arr[1]?arr[0]:arr[1];
  var end = arr[0] > arr[1]?arr[0]:arr[1];
  var mults1 = [];
  var mults2 = [];
    var lcm = 1;
  //console.log(start + " " + end);
  while (!found){
    //mults1.push(lcm * start);
    mults2.push(lcm * end);
    var betweens = true;
     //console.log("mults" + mults1.toString()  + " " + lcm*end);
      mults2 = mults2.filter(function(num){
  return num >= lcm*start;
});
       if (mults2.includes(lcm*start)){
   
      for(var n=start+1;n<end;n++){
        console.log( lcm*start + ":" + lcm*start%n);
        if((lcm*start)%n !== 0){
          betweens = false;
        }
      }
       if(betweens) {
         console.log("stopping");
        ans = lcm;
        found = true;
      }
    }
   
    lcm++;
   
    //console.log(lcm);
  }
  console.log(mults2.length);
  return ans;
}


smallestCommons([1,5]);




function telephoneCheck(str) {
  var checkit = str.match(/^1?\s?\(?\d{3}\)?-?\s?\d{3}-?\s?\d{4}$/);
  //var checkit2 = str.match(/^\d{3}\)-?\s?\d{3}-?\s?\d{4}$/);
  
  // Good luck!
  if (checkit){
    // bad parens
    if ((checkit[0].indexOf(')') < checkit[0].indexOf('(')) ||
       (checkit[0].indexOf(')') > -1 && checkit[0].indexOf('(') === -1) ||
       (checkit[0].indexOf(')') === -1 && checkit[0].indexOf('(') > -1)) {
      //console.log(checkit[0] + "parens");
      return false;
    }

    return true;
  }
    
  return false;
}

telephoneCheck("555-555-5555");


function addTogether() {
  //console.log(typeof arguments[0]);
  //console.log(typeof arguments[1]);
  var args = Array.from(arguments);
  console.log(args);
  //console.log(arguments.caller);
 
  if (arguments.length == 2 && typeof(arguments[0]) == "number" && typeof(arguments[1]) == "number" ){
    //console.log( "2 args sum: " + (arguments[0] + arguments[1]));
    return arguments[0] + arguments[1];
  }
   else if (arguments.length == 1 && !isNaN(arguments[0]) ){
     //console.log("1 arg " + arguments[0]);
     var arg0 = arguments[0];
     // inside function, arguments will be x
    return  function(x){
      if(typeof(x) != "number"){return undefined;}
      //console.log("function x=" + x+ " "+(x + arg0));
      return x + arg0;
    };
  }

  return undefined;
}

addTogether(2,3);
