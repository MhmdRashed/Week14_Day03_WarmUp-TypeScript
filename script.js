var word = '';
var result = 0;
var letters = {
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10
};
function getScore(word) {
    var score = 0;
    for (var i = 0; i < word.length; i++) {
        score += letters[word.charAt(i).toUpperCase()];
    }
    return score;
}
function calculate(e) {
    e.preventDefault();
    word = document.getElementById('word').value;
    result = getScore(word);
    document.getElementById('result').innerHTML = result.toString();
}
document.querySelector("button").addEventListener("click", function (e) {
    calculate(e);
});
