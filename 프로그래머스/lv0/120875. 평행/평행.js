const calculateSlope = (dot1, dot2) => (dot2[1] - dot1[1]) / (dot2[0] - dot1[0]);

function solution(dots) {
    return calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3]) || 
           calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3]) ? 1 : 0;
}