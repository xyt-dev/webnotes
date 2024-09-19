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
            <li><a className="text-blue-500 hover:text-blue-700 no-underline" target="_blank" href="https://zhuanlan.zhihu.com/p/52808762">正态分布函数推导</a></li>
          </ul>
        </div>
      </TextBox>
    </div>
  )
}