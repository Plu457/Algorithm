// 균형잡힌 괄호 문자열의 끝 인덱스를 찾기
const findBalancedIndex = (str) => {
    let balance = 0;
    for (let i = 0; i < str.length; i++) {
        balance += (str[i] === '(') ? 1 : -1;
        if (balance === 0) return i;
    }
    return -1; // 균형잡힌 문자열이 없는 경우
};

// 올바른 괄호 문자열인지 판단
const isCorrect = (str) => {
    let balance = 0;
    for (let char of str) {
        balance += (char === '(') ? 1 : -1;
        if (balance < 0) return false;
    }
    return balance === 0;
};

// 괄호의 방향을 뒤집기
const reverseBrackets = (str) => {
    return str.split('').map(char => char === '(' ? ')' : '(').join('');
};

// 주어진 문자열을 올바른 괄호 문자열로 변환
const solution = (str) => {
    if (str === '') return '';
    const index = findBalancedIndex(str);
    const u = str.substring(0, index + 1);
    const v = str.substring(index + 1);

    if (isCorrect(u)) {
        return u + solution(v);
    } else {
        return '(' + solution(v) + ')' + reverseBrackets(u.slice(1, -1));
    }
};
