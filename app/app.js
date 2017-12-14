const numArray = [1, 2, 4, 6, 8, 10, 90, -8, -80, 300, -310]

function sum(array){
  return array.reduce((sum, num) => {
    sum += num
  }, 0)
}

sum(numArray)
