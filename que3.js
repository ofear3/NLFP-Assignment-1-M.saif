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
console.log(validateUsername("abcd e f gh"))