#define SIZE 100
int UFSets[SIZE];
void Initial(int S[]) {
  for (int j = 0; j < SIZE; j++) 
    S[j] = -1;
}
void Union(int S[], int Root1, int Root2) {
  if (Root1 == Root2) return; // 不要让根节点指向其自己
  if (S[Root2] > S[Root1]) { // Root2 集合结点数更少
    S[Root1] += S[Root2]; // 根结点值的绝对值表示集合的结点总数
    S[Root2] = Root1; // 小树合并到大树
  } else {
    S[Root2] += S[Root1];
    S[Root1] = Root2;
  }
}
int Find(int S[], int x) {
  int root = x;
  while (root >= 0) {
    root = S[root]; // 找到x所在集合的根节点
  }
  // 路径压缩: x到根节点的路径上的所有节点都直接指向根节点
  while (x != root) {
    int t = S[x];
    S[x] = root;
    x = t;
  }
  return root;
}