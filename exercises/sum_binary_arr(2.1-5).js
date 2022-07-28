/*
    Input: two n-element arrays A and B containing the binary digits of two numbers a and b.
    Output: an (n + 1)-element array C containing the binary digits of a + b.

    My solution(pseudo code):
        for i = n to 1 do
            carry = A[i] + B[i] + C[i+1]
            C[i+1] = carry % 2
            if carry >= 2
                C[i] = 1
            else
                C[i] = 0

    CLRS solution(pseudo code):
        carry = 0
        for i=n to 1 do
            C[i + 1] = (A[i] + B[i] + carry) (mod 2)
            if A[i] + B[i] + carry >= 2 then
                carry = 1
            else
                carry = 0
        C[1] = carry
*/

const A = [0, 1, 1, 0];
const B = [0, 1, 1, 0];
let C = [0, 0, 0, 0, 0];

const n = A.length - 1;

function mySumOfBinaryArrays() {
    console.log('My solution: ');
    for (let i=n; i>=0; i--) {
        const carry = A[i] + B[i] + C[i+1];
        C[i+1] = carry % 2;
        if (carry>=2) {
            C[i] = 1;
        }
        else {
            C[i] = 0;
        }
    }
    
    return C;
}

function clrsSumOfBinaryArrays() {
    console.log('CLRS solution: ');
    let carry = 0;
    for(let i=n; i>=0; i--) {
        C[i + 1] = (A[i] + B[i] + carry) % 2;
        if (A[i] + B[i] + carry >= 2) {
            carry = 1;
        }
        else {
            carry = 0;
        }
    }
    C[0] = carry;
}

mySumOfBinaryArrays();
console.log(C);

C = [0, 0, 0, 0, 0]; // reset C

clrsSumOfBinaryArrays();
console.log(C);