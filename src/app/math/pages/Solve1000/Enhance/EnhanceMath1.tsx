import TextBox from "@/components/RawTextBox"
import { Title1, Title2 } from "@/components/RawTextBox"
import Latex from "react-latex-next"
import 'katex/dist/katex.min.css'; // 导入 KaTeX 样式
import Space from "@/components/Space";

function Img({ src, width }: { src: string, width?: number }) {
  return (
    <img className="m-1" src={src} alt="" width={width} />
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
            <li>{Img({ src: "Images/Math/EnhanceMath1/418.png", width: 500})} {Img({ src: "Images/Math/EnhanceMath1/Solve_418.png"})}</li>
          </ul>
        </div>
      </TextBox>
    </div>
  )
}