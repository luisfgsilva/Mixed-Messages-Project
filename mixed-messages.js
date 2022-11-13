message1 = ["The last kid", "The flag", "Trent", "A cross man", "Brett", "The skunk", "Gramps", "A frog"];
message2 = ["did spill", "got stuck", "went on a trip", "did spill", "will stop", "sniffs", "stands up", "spots a slug"];
message3 = ["in the grass", "in the tent", "at the dump", "on the track", "in the truck", "in the trash", "in a big blimp", "by the nest"];
mixedMessage = [];

function mixMessage(){
    for (let i = 1; i <= 3; i++){
        let j = Math.floor(Math.random() * 8);
        if (i === 1) {
            mixedMessage.push(message1[j]);
        } else if (i === 2) {
            mixedMessage.push(message2[j]);
        } else {
            mixedMessage.push(message3[j]);
        }
    }
    return mixedMessage.join(" ");
};

console.log(mixMessage());
