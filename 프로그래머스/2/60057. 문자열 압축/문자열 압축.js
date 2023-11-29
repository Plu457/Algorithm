const sliceString = (s, size) => {
  return Array.from({ length: Math.ceil(s.length / size) }, (_, i) =>
    s.substring(i * size, (i + 1) * size),
  );
};

const compressString = segments => {
  const compressed = segments.reduce((acc, segment, i, arr) => {
    if (i === 0 || segment !== arr[i - 1]) {
      acc.push({ segment, count: 1 });
    } else {
      acc[acc.length - 1].count++;
    }
    return acc;
  }, []);

  return compressed.map(({ count, segment }) => (count > 1 ? count + segment : segment)).join('');
};

const solution = s => {
  if (s.length === 1) return 1;

  const range = Array.from({ length: Math.floor(s.length / 2) }, (_, i) => i + 1);
  const compressedLengths = range.map(size => compressString(sliceString(s, size)).length);

  return Math.min(...compressedLengths, s.length);
};