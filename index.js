//1) ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: არგუმენტად გადაეცით ეს მასივი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9
let array = [10, 50, 6, 7, 8, 11, 6, 3, 9];

function sumNumbers(numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
console.log(sumNumbers(array));
// 2)ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ:
//     'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};
function getFullUserName(obj) {
  if (obj.isloggedin) {
    return `${obj.firstname} ${obj.lastname}`;
  } else {
    return "false";
  }
}
console.log(getFullUserName(user));
// 3)შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:
// (აქ მეორე ვარიანტიც შეგვიძლია დავამატოთ ამ მასალით:
let arrayNum = [50, 40, 37, 86];
function maxNumber(arr) {
  let maxNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
console.log(Math.max(...arrayNum));
console.log(maxNumber(arrayNum));
// 4)დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - this number is even‘; თუ კენტია დააბრუნოს - this number is odd‘
let number = 3;
function checkNum(num) {
  if (num % 2 === 0) {
    return "is even";
  }
  return "is odd";
}
console.log(checkNum(0));
// 5)for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1
let array1 = [1, 2, 3, 4, 5];

for (let i = array1.length - 1; i >= 0; i--) {
  console.log(array1[i]);
}
// 6)ფუნქციის საშუალებით გამოთვალეთ იუსერის ასაკი ( არგუმენტად გადაეცით ნებისმიერი რიცხვი) და დაამატეთ შემდეგი პირობა, თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი.
// ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;

let userAge = (age) => (age >= 18 ? "sruwlovani" : "arasrulwlovani");
console.log(userAge(18));
console.log(userAge(17));

// 7)მოცემულია მასივი
// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < array2.length; i++) {
  if (array2[i] === 5) {
    console.log("aris");
    break;
  }
}
// 8)მოცემულია მასივი:
// let array3= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი
let array3 = [1, 2, 3, 4, 5];
let totalSum = 0;
for (let i = 0; i < array3.length; i++) {
  totalSum += array3[i];
}
console.log(totalSum);
//9) მოცემულია მასივი
// let array4= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული (ჯამიგავყოთ ელემნტების რაოდენობაზე)
let array4 = [1, 2, 3, 4, 5];
let sumNum = 0;
for (let i = 0; i < array3.length; i++) {
  sumNum += array4[i];
}
let sashualo = sumNum / array4.length;
console.log(sashualo);
//10) მოცემულია მასივი
// გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)
let array5 = [1, 2, 3, 7, 6, 9];
for (let i = 0; i < array5.length; i++) {
  if (array5[i] === 7) {
    continue;
  }
  console.log(array5[i]);
}

// 11)Მოცემული მასივიდან ამოიღეთ მხოლოდ ციფრები, რომლებიც 5-ის ჯერადია:
let array7 = [32, 14, null, "40", 50];
function multipleOfFiveFnc(arr) {
  let multipleOfFive = [];
  for (let i = 0; i < array7.length; i++) {
    if (typeof arr[i] === "number" && arr[i] % 5 === 0) {
      multipleOfFive.push(arr[i]);
    }
  }
  return multipleOfFive;
}
console.log(multipleOfFiveFnc(array7));

// 12)Მოცემული მასივიდან კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:
let array8 = [
  [2, -3, 5, 11],
  [1, -35, -11],
  [12, -36, -24],
];
function positiveNumber(arr) {
  arr.forEach((element) => {
    element.forEach((item) => {
      if (item > 0) {
        console.log(item);
      }
    });
  });
}
positiveNumber(array8);
