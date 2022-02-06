


const input = [1, 2, 3 ];

    
function possibleNumbers(x, index) {

    console.log(index, "mutation", x)

    if (index == x.length) {

        // for (let i = 0; i < x.length; i++) {
        //     console.log(x[i] + " ");
        // }
        
        console.log(x)
    }
    for (let i = index; i < x.length; i++) {
        
        let temp = x[index];
        x[index] = x[i];
        x[i] = temp;

        possibleNumbers(x, index + 1);

        temp = x[index];
        x[index] = x[i];
        x[i] = temp;
    }
}

possibleNumbers(input, 0)