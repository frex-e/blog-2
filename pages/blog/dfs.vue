<template>
 <div>
  <MyTitle page-name="dfs">
    <span class="text-highlight">Playing</span> with <span class="text-green-600">Depth</span> First Search
  </MyTitle>

  <h3>
    Pynode - <span class="text-zinc-500">Some Backstory</span>
  </h3>
  <p>
    <MyLink color="green-500" to="https://alexsocha.github.io/pynode/">Pynode</MyLink> <span class="border-green-500"></span>is this little
    python graph library, (in the nodes and vertices sense), which
    was made to be used in the <MyLink color="highlight"
          to="https://www.vcaa.vic.edu.au/curriculum/vce/vce-study-designs/algorithmics/Pages/Index.aspx">VCE Algorithmic's Subject</MyLink> <span class="border-highlight"></span>
          , a collaboration between
    Unimelb and Monash to create a high school subject which covered
    first-year Uni CS content.
    Now, it is actually a nice library, however it can be a tad <span class="italic text-red-500">slow</span>.
    And hasn't had a solid update in three years (barring a merge allowing importing code
    through GitHub Gists on the website.)
  </p>
  <p>
    Now, as is slowly becoming tradition at my school, someone <MyLink to="https://darcylf.me/PyNode-Next/"
      color="red-500">remade pynode</MyLink> as a wrapper
    around another graph library made by the original pynode creator. Now this new library
    is available in both in python and javascript, so I thought:
  </p>
  <p>
    "Oh, I might be able to use this to make nice little graph animations."
  </p>
  <p>
    Unfortunately, this newer library, <MyLink to="https://algrx.github.io/" color="orange-500">algorithmX</MyLink>, allows you to draw nodes and edges,
    but the underlying graph has to be modelled yourself if you wish to
    work with it. For example, you can't actually get information about
    adjacent nodes and edges from the canvas object, you have to keep track yourself.
  </p>
  <p>
    This is fine, but when writing my graph scripts, it became
    somewhat <span class="text-highlight italic">frustrating</span> having to remember to both keep track of the graph model and
    what I was drawing to the canvas. So naturally, I went down the rabbit hole of
    remaking pynode myself.
  </p>
  <p class="text-zinc-500">
    (and by remaking, I mean making a TypeScript wrapper around algorithmX, instead of python)
  </p>

  <p>
    And now that I have this nice little graph library, I'd thought I'd make some
    <span class="text-green-600"> nice little graphs.</span>
  </p>

  <h2>
    Depth First Search
  </h2>
  <p>
    DFS, I think, feels like the <span class="text-highlight italic">dead brain approach</span>. Not
    that I don't like DFS. Anything with <span class="text-red-600">recursion</span> is fun, but
  </p>
  <p>
    <span class="italic text-zinc-500">"Just keep going until we reach a dead end, then go back and go the other way"</span>,
    always seems to me unreasonably and ammusingly effective.
  </p>
  <Graph uuid="firstt" :animation="animate">
  </Graph>
  <CodeBlock lang="cpp" :code="
`void dfs(int & graph[][], bool & visited[], int current) { 
    visited[current] = true; 

    for (int nextNode : graph[current]) {
  	    if (!visited[nextNode]) dfs(graph, visited, nextNode);
    }
}`
  " />
</div>
</template>

<script lang="ts" setup>
import type { Graph, Node } from 'algoNext'

// Copy Paste These
definePageMeta({
  date: "2022-06-04"
})
if (useRoute().name != 'blog') useHead({
  title: 'Playing with Depth First Search'
})

const dfs = (current: Node, graph: Graph) => {
  current.setAttribute('visited', true);
  current.setColor('green').highlight('green')
  current.outgoingEdges().forEach(edge => {
    if (!edge.otherNode(current).getAttribute('visited')) {
      graph.pause(500)
      edge.traverse('green', current);
      graph.pause(500)
      dfs(edge.otherNode(current), graph);
      graph.pause(500)
      edge.traverse('green', edge.otherNode(current))
      graph.pause(500);
      current.highlight('green');
    }
  })
}

const dfsFirst = (current: Node) => {
  current.setAttribute('visited',true)
  current.outgoingEdges().forEach(edge => {
    if (!edge.otherNode(current).getAttribute('visited')) {
      dfsFirst(edge.otherNode(current))
    }
  })
}

const animate = (graph: Graph) => {
  graph.gnpRandomGraph(15, 0.15, false);

  while(graph.node(0).degree() == 0) {
    graph.reset()
    graph.gnpRandomGraph(15,0.15,false)
  }
  graph.nodes().forEach(node => node.setAttribute('visited',false));

  dfsFirst(graph.node(0))
  graph.nodes().forEach(node => {
    if (!node.getAttribute('visited')) {
      graph.remove(node)
    }
  })
  graph.nodes().forEach(node => node.setAttribute('visited',false));
  // graph.pause(1)
  dfs(graph.node(0), graph);
}
</script>