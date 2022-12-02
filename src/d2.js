const input = `A Y
B X
C Z`;

/*

A X 3+1 4
B X 0+1 1
C X 6+1 7
=== X: B, A, C
-
A Y 6+2 8
B Y 3+2 5
C Y 0+2 2
=== Y: C, B, A
-
A Z 0+3 3
B Z 6+3 9
C Z 3+3 6
=== Z: A, C, B

*Base*
X: 1
Y: 2
Z: 3

*0-Match*
X(1): B(1)
Y(2): C(2)
Z(3): A(0)

*/

console.log(input.split('\n').map(q => q.split(' ')).reduce((score, round) => {
    const [col1, col2] = round;
    const base = col2.charCodeAt(0) - 87;
    const col1Offset = col1.charCodeAt(0) - 65;
    const zeroOffset = base % 3;
    const mult = ((zeroOffset - col1Offset + 3) % 3);
    return score + 3 * mult + base;
}, 0));
