const fizzbuzz = {
  print_array: function(number) {
    let arr = [];
    for (let i = 1; i < number + 1; i++) {
      i % 5 == 0 && i % 3 == 0 ? arr.push("FizzBuzz") : i % 5 == 0 ? arr.push("Buzz") : i % 3 == 0 ? arr.push("Fizz") : arr.push(i)
    }
    return arr
  }
};
module.exports = fizzbuzz;
