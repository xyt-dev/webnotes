import TextBox from "@/components/RawTextBox"
import { Title1, Title2 } from "@/components/RawTextBox"
import Latex from "react-latex-next"
import 'katex/dist/katex.min.css'; // 导入 KaTeX 样式
import Space from "@/components/Space";

function Img({ src, width }: { src: string, width?: number }) {
  return (
    <img className="m-1 mx-auto" src={src} alt="" width={width} />
  )
}

export default function LinearAlgebra1() {
  return (
    <div className={`w-[100%] mx-auto`}>
      <TextBox>
        <Title1><div className="pb-6 text-rose-500 underline">线性代数</div></Title1>
        <div className="leading-9 prose daisy-prose">
          <ul>
            <li>一元三次方程根为a, b, c, 则方程:<br /> <Latex>{`$Ax^3+Bx^2+Cx+D=0 \\rightarrow x^3-(a+b+c)x^2+(ab+bc+ac)x-abc=0,~a^2+b^2+c^2=B^2-2C$`}</Latex></li>
            <li>[228] 一行/一列 + 另一行/另一列 行列式的值不变</li>
            <li>[229] 求常数项的值可令变量为0, 任意两行/两列相同行列式值为0</li>
            <li>[230] 令变量为0, 化简行列式</li>
            <li>[231] 行/列相减, 然后可将行列式分解为常数项和x的一次项</li>
            <li>[233] 方法一: 全部减第n行化为爪型, 斜爪削平爪化为三角型; 方法二: 全部加到第一列使第一列相等, 提出第一列为1, 之后易化为三角型</li>
            <li><strong>[234] 拉普拉斯展开式; 注意余子式和代数余子式的区别; 4阶行列式化三阶行列式; 三阶行列式化H型</strong></li>
            <li><strong>[237]</strong> 方法一: 任意n维列向量<Latex>{`$\\xi$`}</Latex>有 <Latex>{`$A\\xi=0 ~\\Rightarrow~ A=O$`}</Latex>, 可令<Latex>{`$\\xi$`}</Latex>分别为各方向单位向量来证明;<br />
              <strong>方法二(自己想的):</strong> <Latex>{`$AB=O \\Rightarrow r(A)+r(B)\\le n$`}</Latex>, 而任意n维列向量 <Latex>{`$\\xi$`}</Latex> 组成的矩阵的秩r(B)可能等于n, 因此 r(A)=0 <br />
              对于反对称矩阵A: <Latex>{`$\\xi^TA\\xi=(\\xi^TA\\xi)^T=\\xi^TA^T\\xi=-\\xi^TA\\xi ~\\Rightarrow~ \\xi^TA\\xi=0$`}</Latex>
            </li>
            <li><strong>反对称矩阵的主对角线元素为0</strong></li>
            <li><strong>矩阵行秩=列秩证明: </strong>
              <Img src="Images/Math/行秩等于列秩.png" />
            </li>
            <li><strong>对于方阵A、B有: <Latex>{`$|AB|=|A||B|$`}</Latex><br />
              证明: 若A或B不满秩, 则<Latex>{`$|AB|=|A||B|=0$`}</Latex>; 否则方阵可逆且可由单位矩阵E经过一系列初等行变换得到, 作任意初等行变换等价于左乘一个初等矩阵, 其行列式的值等于原值乘1、(-1)、或常数c.
              <Latex>{`$~~ |AB|=|E_1E_2 \\cdots E_kEB|=c_1c_2 \\cdots c_k|E||EB|=|E_1E_2 \\cdots E_kE||EB|=|A||B|$`}</Latex></strong><br />
              注: 一般 <Latex>{`$|A+B|\\neq |A|+|B|$`}</Latex>
            </li>
            <li><strong>对于方阵A、B: <br />
              <Latex>{`$(A^*)^{-1}=(|A|A^{-1})^{-1}=\\frac{(|A|A^{-1})^*}{||A|A^{-1}|}=\\frac{|A|^{n-1}(A^{-1})^*}{|A|^{n}|A^{-1}|}=(A^{-1})^*=\\frac{A}{|A|} \\\\
              (A^*)^*=(|A|A^{-1})^*=|A|^{n-1}(A^{-1})^*=|A|^{n-1}|A^{-1}|(A^{-1})^{-1}=|A|^{n-2}A$`}</Latex></strong></li>
            <li>[240] 利用初等变换求逆矩阵</li>
            <li><strong>[241]</strong> <Latex>{`$\\begin{vmatrix} A & B \\\\ O & D \\end{vmatrix} = |A||D|$`}</Latex></li>
            <li><strong>[242]</strong> <Latex>{`$\\begin{vmatrix} O & B \\\\ C & D \\end{vmatrix} = (-1)^{m*n}|B||C| $`}</Latex><br />
              对于方阵BC: <Latex>{`$\\begin{bmatrix} O & B \\\\ C & O \\end{bmatrix} ^ {-1} = \\begin{bmatrix} O & C^{-1}  \\\\ B^{-1} & O \\end{bmatrix}$`}</Latex></li>
            <li>[243] 原式 = <Latex>{`$\\frac{~(|B|-|A|)^3}{|A||B|}$`}</Latex></li>
            <li><strong>[246] 矩阵A和B等价, B=PAQ; 若A和B是可逆矩阵, 则都可以由单位矩阵通过行或列变换得到, B=PA / B=AQ</strong></li>
            <li>[247] <Latex>{`$[E_{ij}(k)]^{-1}=E_{ij}(-k), ~E_{ij}(k)$`}</Latex>表示原单位矩阵E的第i行第j列为k <br />行← 列→</li>
            <li>[248] AB=O -&gt; r(A)+r(B)&le;n</li>
            <li><strong>[249]</strong> 分块<strong>方阵</strong>矩阵, 一行/列乘一个矩阵加到另一行/列 (就像矩阵形式的初等变换); <strong>矩阵乘一个满秩矩阵秩不变; r(A)=r(A^TA)</strong></li>
            <li className="font-bold"><strong>r(A)=r(A^TA) 证明: </strong><br />
              <Latex>{`$1. Ax=0 \\Rightarrow A^TAx=0 \\\\
                2. A^TAx=0 \\Rightarrow x^TA^TAx=0 \\Rightarrow (Ax)^T(Ax)=0 \\Rightarrow Ax=0$`}</Latex><br />
              所以 1,2 两个方程同解, 解空间的秩相同<br />
              <Latex>{`$r(A)=n-r(null(A))=n-r(null(A^TA))=r(A^TA)$`}</Latex><br />
              可知, 对于实对称矩阵: <Latex>{`$~A^T=A, ~r(A)=r(A^2)=\\cdots=r(A^n)$`}</Latex>
            </li>
            <li><strong>行变换不会改变列向量的线性关系 (列变换应该也可以检验整个列向量组相不相关，但会改变具体的线性相关性, 解方程组不能用列变换)</strong></li>
            <li>[252~255] 使用行变换(或列变换)化阶梯矩阵</li>
            <li>[257,258] 向量组等价的定义</li>
            <li>[259] 施密特正交化(只求正交向量组不需要求正交单位向量<Latex>{`$\\eta$`}</Latex>(两种版本的公式))</li>
            <li className="font-bold">[260] 概念+逻辑 <Latex>{`$A_{12}\\neq 0 \\Rightarrow \\alpha_1,\\alpha_3,\\alpha_4$`}</Latex> 线性无关, <Latex>{`$r(A)\\ge 3$`}</Latex>, 又A不可逆 <Latex>{`$\\Rightarrow r(A)=3 \\Rightarrow r(A^*)=1, r(S)=3$`}</Latex>
              , 即 <Latex>{`$A^*x=0$`}</Latex> 的解空间由3个线性无关向量构成. 又 <Latex>{`$A^*A=|A|E=O$`}</Latex>, 所以 <Latex>{`$\\alpha_1,\\alpha_3,\\alpha_4 $`}</Latex> 正好是 <Latex>{`$A^*x=0$`}</Latex> 的3个线性无关解向量</li>
            <li>[261] 相当于系数矩阵左乘一个可逆矩阵A, 然后A可以消掉</li>
            <li><strong>S=n-r <Space width={1} /> 注意其中 n = 系数矩阵的列数, 即线性方程组中的未知数的个数, 无论系数矩阵的行数是否大于列数。</strong></li>
            <li className="font-bold">基础解系是指方程组Ax=0的解集的极大线性无关组, 满足三个条件：<br />
              (1)均是方程组Ax=0的解;<br />
              (2)线性无关;<br />
              (3)方程组的任意解均可由基础解系线性表出.
            </li>
            <li className="font-bold">有解的条件:
              <ul>
                <li> <Latex>{`$ r(A) \\neq r([A, b]) $  即  $r(A) + 1 = r([A, b]) $，方程组无解`}</Latex> </li>
                <li> <Latex>{`$ r(A) = r([A, b]) = n $ ，方程组有唯一解`}</Latex> </li>
                <li> <Latex>{`$ r(A) = r([A, b]) = r < n $，方程组有无穷多解`}</Latex> </li> 其中 n=系数矩阵的列数
              </ul>
            </li>
            <li><strong>特解一定和齐次解线性无关, 反证法证明很简单</strong></li>
            <li className="font-bold">[262] (1) 向量组线性无关 <Latex>{`$\\Leftrightarrow$`}</Latex> 向量组表出零向量, 则系数一定全部为0 (即不存在不全为零的系数组合, 也就是解向量组成的矩阵的秩r等于向量个数n); 设系数反向推出线性无关<br />
              (2) <Latex>{`$Ax=b~$的任意解向量$~\\eta^*~$可表示为: $~\\eta^*=\\eta+\\lambda_0\\xi_1+\\lambda_2\\xi_2+\\cdots+\\lambda_{n-r}\\xi_{n-r}$ (其中$~\\eta~$是特解, $~\\xi_{1\\cdots(n-r)}~$为基础解系)`}</Latex><br />此题背下来</li>
            <li className="font-bold">[263] 不同特解相减得到对应齐次方程组的非零解</li>
            <li className="font-bold"><strong>[264] 非齐次方程组的线性无关解的个数等于 n-r+1; </strong><br />
              (1) 方法一: 行向量线性相关, 设系数直接求解. 方法二: 增广矩阵作初等行变换, 得到行阶梯矩阵<br />
              (2) (1)中使用方法二化为行阶梯增广矩阵, 然后继续作行变换将其中一个极大线性无关组正分量组成的方阵化为对角矩阵, 容易计算通解<br />
              (3) 具有相同<span className="underline underline-offset-[3px]">齐次</span>解
              <br />此题背下来
            </li>
            <li className="font-bold">基础解的个数一般就是n-r+1, 只不过齐次时所有特解(任意一组极大线性无关组的解)都坍缩为零解，所以线性无关的解的个数-1=n-r</li>
            <li>[265] 行变换不改变列相关性, 列变换不改变行相关性</li>
            <li className="font-bold">[266] <Latex>{`$A^2=0$ 说明A的列向量是Ax=0的解向量, 被包含于其零空间中, 于是 $n=r(A)+S\\ge r(A)+r(A)\\Rightarrow r(A)\\le \\frac{n}{2}$`}</Latex></li>
            <li>[267] <Latex>{`$S\\ge 3-1=2, r(A)=n-S\\le n-2$`}</Latex></li>
            <li className="font-bold">[268] 任意n个线性无关向量可表出<span className="underline underline-offset-[3px]">其构成的n为向量空间中的</span>任意n维向量; <br />通解由n个线性无关向量组成 -&gt; 表出通解的n个线性无关向量也可以表出其空间中任意n维向量, 其中构成通解的特解向量系数为1, 所以方程组的系数矩阵 乘 特解和齐次解所能表出的n维空间中的任意向量得到的都是 <Latex>{`$k\\vec{b}$`}</Latex>. <br />
              特别地, 对于秩等于1的系数矩阵任意 <Latex>{`$\\vec{x}$`}</Latex> 所处整个向量空间就是特解和齐次解系表出的向量空间, 即 <Latex>{`$A\\vec{x}=k\\vec{b}$`}</Latex>. (其实很好理解, 因为系数矩阵中各基向量都在一条直线上) <br />
              所以可以发现,
            </li>
            <li>[269] 增广矩阵带参数分情况讨论计算通解; <strong>系数矩阵相同共用齐次解</strong></li>
            <li className="font-bold">[270] <Latex>{`$r(A)=r(B)=r(\\begin{bmatrix} A \\\\ B \\end{bmatrix})$`}</Latex> <Latex>{`$\\Leftrightarrow$`}</Latex> A 和 B 中行向量所处空间维数相同, 且不包含对方无法表出的向量 <Latex>{`$\\Leftrightarrow$`}</Latex> 即 A 和 B 的行向量组能互相表出 <Latex>{`$\\Leftrightarrow$`}</Latex> A 和 B 的行向量组是等价向量组.
              <br />此时存在矩阵 <Latex>{`$C, D$ 使 $A=DB, B=CA$`}</Latex>, 易知 <Latex>{`$A\\vec{x}=\\vec{0}, \\\\ B\\vec{x}=\\vec{0}, \\begin{bmatrix} A \\\\ B \\end{bmatrix}\\vec{x}=\\vec{0}$`}</Latex> 是同解方程组. (行变换不改变列向量的线性关系) <br />
              如果系数矩阵 A 和 B 的列向量组是等价向量组, 不能说明其齐次方程组(右乘 <Latex>{`$\\vec{x}$`}</Latex>)同解, 因为其行向量组合并后秩可能增大, 但其转置后行向量组为等价向量组, 方程组同解.
            </li>
            <li><strong>[271]</strong> 看行向量组是否可以<strong>相互</strong>线性表出(三秩是否相等); 抽象矩阵行变换只能<strong>左乘</strong>矩阵, 且<strong>一般只能乘矩阵不能"除"矩阵(需要矩阵元素可逆)</strong></li>
            <li><strong>[272]</strong> 看清楚是三个平面公共交点, 即没有一个点同时满足三个平面方程, 即讨论参数令方程组无解</li>
            <li>[273] <strong><Latex>{`$AB=O$ 则 $r(A)+r(B) \\le n$(A的列数(min\{A的列数, A的行数\})), 因为B的列向量都是$A\\vec{x}=\\vec{0}$的解`}</Latex></strong></li>
            <li className="font-bold">显然只有方阵能够有特征值和特征向量, 特征向量不能为零向量, 特征值可能为0</li>
            <li className="font-bold"><Latex>{`$A^T$ 的特征值与 $A$ 的特征值相同, 但注意特征向量不再是 $\\xi$, 需要具体计算`}</Latex></li>
            <li className="font-bold"><Latex>{`若$\\lambda$是$A$的特征值, 当$A$可逆时, $\\frac{1}{\\lambda}$是$A^{-1}$的特征值; 可知 A 可逆则所有特征值不为 0, 否则至少一个特征值为 0`}</Latex></li>
            <li className="font-bold">
              <Latex>{`对于任意 n 阶矩阵 A, $|A-\\lambda E|$ 为 $\\lambda$ 的 n 次多项式, 即: $ \\\\ |A-\\lambda E| = (-1)^{n}(\\lambda^n + c_1\\lambda^{n-1} + \\cdots + c_{n}) \\\\$
                由代数基本定理知: $\\\\$ 上式  $= (-1)^{n}(\\lambda-\\lambda_1)(\\lambda-\\lambda_2)\\cdots(\\lambda-\\lambda_n)$ (其中 $\\lambda_j$ 在复数域上)`}</Latex><br />
              <Latex>{`其中 $(-1)^{n-1}(\\lambda_1+\\lambda_2+\\cdots+\\lambda_n)\\lambda^{n-1}=(-1)^{n-1}(a_1+a_2+\\cdots+a_n)\\lambda^{n-1} \\\\$ 即 n-1次项 的系数相等, 所以 $\\lambda_1+\\lambda_2+\\cdots+\\lambda_n=tr(A)$`}</Latex><br />
              <Latex>{`令 $\\lambda=0$ 发现: 常数项 $(-1)^{n}c_n=\\lambda_1\\lambda_2\\cdots\\lambda_n=|A|$`}</Latex><br />
              这也可以推知: 若 A 可逆则所有特征值不为 0, 否则至少一个特征值为 0
            </li>
            <li className="font-bold"><Latex>{`若 $\\lambda_m$ 有 k 个线性无关的特征向量, 则它至少是 k 重特征值, 所以 k 重特征值至多 k 个线性无关特征向量, 即特征值的代数重数总是大于等于几何重数;
              当某个特征值的几何重数小于代数重数时, 矩阵线性无关的特征向量数量 $<n$, 矩阵不能相似对角化.`}</Latex> <br />
              所以: <span className="underline underline-offset-[3px]"><Latex>{`矩阵可相似对角化 $\\Leftrightarrow$ 矩阵有 $n$ 个线性无关的特征向量 $\\Leftrightarrow$ 每个k重特征值都有k个线性无关的特征向量`}</Latex></span> <br />
              <Latex>{`例: $\\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$`}</Latex>
              <a className="text-blue-500 hover:text-blue-700 no-underline" target="_blank" href="https://www.zhihu.com/question/22548386">相关证明</a>
            </li>
            <li className="font-bold">线性相关的特征向量特征值一定相同, 所以不同特征值的特征向量一定线性无关</li>
            <li className="font-bold">实对称矩阵必能正交相似对角化.<Space width={2} />
              <a className="text-blue-500 hover:text-blue-700 no-underline" target="_blank" href="Html/Math/实对称矩阵相关证明.html">证明</a> <br />
              实对称矩阵不同特征值对应的特征向量一定相正交.<Space width={2} />证明: <br /><Latex>{`$A\\xi_1 = \\lambda_1\\xi_1 ~ A\\xi_2 = \\lambda_2\\xi_2, ~ \\xi_1^T A \\xi_2 = \\lambda_2 \\xi_1^T \\xi_2 = (A\\xi_1)^T\\xi_2 = \\lambda_1\\xi_1^T\\xi_2 \\\\$ 又 $ \\lambda_1\\neq\\lambda_2 \\Rightarrow \\xi_1^T\\xi_2 = 0$`}</Latex><br />
              同一特征值的线性无关特征向量当然可以不正交, 但能进行施密特正交化
            </li>
            <li className="font-bold">存在<span className="underline underline-offset-[3px]">可逆矩阵</span>  <Latex>{`$P$ 使得 $P^{-1}AP=B$`}</Latex> 则称 <Latex>{`$A, B$`}</Latex> 为相似矩阵 <br />
              相似的性质: 反身性(与自身相似)、对称性、传递性 <br />
              相似矩阵的性质: <br />
              <ul>
                <li><Latex>{`$r(A)=r(P^{-1}AP)=r(B)$`}</Latex></li>
                <li><Latex>{`$|B|=|P^{-1}AP|=|A|$`}</Latex></li>
                <li>
                  <Latex>{`$|B-\\lambda E| = |P^{-1}(A-\\lambda E)P| = |A-\\lambda E| \\Rightarrow$ 特征多项式恒等, 特征值相同, $tr(A)=tr(B)$`}</Latex> <br />
                  注: 特征值相同 + 可均可相似对角化 <Latex>{`$\\Rightarrow$`}</Latex> 矩阵相似
                </li>
                <li><Latex>{`$B$ 的对应特征向量为 $P^{-1}\\xi$`}</Latex></li>
                <li><Latex>{`$B^{M}=P^{-1}A^MP, ~ A^M\\sim B^M, ~ f(A)\\sim f(B) ~ (f(x)$为多项式$),\\\\ f(B)$ 和 $B^M$ 对应特征向量当然仍为 $P^{-1}\\xi,~$对应特征值为 $\\lambda^{M}$`}</Latex></li>
                <li><Latex>{`若 $A$ 可逆 $, B^{-1}=P^{-1}A^{-1}P, ~ A^{-1}\\sim B^{-1}$, 同理有: $\\\\ (A^{-1})^M\\sim (B^{-1})^M, ~ f(A^{-1})\\sim f(B^{-1})$`}</Latex></li>
                <li><Latex>{`$A^T\\sim B^T$, 特征值与转置前相同, 特征向量需要具体计算`}</Latex></li>
                <li><Latex>{`$A^*\\sim B^*$`}</Latex></li>
              </ul>
            </li>
            <li>[274] A 有特征值 0, 说明 |A-0E| = 0, 即 |A| = 0, |AB| = |A||B| = 0, 观察行列式, 按最后一列展开</li>
            <li>[275] <Latex>{`$r(A - \\lambda E) = n ~ -$ 代数重数 (注意这里 $\\lambda$ 是特征值, 不是特征多项式的变量)`}</Latex></li>
            <li>[276] <Latex>{`$\\alpha_1 ~ \\alpha_2 ~ \\alpha_3$`}</Latex> 线性无关, 要使新的特征向量组线性无关, 只需保证右乘矩阵后满秩, <strong>同时还要注意特征向量要对应特征值 (特征值相同的特征向量线性组合后才仍是特征向量, 同时特征值不变)</strong><br />
              <strong>不同特征值对应的特征向量的线性组合一般不是特征向量 (除非讨论两个特征值且其中一个是 0)</strong>
            </li>
            <li><strong>[277]</strong> 将题目所给线性无关向量组组合为矩阵 <Latex>{`$P$`}</Latex>, 且有关系 <Latex>{`$AP=PB \\Rightarrow A=PBP^{-1} \\Rightarrow |A-\\lambda E| = |B-\\lambda E|$`}</Latex>, 从而求出 <Latex>{`$A$`}</Latex> 的特征值</li>
            <li className="font-bold">矩阵合同: 对 n 阶方阵 A、B, 存在可逆矩阵C, 有 <Latex>{`$B=C^TAC$`}</Latex> , 则称A与B合同, 记为 <Latex>{`$A\\simeq B$`}</Latex>. <br />
              对于实对称矩阵, 合同变换实际上只是对二次型中 <Latex>{`$\\vec{x}$`}</Latex> 的基向量变换, 相当于对坐标轴进行旋转/伸缩, 不改变惯性指数.</li>
            <li className="font-bold">惯性定理: <br />
              由于实对称矩阵一定正交合同(同时也是相似)于对角矩阵, 对角矩阵又合同于对应规范型矩阵, 又合同变换不改变正负惯性指数, 所以: <br />
              实对称矩阵合同 <Latex>{`$\\Leftrightarrow$`}</Latex> 合同于同一规范型矩阵 <Latex>{`$\\Leftrightarrow$`}</Latex>  正、负惯性指数相同 <Latex>{`$\\Leftrightarrow$`}</Latex> 正、负、零特征值数量相同
            </li>
            <li className="font-bold"><Latex>{`矩阵关系小结: (待增加正定矩阵) $\\\\ $ 矩阵等价 $\\Rightarrow$ 秩相同 $\\\\$ 矩阵合同 $\\Rightarrow$ 秩相同 $\\\\$ 实对称矩阵合同 $\\Rightarrow$ 秩 + 正负惯性指数 + 正、负、零特征值数量相同 $\\\\$ 矩阵相似 $\\Rightarrow$ 秩 + 所有特征值相同 $\\\\$ 实对称矩阵相似 $\\Rightarrow$ 秩 + 正负惯性指数 + 所有特征值相同`}</Latex></li>
            <li className="font-bold">[278] 实对称矩阵一定能正交相似对角化, 由相似的传递性知: <Latex>{`实对称矩阵特征值相同 $\\Leftrightarrow$ 矩阵相似`}</Latex>. 所以实对称矩阵不相似则特征值一定不完全相同 </li>
            <li>[279] 检查重特征值的代数重数和几何重数是否相等</li>
            <li>[281] <strong>齐次方程组的 非零解 都是特征值 0 的特征向量</strong>.<br /> 方法一: 线性无关解向量构成矩阵 P 且可逆, 知 <Latex>{`$AP=B, A=BP^{-1}$`}</Latex> <br />
              方法二: 注意题目相当于给出了所有特征值及其对应线性无关特征向量 <Latex>{`$A=P\\Lambda P^{-1}$`}</Latex>
            </li>
            <li>[282] 伴随矩阵的特征值</li>
            <li>[283] 特征值数量小于 n, 可以代入已知特征值判断重特征值, 更方便的是利用 tr(A) = 特征值之和判断</li>
            <li>[284] 参数讨论是否可相似对角化. 特征值各不相同时可相似对角化, 然后看是否可构造重数特征值, 讨论特殊情况</li>
            <li className="font-bold">[285] 矩阵 A 能够拆分为两个非方阵的乘积时, 可以交换乘积顺序简化计算: <br />
              <Latex>{`$A=BC, |A| = |BC| = |B||C| = |CB|, A^n = B(CB)^{n-1}C \\\\ $ 注: BC 和 CB 的特征值一般不同`}</Latex>
            </li>
            <li className="font-bold">
              正交向量不需要为单位向量, 但正交矩阵需要各向量正交且为单位向量, 因为正交矩阵要保证任何向量用其进行变换时长度不变, 这需要保证 <Latex>{`$Q^TQ = E$ 从而 $\\xi^T \\xi = (Q\\xi)^T(Q\\xi)$`}</Latex>.
              由 <Latex>{`$Q^TQ=QQ^T=E$`}</Latex> 知, 若正交矩阵列向量为正交单位向量组, 则行向量一定为正交单位向量组.
            </li>
            <li className="font-bold">[286]
              {/* n 维向量空间中, 已知 n-k 个线性无关向量, 一定可以再找到 k 个线性无关向量; 任意再找 k 个线性无关向量, 与已知向量均线性无关的任一向量都能由这 k 个线性无关向量表出. <br />
              n 阶方阵中的向量属于 n 维向量空间, 已知 n-k 个线性无关特征向量的实对称矩阵一定还能找到 k 个线性无关特征向量, 与已知 n-k 个特征向量均线性无关的特征向量一定能由这 k 个线性无关特征向量表出. 
              题中剩余 k 个线性无关特征向量均属于同一特征值, 则由这 k 个线性无关特征向量表出的任一向量都为该特征值的特征向量, 并与上述 n-k 个已知特征向量均正交. (与上述 n-k 个已知特征向量均正交的向量自然也与这 n-k 个特征向量线性无关, 所以只需要找与这 n-k 个特征向量均正交的向量即可) <br />
              综上, 对于 n 阶实对称矩阵, 若其余 k 个线性无关特征向量均属于同一特征值, 则任意与 n-k 个已知特征向量均正交的向量一定均为该特征值的特征向量. <br />
              这说明: <br />  */}
              对于实对称矩阵, 任意向量<Latex>{`$\\xi$`}</Latex>与其 n-k 个线性无关特征向量均正交 <Latex>{`$\\Leftrightarrow$`}</Latex> 任意向量<Latex>{`$\\xi$`}</Latex>由其余任意 k 个线性无关特征向量构成.
              对于此题, 其中二重特征值的两个线性无关特征向量表出的任意向量就是 "由其余任意 k 个线性无关特征向量" 构成的, 所以只需设向量 <Latex>{`$\\xi$`}</Latex> 与已知特征向量正交即可.
            </li>
            <li className="font-bold">n 维向量空间中, 已知 n-k 个线性无关向量, 一定可以再找到 k 个线性无关向量; 任意再找 k 个线性无关向量, 与已知向量均线性无关的任一向量都能由这 k 个线性无关向量表出.</li>
            <li><strong>[287]</strong> 不带平方项的拉格朗日配方法</li>
            <li className="font-bold">基变换: <Latex>{`$x=Cy$`}</Latex> 称为过渡矩阵 C 将基 B' 中的坐标 y 转换为基 B 中的坐标 x, 因为两组基要求双射(一一对应), 所以其中的过渡矩阵 C 要求可逆(充分必要条件), 这也说明基变换满足 二次型的秩保持不变 的要求</li>
            <li className="font-bold">二次型一定能化为标准型(实对称矩阵一定能正交对角化), 但拉格朗日配方法不一定能化二次型为标准型(变换矩阵可能不可逆)(见题[288])</li>
            <li><strong>[288]</strong> 方法一: 化为二次型的矩阵形式, 计算行列式; <strong>方法二: 对于该平方和形式, 假设其由 <Latex>{`$\\vec{y}$`}</Latex> 的系数全为 1 的满秩规范二次型变换而来, 易得 <Latex>{`$\\vec{y}=C\\vec{x}$`}</Latex>, 又 <Latex>{`$\\vec{x}$`}</Latex> 的二次型不满秩, 而基变换不会改变二次型的秩, 所以 C 一定不满秩 (C 满秩是基变换的充分必要条件, 不满秩为降维变换)</strong></li>
            <li><strong>[289]</strong> 正交变换 <Latex>{`$\\rightarrow$`}</Latex> 相似, 标准型主对角线上的值即为原二次型矩阵 A 的特征值, 想到: tr(A) = 特征值之和</li>
            <li>[290] <Latex>{`$Q_1^TAQ_1=Q_2^TBQ_2=\\Lambda \\Rightarrow Q_2Q_1^TAQ_1Q_2^T=\\Lambda, Q=Q_1Q_2^T$`}</Latex> [注意: 特征向量和特征值位置要对应, 尤其此类题中特征向量摆放顺序要一致, 求特征向量时最好做个特征值的记号]</li>
            <li className="font-bold">正定矩阵一定是可逆矩阵, 即满秩方阵</li>
            <li className="font-bold">[291] (1) 求二次型 = 0 的解, 将二次型化为平方和形式, 所有平方项均为 0, 相当于求解齐次方程组 <br />
              (2) [计算] 二次型恒正(对任意非0向量), 说明其矩阵为正定矩阵. 且正定说明二次型满秩, 规范型为 <Latex>{`$z_1^2+z_2^2+\\cdots+z_n$`}</Latex>. <br />
              此类题套路: 一般参数为某一个特定值时方程组系数矩阵秩等于0, 从而有非零解, 否则只有零解, 对任意非零向量恒正, 即为正定二次型. 正定二次型的规范型可直接写出, 一般情况(参数为该特定值时)正常求解特征值, 知道特征值正负数量(正负惯性指数)后直接写出. <br />
              为什么 <Latex>{`$\\vec{x}$`}</Latex> 只有零解时就为正定矩阵: 要使二次型为 0, 需要 <Latex>{`$\\vec{x}=Q\\vec{y}=\\vec{0}$`}</Latex>, 因为基变换矩阵(以及实对称矩阵的特征矩阵)满秩, 于是 <Latex>{`$\\vec{y}=\\vec{0}, \\vec{z}=\\vec{0}$`}</Latex>
            </li>
            <li className="font-bold">只要 A 为实矩阵, <Latex>{`$X^TAX$`}</Latex> 就是一个二次型. 事实上, 任何非对称矩阵都能分解为一个对称矩阵和一个反对称矩阵: <Latex>{`$A=\\frac{A+A^T}{2}+\\frac{A-A^T}{2}$, 于是 $X^TAX=X^T\\frac{A+A^T}{2}X$`}</Latex></li>
            <li><strong>[292]</strong> (1) 先将非对称矩阵转化为对称矩阵, <strong>方阵 A 的秩为 1 说明有一个 (n-1) 重特征值 0 (且特征值 0 一定有 (n-1) 个线性无关特征向量), 剩下一个特征值 = tr(A); <br />
              (2) 标准化后, <Latex>{`$X=QY, x_0^2+x_2^2+\\cdots+x_n^2 = X^TX=Y^TQ^TQY = Y^TY = y_1^2+y_2^2+\\cdots+y_n^2$`}</Latex></strong></li>
            <li className="font-bold">由上一条可知: 对于秩为 1 的方阵 A, <Latex>{`$tr(A)\\neq 0 \\Leftrightarrow A$ 能够相似对角化`}</Latex> </li>
            <li>[293] (2) <strong>对称矩阵的合同矩阵当然也是对称矩阵</strong></li>
            <li><strong>[294] 矩阵合同秩当然相同; 合同的实对称矩阵特征值不一定相同, 即不一定能化为同一标准型, 但一定能化为同一规范型
              <Latex>{`$\\\\C^TAC=D^TBD=Z, ~~~(D^{-1})^TC^TACD^{-1}=B, ~~~P=CD^{-1}$`}</Latex></strong></li>
            <li><strong>[297]</strong> <Latex>{`$B = (A+C)^k$, 已知 B 和 C $\\rightarrow B = P\\Lambda P^{-1} = P(\\Lambda ^{'})^k P^{-1} = (P\\Lambda ^{'}P^{-1})^k, ~~~A=P\\Lambda ^{'}P^{-1}-C$ (其中 $\\Lambda^{'}$ 中元素正负号可以由题目所给其它条件得知)`}</Latex> </li>
            <li className="font-bold">计算 <Latex>{`$|A-\\lambda E|$`}</Latex> 是最常规操作, 不要硬算填满的行列式. 先观察是否有其它快捷办法获取特征值, 如果必须计算行列式, 尝试将两个元素消为 0 肯定会简单许多, 一般变为 H 型或 [将某一行/某一列消为一个元素, 此时又立刻可将所在列/行的其它元素也变为 0(常用)], 注意交换间隔为 k 的行/列要乘 <Latex>{`$(-1)^{k}$`}</Latex>.
              注意如果只用行变换化简, 这样化简后的矩阵还能代入具体特征值接着用于计算特征向量. 特征矩阵可能不唯一, 代入特征向量验算正确即可. 注意特征值和对应特征向量位置要一致.
            </li>
            <li>[299] 柱面、单叶双曲面、双叶双曲面、锥面的二次型</li>
          </ul>
        </div>
      </TextBox>
    </div>
  )
}
