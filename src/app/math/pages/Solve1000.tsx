import TextBox from "@/components/RowTextBox"
import { Title1, Title2 } from "@/components/RowTextBox"
import Link from "next/link";
import Latex from "react-latex-next"
import 'katex/dist/katex.min.css'; // 导入 KaTeX 样式
import Image from "next/image";

export default function Solve1000() {
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
            <li>函数在一点可导，导函数不一定连续(例: <Latex>{`$f(x)=x^2sin(\\frac{1}{x}), f(0)=0$`}</Latex>); 所以特殊点的导数要用定义法</li>
            <Image className="mx-auto mt-1 mb-1" src='/Images/Math/x2sin1divx.png' alt='x^2sin1/x' width={500} height={0} />
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
            <li>
              <details open> <summary className="cursor-pointer">曲率:</summary>
                <Latex>{`$\\kappa = lim_{\\Delta s->0}|\\frac{\\Delta \\theta}{\\Delta s}|$`}</Latex> 其中 <Latex>{`$\\Delta s$`}</Latex> 是走过的弧长, <Latex>{`$\\Delta\\theta$`}</Latex> 是切线方向旋转的角度<br />
                <Latex>{`$\\kappa$`}</Latex>是该点处内切圆半径的倒数<br />
                对于函数 y = f(x):<br />
                <Latex>{`$\\kappa = lim_{\\Delta x->0}|\\frac{\\Delta arctan(f'(x))}{\\Delta x\\sqrt{1 + f'(x)^2}}| = \\frac{|f''(x)|}{(1 + f'^2(x))^{3/2}}$`}</Latex>
              </details>
            </li>
            <li>[62] 曲率公式; 隐函数求导,当<Latex>{`$y'$`}</Latex>是一个分式时, 将分母移到另一边, 然后对方程两边求导可能简化计算</li>
            <li>隐函数求导本质: <Latex>{`$F(x,y(x))$`}</Latex>隐函数求导得到的是y'关于方程上点(x, y)的关系式, 该关系式可能不是函数, 但在不包含<Latex>{`$F'_y=0$`}</Latex>的二维空间的局部存在函数y=f(x)</li>
            <li>[63] <Latex>{`$f(x)=a+bx+cx^2+o(x^2)$`}</Latex>, <Latex>{`$f''(x)=2c+o(1)$`}</Latex>, 通过曲率公式得到<Latex>{`$|f''(x)|$`}, 再通过曲率圆的方位确定凹凸性, 即二阶导数的正负</Latex>; 或直接隐函数求二阶导, 与泰勒公式对比求解</li>
            <li>[64] n次多项式至多n个实根, 所以一元二次方程最多2个实根</li>
            <li>[65~67] 根据零点个数判断参数范围: 计算两端、特殊点、极值点处的值/极限(可能需要先对参数取值分类讨论), 分为n个单调区间, 然后根据零点定理推导参数范围</li>
            <li>[69] <Latex>{`$ln(1+x)=\\frac{x}{1+\\xi}~,~\\xi\\in (0,x)~(x > 0)$`}</Latex></li>
            <li>对于可导函数f(x), 若<Latex>{`$f(x_0)=0$`}</Latex>, 则<Latex>{`$f(x)=f(x)-f(x_0)=f'(\\xi)(x-x_0), \\xi\\in (x_0,x) or (x, x_0)$`}</Latex></li>
            <li>[70] <Latex>{`$ln(1+\\frac{1}{x})=ln(1+x)-ln(x)=\\frac{1}{\\xi}~,~\\xi\\in (x,x+1)$`}</Latex></li>
            <li>对于可导函数f(x), <Latex>{`$f(x+a)-f(x)=af'(\\xi), \\xi\\in (x,x+a)$`}</Latex></li>
            <li>[71] <strong>可以从要证明的结论的某些角度出发, 构造式子来结合题目所给条件</strong></li>
            <li>[72] <strong>无法直接证伪时, 可以举反例</strong></li>
            <li><strong>只要函数在区间内可导，其导函数在区间内就具有介质性质(达布定理); </strong></li>
            <li>[73] 柯西中值定理</li>
            <li>[74] 只说了一点处可导, 未说明函数处处可导或在附近可导; 凑导数定义</li>
            <li>[75] sinx在x=0处一阶拉格朗日余项泰勒公式:<Latex>{`$sinx=x-\\frac{sin\\xi}{2}x^2, \\xi\\in (0,x)$`}</Latex></li>
            <li>[76] 罗尔定理的应用: 限制实根的最大数量n, 之后找到n个实根就能证明有n个实根</li>
            <li><strong>[77]</strong> (1).凹凸性的应用: 凹/凸区间内函数上两点构成的弦在函数的上方/下方, 两个零点间的x轴当然也是一条弦
              <details open> <summary className="cursor-pointer">(2). <strong>迭代型数列常用方法: </strong></summary>
                <ol>
                  <li>使用数学归纳法证明第n项性质, 如取值范围;</li>
                  <li>单调有界准则证明极限A存在, 之后由 <Latex>{`$A = f(A)$`}</Latex> 求出极限;</li>
                  <li><Latex>{`$x_{n+1}=f(x_n)$`}</Latex> 若有 <Latex>{`$x_{n+1} <=> ax_n$`}</Latex> 可求到第一项;</li>
                  <li>夹逼准则</li>
                  <li>压缩映射</li>
                </ol>
              </details>
            </li>
            <li>[78] 拉格朗日中值应用(隐藏的f(0)=0); <strong>微分不等式的应用在于<Latex>{`$\\xi$`}</Latex>的区间与单调性</strong></li>
            <li>[79] 参数方程的物理应用</li>
            <li>
              [83] 定积分的定义: 分<Latex>{`$n$`}</Latex>段, <Latex>{`$n->\\infty$`}</Latex>, 跨度为<Latex>{`$\\frac{1}{n}$`}</Latex>,
              区间长度为<Latex>{`$\\frac{1}{n}$`}</Latex>, <Latex>{`$\\sum_{k=1}^{n}{f(\\xi_k)}$`}</Latex>
            </li>
            <li>[84] 定积分的定义; 注意定积分的积分函数是否为"区间内的奇函数":<br /> <Latex>{`$f(a+b-x)=-f(x)$`}</Latex></li>
            <li>定义域内有界且只存在有限个间断点(间断点为零测度集)的实函数<strong>黎曼可积</strong></li>
            <li>区间再现公式: <Latex>{`$\\int_a^bf(x)dx = \\int_a^bf(a+b-x)dx$`}</Latex></li>
            <li><strong>[86]</strong> 拆出奇函数的积分; <Latex>{`$m(b-a)\\le\\int_a^bf(x)dx\\le M(b-a), a<b$`}</Latex></li>
            <li><Latex>{`$e^x~,~x~,~ln(1+x)~,~sin(x)$`}</Latex><Image className="mx-auto mt-1 mb-1" src='/Images/Math/xlnxexsinx.png' alt='xlnxexsinx' width={500} height={0} /></li>
            <li>[87] <Latex>{`$m_1\\ge M_2, \\int_a^{a+c}f(x)dx>m_1c\\ge M_2c>\\int_b^{b+c}f(x)dx$`}</Latex></li>
            <li><strong>有原函数(不定积分)不需要可积, 定积分只需要可积而不需要有原函数 <br /> 有原函数+可积 -&gt; 牛顿莱布尼兹公式</strong></li>
            <li><strong>连续函数一定存在原函数, 存在震荡间断点的函数可能存在原函数, 闭区间内连续则在闭区间内可积 <br />闭区间内连续 -&gt; 牛顿莱布尼兹公式</strong></li>
            <li>
              <strong>原函数存在定理+变限积分的导数: </strong><br />
              <Image className="mx-auto mt-1 mb-1" src='/Images/Math/原函数存在定理.png' alt='int' width={500} height={0} />
            </li>
            <li>连续函数零点之间的值恒正或恒负, 原函数在这些区间内单调; 若零点处导数值不为零, 根据积分保号性, 领域内两侧分别&gt;/&lt;0, 进而推出两侧区间分别&gt;/&lt;0, 直到两侧的下一个零点([93])</li>
            <li>[90] 原函数的定义; 定积分的几何意义</li>
            <li>[91] 反函数求导: <Latex>{`$y=f^{-1}(x),~ f'(y)=\\frac{1}{y'(f(y))}$`}</Latex></li>
            <li><strong>[92] 周期函数、奇偶函数的导数、变上限积分</strong></li>
            <li>[94] 定积分的几何意义</li>
            <li>[95] 注意: <Latex>{`$\\int_{-\\infty}^{+\\infty}$`}</Latex>上的奇函数看似积分为0, 实则发散; <Latex>{`$\\int_{-\\infty}^{+\\infty}$`}</Latex>一定要分两边计算</li>
            <li>讨论反常积分敛散性只需关注暇点处或无穷远处</li>
            <li>
              [96] 比较判别法证明参数p&gt;a时收敛然后再证明p&le;a时发散, 即可证明p的取值应该&gt;a; 若参数被消掉, 常在分母中的参数上<Latex>{`$\\pm\\epsilon$`}</Latex>
              <ul><li><Latex>{`$\\frac{lnx}{x^p}$`}</Latex> 同 <Latex>{`$\\frac{1}{x^p}$`}</Latex></li></ul>
            </li>
            <li>
              <details open>
                <summary className="cursor-pointer">原函数公式记忆: </summary>
                <ul>
                  <li><Latex>{`$\\int\\frac{dx}{a^2+x^2}=\\frac{1}{a}arctan(\\frac{x}{a})+C$`}</Latex></li>
                  <li><Latex>{`$\\int\\frac{dx}{a^2-x^2}=\\frac{1}{2a}ln|\\frac{a+x}{a-x}|+C$`}</Latex></li>
                  <li><Latex>{`$\\int\\frac{dx}{x^2-a^2}=\\frac{1}{2a}ln|\\frac{x-a}{x+a}|+C$`}</Latex></li>
                  <li><Latex>{`$\\int\\frac{1}{\\sqrt{a^2-x^2}}dx=arcsin\\frac{x}{a}+C$`}</Latex></li>
                  <li><Latex>{`$\\int\\frac{1}{\\sqrt{x^2-a^2}}dx=ln|x+\\sqrt{x^2-a^2}|+C$`}</Latex></li>
                  <li><Latex>{`$\\int\\frac{1}{\\sqrt{x^2+a^2}}dx=ln|x+\\sqrt{x^2+a^2}|+C$`}</Latex></li>
                  <li><Latex>{`$\\int\\sqrt{x^2+a^2}dx=\\frac{x}{2}\\sqrt{x^2+a^2}+\\frac{a^2}{2}ln|x+\\sqrt{x^2+a^2}|+C$`}</Latex></li>
                  <li><Latex>{`$\\int\\sqrt{x^2-a^2}dx=\\frac{x}{2}\\sqrt{x^2-a^2}+\\frac{a^2}{2}ln|x+\\sqrt{x^2-a^2}|+C$`}</Latex></li>
                  <li><Latex>{`$\\int\\sqrt{a^2-x^2}dx=\\frac{x}{2}\\sqrt{a^2-x^2}+\\frac{a^2}{2}arcsin\\frac{x}{a}+C$`}</Latex></li>
                  <li><Latex>{`$\\int secxdx=ln|secx+tanx|+C$`}</Latex></li>
                  <li><Latex>{`$\\int cscxdx=ln|cscx-cotx|+C\\\\~~~~~~~~~~~~~~~~=-ln|cscx+cotx|+C~~~(cscx-cotx=\\frac{1}{cscx+cotx})$`}</Latex></li>
                </ul>
              </details>
            </li>
            <li>[97] <strong>一元函数微积分的计算: </strong>
              <ul>
                <li><Latex>{`$secx不等价于\\sqrt{1+tan^2x}$`}</Latex>, 原函数F(x)要在原定义域上求导都等于f(x)</li>
                <li><strong>换元理论上需要严格单调性(至少在指定的定义域内), 否则可能需要分区间处理, 第二类换元法则需要找到g(t)严格单调且覆盖x定义域的区间</strong>  <br />eg: <Latex>{`$\\int_0^\\pi xcosxdx=\\int_0^1arcsintdt+\\int_1^0\\pi-arcsintdt$`}</Latex></li>
                <li><strong>第一类换元法求定积分或不定积分时,如果被积函数是 f(g(x))g'(x) 的形式,则t=g(x)不需要单调 (t=g(x)就算是多值函数也没关系,也不需要知道反函数)</strong> <br />eg: 使用万能公式代换求解(19)</li>
                <li>高次函数求积分可能用到递推式</li>
                <li>万能公式换元法</li>
              </ul>
            </li>
            <li>[99] <strong>有理分式分解(方程组解出系数)</strong></li>
            <li>[102] <Latex>{`$\\int\\frac{1}{ax^2+bx+c}dx$`}</Latex> 一般情况下将分母上的二次函数转化为顶点式</li>
            <li>[108] 对于变限积分x能提出来提出来, 不能简单提出尝试换元(换元和求积分时x是常数,求导时x是变量)</li>
            <li>[109] 判断导数是否连续</li>
            <li>[111] 运用换元证明积分函数的奇偶性 (f(t)为偶函数暗示倒代换)</li>
            <li>[112,117] 对于含绝对值的积分, 可以分割区间计算</li>
            <li>[113] 只考虑变量在题中所属区间, 简化计算</li>
            <li>[115] 通过<Latex>{`$\\int_a^xf(x)dx$`}求f(x)任意区间定积分</Latex></li>
            <li>[116]
              Method1: <Latex>{`$\\int_0^{1,2,3,4}f(x)dx$`}</Latex>可以尝试换元 sint或cost 使用点火公式 <br />
              Method2: <Latex>{`$\\int\\sqrt{1-x^2}dx=-\\frac{1}{3x}d((1-x^2)^{\\frac{3}{2}})$`}</Latex>
            </li>
            <li>[120] <Latex>{`$\\frac{1}{\\sqrt{x}}dx=d(2\\sqrt{x})~~\\int lnx dx=xlnx-x+C$`}</Latex></li>
            <li>[123] 切点给一阶导数值暗示分布积分; 找到显然解还要证明零点唯一</li>
            <li>[124] 绕y轴旋转的旋转体体积</li>
            <li>[125] <Latex>{`$\\int\\frac{e^x}{x}dx~\\int\\frac{1}{lnx}dx$`}</Latex> 都不是初等积分; 交换积分次序或分布积分(<Latex>{`$uv|^b_a=0$`}</Latex>)</li>
            <li>[126] 绕x轴旋转的旋转体体积</li>
            <li><Latex>{`$\\int\\sqrt{1+e^{ax}}dx~(a\\neq0)$`}</Latex>不是初等积分</li>
            <li>
              <strong>弧长公式: </strong><br />
              [127] 直角坐标系下: <br /><Latex>{`$ds=\\sqrt{1+f'(x)^2}dx\\\\L=\\int_a^bds=\\int_a^b\\sqrt{1+f'(x)^2}dx=\\int_a^b\\sqrt{1+\\frac{y'(t)^2}{x'(t)^2}}x'(t)dt=\\int_a^b\\sqrt{x'(t)^2+y'(t)^2}dt$`}</Latex> <br />
              [128] 极坐标系下: <br /><Latex>{`$ds=\\sqrt{\\rho(\\theta)^2+\\rho'(\\theta)^2}d\\theta\\\\L=\\int_a^bds=\\int_a^b\\sqrt{\\rho(\\theta)^2+\\rho'(\\theta)^2}d\\theta$`}</Latex> <br />
              [129] <strong>弧线积分可以切换积分变量(注意是否单调)</strong>
            </li>
            <li><strong>[130]</strong> <Latex>{`$\\int_0^\\pi f(xsinx)d(xsinx)=F(xsinx)|_0^\\pi=0$`}</Latex></li>
            <li>[131] 三角函数积分和求导都会循环(同时容易产生积分循环), 常利用这一点进行分布积分; 注意三角函数奇偶性</li>
            <li>[132] 求零点个数的基本方法而已: 端点和特殊点划分区间+单调性+零点定理+单调区间至多一零点</li>
          </ul>
        </div>
      </TextBox>
    </div>
  )
}

