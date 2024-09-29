function calculateSum (n) {
    const num = parseInt(document.getElementById("numberInput").value);
    let sum = 0;
    let a = 3;
    let b = 5;

  
    for (let i = 0; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }
    
    alert("The sum of multiples of 3 or 5 below " + num + " is: " + sum)
}

