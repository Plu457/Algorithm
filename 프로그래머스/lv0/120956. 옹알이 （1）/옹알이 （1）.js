function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];

    return babbling.filter(b => {
        const foundWords = words.filter(word => b.includes(word));
        const rest = foundWords.reduce((restWord, word) => restWord.replace(word, ''), b);
        return rest.length === 0;
    }).length;
}
