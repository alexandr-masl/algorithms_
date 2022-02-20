


const input = [1, 2, 3];

    
function possibleNumbers(x, index) {

    console.log(index, "mutation", x)

    if (index == x.length) {

        console.log(x)
    }

    for (let i = index; i < x.length; i++) {
        
        let temp = x[index];
        x[index] = x[i];
        x[i] = temp;
        
        // console.log(index + 1)
        possibleNumbers(x, index + 1);

        temp = x[index];
        x[index] = x[i];
        x[i] = temp;
    }
}

possibleNumbers(input, 0)