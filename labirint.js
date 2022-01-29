
const labirint = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

console.log("--- 1*1 element", labirint[1][3])

// labirint.map(row => console.log(row.toString()))

function find(x, y, lab){
    

    if (x == 5 && y == 5){

        console.log("*** FOUND WAY ****")
        lab.map(row => console.log(row.toString()))
        console.log("\n")
    }
    else{

        lab[x][y] = "*"

        if (lab[x+1][y] == 1) 
            find(x+1, y, lab)

        if (lab[x-1][y] == 1) 
            find(x-1, y, lab)

        if (lab[x][y-1] == 1) 
            find(x, y-1, lab)

        if (lab[x][y+1] == 1) 
            find(x, y+1, lab)
            
        lab[x][y] = 1
    }
}

find(1, 1, labirint)