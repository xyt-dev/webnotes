#include <stdlib.h>
typedef int ElemType;

#define MaxSize 100
typedef struct {
  ElemType stack[MaxSize];
  int top;
} SqStack;

// typedef struct LNode {
//   ElemType data;
//   struct LNode *next;
// } LNode, *LiStack;

typedef struct LNode {
  ElemType data;
  struct LNode *next;
} LNode, *LinkList;

int main() {
  return 0;
}

bool isSymmetrical(LinkList L, int n) {
    int i;
    char s[n / 2];
    LNode *p = L->next;
    // 将链表前一半元素压入栈中
    for (i = 0; i < n / 2; i++) {
        s[i] = p->data;
        p = p->next;
    }
    i--;
    // 若 n 是奇数，后移过中心结点
    if (n % 2 == 1)
        p = p->next;
    // 检测是否中心对称
    while (p != NULL && s[i] == p->data) {
        i--;
        p = p->next;
    }
    return i == -1; // 链表中心对称返回 true
}