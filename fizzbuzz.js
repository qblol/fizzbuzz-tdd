const fizzbuzz = {
  print_array: function(number) {
    let arr = []
    for (var i = 1; i < number + 1; i++) {
      arr.push(i)
    }
    let resultarr = []
    arr.forEach(function(number){
      if(number % 3 == 0 && number % 5 == 0) {
        resultarr.push("FizzBuzz")
      } else if(number % 3 == 0) {
        resultarr.push("Fizz")
      } else if(number % 5 == 0) {
        resultarr.push("Buzz")
      } else {
        resultarr.push(number)
      }
    })
    // console.log(resultarr);
    return resultarr
  }
}

module.exports = fizzbuzz;
