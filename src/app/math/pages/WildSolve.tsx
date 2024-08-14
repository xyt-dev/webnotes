import DaisyProsePage from "@/components/DaisyProsePage"
import TabPages, { TabPage } from "@/components/DaisyTabs"
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

function Solve({ tags, children }: { tags?: string[], children?: React.ReactNode }) {
  const Tags = tags?.map((tag, index) => {
    return <span key={index} className="rounded-box pl-2 pr-2 pt-[0.35rem] pb-1 text-xs font-bold mr-1 bg-[#282828] text-[#fbf1c7]">{tag}</span>
  })
  return (
    <li className="mb-5">
      {Tags}
      <TabPages className="mt-2 leading-[3rem]">
        {children}
      </TabPages>
    </li>
  )
}

function SolveTemplate() { // just template
  return (
        <Solve>
          <TabPage tabName="题目" defaultChecked>
            $
          </TabPage>
          <TabPage tabName="题解">
            $
          </TabPage>
        </Solve>
  )
}

export default function WildSolve() {
  return (
    <DaisyProsePage>
      <ol>
        <Solve tags={["不定积分", "反三角函数"]}><Img src="Images/Math/wildsolve/1.png" /></Solve>

        <Solve tags={["导数"]}><Img src="Images/Math/wildsolve/2.png" /></Solve>

        <Solve tags={["极限"]}><Img src="Images/Math/wildsolve/3.png" /></Solve>

        <Solve tags={["口算题"]}>
          <TabPage tabName="题目" defaultChecked>
            <Img src="Images/Math/wildsolve/4.png" width={600} />
          </TabPage>
          <TabPage tabName="题解">
            奇偶性
          </TabPage>
        </Solve>

        <Solve>
          <TabPage tabName="题目" defaultChecked>
            <Img src="Images/Math/wildsolve/5.png"></Img>
          </TabPage>
          <TabPage tabName="题解">
            <Latex>{`$原式=\\int_0^1(1-x)arcsin(2\\sqrt{x-x^2}dx)\\\\ =\\frac{1}{2}\\int_0^1 arcsin(2\\sqrt{\\frac{1}{4}-(x-\\frac{1}{2})^2})dx$`}</Latex>
          </TabPage>
        </Solve>

      </ol>
    </DaisyProsePage>
  )
}