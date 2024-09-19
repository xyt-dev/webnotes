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
      <TabPages className="mt-2 leading-10">
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
            奇偶性<br /> 答案: 0, 0
          </TabPage>
        </Solve>

        <Solve tags={["定积分", "区间再现", "区间诱导"]}>
          <TabPage tabName="题目" defaultChecked>
            <Img src="Images/Math/wildsolve/5.png" />
          </TabPage>
          <TabPage tabName="题解">
            <Latex>{`$原式=\\int_0^1(1-x)arcsin(2\\sqrt{x-x^2}dx)\\\\ 
              =\\frac{1}{2}\\int_0^1 arcsin(2\\sqrt{\\frac{1}{4}-(x-\\frac{1}{2})^2})dx\\\\
              x-\\frac{1}{2}=\\frac{1}{2}cos\\theta~~(值域覆盖+单调)\\\\
              原式=\\frac{1}{4}\\int_0^{\\pi} arcsin(sin\\theta)sin\\theta d\\theta\\\\
              =\\frac{1}{4}(\\int_0^{\\frac{\\pi}{2}}\\theta sin\\theta d\\theta + \\int_{\\frac{\\pi}{2}}^{\\pi}(\\pi - \\theta)sin\\theta d\\theta)\\\\
              =\\frac{1}{2}$`}</Latex>
          </TabPage>
        </Solve>


        <Solve tags={["不定积分", "极限"]}>
          <TabPage tabName="题目" defaultChecked>
            <Latex>{`$\\int{(x^{dx} - 1)}$`}</Latex>
          </TabPage>
          <TabPage tabName="题解">
            <Latex>{`$\\int{(x^{dx} - 1)}=\\int{\\frac{x^{dx}-1}{dx}}dx\\\\
              =\\int{lim_{a\\rightarrow 0}\\frac{x^a-1}{a}}dx\\\\
              =xlnx-x+C$`}</Latex>
          </TabPage>
        </Solve>

        <Solve tags={["定积分", "区间再现", "三角换元"]}>
          <TabPage tabName="题目" defaultChecked>
            <Img src="Images/Math/wildsolve/6.png" />
          </TabPage>
          <TabPage tabName="题解">
            换元x=tanu, 然后使用区间再现公式, 与原积分相加构造更简单的积分
          </TabPage>
        </Solve>

        <Solve tags={["微分方程"]}>
          <TabPage tabName="题目" defaultChecked>
            <Latex>{`$\\frac{dy}{dx}-cos^2(y)cos(x)=0,~~y(0)=\\frac{5\\pi}{4}$`}</Latex>
          </TabPage>
          <TabPage tabName="题解">
            <Latex>{`$tany=sinx+1~~或~~y=arctan(sinx+1) + \\pi$`}</Latex>
          </TabPage>
        </Solve>

        <Solve tags={["微分方程"]}>
          <TabPage tabName="题目" defaultChecked>
            <Latex>{`$y'=\\frac{y(1-x)}{x}$`}</Latex>
          </TabPage>
          <TabPage tabName="题解">
            注意y=0的特殊解<br />
            答案: <Latex>{`$y=Cxe^{-x},~其中C为任意常数$`}</Latex>
          </TabPage>
        </Solve>

        <Solve tags={["微分方程", "伯努利方程"]}>
          <TabPage tabName="题目" defaultChecked>
            <Latex>{`$(x+2)y^{''}+x(y^{'})^2=y'$`}</Latex>
          </TabPage>
          <TabPage tabName="题解">
            令y'=p, 有 <Latex>{`$y^{''}=\\frac{dp}{dx}$`}</Latex>, 原式 = <Latex>{`$(x+2)\\frac{dp}{dx}+xp^2=p$`}</Latex>, <Latex>{`$\\frac{dp}{dx}-\\frac{p}{x+2}=-\\frac{x}{x+2}p^2$`}</Latex> <br />
            使用伯努利方程求解方法 <Latex>{`$\\Rightarrow \\frac{dp^{-1}}{dx}+\\frac{p^{-1}}{x+2}=\\frac{x}{x+2} \\Rightarrow p=\\frac{2x+4}{x^2+C}$`}</Latex> <br />
            <Latex>{`$\\begin{cases}
            y=ln(x^2+C)+\\frac{4}{\\sqrt{C}}arctan{\\frac{x}{\\sqrt{C}}+C_1}~~,C>0 \\\\
            y=2ln|x|-\\frac{4}{x}+C_1~~,C=0 \\\\
            y=ln|x^2+C|+\\frac{2}{\\sqrt{-C}}ln|\\frac{x-\\sqrt{-C}}{x+\\sqrt{-C}}|+C_1~~,C<0
            \\end{cases}$`}</Latex><br />
            其中<Latex>{`$C_1$`}</Latex>为任意常数
          </TabPage>
        </Solve>

        <Solve tags={["定积分"]}>
          <TabPage tabName="题目" defaultChecked>
            <Img src="Images/Math/wildsolve/7.png" />
          </TabPage>
          <TabPage tabName="题解">
            所用知识点: <br />
            <ol>
              <li>
                <Latex>{`$\\int_{-a}^a f(x)dx=\\int_0^a [f(x)+f(-x)]dx$`}</Latex>
              </li>
              <li>
                f(x)为奇函数或偶函数时, <Latex>{`$\\int_a^x f(t)dt$`}的奇偶性</Latex>: <br />
                奇 =&gt; 偶; 偶 && a=0 =&gt; 奇; 偶 && a&ne;0 =&gt; 不经过原点
              </li>
              <li>
                <Latex>{`$arctanx + arctan\\frac{1}{x}$`}</Latex>(导数为0) <br />
                <Latex>{`$arctanx + arctan\\frac{1}{x} = \\begin{cases}\\frac{\\pi}{2}, x>0 \\\\ -\\frac{\\pi}{2}, x<0\\end{cases}$`}</Latex>
              </li>
              <li>
                区间再现 =&gt; <Latex>{`$\\int_0^{\\pi} xf(sinx)dx = \\frac{\\pi}{2}\\int_0^{\\pi}f(sinx)dx $`}</Latex>
              </li>
            </ol>
            答案: <Latex>{`$\\frac{\\pi^3}{8}$`}</Latex>
          </TabPage>
        </Solve>

        <Solve tags={["带参数的积分"]}>
          <TabPage tabName="题目" defaultChecked>
            <Img src="Images/Math/wildsolve/8.png" />
          </TabPage>
          <TabPage tabName="题解">
            化累次积分后交换积分次序求解 <br />
            答案: <Latex>{`$\\ln\\frac{b+1}{a+1}$`}</Latex>
          </TabPage>
        </Solve>

        <Solve tags={["极限麻人专用"]}>
          <TabPage tabName="题目" defaultChecked>
            <Latex>{`$lim_{x\\rightarrow+\\infty}\\frac{e^x}{(1+\\frac{1}{x})^{x^2}}$`}</Latex>
          </TabPage>
          <TabPage tabName="题解">
            你以为答案是1? 不定式不能拆开单独求极限! <br /> 
            可以尝试单独求极限, 但如果结果是不定式则反推不能单独求极限! <br />
            正确答案: <Latex>{`$lim_{x\\rightarrow+\\infty}\\frac{e^x}{(1+\\frac{1}{x})^{x^2}}=e^{x-x^2\\ln{(1+\\frac{1}{x})}}=e^{x-x^2(\\frac{1}{x}-\\frac{1}{2x^2}+o(1))}=e^{\\frac{1}{2}}$`}</Latex>
          </TabPage>
        </Solve>
      </ol>
    </DaisyProsePage>
  )
}