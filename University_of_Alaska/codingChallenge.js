const between10And20 = (num) => {
    if (typeof num !== "number") return "Please enter a valid number.";

    if (num < 10 || num > 20){
        return false;
    } else {
        return true;
    };
};



between10And20("word")
