// class defining a feed item object
class feedItem{
    datePosted;
    description;

    constructor(d, desc){
        this.datePosted = d;
        this.description = desc;
    }
}

// calculate time since post in days
function daysSince(date){
    var currentDate = new Date()
    var distance = Math.floor((currentDate - date) / (86400 * 1000))
    return distance; 
}

// determine if string should be plural
function pluralString(num){
    if (num > 1){
        return "s";
    } else{
        return "";
    }
}

// format days since
// i.e "2 days ago", "3 weeks ago", "1 month ago" etc.
function formatDays(days){
    var formatedDays = ""
    if(days < 7){
        formatedDays = days + " day" + pluralString(days) + " ago"
    } else if (days < 31){
        var daysToWeeks = Math.floor(days / 7);
        formatedDays = daysToWeeks + " week" + pluralString(daysToWeeks) + " ago"
    } else if (days < 365){
        var daysToMonths = Math.floor(days / 31);
        formatedDays = daysToMonths + " month" + pluralString(daysToMonths) + " ago"
    } else {
        var daysToYears = Math.floor(days / 365);
        formatedDays = daysToYears + " year" + pluralString(daysToYears) + " ago"
    }
    return formatedDays;
}

// spawns the feed item to the dom
function createFeedItem(d, desc){
    var days = daysSince(d);
    var daysString = formatDays(days);

    const feed = document.getElementById("feed");
    const feedPost = document.createElement("div");
    const header = document.createElement("h6");
    const headerText = document.createTextNode(daysString + ", CTCT");
    const description = document.createElement("p");
    const descriptionText = document.createTextNode(desc);

    feed.appendChild(feedPost);
    feedPost.appendChild(header);
    feedPost.appendChild(description);
    header.appendChild(headerText);
    description.appendChild(descriptionText);

    feedPost.className = "feed-item";

}

// creates the feed items from an array
function defineFeed(){
    const feedItems = [
        new feedItem( new Date("2026-10-08"), "Number 2s are no longer permitted in Bathroom B117 during 6th period due to previous incidents."),
        new feedItem( new Date("2026-9-19"), "Wyoming does exist!"),
        new feedItem( new Date("2026-4-03"), "After 2 long months of trial and hardship, we've successfully annexed California."),
        new feedItem( new Date("2026-3-07"), "Under consultation from our Dean of Students, the state of Ohio has withdrawn from the Northwest Ordinance.")
    ]
    for (const item of feedItems){
        createFeedItem(item.datePosted, item.description)
    }
}

defineFeed()