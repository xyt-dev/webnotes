import DaisyProsePage from "@/components/DaisyProsePage"
import Latex from "react-latex-next"
import 'katex/dist/katex.min.css'; // 导入 KaTeX 样式
function Img({ src, width }: { src: string, width?: number }) {
  if (width) {
    return (
      <img className="m-0" src={src} width={width} alt="" />
    )
  }
  return (
    <img className="m-0" src={src} width={500} alt="" />
  )
}

export default function OtherPage() {
  return (
    <DaisyProsePage>
      <h3>不等式：</h3>
      <p><Latex>{`$(\\frac{a^x+b^x}{2})^{\\frac{1}{x}}$`}</Latex> 单调递增, 分别取 ... f(-1), <Latex>{`$lim_{x\\rightarrow 0}f(x)$`}</Latex>, f(1), f(2) ... 构成经典不等式链</p>
      <p>k元均值不等式: <br /> <Img src="Images/Math/k元均值不等式.png" width={700}/></p>
    </DaisyProsePage>
  )
}