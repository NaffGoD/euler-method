/* Limits */
const h = 0.1
const startX = 0
const endX = 0.4
const startY = -1

/* Functions */
// x + Math.cos(y / Math.sqrt(11)) Limits: startY = 2.5, startX = 2.1, endX = 3.1, h = 0.1;
// x**2 + y**2 Limits: startY = -1, startX = 0, endX = 0.4, h = 0.1;
//
//

/* Formulas */
const n = (endX - startX) / h;

const SubstitutionFunction = (x, y) => (x**2 + y**2).toFixed(4);

const yCalculation = (currX, currY) => currY + h * SubstitutionFunction(currX, currY);

/* Calculation */
let xArr = [];
let yArr = [];
xArr[0] = startX;
yArr[0] = startY;
let currY = startY;
let currX = startX;

for (let i = 0; i < n + 1; i++) {
    console.log("x[" + i + "]" + "=" + xArr[i]);
    xArr.push(xArr[i] += h);
}

for (let j = 0; j < n + 1; j++) {
    currX = xArr[j];
    currY = yArr[j];
    console.log("y[" + j + "]" + "=" + yArr[j]);
    yArr.push(yCalculation(currX, currY));
}


