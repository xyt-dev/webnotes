#include <stdlib.h>
#include <stdio.h>

typedef int ElemType;

#define MaxSize 100
typedef struct {
  ElemType stack[MaxSize];
  int top;
} SqStack;
SqStack S;

typedef struct BSTNode {
  ElemType data;
  BSTNode *lchild, *rchild;
} BiTreeNode, *BiTree;

typedef struct {
  BiTree data[MaxSize];
  int front, rear;
} SqQueue;
SqQueue Q;

void InitQueue(SqQueue &Q) {
  Q.front = Q.rear = 0;
}

void InitStack(SqStack &S) {
  S.top = -1;
}

bool IsEmpty(SqStack &S) {
  if (S.top == -1) {
    return 0;
  }
  return 1;
}
bool IsEmpty(SqQueue &Q) {
  if (Q.front == Q.rear) {
    return true;
  }
  return false;
}

void EnQueue(SqQueue &Q, BiTree e) {
  if ((Q.rear + 1)%MaxSize == Q.front) {
    printf("Queue is full!\n");
  } else {
    Q.data[Q.rear] = e;
    Q.rear = (Q.rear + 1)%MaxSize;
  }
}
void DeQueue(SqQueue &Q, BiTree &e) {
  if (Q.front == Q.rear) {
    printf("Queue is empty!\n");
  } else {
    e = Q.data[Q.front];
    Q.front = (Q.front + 1)%MaxSize;
  }
}

void push(SqStack &S, BiTree &e) {}
void pop(SqStack &S, BiTree &e) {}
void getTop(SqStack &S, BiTree &e) {}

void visit(BiTree T) {}


// 递归遍历二叉树
void rTraverse(BiTree T) {
  if (T != NULL) {
    visit(T); // 先序
    rTraverse(T->lchild);
    // visit(T); // 中序
    rTraverse(T->rchild);
    // visit(T); // 后序
  }
}

// 非递归先序遍历二叉树
void PreOrderTraverse(BiTree T) {
  InitStack(S); BiTree p = T;
  while (p || !IsEmpty(S)) {
    if (p) {
      visit(p); push(S, p);
      p = p->lchild;
    } else {
      pop(S, p);
      p = p->rchild;
    }
  }
}

// 非递归中序遍历二叉树
void InOrderTraverse(BiTree T) {
  InitStack(S); BiTree p = T;
  while (p || !IsEmpty(S)) {
    if (p) {
      push(S, p);
      p = p->lchild;
    } else {
      pop(S, p); visit(p);
      p = p->rchild;
    }
  }
}

// 非递归后序遍历二叉树(*)
void PostOrderTraverse(BiTree T) {
  InitStack(S);
  BiTree p = T, r = NULL;
  while (p || !IsEmpty(S)) {
    if (p) {
      push(S, p);
      p = p->lchild;
    } else {
      getTop(S, p); // 读取栈顶元素但不出栈
      // 无右子树或右子树刚刚访问
      if (p->rchild == NULL || p->rchild == r) {
        pop(S, p);
        visit(p);
        r = p; // 防止父节点将该节点作为右孩子再次访问
        p = NULL;
      } else {
        p = p->rchild;
      }
    }
  }
}

// 层序遍历二叉树
void LevelOrderTraverse(BiTree T) {
  InitQueue(Q);
  EnQueue(Q, T);
  BiTree p;
  while (!IsEmpty(Q)) {
    DeQueue(Q, p);
    visit(p);
    if (p->lchild) {
      EnQueue(Q, p->lchild);
    }
    if (p->rchild) {
      EnQueue(Q, p->rchild); 
    }
  }
}

typedef struct ThreadNode {
  ElemType data;
  ThreadNode *lchild, *rchild;
  int ltag, rtag; // 左、右线索标志
} ThreadNode, *ThreadTree;
void visit(ThreadNode *p) {}

// 中序遍历对二叉树进行线索化
void InOrderThread(ThreadTree &p, ThreadTree &pre) {
  if (p != NULL) {
    InOrderThread(p->lchild, pre);
    if (p->lchild == NULL) {
      p->lchild = pre; // 建立当前结点的前驱线索
      p->ltag = 1;
    }
    if (pre != NULL && pre->rchild == NULL) {
      pre->rchild = p; // 建立前驱结点的后继线索
      pre->rtag = 1;
    }
    pre = p;
    InOrderThread(p->rchild, pre);
  }
}
void CreateInOrderThread(ThreadTree T) {
  ThreadTree pre = NULL;
  if (T != NULL) {
    InOrderThread(T, pre);
    pre->rchild = NULL;
    pre->rtag = 1;
  }
}

// 遍历中序线索二叉树
ThreadNode *FirstNode(ThreadNode *p) {
  while (p->ltag != 1) p = p->lchild;
  return p;
}
ThreadNode *NextNode(ThreadNode *p) {
  if (p->rtag == 0) return FirstNode(p->rchild);
  else return p->rchild;
}
void InOrderThreadTraverse(ThreadTree T) {
  for (ThreadNode *p = FirstNode(T); p != NULL; p = NextNode(p))
    visit(p);
}

typedef struct BTreeNode {
  char data[10];
  BTreeNode *lchild, *rchild;
} BTree;
void BTreeToExp(BTree *root, int depth) {
  if (root == NULL) return;
  if (root->lchild == NULL && root->rchild == NULL)
    printf("%s", root->data);
  else {
    if (depth > 1) printf("(");
    BTreeToExp(root->lchild, depth + 1);
    printf("%s", root->data);
    BTreeToExp(root->rchild, depth + 1);
    if (depth > 1) printf(")");
  }
}
// 初始: BTreeToExp(root, 1);

# define MAX_TREE_SIZE 100
typedef struct {
  ElemType data;
  int parent;
} PTNode;
typedef struct {
  PTNode nodes[MAX_TREE_SIZE];
  int n; // 当前节点数
} PTree;

typedef struct CSNode {
  ElemType data;
  struct CSNode *firstchild;  // 指向第一个孩子节点
  struct CSNode *nextsibling; // 指向其右边第一个兄弟节点
} CSNode, *CSTree;