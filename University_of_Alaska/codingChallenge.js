const between10And20 = (num) => {
    if (typeof num !== "number") return "Please enter a valid number.";

    if (num < 10 || num > 20){
        return false;
    } else {
        return true;
    };
};

console.log(between10And20(-10))
console.log(between10And20(10))
console.log(between10And20(20))
console.log(between10And20(21))
console.log(between10And20("University of Alaska"))
