// 주어진 크기로 문자열을 잘라 배열로 반환
const sliceString = (str, size) => {
    return Array.from({ length: Math.ceil(str.length / size) }, (_, i) => {
        return str.substring(i * size, (i + 1) * size);
    });
};

// 문자열 조각 배열을 압축하여 하나의 문자열로 만들기
const compressString = (chunks) => {
    return chunks.reduce((compressed, currentChunk, i, chunksArr) => {
        if (i === 0 || currentChunk !== chunksArr[i - 1]) {
            // 현재 조각이 이전 조각과 다르면 새로운 조각으로 시작
            compressed.push({ chunk: currentChunk, count: 1 });
        } else {
            // 현재 조각이 이전 조각과 같으면 카운트를 증가
            compressed[compressed.length - 1].count++;
        }
        return compressed;
    }, []).map(({ count, chunk }) => count > 1 ? count + chunk : chunk).join('');
    // 각 조각을 '카운트 + 조각' 형태로 문자열로 변환합니다.
};

// 주어진 문자열을 가장 효율적으로 압축할 때의 길이를 반환하는 함수
// 문자열을 다양한 크기로 나누어 압축한 후, 가장 짧은 압축 길이를 찾기
const solution = (str) => {
    if (str.length === 1) return 1;

    // 가능한 모든 분할 크기에 대해 압축한 문자열의 길이를 계산
    const compressedLengths = Array.from({ length: Math.floor(str.length / 2) }, (_, i) => i + 1)
        .map(size => compressString(sliceString(str, size)).length);

    // 계산된 길이 중 가장 작은 값을 찾기
    return compressedLengths.reduce((minLength, currentLength) => Math.min(minLength, currentLength), str.length);
};