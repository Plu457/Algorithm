const findGreatestCommonDivisor = (a, b) => {
    return b ? findGreatestCommonDivisor(b, a % b) : a;
}

const solution = (numerator1, denominator1, numerator2, denominator2) => {
    const totalNumerator = numerator1 * denominator2 + numerator2 * denominator1;
    const totalDenominator = denominator1 * denominator2;

    const commonDivisor = findGreatestCommonDivisor(totalNumerator, totalDenominator);

    return [totalNumerator / commonDivisor, totalDenominator / commonDivisor];
}