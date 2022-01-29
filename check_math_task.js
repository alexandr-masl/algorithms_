

const matrix = [
    [2, 0, 4],
    [2, 8, 5],
    [6, 0, 9],
    [2, 7, 10],
    [4, 3, 4]
]

const queries = [[0, 0], [1, 3]]


function make_a_move(desc, queries){

    const desck_marked_in_black_and_white = (() => {

        let first_element_color = desc[0].length % 3 ? "black" : "white"

        const colored_desc = desc.map((row, index_big) => { 
            
            row = row.map((value, index_little) => {

                first_element_color = first_element_color === "white" ? "black" : "white"

                return {row: index_big, column: index_little, value: value, color: first_element_color === "white" ? "black" : "white"}
            })

            return row
        })

        return colored_desc
    })()

    console.log('---- DEXSK INDEXED AND MARKED ----')
    console.log(desck_marked_in_black_and_white)

    function make_single_move(black_white_desc, move){

        const rows_results = black_white_desc.map((row, index) => {

            const white_cells = row.filter(cell => cell.color === "white")
            const black_cells = row.filter(cell => cell.color === "black")

            let min_white_value = white_cells[0].value
            let min_black_value = black_cells[0].value

            row.map(cell => {

                if (cell.value < min_white_value && cell.color === "white")
                    min_white_value =  cell.value

                if (cell.value < min_black_value && cell.color === "black")
                    min_black_value = cell.value
            })

            return {
                white_min_row_result: white_cells.find(cell => cell.value == min_white_value),
                black_min_row_result: black_cells.find(cell => cell.value == min_black_value)
            }

        })

        console.log("--- ROW RESULTS ---")
        console.log(rows_results)

        const white_cell_extracted = rows_results[move[0]]

        const black_cell_extracted = rows_results[move[1]]

        console.log("-- White cell EXTRACTED", white_cell_extracted.white_min_row_result.value)

        console.log("-- Black cell EXTRACTED", black_cell_extracted.black_min_row_result.value)

        const averge_between_black_and_white = (white_cell_extracted.white_min_row_result.value + black_cell_extracted.black_min_row_result.value) / 2 

        console.log('-- Averge', averge_between_black_and_white & 1 )

        if (averge_between_black_and_white % 1 != 0){


        }
        else{

            const desc_after_move = black_white_desc.map(desc_row => {

                desc_row.map(row_cell => {

                    if ( row_cell.row == white_cell_extracted.white_min_row_result.row 
                        && row_cell.column == white_cell_extracted.white_min_row_result.column
                        && row_cell.value == white_cell_extracted.white_min_row_result.value
                        && row_cell.color === white_cell_extracted.white_min_row_result.color
                    ){

                        row_cell.value = averge_between_black_and_white

                    }

                    if (row_cell.row == black_cell_extracted.black_min_row_result.row
                        && row_cell.column == black_cell_extracted.black_min_row_result.column
                        && row_cell.value == black_cell_extracted.black_min_row_result.value
                        && row_cell.color == black_cell_extracted.black_min_row_result.color
                    ){

                        row_cell.value = averge_between_black_and_white
                    }
                })

                return desc_row
            })

            return desc_after_move
        }
    }

    const single_move = make_single_move(desck_marked_in_black_and_white, [0, 0])

    console.log("******** DESC AFTER MOVE ************")
    console.log(single_move)

    const reformated_desc = single_move.map(desc_row => {

        return desc_row.map(cell => {

            return cell.value
        })
    })

    console.log(">>>>>>> REFORMATED DESC <<<<<<<<<<<")
    console.log(reformated_desc)

    return 
}

make_a_move(matrix, queries)

