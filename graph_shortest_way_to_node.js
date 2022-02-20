
function print_connections_matrix(connections_matrix){

    console.log("\n")
    connections_matrix.map(row => console.log(row.toString()))
    console.log('\n')
}

const create_node = (data, index_loc = null) => {

    return {
        data: data,
        index: index_loc
    }
}

function create_empty_connections_matrix(nodes){

    return nodes.map(node => { return Array(nodes.length).fill(0)})
}

function connect_nodes(node_1, node_2, weight, connections_matrix){

    connections_matrix[node_1.index][node_2.index] = weight
    connections_matrix[node_2.index][node_1.index] = weight
    return connections_matrix
}

function get_node_shortest_connections(node, matrix, nodes){

    const node_number = node.index

    const got_connections = matrix[node_number].map((value, index)=> {
        if (value){
            return {node: nodes[index], weight: value}
        }
    })
    .filter(node => node)

    if (!got_connections) return []

    const the_shortes_one = got_connections.reduce((accumulator, node) => { 
        
        accumulator.weigt < node.weight ? accumulator = accumulator : accumulator = node

        return accumulator
    })

    return the_shortes_one
}

function find_a_shortest_way(nodes, matrix, searched_node){    

    let minimal_vertex_distances = Array(nodes.length).fill(10000); // минимальное расстояние
    let checked_vertexes = Array(nodes.length).fill(1) // посещенные вершины
    let min_vertex_index, min_distance

    minimal_vertex_distances[0] = 0

    do{

        min_vertex_index = 10000
        min_distance = 10000

        checked_vertexes.map((vertex, index) => {

            if (vertex && minimal_vertex_distances[index] < min_distance){

                min_vertex_index = index
                min_distance = minimal_vertex_distances[index]
            }
        })

        if (min_vertex_index < 10000){

            const current_weight = minimal_vertex_distances[min_vertex_index]

            for (let column = 0; column < minimal_vertex_distances.length; column++){
                
                const next_weight = matrix[min_vertex_index][column]

                if (next_weight && (current_weight + next_weight) < minimal_vertex_distances[column]) {

                    minimal_vertex_distances[column] = current_weight + next_weight
                }
            }

            checked_vertexes[min_vertex_index] = 0
        }
    }
    while (min_vertex_index < 10000)

    console.log("--- Distances ARR")
    console.log(minimal_vertex_distances)

    let current_node = (searched_node-1) // MIN DISTANCES ARR INDEX ELEMENT

    const way_reconstruction = [(current_node+1)]

    while(current_node != 0){

        for (let i = 0; i < minimal_vertex_distances.length; i++){

            const got_connection = matrix[current_node][i]

            if (got_connection){

                const checking_connection = minimal_vertex_distances[current_node] - got_connection

                if (checking_connection == minimal_vertex_distances[i]){

                    way_reconstruction.push(i+1)
                    current_node = i
                }
            }
        }
    }

    console.log("--- VERTEXES ---")
    console.log(way_reconstruction)
}

const node_1 = create_node("1")
const node_2 = create_node("2")
const node_3 = create_node("3")
const node_4 = create_node("4")
const node_5 = create_node("5")
const node_6 = create_node("6")
// const node_7 = create_node("7")


const nodes = [node_1, node_2, node_3, node_4, node_5, node_6]
.map((value, index) => { value.index = index; return value})

console.log('----- NODES -----')
console.log(nodes)

let connections_matrix = create_empty_connections_matrix(nodes)

connections_matrix = connect_nodes(node_1, node_2, 7, connections_matrix)
connections_matrix = connect_nodes(node_1, node_3, 9, connections_matrix)
connections_matrix = connect_nodes(node_1, node_6, 14, connections_matrix)

connections_matrix = connect_nodes(node_2, node_3, 10, connections_matrix)
connections_matrix = connect_nodes(node_2, node_4, 15, connections_matrix)

connections_matrix = connect_nodes(node_3, node_4, 11, connections_matrix)
connections_matrix = connect_nodes(node_3, node_6, 2, connections_matrix)

connections_matrix = connect_nodes(node_4, node_5, 6, connections_matrix)

connections_matrix = connect_nodes(node_5, node_6, 9, connections_matrix)

console.log("----- Connections MATRIX ------")
print_connections_matrix(connections_matrix)
console.log("-------------------")

const node_3onn = get_node_shortest_connections(node_1, connections_matrix, nodes)
// console.log("--- Node Connections ---")
// console.log(node_3onn)
const way = find_a_shortest_way(nodes, connections_matrix, 5)






