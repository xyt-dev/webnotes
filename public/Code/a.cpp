#include <stdlib.h>
typedef int ElemType;

typedef struct DNode {
  ElemType data;
  struct DNode *prior, *next;
} DNode, *DLinkList;

typedef struct LNode {
  ElemType data;
  struct LNode *next;
} LNode, *LinkList;

#define MaxSize 100
typedef struct {
  ElemType data;
  int next;
} SLinkList[MaxSize];

int main () {
  DLinkList  p, q;
  // 插入新结点
  DNode *s = (DNode*)malloc(sizeof(DNode));
  s->next = p->next;
  s->prior = p;
  p->next->prior = s;
  p->next = s;

  // 删除结点
  p->next=q->next;
  q->next->prior=p;
  free(q);
  
  return 0;
}