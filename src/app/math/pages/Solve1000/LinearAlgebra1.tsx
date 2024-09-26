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
              <strong>方法二(自己想的):</strong> <Latex>{`$AB=O \\Rightarrow r(A)+r(B)\\le 0$`}</Latex>, 而任意n维列向量 <Latex>{`$\\xi$`}</Latex> 组成的矩阵的秩r(B)可能等于n, 因此 r(A)=0 <br />
              对于反对称矩阵A: <Latex>{`$\\xi^TA\\xi=(\\xi^TA\\xi)^T=\\xi^TA^T\\xi=-\\xi^TA\\xi ~\\Rightarrow~ \\xi^TA\\xi=0$`}</Latex>
            </li>
            <li><strong>反对称矩阵的主对角线元素为0</strong></li>
            <li><strong>矩阵行秩=列秩证明: </strong>
              <Img src="/Images/Math/行秩等于列秩.png" />
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
            <li><strong>r(A)=r(A^TA) 证明: </strong><br />
              <Latex>{`$1. Ax=0 \\Rightarrow A^TAx=0 \\\\
                2. A^TAx=0 \\Rightarrow x^TA^TAx=0 \\Rightarrow (Ax)^T(Ax)=0 \\Rightarrow Ax=0$`}</Latex><br />
              所以 1,2 两个方程同解, 解空间的秩相同<br />
              <Latex>{`$r(A)=n-r(null(A))=n-r(null(A^T))=r(A^TA)$`}</Latex>
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
            <li>[273] <Latex>{`$AB=O$ 则 $r(A)+r(B) \\le n$(A的列数), 因为B的列向量都是$A\\vec{x}=\\vec{0}$的解`}</Latex></li>
          </ul>
        </div>
      </TextBox>
    </div>
  )
}