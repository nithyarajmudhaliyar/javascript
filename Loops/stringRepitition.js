function repeatStringNumTimes(str,num){
  let s = "";
    if (num > 0){
      for (let i = 0;i < num;i++){
        s += str;
    }
  } else if (num < 0){
    return "";
  }
  return s;
}

//Testing 
console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", -2));   //will print empty string
console.log(repeatStringNumTimes("abc", 0));    //will print empty string
console.log(repeatStringNumTimes("*", 8));
