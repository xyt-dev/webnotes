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
            <li><Latex>{`$\\frac{\\infty}{\\infty}$`}</Latex>分子分母同样分别可用等价无穷大替换, <strong>等价无穷大之间相差低阶无穷小</strong></li>
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
            <Img src='Images/Math/x2sin1divx.png' width={500} />
            <li>[40] <Latex>{`$|f(x)| = \\sqrt{f^2(x)} = g(x)$`}</Latex>; 假设-&gt;反证</li>
            <li>[42] <Latex>{`$df(a) = f'(a)dx = f'(a)\\Delta x, \\Delta f(a) = f'(a)\\Delta x+o(\\Delta x)$`}</Latex></li>
            <li>[44] n个函数乘积的导数</li>
            <li>[45] 函数绝对值的导数</li>
            <li>[47] 反函数的导数</li>
            <li><strong>隐函数存在定理: </strong>F(x, y(x))在点<Latex>{`$(x_0, y_0)$`}</Latex>附近连续 且 <Latex>{`$F'_y$`}</Latex>在该点附近连续
              且 <Latex>{`$F'_y(x_0, y_0)\\neq0$`}, </Latex>则该点附近存在<strong>连续</strong>函数y=f(x)【只是充分条件】<br />若在该区域内还存在连续偏导数<Latex>{`$F'_x$`}</Latex>, 则在该区域内有连续导函数<Latex>{`$y'(x)=-\\frac{F'_x}{F'_y}$`}</Latex><br />
              <Latex>{`F(x, y)`}</Latex>在<Latex>{`$tan\\alpha=\\frac{F'_y}{F'_x}$`}</Latex>方向上函数变化率最快, 在<Latex>{`$tan\\alpha=-\\frac{F'_x}{F'_y}$`}</Latex>方向上为等高线
            </li>
            <li>[48] 先看出y&gt;0, 再用隐函数存在定理</li>
            <li>[49] 参数方程确定的函数的一阶导数</li>
            <li>[50] 求一点处导数值,若公式法计算复杂应尝试定义法; 证明一点导数存在且连续(该点处用定义法, 两边用公式法)</li>
            <li>[53] 函数乘积的n阶导数(求其中一项即可，用组合数(Leibniz公式))</li>
            <li>[54] 找最值看两端和内部极值点(分段点,无定义点,不可导点, 导数为0的点)</li>
            <li>[56] 判断分段点是否为可导点和极值点; xlnx函数图像: <Img src='Images/Math/xlnx.png' width={500} /> </li>
            <li>[57] 整体求出关于参数a的最值,再根据不等式求解a | 作逻辑等价变换,将a看作关于x的函数或不等式(运算简单)</li>
            <li>[58] 看图像注意坐标轴; 拐点要求函数在该点连续</li>
            <li>[59] 注意可导条件,这样就能放心用公式求导</li>
            <li>
              <details open> <summary className="cursor-pointer"><strong>曲率:</strong></summary>
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
            <li>[72,137] <strong>无法直接证伪时, 可以举反例</strong></li>
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
            <li><Latex>{`$e^x~,~x~,~ln(1+x)~,~sin(x)$`}</Latex><Img src='Images/Math/xlnxexsinx.png' width={500} /></li>
            <li>[87] <Latex>{`$m_1\\ge M_2, \\int_a^{a+c}f(x)dx>m_1c\\ge M_2c>\\int_b^{b+c}f(x)dx$`}</Latex></li>
            <li><strong>有原函数(不定积分)不需要可积, 定积分只需要可积而不需要有原函数 <br /> 有原函数+可积 -&gt; 牛顿莱布尼兹公式</strong></li>
            <li><strong>连续函数一定存在原函数, 存在震荡间断点的函数可能存在原函数, 闭区间内连续则在闭区间内可积 <br />闭区间内连续 -&gt; 牛顿莱布尼兹公式</strong></li>
            <li>
              <strong>原函数存在定理+变限积分的导数: </strong><br />
              <Img src='Images/Math/原函数存在定理.png' width={500} />
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
            <li><strong>对称区间(不一定关于原点)的定积分: </strong><br />
              1. 偶倍奇零, 但注意反常积分不一定符合(因为可能发散, 且趋近一个点或无穷远处的发散值是没有抵消这种说法的, 因为趋近速度可以不相同)<br />
              如图, 第一个发散, 第二个为0: <Img src="Images/Math/对称区间反常积分.png" width={400} />
              2. 偶倍奇零的来源[公式]: <Latex>{`$\\int_{-a}^a f(x)dx=\\int_0^a [f(x)+f(-x)]dx$`}</Latex> <br />
            </li>
            <li>[120] <Latex>{`$\\frac{1}{\\sqrt{x}}dx=d(2\\sqrt{x})~~\\int lnx dx=xlnx-x+C$`}</Latex></li>
            <li>[123] 切点给一阶导数值暗示分布积分; 找到显然解还要证明零点唯一</li>
            <li>[124] 绕y轴旋转的旋转体体积</li>
            <li>[125] <Latex>{`$\\int\\frac{e^x}{x}dx~\\int\\frac{1}{lnx}dx$`}</Latex> 都没有初等函数形式表达; 交换积分次序或分布积分(<Latex>{`$uv|^b_a=0$`}</Latex>)</li>
            <li>[126] 绕x轴旋转的旋转体体积</li>
            <li><Latex>{`$\\int\\sqrt{1+e^{ax}}dx~(a\\neq0)$`}</Latex>没有初等函数形式表达</li>
            <li>
              <strong>弧长公式: </strong><br />
              [127] 直角坐标系下: <br /><Latex>{`$ds=\\sqrt{1+f'(x)^2}dx\\\\L=\\int_a^bds=\\int_a^b\\sqrt{1+f'(x)^2}dx=\\int_a^b\\sqrt{1+\\frac{y'(t)^2}{x'(t)^2}}x'(t)dt=\\int_a^b\\sqrt{x'(t)^2+y'(t)^2}dt$`}</Latex> <br />
              [128] 极坐标系下: <br /><Latex>{`$ds=\\sqrt{\\rho(\\theta)^2+\\rho'(\\theta)^2}d\\theta\\\\L=\\int_a^bds=\\int_a^b\\sqrt{\\rho(\\theta)^2+\\rho'(\\theta)^2}d\\theta$`}</Latex> <br />
              [129] <strong>弧线积分可以切换积分变量(注意是否单调)</strong>
            </li>
            <li><strong>[130]</strong> <Latex>{`$\\int_0^\\pi f(xsinx)d(xsinx)=F(xsinx)|_0^\\pi=0$`}</Latex></li>
            <li>[131] 三角函数、<Latex>{`$e^x$`}</Latex> 的积分和求导都会循环(同时容易产生积分循环), 常利用这一点进行分布积分; 注意三角函数奇偶性</li>
            <li>[132] 求零点个数的基本方法而已: 端点和特殊点划分区间+单调性+零点定理+单调区间至多一零点</li>
            <li><strong>[133] x&ge;a时f(x)有反函数g(x) =&gt; f(x)和g(x)单调; g(x)&ge;a且仅在x=f(0)处取等号</strong></li>
            <li>[134] 平均值-&gt;定积分-&gt;中值</li>
            <li>[135] 变上限积分换元求导; 微分方程</li>
            <li><strong>反证法=证明逆否命题</strong></li>
            <li><strong>[136]</strong> 泰勒中值定理; 反证法; 极限的保号性</li>
            <li><strong>[138] (1) 函数存在周期性、对称性等能使不同区间函数值相等的性质时，可以将未知函数表达式的目标区间内的取值变换到已知函数表达式的区间</strong> <br />
              (2) f(x)单调递增, f(a)&lt;f(x)&lt;f(b), <Latex>{`$\\frac{f(a)}{b}<\\frac{f(x)}{x}<\\frac{f(b)}{a}$`}</Latex>; &nbsp;夹逼准则; &nbsp;等价无穷大替换
            </li>
            <li>[139] 引力 <Latex>{`$dF=\\frac{GM(dm)}{L^2}$`}</Latex>; 三角换元</li>
            <li>[140] (1) 旋转体体积; 抛物线方程 <Latex>{`$y^2=2px$`}</Latex> &nbsp; (2) <Latex>{`$dW=\\rho ghdV$`}</Latex></li>
            <li>[141] (1) <Latex>{`$\\frac{dy}{dt}=\\frac{dy}{dV}\\frac{dV}{dt}~~\\frac{dV}{dy}=S$`}</Latex> &nbsp; (2) 注意积分区间和被积函数的奇偶性</li>
            <li>圆台侧面积: <Latex>{`$S=\\pi(r1+r2)L$`}</Latex><br />
              [142] 旋转体表面积 <Latex>{`$dS=\\pi(|f(x)|+|f(x+dx)|)\\sqrt{1+f'^2(x)}dx=2\\pi f(x)\\sqrt{1+f'^2(x)}dx$`}</Latex>
            </li>
            <li>[143] 微分方程组; 解可分离变量的微分方程</li>
            <li>[149] 偏导数的不定积分</li>
            <li>[150] 通过 f(x, y(t)) 和 <Latex>{`$f_y'$`}</Latex> 确定一点附近隐函数t(x)以及t'(x) &nbsp; <strong>(y(t)单调, 从而存在t(y), 从而x-&gt;t也是唯一的, 从而存在隐函数t1(x))</strong></li>
            <li>[151] <strong>[计算]</strong> 多元函数偏导计算</li>
            <li>[152] (2) 连续使用分布积分</li>
            <li>[153] 由一个偏导推另一个偏导, 注意原函数的可导域</li>
            <li><strong>[155] 二元函数费马定理: 极值 + 一阶偏导数存在 → 偏导 = 0;<br /> D的内部无最值(极值) 或 恒为常数a, 而D的边界都等于a, 则 f(x, y) <Latex>{`$\\equiv$`}</Latex> a</strong></li>
            <li><strong>二元函数极值判别法: </strong><Img src="Images/Math/AC-B2.png" />方向导数存在条件: 该点处可微</li>
            <li>[156~158] 求二元函数极值</li>
            <li><strong>条件极值的判断(拉格朗日乘数法找可能的极值点): <br />函数f(x, y)的梯度方向 与 约束条件的累加函数的梯度方向 平行(等高线平行)时可能存在条件极值 (在这些地方沿约束函数方向走, f(x, y)的增长率为0)<br />梯度方向相同 → 偏导数比例相同 或 f(x, y)的偏导数为0</strong></li>
            <li>[159] 代入求极值</li>
            <li>[160] 恒等变换注意等式两端变量定义域和<strong>函数值域</strong></li>
            <li>[161] <strong>[计算]</strong> 代入求极值 → 最值</li>
            <li><strong>[162] 极限保号性+极值的定义 证明极值</strong>; <Latex>{`$e^x+e^{-x}-2 \\sim x^2$`}</Latex></li>
            <li><Latex>{`$\\int\\sqrt{1+x^3}~~\\int\\frac{1}{\\sqrt{1+x^3}}$`}</Latex> 没有初等函数形式表达</li>
            <li>以下函数的原函数没有初等函数形式表达:<Img src="Images/Math/no elementary integration.png" /></li>
            <li><strong>二重积分做题顺序: </strong>
              <ol>
                <li>计算积分区域</li>
                <li>看是否存在对称性</li>
                <li>看被积函数是否易于积分(原函数是否存在初等函数形式)
                  <ul>
                    <li>更换坐标系</li>
                    <li>交换积分次序</li>
                  </ul>
                </li>
                <li>看是否应该拆积分区域和被积函数<strong>(注意轴对称+奇偶性)</strong></li>
              </ol>
            </li>
            <li>[165] <Latex>{`$x^2+y^2-xy=a <=> \\frac{x^2}{2}+\\frac{y^2}{\\frac{2}{3}}=a ~逆时针旋转45^。 <=> \\frac{(\\frac{\\sqrt{2}}{2}x+\\frac{\\sqrt{2}}{2}y)^2}{2}+\\frac{3(\\frac{\\sqrt{2}}{2}x-\\frac{\\sqrt{2}}{2}y)^2}{2}=a$`}</Latex></li>
            <li>[166] (t, f(t))虽然在y=f(x)上, 但求积分时要注意其横纵坐标为常数</li>
            <li>[167] 极坐标下二重积分; <Latex>{`$sin3\\theta$`}</Latex> 图像: <Img src="Images/Math/sin3theta.png " width={300} /></li>
            <li>[168, 169] 转换为极坐标 <Latex>{`$r=r(\\theta)$`}</Latex> 再看积分区间;<br /> (168) 轴对称; <br />
              <strong>(169) 有理分式分解; 凑积分分解; 凑分布积分 <br /><Latex>{`$\\int xf'(x)dx = xf(x) - \\int f(x)dx$`}</Latex></strong><br />
              <Latex>{`$\\int\\frac{18dt}{(t^2+3)^2}=\\int[\\frac{6t^2+18}{(t^2+3)^2}-\\frac{6t^2}{(t^2+3)^2}]dt \\\\ =\\int\\frac{6dt}{t^2+3}+\\int 3td(\\frac{1}{t^2+3})
              \\\\ =\\sqrt{3}~arctan\\frac{t}{\\sqrt{3}}+\\frac{3t}{t^2+3}+C$`}</Latex>
            </li>
            <li>[170] 方法一: 轮换对称性 <br /> 方法二: 三角函数诱导公式 + 区间再现公式  <br />
              <Latex>{`$\\int_0^{\\frac{\\pi}{2}}\\frac{cost}{sint+cost}dt = \\int_0^{\\frac{\\pi}{2}}\\frac{1}{tant+1}dt = \\int_0^{\\frac{\\pi}{2}}\\frac{1}{tan(\\frac{\\pi}{2}-t)+1}dt = \\int_0^{\\frac{\\pi}{2}}\\frac{tant}{tan(t)+1}dt \\\\ 
                = \\frac{1}{2}\\int_0^{\\frac{\\pi}{2}}dt= \\frac{\\pi}{4}$`}</Latex>
            </li>
            <li>[171] 拆积分函数+轴对称+奇偶性</li>
            <li>[172] <strong>平方开根加绝对值!</strong> <Latex>{`$r=sin\\theta$`}</Latex>的极坐标函数图像; 对称性;</li>
            <li>[173] 拆积分区域+轴对称+奇偶性</li>
            <li>[175] 画非零积分区域</li>
            <li>[176] 方法一: 极坐标<Space width={1} /><Latex>{`$\\frac{1}{\\sqrt{u}}du=2d\\sqrt{u}$`}</Latex><Space width={2} /><strong>*</strong>方法二: 换元法</li>
            <li>

              <details> <summary className="cursor-pointer"><strong>雅可比行列式(二重积分换元法 使用)</strong></summary>
                <div className="mb-3"><Img src="Images/Math/2DJacobian.png" /></div>
                <Img src="Images/Math/2DJacobian2.png" />
              </details>
            </li>
            <li><strong>[177] [计算]</strong> <strong>积分的绝对值&le;绝对值的积分; 二重积分的积分中值定理</strong></li>
            <li><strong>积分中值定理(注意使用条件):</strong>
              <Img src="Images/Math/积分中值定理.png" />
            </li>
            <li>[178]
              <ul>
                <li> <strong>可导函数极值点处导数值为0 =&gt; 导函数无零点 -&gt; 函数单调连续无极值点</strong><br /> </li>
                <li> <strong>一点处连续+去心邻域(不要求该点可导)内可导+导函数在左右邻域变号 -&gt; 该点为极值点 =&gt; 函数无极值点 -&gt; 函数无任一点满足前述左侧条件 (连续导函数则无穿过x轴的零点)</strong> </li>
              </ul>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer"><strong>微分方程: </strong></summary>
                <ul>
                  <li>在一阶线性微分方程公式中，若 <Latex>{`$\\int{{p(x)}dx}=\\ln|\\varphi(x)|$`}</Latex> ，绝对值可去掉; <br /> <Latex>{`$P(x)=\\int{{p(x)}dx}$`}</Latex> 不需要 +C</li>
                  <li>伯努利方程:
                    形如 <Latex>{`$y'+p(x)y=q(x)y^n~(n\\neq 0, 1)
                  \\\\ =>~~y^{-n}y'+p(x)y^{1-n}=q(x)
                  \\\\ 令~z=y^{1-n},~z' = (1-n)y^{-n}y'
                  \\\\ =>~~\\frac{1}{1-n}z'+p(x)z=q(x)
                  $`}</Latex>
                  </li>
                  <li>欧拉公式:
                    <Img src="Images/Math/欧拉公式.png" />
                  </li>
                  <li>二阶常系数齐次线性微分方程解的证明:
                    <Img src="Images/Math/齐次微分方程解的证明1.png" />
                    <Img src="Images/Math/齐次微分方程解的证明2.png" />
                  </li>
                  <li>二阶常系数非齐次线性微分方程的特解形式<br />
                    (该表显示了当微分方程右侧的 f(x)[自由项] 为多项式、<Latex>{`$Ae^{\\alpha x}$`}</Latex>、正弦、余弦, 或一个或多个这些类型函数的乘积或和的方法, 该方法可能不适用于其他情形(不在讨论范围中) )
                    <Img src="Images/Math/非齐次微分方程特解形式.png" />
                  </li>
                  <li>欧拉方程(二阶): <br />
                    对于 <Latex>{`$x^2\\frac{d^2y}{dx^2}+px\\frac{dy}{dx}+qy=f(x)$`}, 其中p, q为常数</Latex>
                    <Latex>{`$\\\\ 令x=e^t,~t=lnx
                    \\\\ \\Rightarrow \\frac{d^2y}{dt^2}+(p-1)\\frac{dy}{dt}+qy=f(e^t)$`}</Latex>
                  </li>
                </ul>
              </details>
            </li>
            <li>[179~186] 微分方程</li>
            <li>
              <details>
                <summary className="cursor-pointer"><strong>级数相关证明: </strong></summary>
                <ul>
                  <li>级数绝对收敛 -&gt; 级数收敛:
                    <Img src="Images/Math/绝对收敛推收敛证明.png" />
                  </li>
                  <li>幂级数敛散域判断:
                    <Img src="Images/Math/幂级数敛散域.png" />
                    注意: 条件收敛点只可能在 x=R 或 x=-R 处
                  </li>
                  <li>无穷级数与无穷乘积:
                    <Img src="Images/Math/无穷级数与无穷乘积.png" />
                  </li>
                  <li>Raabe定理: </li>
                  <li><Latex>{`$(1+x)^a$`}</Latex>的麦克劳林级数及其收敛域:
                    <Img src="Images/Math/(1+x)^a.png" width={500} />
                    <Img src="Images/Math/(1+x)^aField.png" />
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </TextBox>
    </div>
  )
}

