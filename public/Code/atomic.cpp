bool lock = false;


// 硬件实现的原子操作
bool TestAndSet(bool *lock) {
  bool old;
  old = *lock;
  *lock = true;
  return old;
}

// 硬件实现的原子操作
void Swap(bool *a, bool *b) {
  bool temp;
  temp = *a;
  *a = *b;
  *b = temp;
}

void block(struct process *L) {}
void wakeup(struct process *L) {}

typedef struct {
  int value;
  struct process *L; // 进程等待队列
} semaphore;
void wait(semaphore &S) {
  S.value --;
  if (S.value < 0) {
    block(S.L); // 当前进程/线程进入S的等待队列
  }
}
void post(semaphore &S) {
  S.value ++;
  if (S.value <= 0) {
    wakeup(S.L); // 唤醒S的等待队列中的一个进程/线程
  }
}

int n = 10;
typedef int Semaphore;
void P(Semaphore S) {}
void V(Semaphore S) {}

// 生产者消费者
Semaphore empty = n;
Semaphore full = 0;
Semaphore mutex = 1;
void producer() {
  while (1) {
    // 生产一个产品
    P(empty);
    P(mutex);
    // 把一个产品放入缓冲区(临界资源)
    V(mutex);
    V(full);
  }
}
void consumer() {
  while (1) {
    P(full);
    P(mutex);
    // 从缓冲区(临界资源)取出一个产品
    V(mutex);
    V(empty);
    // 使用产品
  }
}

int main() {
  while (TestAndSet(&lock));
  // 临界区
  lock = false;
  // 剩余区

  bool old = true;
  while (old == true)
    Swap(&lock, &old);
  // 临界区
  lock = false;
  // 剩余区
  return 0;
}