typedef char VertexType;
typedef int EdgeType;
typedef int InfoType;

#define MaxVertexNum 100
typedef struct {
  VertexType vex[MaxVertexNum];
  EdgeType arc[MaxVertexNum][MaxVertexNum];
  int vexnum, arcnum;
} MGraph;

typedef struct ArcNode { // 边表结点
  int adjvex; // 连接的顶点
  struct ArcNode *nextarc; // 下一条边(出边)
  InfoType info; // 边的权值(可选)
} ArcNode;
typedef struct VNode { // 顶点表结点
  VertexType data;
  ArcNode *firstarc; // 边表头指针
} VNode, AdjList[MaxVertexNum];
typedef struct {
  AdjList vertices; // 邻接表
  int vexnum, arcnum;
} ALGraph;

typedef MGraph Graph;
#define MaxQueueSize 100

typedef struct {
  VertexType data[MaxQueueSize];
  int front, rear;
} Queue;
Queue Q;
void InitQueue(Queue &Q) {
  Q.front = Q.rear = 0;
}
void EnQueue(Queue &Q, int v) {
  if ((Q.rear + 1)%MaxQueueSize == Q.front) {
  } else {
    Q.data[Q.rear] = v;
    Q.rear = (Q.rear + 1)%MaxQueueSize;
  }
}
void DeQueue(Queue &Q, int &v) {
  if (Q.front == Q.rear) {
  } else {
    v = Q.data[Q.front];
    Q.front = (Q.front + 1)%MaxQueueSize;
  }
}
bool IsEmpty(Queue &Q) {
  if (Q.front == Q.rear) {
    return true;
  }
  return false;
}
void BFS(Graph G, int v);
void visit(int j) {}

// BFS:
bool visited[MaxVertexNum];
void BFSTraverse(Graph G) {
  for (int j = 0; j < G.vexnum; j++)
    visited[j] = false; // 标记所有顶点为未访问
  InitQueue(Q);
  for (int j = 0; j < G.vexnum; j++)
    if (!visited[j]) 
      BFS(G, j);
}
// 基于邻接表:
void BFS(ALGraph G, int j) {
  visit(j); visited[j] = true;
  EnQueue(Q, j);
  while (!IsEmpty(Q)) {
    int v; DeQueue(Q, v);
    for (ArcNode *p = G.vertices[v].firstarc; p; p = p->nextarc) {
      int w = p->adjvex;
      if (visited[w] == false) {
        visit(w); visited[w] = true;
        EnQueue(Q, w);
      }
    }
  }
}
// 基于邻接矩阵:
void BFS(MGraph G, int j) {
  visit(j); visited[j] = true;
  EnQueue(Q, j);
  while (!IsEmpty(Q)) {
    int v; DeQueue(Q, v);
    for (int w = 0; w < G.vexnum; w++) {
      if (G.arc[v][w] > 0 && visited[w] == false) {
        visit(w); visited[w] = true;
        EnQueue(Q, w);
      }
    }
  }
}

int FirstNeighbor(Graph G, int v) {return v;}
int NextNeighbor(Graph G, int v, int w) {return v;}
#define Infty 1e9;

int d[MaxVertexNum];
void BFSMinDistance(Graph G, int v) {
  // d[j] 表示从顶点 v 到顶点 j 的最短路径长度(最短距离)
  for (int j = 0; j < G.vexnum; j++)
    d[j] = Infty; // 初始化到所有顶点的最短距离
  d[v] = 0; visited[v] = true;
  EnQueue(Q, v);
  while (!IsEmpty(Q)) {
    DeQueue(Q, v);
    for (int w = FirstNeighbor(G, v); w >= 0; w = NextNeighbor(G, v, w))
      if(!visited[w]) {
        visited[w] = true;
        d[w] = d[v] + 1;
        EnQueue(Q, w);
      }
  }
}