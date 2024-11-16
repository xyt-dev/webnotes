#include <stdlib.h>
typedef int ElemType;

void InsertSort(ElemType A[], int n) {
  int j, k;
  for (j = 2; j <= n; j ++) {
    if (A[j] < A[j - 1]) {
      A[0] = A[j]; // Temp, 同时作为哨兵
      // A[0...j-1] 为有序顺序表, 从后往前顺序查找插入位置.
      for (k = j - 1; A[0] < A[k]; k --)
        A[k + 1] = A[k];
      A[k + 1] = A[0];
    }
  }
}

void InsertSort2(ElemType A[], int n) {
  int j, k, low, high, mid;
  for (j = 2; j <= n; j ++) {
    A[0] = A[j]; // Temp
    // A[0...j-1] 为有序顺序表, 二分查找插入位置.
    low = 1, high = j - 1;
    while (low <= high) { // low > high 时结束查找.
      mid = (low + high) / 2;
      if (A[mid] > A[0]) high = mid - 1;
      else low = mid + 1;
    }
    // 待插入位置为 high + 1
    for (k = j - 1; k >= high + 1; k --)
      A[k + 1] = A[k];
    A[high + 1] = A[0];
  }
}

void ShellSort(ElemType A[], int n) {
  int dk, j, k;
  for (dk = n / 2; dk >= 1; dk /= 2) // 增量变化dk (无统一规定)
    for (j = dk + 1; j <= n; j ++) {
      if (A[j] < A[j - dk]) { // 对子列进行直接插入排序
        A[0] = A[j]; // Temp
        for (k = j - dk; k > 0 && A[0] < A[k]; k -= dk) // 注意判断k>0
          A[k + dk] = A[k];
        A[k + dk] = A[0];
      }
    }
}

void swap (ElemType& a, ElemType& b) {
  ElemType temp = a;
  a = b;
  b = temp;
}

void BubbleSort(ElemType A[], int n) {
  for (int j = 0; j < n - 1; j ++) {
    bool flag = false; // 标记是否发生过交换
    for (int k = n - 1; k > j; k --)
      if (A[k] < A[k - 1]) {
        swap(A[k], A[k - 1]);
        flag = true; // 记录发生过交换
      }
    if (!flag) return; // 表已经有序
  }
}


int Partition(ElemType A[], int low, int high) {
  ElemType pivot = A[low];
  while (low < high) {
    while (low < high && A[high] >= pivot) 
      -- high; // 找到当前小于pivot的最右边元素
    A[low] = A[high];
    while (low < high && A[low] <= pivot)
      ++ low; // 找到当前大于pivot的最左边元素
    A[high] = A[low];
  }
  A[low] = pivot; // 此时 low == high
  return low;
}
void QuickSort(ElemType A[], int low, int high) {
  if (low < high) {
    int pivot = Partition(A, low, high);
    QuickSort(A, low, pivot - 1);
    QuickSort(A, pivot + 1, high);
  }
}
int Kth_elem(int A[], int low, int high, int k) {
    int pivot = A[low];
    int low_temp = low;
    int high_temp = high;
    while (low < high) {
        while (low < high && A[high] >= pivot) --high;
        A[low] = A[high];
        while (low < high && A[low] <= pivot) ++low;
        A[high] = A[low];
    }
    A[low] = pivot;
    if (low == k) 
      return A[low];  // 找到第k小元素
    else if (low > k) 
      return Kth_elem(A, low_temp, low - 1, k); // 第k小元素在左半部分
    else 
      return Kth_elem(A, low + 1, high_temp, k); // 第k小元素在右半部分
}

void SelectSort(ElemType A[], int n) {
  for (int j = 0; j < n - 1; j ++) {
    int min = j;
    for (int k = j + 1 ; k < n; k ++)
      if (A[k] < A[min]) min = k;
    if (min != j) swap(A[j], A[min]);
  }
}



// 对以k为根的子树进行调整使其成为大顶堆
void HeadAdjust(ElemType A[], int k, int n) {
  A[0] = A[k]; // Temp
  for (int j = 2 * k; j <= n; j *= 2) {
    if (j < n && A[j] < A[j + 1]) j ++; // j指向子节点中较大的
    if (A[0] >= A[j]) break; // 结束调整
    A[k] = A[j];
    k = j;
  }
  A[k] = A[0];
}
// 自下而上建立大顶堆
void BuildMaxHeap(ElemType A[], int n) {
  for (int j = n / 2; j > 0; j --)
    HeadAdjust(A, j, n);
}
// 堆排序(基于大顶堆排序结果从小到大)
void HeapSort(ElemType A[], int n) {
  BuildMaxHeap(A, n);
  // 每次将堆顶元素交换至堆尾(最终位置), 然后堆大小减1
  for (int j = n; j > 1; j --) {
    swap(A[j], A[1]);
    HeadAdjust(A, 1, j - 1); // 调整, 使剩余j-1个元素仍为大顶堆
  }
}



int n = 1000000;

ElemType *B = (ElemType *)malloc((n + 1)*sizeof(ElemType)); // 辅助空间
void Merge(ElemType A[], int low ,int mid, int high) {
  int i, j, k;
  for (k = low; k <= high; k ++) B[k] = A[k]; // 拷贝
  for (i = low, j = mid + 1, k = low; i <= mid && j <= high; k ++) {
    if (B[i] < B[j]) A[k] = B[i ++];
    else A[k] = B[j ++];
  }
  while (i <= mid) A[k ++] = B[i ++];
  while (j <= high) A[k ++] = B[j ++];
}
void MergeSort(ElemType A[], int low, int high) {
  if (low < high) {
    int mid = (low + high) / 2;
    MergeSort(A, low, mid);
    MergeSort(A, mid + 1, high);
    Merge(A, low, mid, high);
  }
}

void CountSort(ElemType A[], ElemType B[], int n, int k) {
  int j, C[k]; // k为元素最大可能值+1
  for (j = 0; j < k; j ++) C[j] = 0; // 初始化计数数组
  for (j = 0; j < n; j ++) C[A[j]] ++; // 统计各元素值出现次数
  for (j = 1; j < k; j ++)
    C[j] += C[j - 1]; // 前缀和 (C[j]表示小于等于j的元素个数)
  for (j = n - 1; j >= 0; j --) {
    // 数组B存放最终排序序列, 其中大小相等元素要占据一段连续空间
    // 每段预留空间中互不影响地从后往前填入元素(从后往前遍历数组A以保持稳定性)
    B[C[A[j]] - 1] = A[j];
    C[A[j]] --;
  }
}