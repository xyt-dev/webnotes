import TextBox from "@/components/TextBox1"
import { Title1, Title2 } from "@/components/TextBox1"
import Link from "next/link";
import Latex from "react-latex-next"
import 'katex/dist/katex.min.css'; // 导入 KaTeX 样式
import Image from "next/image";

export default function MathPage() {
  return (
    <div className={`w-[100%] mx-auto`}>
      <TextBox>
        <Title1><div className="text-rose-500 underline">张宇1000题</div></Title1>
        <Title2><div className="pb-6">高等数学</div></Title2>
        <div className="leading-9 prose daisy-prose">
          <ul>
            <li>[1] 函数伸缩平移可逆变换, 凑函数方程组, 解出f(x)</li>
            <li>等式两边同时作相同运算时, 如果关于函数，注意函数定义域</li>
            <li>[2] 函数值域就是反函数定义域; 解函数二次方程</li>
            <li>[3] 先画f(x)函数图像,将f(x)作为整体计算分段函数g[f(x)],再根据f(x)再次分段</li>
            <li>[5] <Latex>{`$\\sqrt{x^2}=|x|$`}</Latex></li>
            <li>[6] 定积分看被积函数能否被拆/凑出可抵消部分(
              <Latex>{`$\\frac{1}{a^x+1}-\\frac{1}{2}和\\frac{a^x-1}{a^x+1}$`}</Latex>都是奇函数)</li>
            <li>[7] 替换相同单调性函数计算极值点</li>
            <li>[8] f(x+T)=f(x),则T为周期函数f(x)的一个周期(可以有多个不同的周期); 复合函数扩展函数定义域</li>
            <li>[9] 已知函数极限存在, 设极限为A列方程求解</li>
            <li>[10] 幂指函数-&gt;<Latex>{`$e^{ln}$`}</Latex>; 泰勒公式</li>
            <li>[12] 求极限时, 乘积的部分极限存在且不为0, 可以将其作为常数提出，因为其倒数的极限存在</li>
            <li>[14] <Latex>{`$x\\rightarrow0时, ln(x+\\sqrt{1+x^2})~x$`}</Latex></li>
            <li>[15] 结合洛必达和泰勒公式快速求解, 加减慎用泰勒公式</li>
            <li>[19] 整体的泰勒公式可以由部分的泰勒公式运算得到，还可以利用这点求整体的某一阶导数</li>
            <li>[22] 海涅定理(归结原理)，同时说明函数等价无穷小在数列形式下也有对应等价无穷小</li>
            <li>[24] 放缩夹逼</li>
            <li>[25] 分区间讨论+放缩夹逼(极限可以是函数); 各指数-&gt;<Latex>{`$\\infty$`}</Latex>时，底数相差任何一点都能改变主导</li>
            <li>[26] 分区间讨论+放缩夹逼; 指数-&gt;0时, 底数乘倍数不影响</li>
            <li>指数函数底数<Latex>{`$a>0, a\\neq1$`}</Latex>，指数&gt;0时底数越大函数值越大, 指数&lt;0时底数越大函数值越小</li>
            <li>[27] x<Latex>{`$~\\ge~$`}</Latex>lnx + 1, 且相切于(1,1) | 相减或相比构造函数计算极值</li>
            <li>[29] 利用导数联想中值定理</li>
            <li>[30] 利用条件构造大小关系</li>
            <li>[32] 单调性-&gt;大小关系; 单调有界准则; 数学归纳法</li>
            <li>[33] 数学归纳法，假设时可以选择合适范围证明有界即可; 结合导数证明单调性; 找特殊点(有用的点)带入</li>
            <li>[34] 奇函数的导数是偶函数，偶函数的导数是奇函数</li>
            <li>[35] 拆出奇函数</li>
            <li>[36] 逻辑: 根据题设f(x)在x=0处导数存在, 则x-&gt;0时极限存在且等于f(0), 然后根据海涅定理得到改点极限的值, 同时也是f(0)的值, 然后通过海涅定理结合导数定义求出f'(0) (只有海涅定理成立时<Latex>{`$\\frac{1}{n}$`}</Latex>才能替换x, 且可以保持对应的无穷小的阶数)</li>
            <li>函数+数列联想到海涅定理(函数与数列的桥梁)</li>
            <li>[37] 拆出导数定义</li>
            <li>函数在一点可导，导函数不一定连续(例: <Latex>{`$f(x)=x^2sin(\\frac{1}{x}), f(0)=0$`}</Latex>)</li>
            <li>[40] <Latex>{`$|f(x)| = \\sqrt{f^2(x)} = g(x)$`}</Latex>; 假设-&gt;反证</li>
            <li>[42] <Latex>{`$df(a) = f'(a)dx = f'(a)\\Delta x, \\Delta f(a) = f'(a)\\Delta x+o(\\Delta x)$`}</Latex></li>
            <li>[44] n个函数乘积的导数</li>
            <li>[45] 函数绝对值的导数</li>
            <li>[47] 反函数的导数</li>
            <li>隐函数存在定理: F(x, y(x))在点<Latex>{`$(x_0, y_0)$`}</Latex>附近连续 且 <Latex>{`$F'_y$`}</Latex>在该点附近连续
              且 <Latex>{`$F'_y(x_0, y_0)\\neq0$`}, </Latex>则该点附近存在<strong>连续</strong>函数y=f(x)【只是充分条件】<br />若在该区域内还存在连续偏导数<Latex>{`$F'_x$`}</Latex>, 则在该区域内有连续导函数<Latex>{`$y'(x)=-\\frac{F'_x}{F'_y}$`}</Latex><br />
              <Latex>{`F(x, y)`}</Latex>在<Latex>{`$tan\\alpha=\\frac{F'_y}{F'_x}$`}</Latex>方向上函数变化率最快, 在<Latex>{`$tan\\alpha=-\\frac{F'_x}{F'_y}$`}</Latex>方向上为等高线
            </li>
            <li>[48] 先看出y&gt;0, 再用隐函数存在定理</li>
            <li>[49] 参数方程确定的函数的一阶导数</li>
            <li>[50] 求一点处导数值,若公式法计算复杂应尝试定义法; 证明一点导数存在且连续(该点处用定义法, 两边用公式法)</li>
            <li>[53] 函数乘积的n阶导数(求其中一项即可，用组合数(Leibniz公式))</li>
            <li>[54] 找最值看两端和内部极值点(分段点,无定义点,不可导点, 导数为0的点)</li>
            <li>[56] 判断分段点是否为可导点和极值点; xlnx函数图像: <Image className="mx-auto mt-1 mb-1" src='/Images/Math/xlnx.png' alt='xlnx' width={500} height={0} /> </li>
            <li>[57] 整体求出关于参数a的最值,再根据不等式求解a | 作逻辑等价变换,将a看作关于x的函数或不等式(运算简单)</li>
            <li>[58] 看图像注意坐标轴; 拐点要求函数在该点连续</li>
            <li>[59] 注意可导条件,这样就能放心用公式求导</li>
            <li></li>
          </ul>
        </div>
      </TextBox>
    </div>
  )
}



