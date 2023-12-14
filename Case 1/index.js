//let namaSaya = "Karita"
//let nama
//nama = namaSaya
//console.log(nama)

//const uang = 10
//console.log(uang)

/*let a = 1
let b = 4
console.log(a+b)

let ipk
let grade
ipk = 3
if (ipk > 3.5){
    grade = "Cumlaude"
} else if (ipk < 3.5 && ipk > 3) {
    grade = "Baik"
} else if (ipk < 3){
    grade = "Cukup"
} else {
    grade = "Tidak Lulus"
}

console.log(grade) */

//let array = [1,2,3,4,5]
//console.log(array[2])

/*let.array = ["adi","krisna","barjo"]
console.log(array[array.leght-1])*/

let array2 = [48, 20, 10, 25, 40, 54]
/*console.log(array2.sort())
console.log(array2)

console.log(array2.reverse())

console.log(array2.sort(function(a, b) {return a-b}))*/

/*function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      let current = array[i];
      let j = i - 1;
  
      while (j >= 0 && array[j] > current) {
        array[j + 1] = array[j];
        j--;
      }
  
      array[j + 1] = current;
    }
  
    return array;
  }
  
  let sortedArray = insertionSort(array2);
  console.log(sortedArray); // [10, 20, 25, 40, 48, 54]
  
  let a = 0
  let b = 4
  console.log(a++)*/

  function getFee (isMember){
    return (isMember ? '$2.00' : '$10.00');
  }
