# p2p-viz : a P2P Network Visualizer

`p2p-viz` is a web app which graphically displays the state of a P2P network.  The data used is based on crawler results -- nominally, an adjacency graph with socket addresses.

The adjacency indices and coupled metadata are processed by a stand-alone program (https://github.com/runziggurat/crunchy) which takes as input a `sample.json` file created by the crawler (right now either zcash or XRPL), and outputs a `state.json` that `p2p-viz` can ingest.

There is a demo `state.json` file in `./dist/client/data` which may be loaded if none is provided by the user.


## General background concepts

`p2p-viz` currently displays three centrality measures:  betweenness, closeness, and degree

[Centrality](https://en.wikipedia.org/wiki/Centrality)


- Degree centrality: the number of nodes a particular node is connected to
- Closeness centrality:  for a given node, find the average of the shortest paths to each node. For n nodes, there are `n * (n - 1) / 2` unique paths.
- Betweenness: The number of time a given node is used as a bridge between two nodes, for their shortest path.


## Build and run the app

```
npm i
npm run build
npm run start http
```
Open a browser at http://localhost:3000.

The first screen give you two choices:  `Geolocation` or `Force-3D`

## View Geographically

Select `Geolocation`.  You will then be asked to `Load default state` or `Choose state file`.  If you don't have state file at the ready, then just select the first choice.

You will now see the nodes displayed over a world map.  The nodes are displayed as icosahedrons, with coloring based on the color mode (initially `degree`).


## Keyboard Interface

- the arrow keys move the camera
- the I and O keys do zoom **in** and **out**
- the C key cycles the color mode:  degree, betweenness, closeness
- the F key toggles the FPS display
- the G key toggle the gradient display.  This displays the color mapping from minimum to maximum, for the particular centrality selected.  The actual min and max values, and the name of the centrality, are drawn below
- the H key toggles the histogram display, showing the relative distribution of centrality values from min to max.  The particular line representing the  **bucket** or **slot** with the maximum count reaches the top of the graph.
- the N key toggles the view connections mode, which are displayed if a node or subnode is selected.


When you click on a node, it will turn white.  Metadata will be displayed in the upper right corner.

## Supernodes

Aggregates of nodes that exist at the same geolocation (e.g, same ISP) are displayed as a `supernode`, and rendered as a magenta cube.  If selected, they may be clicked again to open up, displaying the corresponding `subnodes`.

## Physical Modeling

Go back to `localhost:3000`, and this time select `Force-3D`.  Again, you will be asked to load a default state or select one yourself.

You will now see the network displayed as a phycially modelled system.

-  camera contols are enabled for the mouse:  rotate and zoom
-  when you hover over a node, you will see the node ID (index-based, `Nxxx`), the IP address, and the city
-  you can cycle the color mode (for now, only printed out in the browser's JavaScript conole)
-  when you click on a node, the connections will be displayed for that node.

