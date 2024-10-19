#include <stdlib.h>
#include <assert.h>
typedef int ElemType;

typedef struct DNode {
  ElemType data;
  struct DNode *prior, *next;
  const int a;
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

// 方法一: 头插法
LinkList Reverse1(LinkList L) {
  assert(L);
  LNode *p, *r; // p 为工作指针, r 为 p 的后继, 防止断链
  p = L->next;
  L->next = NULL; 
  while (p != NULL) {
    r = p->next;
    p->next = L->next; // 将p指向的结点插到头结点后
    L->next = p;
    p = r;
  }
  return L;
}

// 方法二: 结点指针反转
LinkList Reverse2(LinkList L) {
  assert(L);
  LNode *pre, *p = L->next, *r = p->next;
  p->next = NULL;
  while (r != NULL) {
    pre = p;
    p = r;
    r = r->next;
    p->next = pre; // 指针反转
  }
  L->next = p;
  return L;
}

// 20
void changeList(LNode *h) {
  assert(h);
  LNode *p, *q, *r, *s;
  p = q = h;
  while (q->next != NULL) {
    p = p->next;      // p 走一步 q 走两步 
    q = q->next;      
    if (q->next != NULL)
      q = q->next; 
  }                   // p 最终指向奇数个结点的中点或偶数个结点的中心偏左
  q = p->next;        // q 指向后半段首结点
  p->next = NULL;     // 借用前半段尾结点暂时作为后半段链表的头结点
  while (q != NULL) { // 使用头插法将链表后半段逆置
    r = q->next;
    q->next = p->next;
    p->next = q;
    q = r;
  }
  s = h->next;        // s 指向前半段第一个数据结点
  q = p->next;        // q 指向前半段第一个数据结点   
  p->next = NULL;     // 前半段尾结点不再指向后半段链表
  while (q != NULL) { // 将后半段各数据结点间隔插入到前半段各数据结点后
    r = q->next;
    q->next = s->next;
    s->next = q;
    s = q->next;
    q = r;
  }
}
// 第一步找中间结点O(n), 第二步逆置链表后半段O(n), 第三步合并两段链表O(n), 总时间复杂度为O(n)


int main(int a, char *argv[]) {
  DLinkList  p, q;
  // 插入新结点 s: <-> p <-> s <->
  DNode *s = (DNode*)malloc(sizeof(DNode));
  s->next = p->next;
  s->prior = p;
  p->next->prior = s;
  p->next = s;

  // 删除结点 q: <-> p <-> q <->
  p->next=q->next;
  q->next->prior=p;
  free(q);
  
  return 0;
}