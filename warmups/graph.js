var graph = {};
//  console.log("Empty graph: ",graph);

graph.addNode = function addNode(node) {
  this[node] = {neighbors: [], data: undefined};
}

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

console.log(graph);

graph.removeNode = function removeNode(node) {
  delete this[node];
}

graph.removeNode("E");

console.log("After removal",graph);

graph.setData = function setData(node, dataIn){
  this[node].data = dataIn;
}

graph.setData("A",7);
graph.setData("B",5);
graph.setData("C",8);
graph.setData("D",2);

console.log("After setting data",graph);
