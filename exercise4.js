var flag = true;
console.log("Value assigned to Boolean is: " + flag);
var myNumber = 55;
console.log("The value of my number is" + myNumber);
var myString = "Martin";
console.log("My string is " + myString);
var myArray = [1, 2.3];
//for (let i=0;i<myArray.length; i++){
//  console.log("The vlue in myArray is: " + myArray[i]);
//}
myArray.forEach(function (item) {
    console.log(item);
});
var myUnknown = "anything we want";
console.log("My an value is: " + myUnknown);
function count_with_spaces(value) {
    var count = value.length;
    return count;
}
console.log(count_with_spaces("test 1"));
function count_without_spaces(value) {
    var count = value.replace(" ", "").length;
    return count;
}
console.log(count_without_spaces("test 2"));
