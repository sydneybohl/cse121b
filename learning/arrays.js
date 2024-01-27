// example 1 : map
const numbers = ["one", "two", "three"];
const numbersHtml = numbers.map(function (numbers) {
    return `<li>${numbers}<li>`;
});

document.getElementById("myList").innerHTML = numbersHtml.join();

// example 2 : map 
const grades = ["A", "B", "A"]
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    }
    else if (grade === "B") {
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

// example 3 : reduce (from last example function)
const totalPoints = gpaPoints.reduce(function (total, item) {
    return total + item;
});
const gpa = totalPoints / gpaPoints.length;

// example 4 : filter
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = fruits.filter(function (fruits) {
    return fruits.length < 6;
});

// example 5 : indexOf
const num_array = ["12", "34", "21", "54"];
const luckyNumber = 21;
let luckyIndex = num_array.indexOf(luckyNumber);