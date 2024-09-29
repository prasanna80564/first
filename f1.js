function Sums () {
    const n = parseInt(document.getElementById("numberInput").value);
    let sum = 0;
    
  
    for (let i = 0; i < n ; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    
   alert("The sum of multiples of 3 or 5 below " + n + " is: " + sum)
}

