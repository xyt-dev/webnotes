#include <stdlib.h>
#include <stdio.h>

typedef int ElemType;

#define MaxSize 100
typedef struct {
  ElemType stack[MaxSize];
  int top;
} SqStack;
SqStack S;

typedef struct BiTreeNode {
  ElemType data;
  BiTreeNode *lchild, *rchild;
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
    return 0;
  }
  return 1;
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

void visit(BiTree T) {
  // 访问当前结点
}


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

// 中序遍历对二叉树进行线索化
void InOrderThread(ThreadTree &p, ThreadTree &pre) {
  if (p != NULL) {
    InOrderThread(p->lchild, pre);
    if (p->lchild == NULL) {
      p->lchild = pre;
      p->ltag = 1;
    }
    if (pre != NULL && pre->rchild == NULL) {
      pre->rchild = p;
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