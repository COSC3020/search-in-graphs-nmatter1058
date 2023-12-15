/*Graph Representation

SOURCES:
    https://stackoverflow.com/questions/237104/how-do-i-check-if-an-array-includes-a-value-in-javascript
    https://en.wikipedia.org/wiki/Depth-first_search
    https://www.programiz.com/dsa/graph-dfs
    https://www.simplilearn.com/tutorials/data-structure-tutorial/dfs-algorithm
    Source: Lab 6 - Nicholas Matter - 10/21/22
*/
function depthFirstSearch(graph, startNode, targetNode){
    var visited = [];
    var unvisited = [];
    unvisited.push(startNode);
    while(unvisited.length != 0){
        var current = unvisited.pop();
        if (current == targetNode){
            visited.push(current);
            return visited;
        }
       // var current = unvisited.pop();
        if(!visited.includes(current)){
            visited.push(current);
            for(var i=graph[nodeValue(current)].length-1; i>=0; i--){
                if(!visited.includes(graph[nodeValue(current)][i])){
                    unvisited.push(graph[nodeValue(current)][i]);
                }
            }
        }
    }
    return 0;
}
graph();
function graph(){
    var adjList = [];
    var nodes=['A','B','C'];
    for (var i = 0; i < nodes.length; i++)
        adjList.push([]);
    addEdge(adjList, 0, 'B');
    addEdge(adjList, 1, 'C');
    addEdge(adjList, 2, 'A');
    printList(nodes, adjList);
    test(adjList);
    nodes.push('D');
    for (var i = adjList.length; i < nodes.length; i++)
        adjList.push([]);
    addEdge(adjList, 0, 'C');
    addEdge(adjList, 1, 'D');
    printList(nodes, adjList);
    test(adjList);
    nodes.push('E');
    for (var i = adjList.length; i < nodes.length; i++)
        adjList.push([]);
    addEdge(adjList, 0, 'D');
    addEdge(adjList, 0, 'E');
    addEdge(adjList, 1, 'E');
    addEdge(adjList, 2, 'B');
    addEdge(adjList, 2, 'E');
    addEdge(adjList, 3, 'A');
    addEdge(adjList, 4, 'D');
    printList(nodes, adjList);
    test(adjList);
    nodes.push('F');
    for (var i = adjList.length; i < nodes.length; i++)
        adjList.push([]);
    addEdge(adjList, 1, 'A');
    addEdge(adjList, 2, 'F');
    addEdge(adjList, 3, 'D');
    addEdge(adjList, 3, 'E');
    addEdge(adjList, 4, 'F');
    addEdge(adjList, 5, 'A');
    addEdge(adjList, 5, 'B');
    addEdge(adjList, 5, 'C');
    addEdge(adjList, 5, 'D');
    addEdge(adjList, 5, 'E');
    printList(nodes, adjList);
    test(adjList);
}

function addEdge(adjList,node1,node2){
    adjList[node1].push(node2);
}

function nodeValue(node){
    var val=0;
    if(node == 'A')
        val = 0;
    else if(node == 'B')
        val = 1;
    else if(node == 'C')
        val = 2;
    else if(node == 'D')
        val = 3;
    else if(node == 'E')
        val = 4;
    else if(node == 'F')
        val = 5;
    else if(node == 'G')
        val = 6;
    else if(node == 'H')
        val = 7;
    return val;
}

function printList(nodes, adjList){
    for(var i=0; i <adjList.length; i++){
        var result = [];
        for(var j=0; j<adjList[i].length; j++){
            result +=adjList[i][j] + " ";
        } 
        console.log(nodes[i] + ": "+result);
    }
}

function test(adjList){
    var start = 'A';
    var node = 'C';
    var result = depthFirstSearch(adjList, start, node);
    if(result == 0) console.log("Node " +node + " was not found");
    else{
        console.log("Node " +node + " was found");
        console.log("Path taken: "+result);
    }
    console.log("");
}
