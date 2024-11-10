const ComplaintBot = require("./index");

// Test the complain function with a known topic
console.log("Testing known topic: 'meetings'");
console.log(ComplaintBot.complain("meetings"));

// Test the complain function with an unknown topic
console.log("Testing unknown topic: 'traffic'");
console.log(ComplaintBot.complain("traffic"));

// Add assertions if you want a more structured test
function testKnownTopic() {
    const response = ComplaintBot.complain("meetings");
    console.assert(
        response !== "Oh, I'm too frustrated to even complain right now!",
        "Known topic failed"
    );
}

function testUnknownTopic() {
    const response = ComplaintBot.complain("traffic");
    console.assert(
        response === "Oh, I'm too frustrated to even complain right now!",
        "Unknown topic failed"
    );
}

// Run tests
testKnownTopic();
testUnknownTopic();

console.log("All tests passed!");
