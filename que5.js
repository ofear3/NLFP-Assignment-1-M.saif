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
console.log(getChaseVerdict(150,149,1));  