import TextBox from "@/components/TextBox1"
import { Title1, Title2 } from "@/components/TextBox1"
import Latex from "react-latex-next"
import 'katex/dist/katex.min.css'; // 导入 KaTeX 样式

export default function MathPage() {
  return (
    <div className={`w-[100%] mx-auto text-blue-800`}>
      <TextBox>
        <Title1><div className="text-pink-600 underline">张宇1000题</div></Title1>
        <Title2><div className="pb-6">高等数学</div></Title2>
        <div>
          <li>[1]函数伸缩平移可逆变换，凑函数方程组，解出f(x)</li>
          <li>等式两边同时作相同运算时，如果关于函数，注意函数定义域</li>
          <li>[2]函数值域就是反函数定义域; 解函数二次方程</li>
          <li>[3]先画f(x)函数图像,将f(x)作为整体计算分段函数g[f(x)],再根据f(x)再次分段</li>
          <li>[5]<Latex>{`$\\sqrt{x^2}=|x|$`}</Latex></li>
          <li>[6]定积分看被积函数能否被拆/凑出可抵消部分(
              <Latex>{`$\\frac{1}{a^x+1}-\\frac{1}{2}和\\frac{a^x-1}{a^x+1}$`}</Latex>都是奇函数)</li>
          <li>[7]替换相同单调性函数计算极值点</li>
          <li>[8]f(x+T)=f(x),则T为周期函数f(x)的一个周期(可以有多个不同的周期); 复合函数扩展函数定义域</li>
          <li>[9]已知函数极限存在，设极限为A列方程求解</li>
          <li>[10]幂指函数-&gt;<Latex>{`$e^{ln}$`}</Latex>; 泰勒公式</li>
        </div>
      </TextBox>
    </div>
  )
}
