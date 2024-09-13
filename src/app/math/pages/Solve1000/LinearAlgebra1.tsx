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
            <li><strong>[237]</strong> 任意n维列向量<Latex>{`$\\xi$`}</Latex>有 <Latex>{`$A\\xi=0 ~\\Rightarrow~ A=O$`}</Latex>, 可令<Latex>{`$\\xi$`}</Latex>分别为各方向单位向量来证明;<br />
              对于反对称矩阵A: <Latex>{`$\\xi^TA\\xi=(\\xi^TA\\xi)^T=\\xi^TA^T\\xi=-\\xi^TA\\xi ~\\Rightarrow~ \\xi^TA\\xi=0$`}</Latex>
            </li>
          </ul>
        </div>
      </TextBox>
    </div>
  )
}