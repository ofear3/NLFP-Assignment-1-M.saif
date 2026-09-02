// Question No. 2
function getDayType(day){
    let d = day.toLowerCase();
    switch (d) {
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}
console.log(getDayType("Sunday"))