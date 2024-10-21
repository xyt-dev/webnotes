#include <stdlib.h>
#include <stdio.h>
typedef int ElemType;

#define MaxSize 100
typedef struct {
  ElemType data[MaxSize];
  int front, rear;
} SqQueue;

typedef struct LinkNode {
  ElemType data;
  LinkNode *next;
} LinkNode;

typedef struct {
  LinkNode *front, *rear;
} LinkQueue;


int main() {
  printf("%d\n", -3 % 2);
  return 0;
}