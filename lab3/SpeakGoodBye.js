(function (window) {
    let speakBye = {};
    var speakWord = "Good Bye";

    speakBye.speak = function (name) {
        console.log(speakWord + " " + name);
    }
    window.speakBye = speakBye;
})(window);


