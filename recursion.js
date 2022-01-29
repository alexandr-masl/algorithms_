


function check_matches(arr_check, arr_result){        

  let found_mathes

  function recursion_map(arr_to_map, index) {

      if (index == arr_to_map.length){

        const formatted_arr = []

        arr_to_map.map(data_arr => data_arr.map(integer => formatted_arr.push(integer)))

        if (formatted_arr.toString() === arr_result.toString()){

          if (!found_mathes)
            found_mathes = "MATCH !!! " + arr_to_map.toString()
        }
      }

      for (let i = index; i < arr_to_map.length; i++){
  
          let first_element_to_save = arr_to_map[index]
          arr_to_map[index] = arr_to_map[i] 
          arr_to_map[i] = first_element_to_save

          recursion_map(arr_to_map, index + 1)

          first_element_to_save = arr_to_map[index]
          arr_to_map[index] = arr_to_map[i] 
          arr_to_map[i] = first_element_to_save
      }
  }

  recursion_map(arr_check, 0)

  console.log("===Foundet matches", found_mathes ? found_mathes : "NO MATCHES..")

}

const arr_to_test = [[1, 2], [5], [6, 3]]

const given_arr = [1, 2, 5, 3, 6]

// const wrong_arr = "adsf"

// console.log("---IS ARR", Array.isArray(wrong_arr))

check_matches(arr_to_test, given_arr)

