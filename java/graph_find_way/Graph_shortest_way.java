import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.*;


class Informer{

    String info_txt;

    Informer(String msg){

        this.info_txt = msg;
    }

    void inform(){

        System.out.println(this.info_txt);
    }
}

class Node{

    public String name;
    public int index;

    Node(String name){

        this.name = name;
        this.index = 0;
    };

    public void set_index(int index){

        this.index = index;
    }

    public int get_index(){

        return this.index;
    }
};

class Connections_Matrix{

    public int[][] matrix;
    private Node[] nodes;

    Connections_Matrix(Node[] nodes){

        this.nodes = nodes;
        this.matrix = new int[nodes.length][nodes.length];
    }

    public void connect_nodes(Node node_A, Node node_B, int weight){

        this.matrix[node_A.get_index()][node_B.get_index()] = weight;
        this.matrix[node_B.get_index()][node_A.get_index()] = weight;
    }

    public void print_matrix(){

        System.out.println("---- MATRIX -----");

        for (int[] item: this.matrix) {

            System.out.println(Arrays.toString(item));
        }
    }

    public void find_a_shortest_way(int searched_node_index){

        int[] minimal_vertex_distances = new int[this.nodes.length];
        int[] checked_vertexes = new int[this.nodes.length];
        int min_vertex_index, min_distance;

        for (int i=0; i<nodes.length; i++){

            minimal_vertex_distances[i] = 10000;
            checked_vertexes[i] = 1;
        }

        minimal_vertex_distances[0] = 0;

        do{

            min_vertex_index = 10000;
            min_distance = 10000;

            for (int i=0; i<checked_vertexes.length; i++){

                if ((checked_vertexes[i]) > 0 & (minimal_vertex_distances[i] < min_distance)){

                    min_vertex_index = i;
                    min_distance = minimal_vertex_distances[i];
                }
            }
    
            if (min_vertex_index < 10000){
    
                int current_weight = minimal_vertex_distances[min_vertex_index];
    
                for (int column = 0; column<minimal_vertex_distances.length; column++){
                    
                    int next_weight = matrix[min_vertex_index][column];
    
                    if (next_weight > 0 & (current_weight + next_weight) < minimal_vertex_distances[column]) {
    
                        minimal_vertex_distances[column] = current_weight + next_weight;
                    }
                }
    
                checked_vertexes[min_vertex_index] = 0;
            }
        }
        while (min_vertex_index < 10000);

        System.out.println("--- Distance ARR");
        System.out.println(Arrays.toString(minimal_vertex_distances));
    
        int current_node = (searched_node_index-1); // MIN DISTANCES ARR INDEX ELEMENT
        
        List<Integer> way_reconstruction = new ArrayList<Integer>();
        way_reconstruction.add(current_node+1);
    
        while (current_node != 0){
    
            for (int i=0; i<minimal_vertex_distances.length; i++){
    
                int got_connection = matrix[current_node][i];
    
                if (got_connection > 0){
    
                    int checking_connection = minimal_vertex_distances[current_node] - got_connection;
    
                    if (checking_connection == minimal_vertex_distances[i]){

                        way_reconstruction.add((i+1));
                        current_node = i;
                    }
                }
            }
        }

        System.out.println("--- VERTEXES ---");
        System.out.println(way_reconstruction);
    }
}

public class Graph_shortest_way{

    static String info_txt = "The graph_shortest_way was created";

    public static void main(String[] args){ 

        System.out.println(Graph_shortest_way.info_txt);

        Node node_1 = new Node("1");
        Node node_2 = new Node("2");
        Node node_3 = new Node("3");
        Node node_4 = new Node("4");
        Node node_5 = new Node("5");
        Node node_6 = new Node("6");

        Node[] all_nodes =  new Node[]{node_1, node_2, node_3, node_4, node_5, node_6};

        for (int index = 0; index < all_nodes.length; index++){

            all_nodes[index].set_index(index);
        }

        Connections_Matrix nodes_matrix = new Connections_Matrix(all_nodes);

        nodes_matrix.connect_nodes(node_1, node_2, 7);
        nodes_matrix.connect_nodes(node_1, node_3, 9);
        nodes_matrix.connect_nodes(node_1, node_6, 14);
        nodes_matrix.connect_nodes(node_2, node_3, 10);
        nodes_matrix.connect_nodes(node_2, node_4, 15);
        nodes_matrix.connect_nodes(node_3, node_4, 11);
        nodes_matrix.connect_nodes(node_3, node_6, 2);
        nodes_matrix.connect_nodes(node_4, node_5, 6);
        nodes_matrix.connect_nodes(node_5, node_6, 9);

        nodes_matrix.print_matrix();

        nodes_matrix.find_a_shortest_way(5);


    };
};
