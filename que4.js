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
console.log(getCngFare(5,true,10))