const sliceString = (s, size) => {
    return Array.from({ length: Math.ceil(s.length / size) }, (_, i) => {
        return s.substring(i * size, (i + 1) * size);
    });
};

const compressString = (chunks) => {
    return chunks.reduce((compressed, chunk, i, arr) => {
        if (i === 0 || chunk !== arr[i - 1]) {
            compressed.push({ chunk, count: 1 });
        } else {
            compressed[compressed.length - 1].count++;
        }
        return compressed;
    }, []).map(({ count, chunk }) => {
        return count > 1 ? count + chunk : chunk;
    }).join('');
};

const solution = (s) => {
    if (s.length === 1) return 1;

    return Array.from({ length: Math.floor(s.length / 2) }, (_, i) => i + 1)
        .map((size) => {
            return compressString(sliceString(s, size)).length;
        })
        .reduce((min, length) => {
            return Math.min(min, length);
        }, s.length);
};