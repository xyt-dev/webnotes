typedef struct {
  char *ch;
  int length;
} SString;

// 构造 next 数组
void get_next(SString T, int next[]) {
  int i = 1, j = 0;
  next[1] = 0;
  while (i < T.length) {
    if (j == 0 || T.ch[i] == T.ch[j]) {
      ++i; ++j;
      next [i] = j;
    } else {
      j = next[j];
    }
  }
}

// 传入 next 数组, 优化 next 数组
void get_nextval1(SString T, int next[]) {
  for (int k = 2; k < T.length; k++) {
    if (T.ch[k] == T.ch[next[k]]) {
      next[k] = next[next[k]];
    }
  }
}

// 直接构造优化的 next 数组
void get_nextval2(SString T, int next[]) {
  int i = 1, j = 0;
  next[1] = 0;
  while (i < T.length) {
    if (j == 0 || T.ch[i] == T.ch[j]) {
      ++i; ++j;
      if (T.ch[i] != T.ch[j]) {
        next[i] = j;
      } else {
        next[i] = next[j];
      }
    } else {
      j = next[j];
    }
  }
}

// 模式串匹配主串
int kmp(SString S, SString T, int next[]) {
  int i = 1, j = 1;
  while (i < S.length && j < T.length) {
    if (j == 0 || S.ch[i] == T.ch[j]) {
      ++i; ++j;
    } else {
      j = next[j];
    }
  }
  if (j > T.length) {
    return i - T.length; // 匹配成功, 返回匹配字符串在主串中第一个字符的位序.
  }
  return 0;
}
