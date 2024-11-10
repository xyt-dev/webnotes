#include <stdlib.h>

typedef int ElemType;
typedef struct {
  ElemType *elems; // 动态数组基地址
  int TableLen; // 当前元素个数
} SSTable;
int Search_Seq(SSTable ST, ElemType key) {
  ST.elems[0] = key; // 哨兵
  int j; for (j = ST.TableLen; ST.elems[j] != key; --j) ;
  return j; // 未找到元素则返回0
}

int Binary_search(SSTable T, ElemType key) {
    int low = 0, high = T.TableLen - 1, mid;
    while (low <= high) {
        mid = (low + high) / 2;
        if (T.elems[mid] == key) {
            return mid;
        } else if (T.elems[mid] > key) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1; // 未找到元素则返回-1
}

typedef struct BiTreeNode {
  ElemType data;
  BiTreeNode *lchild, *rchild;
} BiTreeNode, BSTNode, *BiTree;

BSTNode *BST_Search(BiTree T, ElemType key) {
  while (T != NULL && key != T->data) {
    if (key < T->data) T = T->lchild;
    else T = T->rchild;
  }
  return T; // 找到返回结点指针, 未找到则返回NULL
}

int BST_Insert(BiTree &T, ElemType key) {
  if (T == NULL) {
    T = (BiTree)malloc(sizeof(BiTreeNode));
    T->data = key;
    T->lchild = T->rchild = NULL;
    return 1; // 插入成功
  } else if (key == T->data) {
    return 0; // 元素已存在, 不插入
  } else if (key < T->data) {
    return BST_Insert(T->lchild, key); // 插入左子树
  } else {
    return BST_Insert(T->rchild, key); // 插入右子树
  }
}

void Create_BST(BiTree &T, ElemType A[], int n) {
  T = NULL;
  int j = 0;
  while (j < n)
    BST_Insert(T, A[j++]);
}

int main() {
  return 0;
}