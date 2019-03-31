function fibo(n) {
    let first = 0, second = 1;
    console.log(first);

    while (second < n){
        console.log(second);
        // let temp = second;
        // second += first;
        // first = temp;

        //Swap first and second
        [first,second] = [second,second+first];
    } 
}

fibo(9);
