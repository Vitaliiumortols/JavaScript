(function (window) {
    let speakHi = {};
    var speakWord = "Hello";

    speakHi.speak = function speak(name) {
        console.log(speakWord + " " + name);
    }
    window.speakHi = speakHi;
})(window);