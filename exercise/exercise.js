function multiplyByTwo(value) {
  let number = 2;
  value = 11;
  function inner(){
    result = number * value;
    console.log(result);
  }
  inner()
}
multiplyByTwo();
