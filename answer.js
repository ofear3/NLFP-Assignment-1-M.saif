// Question No. 1
function describeValue(val){
    let t = typeof val;
    let status = val ? "truthy" : "falsy";
    return t + " | " + status;
}


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


// Question No. 3
function validateUsername(username){
    let lowerName = username.toLowerCase();
    switch (true) {
        case (username.length < 4):
            return "Too Short";
        case (username.split(" ").length > 1):
            return "No Space Allowed";
        case (lowerName.search("admin") >= 0):
            return "Reserved Word";
        default:
            return "Available";
    }
}


// Question No. 4
function getCngFare(distance, isNight=false, waitingMinutes=0){
    let cost=50;
    switch (true) {
        case (distance > 2):
            cost = cost + ((distance - 2) * 15);
            break;
    }
    cost = cost + (waitingMinutes * 2);
    switch (isNight) {
        case true:
            cost = cost * 1.2;
            break;
    }
    return cost;
}


// Question No. 5
const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;
    if (runsNeeded <= 0){
        return "Won";
    }
    if (ballsLeft <= 0){
        return "Lost";
    }    
    let rate = (runsNeeded / ballsLeft) * 6;
    let verdict = "";
    switch (true) {
        case rate <= 6:
            verdict = "Comfortable";
            break;
        case rate <= 12:
            verdict = "Tough";
            break;
        default:
            verdict = "Almost Impossible";
            break;
    }
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict} `;
}; 