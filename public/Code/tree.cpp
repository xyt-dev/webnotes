typedef int ElemType;

typedef struct BiTreeNode {
  ElemType data;
  BiTreeNode *lchild, *rchild;
} BiTreeNode, *BiTree;