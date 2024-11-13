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