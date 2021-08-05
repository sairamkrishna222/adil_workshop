class Graph:
    def _init_(self, v):
        self.m_v= v
        self.m_adj = [[] for i in range(v)]

    def addEdge(self, u, v):
        self.m_adj[u].append(v)


    def BFS(self, s):
        Q = []
        visited = [False]*self.m_v
        Q.append(s)
        visited[s] = True
        while len(Q) > 0:
            v = Q.pop(0)
            print(v)
            for u in self.m_adj[v]:
                if not visited[u]:
                    Q.append(u)
                    visited[u] = True

G = Graph(5)
G.addEdge(0,1)
G.addEdge(0,3)    
G.addEdge(1,2)
G.addEdge(3,2)
G.addEdge(3,4)
G.BFS(0)