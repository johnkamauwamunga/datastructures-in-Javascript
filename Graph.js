// directed or undirected

const airports="PHX BKK OKC JFK NBO LAX MEX EZE HEL LOS LAP LIM".split(' ');

const routeS =[
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'LOS'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK']
];

const adjacencyList= new Map();

// add node
function addNode(airport){
    adjacencyList.set(airport, []);
}


// add edge, undirected
function addEdge(origin, destination){
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// create the graph
airports.forEach(addNode);
routeS.forEach(routes => addEdge(...routes))

console.log(adjacencyList)


// checking a route using BFS

function bfs(start){
    const queue =[start];

  //  while(queue.le)
}