import TextBox from "@/components/TextBox1"
import { Title1, Title2 } from "@/components/TextBox1"
import Link from "next/link";
import Latex from "react-latex-next"
import 'katex/dist/katex.min.css'; // 导入 KaTeX 样式

export default function MathPage() {
  return (
    <div className={`w-[100%] mx-auto text-blue-800`}>
      <Link href='https://xy6.notion.site' className="text-blue-600 text-center hover:text-fuchsia-500 w-min text-2xl mx-auto block mb-6">Notion</Link>
      <TextBox>
        <Title1><div className="text-pink-600 underline">张宇1000题</div></Title1>
        <Title2><div className="pb-6">高等数学</div></Title2>
        <div>
          <li>[1] 函数伸缩平移可逆变换，凑函数方程组，解出f(x)</li>
          <li>等式两边同时作相同运算时，如果关于函数，注意函数定义域</li>
          <li>[2] 函数值域就是反函数定义域; 解函数二次方程</li>
          <li>[3] 先画f(x)函数图像,将f(x)作为整体计算分段函数g[f(x)],再根据f(x)再次分段</li>
          <li>[5] <Latex>{`$\\sqrt{x^2}=|x|$`}</Latex></li>
          <li>[6] 定积分看被积函数能否被拆/凑出可抵消部分(
                <Latex>{`$\\frac{1}{a^x+1}-\\frac{1}{2}和\\frac{a^x-1}{a^x+1}$`}</Latex>都是奇函数)</li>
          <li>[7] 替换相同单调性函数计算极值点</li>
          <li>[8] f(x+T)=f(x),则T为周期函数f(x)的一个周期(可以有多个不同的周期); 复合函数扩展函数定义域</li>
          <li>[9] 已知函数极限存在，设极限为A列方程求解</li>
          <li>[10] 幂指函数-&gt;<Latex>{`$e^{ln}$`}</Latex>; 泰勒公式</li>
          <li>[12] 求极限时，乘积的部分极限存在且不为0，可以将其作为常数提出，因为其倒数的极限存在</li>
          <li>[14] <Latex>{`$x\\rightarrow0时, ln(x+\\sqrt{1+x^2})～x$`}</Latex></li>
          <li>[15] 结合洛必达和泰勒公式快速求解, 加减慎用泰勒公式</li>
          <li>[19] 整体的泰勒公式可以由部分的泰勒公式运算得到，还可以利用这点求整体的某一阶导数</li>
          <li>[22] 海涅定理(归结原理)，同时说明函数等价无穷小在数列形式下也有对应等价无穷小</li>
          <li>[24] 放缩夹逼</li>
          <li>[25] 分区间讨论+放缩夹逼(极限可以是函数); 各指数-&gt;<Latex>{`$\\infty$`}</Latex>时，底数相差任何一点都能改变主导</li>
          <li>[26] 分区间讨论+放缩夹逼; 指数-&gt;0时，底数乘倍数不影响</li>
          <li>指数函数底数<Latex>{`$a>0, a\\neq1$`}</Latex>，指数&gt;0时底数越大函数值越大，指数&lt;0时底数越大函数值越小</li>
          <li>[27] x<Latex>{`$~\\ge~$`}</Latex>lnx + 1, 且相切于(1,1) | 相减或相比构造函数计算极值</li>
          <li>[29] 利用导数联想中值定理</li>
          <li>[30] 利用条件构造大小关系</li>
        </div>
      </TextBox>
    </div>
  )
}
