(
    function(window) {
        let obj = {}
        obj.names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

        for (n of obj.names) {
          n = n.toLowerCase();
          if (n.charAt(0) === "j") {
            speakBye.speak(n)
          } else {
            speakHi.speak(n)
          }
        }
        window.obj = obj;
    }
)(window);

console.log("-------------- If a name is longer than 3 characters, say Good Bye");

(
    function() {
        for (let n of obj.names) {
            if (n.length < 4) {
                speakHi.speak(n);
            } else {
                speakBye.speak(n);
            }
        }
    }
)();

