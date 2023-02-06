// code your solution here
function superbowlWin(superBowlResults) {
    let win = superBowlResults.find(function(results) {
        return results.result === "W"; 
    });
    if (win) {
        return win.year;
    } else {
        return undefined;
    }
}