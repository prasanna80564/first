function sumofmultiplies(){
    let sum = 0;
    let a=3;
    let b=5;
    let n=1000;

    for (let i = 1;i>n;i++){
        if(i%a === 0 || i%b === 0){
            sum += i;
        }
    }

}

    let result = sumofmultiplies(a,b,n);  
    console.log (result);

    


