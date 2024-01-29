let flag: boolean = true;
console.log("Value assigned to Boolean is: " + flag);

let myNumber: number = 55;
console.log("The value of my number is" + myNumber);

let myString: string = "Martin";
console.log ("My string is "+ myString);

let myArray: number[] = [1,2.3];

//for (let i=0;i<myArray.length; i++){
  //  console.log("The vlue in myArray is: " + myArray[i]);
//}

myArray.forEach((item) => {
    console.log(item);
})

let myUnknown: any = "anything we want";
console.log("My an value is: " + myUnknown);

function count_with_spaces(value: string) {
    let count = value.length;
    return count;
  }

  console.log(count_with_spaces("test 1"));

  function count_without_spaces(value: string) {
    let count = value.replace(" ", "").length;
    return count;
  }

  console.log(count_without_spaces("test 2"));

  function count_both(value: string, spaces?:boolean ){
    let count:number = 0;
    if(spaces){
        count = value.length;
    }else{
        count = value.replace(" ", "").length;;
    }
    return count;
  }

  console.log(count_both("test 1", true));
  console.log(count_both("test 1"));