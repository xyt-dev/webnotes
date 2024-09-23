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

export default function Statistics1() {
  return (
    <div className={`w-[100%] mx-auto`}>
      <TextBox>
        <Title1><div className="pb-6 text-rose-500 underline">概率论与数理统计</div></Title1>
        <div className="leading-9 prose daisy-prose">
          <ul>
            <li><strong>[301]</strong> <Latex>{`$P(A)P(B)=P(AB\\cup A\\bar{B})P(AB\\cup \\bar{A}B) \\\\
              = [P(AB) + P(A\\bar{B})][P(AB) + P(\\bar{A}B)] \\\\
              = [P(AB) + P(A\\bar{B}) + P(\\bar{A}B)]P(AB) + P(A\\bar{B})P(\\bar{A}B) \\\\
              \\geq [P(AB) + P(A\\bar{B}) + P(\\bar{A}B)]P(AB) \\\\
              = P(A\\cup B)P(AB)$`}</Latex></li>
            <li><strong>[302]</strong> <Latex>{`$0<P(B)<1$`}</Latex>
              <ul><li><Latex>{`$P(A|B)>P(A) ~\\Leftrightarrow~ P(AB)>P(A)P(B) \\\\
                P(\\bar{A}|\\bar{B})>P(\\bar{A}) ~\\Leftrightarrow~ P(\\bar{A}\\bar{B})>P(\\bar{A})P(\\bar{B}) \\\\
                P(\\bar{A}\\bar{B}) = 1-P(A\\cup B) = 1-P(A)-P(B)+P(AB) \\\\
                > 1-P(A)-P(B)+P(A)P(B) = [1-P(A)][1-P(B)] = P(\\bar{A})P(\\bar{B})$`}</Latex><br /></li>
                <li><Latex>{`$P(A|B)=P(A) ~\\Leftrightarrow~ A, B$`}</Latex> 相互独立<br /></li>
                <li><Latex>{`$P(A|B)>P(A|\\bar{B}) ~\\Leftrightarrow~ \\frac{P(AB)}{P(B)}>\\frac{P(A)-P(AB)}{1-P(B)} \\\\
                ~\\Leftrightarrow~ P(AB)>P(A)P(B) ~\\Leftrightarrow~ P(A|B)>P(A)$`}</Latex><br /></li>
              </ul>
            </li>
            <li><strong>[303]</strong> <Latex>{`$P(A|B)=P(B|A)=\\frac{1}{\\alpha}>0 ~\\Rightarrow~ P(A)=P(B)=\\alpha P(AB) \\\\
              P(A-B)=P(A\\bar{B})=P(A)-P(AB)$`}</Latex></li>
            <li><strong>[304]</strong> <Latex>{`$P(A-B)=0 \\nRightarrow A\\subset B ~~$`}</Latex> <strong>A-B不一定为空集!</strong><br />
              <Latex>{`$P(A)>P(B) \\Leftrightarrow P(\\bar{A})<P(\\bar{B}) \\Rightarrow P(A)>P(AB) \\\\ \\Rightarrow P(A-B)>0 \\\\
              P(B-A)=P(B)-P(A)+P(A-B) \\\\
              P(\\bar{B}|\\bar{A})=1-\\frac{P(\\bar{A}B)}{1-P(A)}=1-\\frac{P(B-A)}{1-P(A)}=\\frac{1-P(A)-P(B)+P(A)-P(A-B)}{1-P(A)} \\\\ = \\frac{1-P(B)}{1-P(A)} \\\\
              P(\\bar{A}|\\bar{B})=1-P(A|\\bar{B})=1-\\frac{P(A-B)}{1-P(B)}$`}</Latex>
            </li>
            <li><strong>[305]</strong> 从 1 2 3 4 中有放回的取两次, <Latex>{`$P\\{min=2\\}=\\frac{1}{4}\\cdot\\frac{3}{4}+\\frac{2}{4}\\cdot\\frac{1}{4}=\\frac{3^2-2^2}{4^2}$`}</Latex></li>
            <li>[306] <strong>先看是否是独立事件!</strong></li>
            <li>[307] 条件概率</li>
            <li>[308] 独立性的关系(<strong>独立: 在全集中的比例和在相独立事件中的比例都相同</strong>)</li>
            <li>[309, 310] 独立性与互斥性相关计算</li>
            <li><strong>随机变量: <Latex>{`$X(\\omega)$`}</Latex>, 其中 <Latex>{`$X$`}</Latex> 是随机变量, 其实质是一个函数, 将事件 <Latex>{`$\\omega$`}</Latex> (样本点的集合)映射到对应数值 <Latex>{`$X(\\omega)$`}</Latex>, 或简写为 <Latex>{`$X$`}</Latex></strong></li>
            <li>泊松分布: <Img src="Images/Math/poisson分布.png"/></li>
            <li>[311, <strong>312</strong>] 二项分布; 若 <Latex>{`$X+Y=n, X\\sim B(n, p)$`}</Latex> 则 <Latex>{`$Y=n-X\\sim B(n, 1-p)$`}</Latex> (因为 P(x=k) = P(y=n-k)) <br />
              如果 X~B(n,p) 和 Y~B(m,p) 相互独立, 则 X+Y~B(n+m,p), 但注意题[312]中 X 和 Y 不是相互独立的</li>
            <li><a className="text-blue-500 hover:text-blue-700 no-underline" target="_blank" href="https://zhuanlan.zhihu.com/p/52808762">正态分布函数推导</a></li>
            <li>[313] 正态函数标准化</li>
            <li>[314] <Latex>{`$X\\sim N(\\mu, \\sigma^2)$`}</Latex> 概率密度函数有唯一驻点 <Latex>{`$(\\mu, \\frac{1}{\\sqrt{2\\pi}\\sigma})$`}</Latex></li>
            <li>[315] 串联机器+指数分布</li>
            <li>[316] *威布尔分布</li>
            <li>[317] 均匀分布</li>
            <li><strong>[318, 319] 未知分布的随机变量转换为已知分布的随机变量</strong></li>
            <li>[320] 随机变量 Y, Z 都关于随机变量 X, Y+Z 也只关于 X</li>
            <li><strong>[321]</strong> 随机变量 X 在 (a,b) 上随机取值 相当于 X~U(a,b); 已知 X 边缘概率密度 和 Y|X 条件概率密度, 可求联合概率密度 f(x,y) 和 Y 的边缘概率密度 (同时要注意概率密度的定义范围)</li>
            <li>[323] 不要混淆; 注意独立性</li>
            <li className="font-bold">卷积公式: <br /><Latex>{`$Z=X+Y:~~$`}</Latex> <Latex>{`$f(z)=\\int_{-\\infty}^{+\\infty}{f(x, z-x)dx}$`}</Latex> <br />
                <Latex>{`$Z=X-Y:~~$`}</Latex> <Latex>{`$f(z)=\\int_{-\\infty}^{+\\infty}{f(x, x-z)dx}$`}</Latex> <br />
                <Latex>{`$Z=XY:~~$`}</Latex> <Latex>{`$f(z)=\\int_{-\\infty}^{+\\infty}{\\frac{1}{|x|}f(x, \\frac{z}{x})dx}$`}</Latex> <br />
                <Latex>{`$Z=\\frac{Y}{X}:~~$`}</Latex> <Latex>{`$f(z)=\\int_{-\\infty}^{+\\infty}|x|{f(x, xz)dx}$`}</Latex> <br />
                证明(以<Latex>{`$Z=\\frac{Y}{X}$`}</Latex>为例, 其中X和Y独立(不需要独立也可以)): <Img src="Images/Math/两个独立随机变量商的分布.png"/>
                其中交换积分次序时 令 <Latex>{`$t=\\frac{y}{x}$`}</Latex> 即可, 证明其他几个公式同理 <br />
                拓展(自己算的): <br />
                <Latex>{`$Z=AX+BY (B\\neq 0):~~$`}</Latex> <Latex>{`$f(z)=\\int_{-\\infty}^{+\\infty}{\\frac{1}{|B|}f(x, \\frac{z-Ax}{B})dx}$`}</Latex> <br />
            </li>
            <li><strong>正态分布随机变量的和: <Img src="Images/Math/正态分布推广结论例子.png"/><Img src="Images/Math/正态分布推广结论.png"/>(N个正态分布随机变量的和同理)</strong></li>
            <li><strong>[325] 方法一: 使用以上结论 <br />
              方法二: <Latex>{`$F_Z=P\\{-z\\le X-Y\\le z\\}$`}</Latex> <br />
               z &gt; 0 时, <Latex>{`$f_Z=\\frac{1}{\\pi}\\int_{-\\infty}^{+\\infty}e^{-x^2}e^{-(x+z)^2}dx+\\frac{1}{\\pi}\\int_{-\\infty}^{+\\infty}e^{-x^2}e^{-(x-z)^2}dx
                \\\\ = \\frac{2}{\\pi}\\int_{-\\infty}^{+\\infty}e^{-x^2}e^{-(x+z)^2}dx$`}</Latex> <br />
              令 <Latex>{`$t=x+\\frac{z}{2}$`}</Latex> <br />
              <Latex>{`$f_Z=\\frac{2}{\\pi}\\int_{-\\infty}^{+\\infty}e^{-(t-\\frac{z}{2})^2}e^{-(t+\\frac{z}{2})^2}dt = \\frac{2}{\\pi}\\int_{-\\infty}^{+\\infty}e^{-2t^2}e^{-\\frac{z^2}{2}}dt
              \\\\ = \\frac{1}{\\pi}e^{-\\frac{z^2}{2}}\\int_{-\\infty}^{+\\infty}e^{-\\frac{(2t)^2}{2}}d(2t) = \\sqrt{\\frac{2}{\\pi}}e^{-\\frac{z^2}{2}}$`}</Latex>
            </strong></li>
            <li><strong>[326]</strong> <strong>(1) 二维正态分布的条件概率密度函数和边缘概率密度函数都是正态分布</strong>; 使用归一性或代入正态分布概率密度函数求解 <br />
              <strong>(2) 边缘概率密度和条件概率密度可以同时为不同的正态分布(分布相互独立互不影响); 条件概率密度比值 = 边缘概率密度比值</strong> <br />
              (3) (2)保证了(3)计算结果唯一</li>
            <li>[327] (1) 二维条件概率密度函数是二元函数, 定义域是二维区域, 该题中二维区域可以用 <Latex>{`$|y|<x<1$`}</Latex> 表示</li>
            <li><strong>[328]</strong>  分类讨论积分; 积分变量写 u/v 或 s/t<Img src="Images/Math/二维联合概率密度.png"/></li>
            <li><strong>[329]</strong> 方法一: 积分求分布函数 <Latex>{`$F_Z(z)$`}</Latex>, 然后求导得概率密度函数; <strong>方法二: 使用卷积公式, 积分区间是处于正概率密度区域内边界线在x轴上投影</strong></li>
          </ul>
        </div>
      </TextBox>
    </div>
  )
}