const slope = (dot1, dot2) => (dot2[1] - dot1[1]) / (dot2[0] - dot1[0]);

function solution(dots) {
    const slope1 = slope(dots[0], dots[1]);
    const slope2 = slope(dots[2], dots[3]);
    const slope3 = slope(dots[0], dots[2]);
    const slope4 = slope(dots[1], dots[3]);

    if (slope1 === slope2 || slope3 === slope4) {
        return 1;
    }

    return 0;
}