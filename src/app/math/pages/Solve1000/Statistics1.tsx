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
          </ul>
        </div>
      </TextBox>
    </div>
  )
}