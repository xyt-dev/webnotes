import TextBox from "@/components/RawTextBox"
import { Title1, Title2 } from "@/components/RawTextBox"
import Latex from "react-latex-next"
import 'katex/dist/katex.min.css'; // 导入 KaTeX 样式
import Space from "@/components/Space";

function Img({ src, width }: { src: string, width?: number }) {
  return (
    <img className="m-0 pt-1 inline-block align-top" src={src} alt="" width={width} />
  )
}

export default function EnhanceMath1() {
  return (
    <div className={`w-[100%] mx-auto`}>
      <TextBox>
        <Title1><div className="pb-6 text-rose-500 underline">强化题</div></Title1>
        <div className="leading-9 prose daisy-prose">
          <Title2>数列极限</Title2>
          <ul>
            <li>归结原理(海涅定理): 数列趋向的极限值是函数因变量趋向的极限值</li>
            <li className="pt-2">{Img({ src: "Images/Math/EnhanceMath1/2_3.png", width: 500})} {Img({ src: "Images/Math/EnhanceMath1/Solve_2_3.png"})}</li>
          </ul>
          <Title2>一元函数微分学概念</Title2>
          <ul>
            <li className="pt-2">
              {Img({ src: "Images/Math/EnhanceMath1/3_1.png", width: 600})} {Img({ src: "Images/Math/EnhanceMath1/Solve_3_1.png"})} <br />
              <Latex>{`$(A)(B) ~ \\lim_{n\\to {0 / \\infty}} \\frac{|x|}{x} $ 极限不存在, 但左右极限分分别存在且有限, 所以当其乘以一个极限为 0 的函数时, 整体极限存在且等于 0.
                $\\\\(C) ~ \\lim_{n\\to 0} \\frac{\\sqrt{cos|x|}-1}{x} = \\lim_{n\\to 0}\\frac{1+\\frac{1}{2}(cos|x|-1)-1}{x} = \\lim_{n\\to 0}\\frac{-\\frac{1}{2}x^2}{2x} = 0
                \\\\$ 可以直接用泰勒公式, 但使用有理化更简单, 分子为根号相减(可化为根号相减)考虑有理化.`}</Latex>
            </li>
            <li className="pt-2">
              {Img({ src: "Images/Math/EnhanceMath1/3_2.png", width: 700})}
              方法一: 使用洛必达法则, 注意题中 <Latex>{`$f'(x)$ 在 $x=0$ 处可导所以连续, 于是 $\\lim_{x \\to 0}\\frac{f'(x)}{2x}$ 和 $\\lim_{x \\to 0}\\frac{f'(x)}{3x^2}$ 一定存在或趋于无穷, 满足洛必达法则使用条件.`}</Latex>
              <div>{Img({ src: "Images/Math/EnhanceMath1/Solve_3_2.png", width: 600})}</div>
              方法二: <Latex>{`$f(x)$ 至少能使用三阶泰勒公式 (只不过 f(x) n 阶可导时余项可能无法用 f(x) 的 n + 1 阶导数表示, 但余项仍可表示为 $o(x^n)$ ), 
                若 $\\lim_{x \\to 0}\\frac{f(x)}{x^k}=a$(非零常数), 可知 f(x) 的泰勒公式一定可以表示为 $f(x)=ax^k+o(x^k)$. 
                此时 $f(x)$ 的原函数 $F(x) = \\frac{a}{k+1}x^{k+1}+o(x^{k+1}) + C$. ($ x \\to x_0$ 时同理).`}</Latex>
            </li>
          </ul>
        </div>
      </TextBox>
    </div>
  )
}