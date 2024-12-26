import Latex from "react-latex-next"
import 'katex/dist/katex.min.css'; // 导入 KaTeX 样式
import Space from "@/components/Space";

function Img({ src, width, align}: { src: string, width?: number, align?: string }) {
  if (align !== "left") align = "mx-auto"
  return (
     <img className={`mt-1 mb-1 ${align}`} src={src} alt="image" width={width} />
  ) 
}

export default function Chapter1() {
  return (
    <div className="prose daisy-prose p-6 max-w-[1500px]">
      <h2 className="text-3xl">数据与数据结构</h2>
      <h3>基本概念</h3>
      <p>
        数据: 信息的载体, 能输入到计算机中并被识别和处理的符号的集合. (0 和 1 及其组成的其他数据)<br />
        <strong>数据元素: 数据的基本单位, 通常作为一个整体处理, 可有多个数据项组成. </strong><br />
        数据项: 构成数据元素的不可分割的最小单位, 如 一个整数、一个字符串. <br />
        数据对象: 具有相同性质的数据元素的集合, 是数据的子集. <br />
        数据类型: 对数据元素的集合和在其上定义的操作的抽象描述, 分为原子类型(int)、结构类型(Struct)、抽象数据类型ADT(Class). <br />
        <strong>数据结构: 存在一种或多种特定关系的数据元素的集合. 这些特定关系称为结构, 包括逻辑结构、存储结构、数据的运算操作.</strong>
      </p>
      <p >
        <strong className="text-lg">数据结构三要素: 逻辑结构, 存储结构, 数据的运算(操作方法)</strong>
        <br />抽象数据类型(ADT)通常用<strong>(数据对象, 数据关系, 基本操作集)</strong>三元组来定义, 可<strong>定义</strong>一个完整的数据结构.
      </p>

      <h3>逻辑结构与存储结构(物理结构)</h3>
      <p>
        逻辑结构是对数据元素之间关系的抽象描述, 无需考虑具体的存储结构.
        同一逻辑结构可有多种不同的物理实现方式, 但存储结构必须符合逻辑结构的要求, 受逻辑结构约束. 所以, <strong>逻辑结构独立于其存储结构, 存储结构并不独立于逻辑结构.</strong>
      </p>
      <p>
        逻辑结构包括: <strong>一对一(线性)、一对多(树)、多对多(图)、集合</strong> <br />
        存储结构包括: <strong>顺序存储</strong>结构、<strong>链式存储</strong>结构、<strong>索引存储</strong>结构、<strong>散列存储</strong>结构 (<strong>注: 顺序存储要求逻辑上相邻的元素在物理位置上也在相邻存储单元</strong>) <br />
        <Img src="Images/408/DataStructure/数据结构的逻辑结构.png" width={600} />
      </p>
      <p>
        <strong>线性表</strong>描述一种<strong>逻辑结构</strong>, 其数据元素之间具有一对一的线性关系, 即每个元素(除了第一个和最后一个元素外)都有<strong>唯一的前驱和后继</strong>. 
        包括顺序表(数组), 链表, 栈和队列(特殊的线性表) 等. (一个线性表要求只有<strong>有限</strong>个数据元素) <br />
        <strong>顺序表, 链表</strong>等 既描述了<strong>逻辑结构</strong>, 又描述了<strong>存储结构</strong>. <br />
        <strong>有序表</strong>是指关键字有序的线性表, 仅描述数据元素之间的<strong>逻辑关系</strong>.
      </p>
      <p>
        逻辑结构相同, 存储结构不同, 运算效率可能不同, 是不同的数据结构<br />
        eg. 在线性表中插入和删除元素, 顺序存储平均要移动一半的数据元素, 其时间复杂度为 O(n); 链式存储只需要修改指针, 其时间复杂度为 O(1). <br />
        逻辑结构相同, 存储结构相同, 数据的运算定义不同, 运算效率可能不同, 是不同的数据结构<br />
        eg. 二叉树查找平均时间复杂度为 O(n), 二叉排序树查找节点平均时间复杂度为 O(log n). <br />
      </p>

      <h2>算法</h2>
      <p>概念: 对特定<strong>问题求解步骤的一种描述</strong>, 指令的有限序列.</p>
      <p className="font-bold">
        算法的必要条件 (不是充分条件, 算法还需要能解决具体问题):
        <ul className="m-0" id="sm-list">
          <li>有穷性: 有穷步数完成.</li>
          <li>可行性: 算法操作可实现.</li>
          <li>确定性: 指令作用确定, 相同输入必然产生相同的输出.</li>
          <li>输入: 零个或多个输入数据.</li>
          <li>输出: 一个或多个输出数据.</li>
        </ul>
      </p>
      <p className="font-bold">好的算法: 正确性、可读性、健壮性、高效低存储</p>
      <p className="font-bold">
        <div className="mb-2">
          算法时间复杂度: 算法所有语句的频度之和. 记为 <Latex>{`$T(n)=O(f(n))$`}</Latex> <br />
          即存在正常数 <Latex>{`$C$ 和 $N$`}</Latex> 使得当 <Latex>{`$n>N$ 时, 恒有 $0 \\leq T(n) \\leq Cf(n)$`}</Latex> <br />
        </div>
        <div className="mb-2">
          <Latex>{`$T(n)$ 的运算满足以下规则: `}</Latex> <br />
          1. <span className="inline-block w-[5px]"/>加法规则 <Space width={1} /><Latex>{`$T(n) = T_1(n) + T_2(n) = O(f(n)) + O(g(n)) = O(\\max(f(n), g(n)))$`}</Latex> <br />
          2. 乘法规则 <Space width={1} /><Latex>{`$T(n) = T_1(n) \\times T_2(n) = O(f(n)) \\times O(g(n)) = O(f(n) \\times g(n))$`}</Latex> <br />
          将各个语句时间复杂度相加 (嵌套循环的循环次数相乘得到内层语句频度), 可以发现 <Latex>{`$T(n)$`}</Latex> 的值取决于频度数量级最高的语句 (来自嵌套循环最内层语句). 直接计算频度数量级最高的一条语句的时间复杂度即可. <br />
          (注意循环次数由循环条件和相关变量共同决定, 注意循环条件相关变量!)
        </div>
        <div className="font-bold mb-2">(算法时间复杂度一般默认取最大时间复杂度, 有条件分支语句时, 直接取<span className="underline underline-offset-[6px]"> 存在可能 </span>执行的分支路径上的最大时间复杂度)</div>
        <div>eg: 算法时间复杂度为 <Latex>{`$O(n^2)$`}</Latex>, 即 <Latex>{`$T(n)=O(n^2)$`}</Latex>, 问题规模仍为 <Latex>{`$n$`}</Latex>.
          由于时间复杂度大O表示法默认取最小上界, 可以认为执行时间与 <Latex>{`$n^2$`}</Latex> 成正比.</div>
      </p>
      <p className="font-bold">
        算法空间复杂度: 算法运行所需的额外辅助存储空间. 记为 <Latex>{`$S(n)=O(g(n))$`}</Latex> <br />
        原地工作算法: 算法所需额外辅助空间大小为常量, 即 <Latex>{`$S(n)=O(1)$`}</Latex> <br />
      </p>
      <div className="font-bold">注: <Latex>{`$O(a^n) < O(n!) < O(n^n)$`}</Latex></div>
      <p>
        <strong>例题: </strong>
        <Img src="Images/408/DataStructure/Exercises/1_2_10.png" width={700} align="left" />
        <Latex>{`令 $k=\\lfloor log_2(n) \\rfloor$, 即 $log_2(n) - 1 \\lt k \\le log_2(n)$, 于是 $2^k \\le n < 2^{k+1}$, 
          设$n$进行$t$次向下取整的除$2$操作后等于$1$, 易知 $k \\le t \\lt k+1$. 又 $t$ 为整数, 所以递归深度 $t=k=\\lfloor log_2(n) \\rfloor \\le log_2(n)$. 此题选 C.
          $\\\\$ 若递归时执行两次 Func(), 则执行次数为 $2^{\\lfloor log_2(n) \\rfloor} \\le n$.`}</Latex>
        <Img src="Images/408/DataStructure/Exercises/1_2_11.png" width={800} align="left" />
        <Latex>{`假设循环内语句执行次数为 $k$, 则 $2^{k+1} \\ge n/2$ 且 $2^k < n/2$, 即 $log_2n-2 \\le k < log_2n-1 < log_2n$, 此题选 A.`}</Latex>
        <Img src="Images/408/DataStructure/Exercises/1_2_16.png" width={700} align="left" />
        <Latex>{`假设外层循环进入 $t$ 次, 内层循环进入 $k$ 次, 则 $2^t \\ge n, 2^{t-1} < n$, 即 $t < log_2n+1$ 此时内层循环执行次数为 $\\\\1+2+4+8+\\cdots+2^t=2^t-1<2n-1$`}</Latex>
      </p>
    </div>
  )
}

