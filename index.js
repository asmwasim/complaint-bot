const complaints = {
    meetings: [
        "Oh, another meeting! Because clearly, we haven't spent enough time talking about what we're going to talk about.",
        "Meetings, the number one cause of code starvation.",
        "Why code when you can endlessly discuss coding?",
    ],
    coffee: [
        "Cold coffee again? It's like life's just trying to keep me on my toes.",
        "This coffee tastes like regret and early mornings.",
        "Where's the caffeine? All I taste is disappointment.",
    ],
    deadlines: [
        "Oh sure, I'll just build an entire app in two days. No pressure!",
        "Deadline? More like 'dead inside' line.",
        "How about we just call it 'wishful thinking day' instead?",
    ],
};

function complain(topic) {
    const topicComplaints = complaints[topic] || [
        "Oh, I'm too frustrated to even complain right now!",
    ];
    const randomIndex = Math.floor(Math.random() * topicComplaints.length);
    return topicComplaints[randomIndex];
}

module.exports = complain;
