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