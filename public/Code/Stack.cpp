#include <stdlib.h>
typedef int ElemType;

#define MaxSize 100
typedef struct {
  ElemType stack[MaxSize];
  int top;
} SqStack;

typedef struct LNode {
  ElemType data;
  struct LNode *next;
} LNode, *LiStack;


int main() {
  LiStack *L = NULL;
  return 0;
}