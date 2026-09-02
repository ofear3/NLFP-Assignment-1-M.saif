// Question No. 1
function describeValue(val){
    let t = typeof val;
    let status = val ? "truthy" : "falsy";
    return t + " | " + status;
}
console.log(describeValue(null));