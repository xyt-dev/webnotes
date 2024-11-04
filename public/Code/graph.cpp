#include <stdio.h>
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

#define MaxStackSize 100
typedef struct {
  int stack[MaxStackSize];
  int top;
} Stack;

Stack S;
void InitStack(Stack &S) {
  S.top = -1;
}

void push (Stack &S, int v) {
  if (S.top == MaxStackSize - 1) {
  } else {
    S.stack[++S.top] = v;
  }
}
int pop (Stack &S) {
  if (S.top == -1) {
    return -1;
  } else {
    int v = S.stack[S.top--];
    return v;
  }
}
bool IsEmpty(Stack &S) {
  if (S.top == -1) {
    return true;
  }
  return false;
}

void BFS(Graph G, int v);
void visit(int j) {}

// BFS:
bool visited[MaxVertexNum];
void BFSTraverse(Graph G) {
  for (int v = 0; v < G.vexnum; v++)
    visited[v] = false; // 标记所有顶点为未访问
  InitQueue(Q);
  for (int v = 0; v < G.vexnum; v++)
    if (!visited[v]) // 遍历所有连通分量
      BFS(G, v);
}
// 基于邻接表:
void BFS(ALGraph G, int v) {
  visit(v); visited[v] = true;
  EnQueue(Q, v);
  while (!IsEmpty(Q)) {
    DeQueue(Q, v);
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
void BFS(MGraph G, int v) {
  visit(v); visited[v] = true;
  EnQueue(Q, v);
  while (!IsEmpty(Q)) {
    DeQueue(Q, v);
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


void DFS(MGraph G, int v);
// DFS:
// bool visited[MaxVertexNum];
void DFSTraverse(Graph G) {
  for (int v = 0; v < G.vexnum; v++)
    visited[v] = false; // 标记所有顶点为未访问
  for (int v = 0; v < G.vexnum; v++) 
    if(!visited[v]) // 遍历所有连通分量
      DFS(G, v);
}
// 基于邻接表:
void DFS(ALGraph G, int v) {
  visit(v); visited[v] = true;
  for (ArcNode *p = G.vertices[v].firstarc; p; p = p->nextarc) {
    v = p->adjvex;
    if (!visited[v])
      DFS(G, v);
  }
}
// 基于邻接矩阵:
void DFS(MGraph G, int v) {
  visit(v); visited[v] = true;
  for (int w = 0; w < G.vexnum; w++) {
    if (!visited[w] && G.arc[v][w] == 1)
      DFS(G, w);
  }
}

int indegree[MaxVertexNum]; // 顶点的入度
// 拓扑排序:
bool TopologicalSort(ALGraph G) {
  InitStack(S); 
  int j;
  for (j = 0; j < G.vexnum; j ++)
    if(indegree[j] == 0) // 入度为0的所有顶点入栈
      push(S, j);
  int count = 0; // 记录已输出顶点数
  while (!IsEmpty(S)) {
    j = pop(S);
    printf("%d ", j); count ++;
    for (ArcNode *p = G.vertices[j].firstarc; p; p = p->nextarc) {
      int v = p->adjvex;
      if (!(--indegree[v]))
        push(S, v); // 若顶点入度减为0，则入栈
    }
  }
  if (count < G.vexnum) 
    return false; // 未输出全部顶点说明存在回路
  return true; // 拓扑排序成功
}