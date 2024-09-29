function sumOfMultiples(a, b, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }
    return sum;
}

alert(sumOfMultiples(3, 5, 1000))