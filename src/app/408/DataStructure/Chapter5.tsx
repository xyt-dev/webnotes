import Latex from "react-latex-next"
import 'katex/dist/katex.min.css'; // 导入 KaTeX 样式
import Space from "@/components/Space";

function Img({src, width, align, className}: { src: string, width?: number, align?: string , className?: string }) {
  if (align !== "left") align = "mx-auto"
  return (
     <img className={`${className} ${align} `} src={src} alt="image" width={width} />
  ) 
}

function Indent({n=2}: {n?:number}) {
  return (
     <span style={{ display: 'inline-block', height: '1rem', width: `${n}rem` }} />
  )
}

export default function Chapter2() {
  return (
    <div className="prose daisy-prose p-6 max-w-[1300px]">
      <h2 className="text-3xl">树</h2>
      <h3 className="text-2xl">基本概念</h3>
      <span className="font-bold text-lg">树的基本概念</span>
      <p className="mt-3">
        相关概念: <br />
        结点间关系: 父结点, 子结点, 祖先, 子孙, 兄弟, 堂兄弟. <br />
        非空树的特点: 是<strong>有向</strong>无环图(路径是有向的); 有且仅有一个根结点(有且仅有一个结点无前驱); 除根结点外其他结点有且仅有一个前驱. (有环图不可能同时满足后两点) <br />
        有序树: 各结点的子树从左至右逻辑上有次序. <br />
        树的深度/高度/层数: 从根结点到叶结点的最长路径上的结点数.(最长路径长度+1, 树根为1) <br />
        树的路径长度: 树根到<strong>每个结点路径长度的总和</strong>. <br />
        结点的度: 结点的分支数; 树的度: 各结点度的最大值. <br />
        叶子结点: 度为0的结点. <br />
        <Latex>{`度为$m$的树与$m$叉树: `}</Latex>
        {Img({src: "Images/408/DataStructure/度为m的树与m叉树.png", width: 600, align: "left", className: "m-0"})}
      </p>
      <p className="text-[1.06rem]">
        <span className="text-[1.09rem] text-[#005cc5]">性质: </span><br />
        1. 树的结点数 = 树的总度数 + 1; 树的总度数 = 树的总边数. <br />
        2. <Latex>{`$m$`}</Latex>叉树/度为<Latex>{`$m$`}</Latex>的树 第j层上至多有 <Latex>{`$m^{j-1}$`}</Latex> 个结点. <br />
        3. 高度为<Latex>{`$h$的$m$`}</Latex>叉树/度为<Latex>{`$m$`}</Latex>的树 至多有 <Latex>{`$\\frac{m^h-1}{m-1}$`}</Latex> 个结点. <br />
        4. 具有<Latex>{`$n$个结点的$m$`}</Latex>叉树/度为<Latex>{`$m$`}</Latex>的树 最小高度为 <Latex>{`$\\lceil \\log_m{(n(m-1)+1)} \\rceil$`}</Latex>. <br />
        5. 具有<Latex>{`$n$个结点的度为$m$`}</Latex>的树 最大高度为 <Latex>{`$n-m+1$`}</Latex>; 高度为<Latex>{`$h$的度为$m$`}</Latex>的树 至少有 <Latex>{`$h+m-1$`}</Latex> 个结点.
          (<Latex>{`$m$`}</Latex>叉树为<Latex>{`$n$和$h$`}</Latex>) <br />
        6. <Latex>{`$n_0=\\sum_{j=2}^{m}(j-1)n_j + 1$`}</Latex>. (通过第一条性质列方程求解得到) <br />
        7. 森林中树的个数 = 总结点数 - 总边数. (由第一条性质可知) <br />
      </p>

      <span className="font-bold text-lg">二叉树的基本概念</span>
      <p className="mt-3">
        满二叉树: 高度为<Latex>{`$h$且有$2^h-1$个结点`}</Latex>的二叉树.  <br />
        满二叉树叶子结点都在最下一层, 非叶子结点的度数均为2. 对满二叉树按层序自左向右编号, 根结点编号为1, 则对于编号为 j 的结点, 其父结点编号为 <Latex>{`$\\lfloor j/2 \\rfloor$`}</Latex>, 
        其左孩子编号为 <Latex>{`$2j$`}</Latex>, 其右孩子编号为 <Latex>{`$2j+1$`}</Latex>; 结点 j 所在深度(层数)为 <Latex>{`$\\lfloor \\log_2j \\rfloor + 1$ 或 $\\lceil log_2(j+1) \\rceil$`} (与计算树的最小高度同理)</Latex>.
      </p>
      <p>
        完全二叉树: 每个结点都与 高度相同的满二叉树中对应位置结点编号 相同的二叉树.(满二叉树属于完全二叉树) <br />
        完全二叉树中编号为 j 的结点其编号相关规律同满二叉树. 完全二叉树的叶子结点存在于最下<strong>两层</strong>, 其最多只能有一个度为1的结点(n为<strong>偶数</strong>), 且该结点只有左孩子, 编号大于其的结点均为叶子结点. 
        若n为<strong>奇数</strong>, 则其每个分支结点都有两个孩子结点(只有度为0或2的结点, 属于正则二叉树).<br />
      </p>
      <>
        由<Latex>{`$n_0 = n_2 + 1$以及$n=n_0+n_1+n_2$得到$n=n_1+2n_2+1$`}</Latex>(二叉树); 可知<Latex>{`$n$为奇数时$n_1=0$, $n$为偶数时$n_1=1$(完全二叉树)`}</Latex>. <br />
        可知: 对于满二叉树或完全二叉树中编号为 j 的结点, 若 <Latex>{`$j \\le \\lfloor \\frac{n}{2} \\rfloor$`}</Latex> 则为分支结点, 否则为叶子结点.
        即完全二叉树有<Latex>{`$\\lfloor \\frac{n}{2} \\rfloor$个分支结点和$n - \\lfloor \\frac{n}{2} \\rfloor$个叶子结点`}</Latex>. 
      </>
      <p>
        二叉树的存储结构: <br />
        <div className="mb-[0.3rem] mt-[0.3rem]">
          顺序存储: 完全二叉树常使用一维数组存储, 将完全二叉树上编号为 j 的结点存储在数组下标为 j (或j-1) 的位置, 从而反应结点间的逻辑关系. 
          一般的二叉树也能够通过添加空结点让其与完全二叉树相对应, 从而使用数组存储, 但这样空间利用率较低. 
        </div>
        <div>
          链式存储: 一般的二叉树更常采用链式存储, 又称为二叉链表, 其存储结构如下: <br />
          {Img({src: "Images/408/DataStructure/二叉树存储结构.png", width: 430, align: "left", className: "m-0"})}
          显然, 含有 <Latex>{`$n$`}</Latex> 个结点的二叉链表中有 <Latex>{`$n+1$`}</Latex> 个空链域.
        </div>
      </p>
      <blockquote>
        <ul>
          <li>树的性质自然也适用于二叉树, 二叉树的性质还包括之前提到的树的性质.</li>
          <li>树可以没有结点(空树), 但图不能没有顶点.</li>
          <li>度为2的有序树不能说是二叉树, 虽然二叉树是有序树, 但当一个分支结点只有一个子结点时, 二叉树需要明确指出该结点是左子结点还是右子结点, 而度为2的有序树无所谓. (<Latex>{`$m$`}</Latex>叉树是需要明确指出子树的位置的)</li>
        </ul>
      </blockquote>
      <details open>
        <summary className="cursor-pointer w-fit font-bold text-lg">例题</summary>
        <div className="pl-6">
          {Img({src: "Images/408/DataStructure/Exercises/5_1_3.png", width: 600, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/5_1_7.png", width: 700, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/5_1_9.png", width: 700, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/5_2_5to6.png", width: 700, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/5_2_8to9.png", width: 600, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/5_2_18to22.png", width: 700, align: "left", className: "m-0 mt-1"})}
          答案: A D B B D <Space width={1} /> C C A A C <Space width={1} /> C B
          {Img({src: "Images/408/DataStructure/Exercises/5_2_addition1.png", width: 500, align: "left", className: "m-0 mt-1"})}
          答案: 最小值 = <Latex>{`$2^5-1+6 = 37$`}</Latex>; 最大值 = <Latex>{`$2^7-1-6\\cdot 2 = 115$`}</Latex>. <br />
          {Img({src: "Images/408/DataStructure/Exercises/5_2_addition2.png", width: 500, align: "left", className: "m-0 mt-1"})}
          答案: <Latex>{`$h=\\lceil \\log_2(n+1) \\rceil = \\lceil \\log_2(2n_0+n_1) \\rceil. ~~ n_1=1$时, $h=\\lceil \\log_2(2n_0+1) \\rceil$; $ n_1=0$时, $h=\\lceil \\log_2(n_0) \\rceil + 1$`}</Latex>
          {Img({src: "Images/408/DataStructure/Exercises/5_2_addition12.png", width: 620, align: "left", className: "m-0 mt-1"})}
          答案: 由树的性质知 <Latex>{`$n=m+n_0=mk+1$`}</Latex>, 得 <Latex>{`$n_0=m(k-1)+1$`}</Latex>
          {Img({src: "Images/408/DataStructure/Exercises/5_2_addition3.png", width: 620, align: "left", className: "m-0 mt-1"})}
          对于完全<Latex>{`$m$`}</Latex>叉树, 设结点j位于第h层, 结点j的第k个子节点编号 <Latex>{`$=\\frac{m^h-1}{m-1}+(j-1-\\frac{m^{h-1}-1}{m-1})\\times m + k=m(j-1)+1+k$ $(1 \\le k \\le m)$`}</Latex>.
          于是 <Latex>{`$0 \\le 1+k-2 \\lt m$`}</Latex>, 得结点j的父节点编号 <Latex>{`$=\\lfloor \\frac{j-2}{m} \\rfloor + 1 ~ (j > 1)$`}</Latex>. 结点j存在右兄弟结点, 
          即结点j不是其父节点的第<Latex>{`$m$`}</Latex>个子结点, 于是j满足: <Latex>{`$(j-1)\\%m\\ne 0$`}</Latex>, 其右兄弟结点编号自然为j+1.
        </div>
      </details>

      <h3 className="text-2xl">二叉树遍历与线索二叉树</h3>
      <p>
        二叉树遍历: 前序遍历(NLR), 中序遍历(LNR), 后序遍历(LRN). <br />
        <span className="text-[#005cc5]">无右子树(去掉R) <Latex>{`$\\Leftrightarrow$`}</Latex> 中序和后序遍历序列相同, 无左子树(去掉L) <Latex>{`$\\Leftrightarrow$`}</Latex> 中序和前序遍历序列相同.</span> <br />
        以上三种遍历算法递归遍历左、右子树顺序相同, 只是访问根节点顺序不同, 每个结点都只访问一次, 时间复杂度均为O(n). <br />
        <span className="text-[#005cc5]">画图法快速确定三种遍历序列: </span>画出二叉树链式结构图, 从根节点左侧开始, 用曲线逆时针围绕二叉树结构图外侧描线(至根节点右侧), 曲线分别经过各结点左侧、下侧、右侧;
          先序遍历时经过结点左侧时输出结点信息, 中序遍历时经过结点下侧时输出结点信息, 后序遍历时经过结点右侧时输出结点信息. <br />
          <span className="text-[#005cc5]">中序遍历也相当于从左往右按列序遍历</span>, 起始结点是最左节点, 终止结点是最右节点; 前序遍历起始结点是根节点, 终止结点是<span className="text-[#005cc5]">最右叶子节点</span>; 
          后序遍历起始结点是<span className="text-[#005cc5]">最左叶子节点</span>, 终止结点是根节点. 由于三种遍历顺序都是先访问左子树后访问右子树, <span className="text-[#005cc5]">由此可知三种遍历序列中对于同一层的结点访问顺序都相同, 
          均为从左至右访问. 如果两个结点之间不是祖孙关系则两个结点必然分别位于某一结点的左右子树上, 在三种遍历顺序中的二者访问顺序都相同; 所以如果两个结点在两种遍历顺序中的访问顺序相反, 则两个结点之间一定为祖孙关系, 且可以根据序列可以判断子孙节点在哪个子树上.</span> <br />
        遍历算法描述: <br />
        {Img({src: "Images/408/DataStructure/遍历二叉树.png", width: 560, align: "left", className: "m-0 mb-1"})}
        <span className="text-[1.05rem] text-[#005cc5]">注: </span>
        按后序非递归遍历二叉树, 访问一个结点p时, 栈中的结点恰好是结点p的所有祖先结点序列. (先序和中序应该也可以, 只需要判断是否从右子结点返回从而判断子树是否全部访问)
      </p>
      <p>
        中序遍历序列 + 先序|后序|层序遍历序列 可以唯一确定(构造)一棵二叉树. <br />
        先序|后序|层序遍历序列都能确定第一个根节点, 但后续结点位于左子树还是右子树都要结合中序遍历序列才能确定. <br />
        另一个遍历序列能将中序遍历序列划分为左右子树, 但左右子树的顺序可能不满足另一个遍历序列, 所以不是任意中序序列都能与另一遍历序列唯一确定一棵二叉树. <br />
      </p>          
      <blockquote>
        前序序列和中序序列的关系相当于以前序序列为入栈次序，以中序序列为出栈次序. <br />
      </blockquote>
      <p>
        线索二叉树: 含n个结点的二叉树中, 有n+1个空指针域, 利用这些空指针域来存放指向其前驱或后继, 这样就能想遍历单链表一样方便的遍历二叉树.
        二叉树结点结构如下: <br />
        {Img({src: "Images/408/DataStructure/线索二叉树结构.png", width: 400, align: "left", className: "m-0 mb-1"})}
        以中序遍历为例, 构造线索二叉树算法如下: <br />
        {Img({src: "Images/408/DataStructure/构造中序线索二叉树.png", width: 600, align: "left", className: "m-0 mb-1"})}
        建立先序线索二叉树和建立后序线索二叉树的算法类似, 只需变动调用线索化左右子树递归函数的位置即可. <br />
        <div className="h-2"></div>
        对于中序线索二叉树的结点, 其左子树不为空则其前驱为其左子树的最右结点, 其右子树不为空则其后继为其右子树的最左结点. <br />
        所以中序线索二叉树的优点是每一个节点都能沿指针找到其前驱和后继. 遍历中序线索二叉树算法如下: <br />
        {Img({src: "Images/408/DataStructure/遍历中序线索二叉树.png", width: 720, align: "left", className: "m-0 mb-1"})}
        而对于先序和后序线索二叉树, 结点的先序前驱结点和后序后继结点可能是其父节点或位于其兄弟子树上, 不能直接通过链域找到.(说明后序线索树正向遍历和先序线索树逆向遍历仍需要栈的支持) <br />
        <div className="h-2"></div>
        带头结点的中序线索二叉树: 方便从前往后或从后往前对二叉树进行遍历, 如图:  
        {Img({src: "Images/408/DataStructure/带头结点的中序线索二叉树.png", width: 500, align: "left", className: "m-0 mb-1"})}
      </p>
      <blockquote>
        二叉树是逻辑结构, 线索二叉树是物理结构. <br />
      </blockquote>
      <details open>
        <summary className="cursor-pointer w-fit font-bold text-lg">例题</summary>
        <div className="pl-6">
          {Img({src: "Images/408/DataStructure/Exercises/5_3_1to2.png", width: 700, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/5_3_17.png", width: 660, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/5_3_21.png", width: 700, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/5_3_26to27.png", width: 700, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/5_3_31to32.png", width: 650, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/5_3_35to36.png", width: 700, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/5_3_39.png", width: 600, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/5_3_41to42.png", width: 700, align: "left", className: "m-0 mt-1"})}
          答案: C C D C D <Space width={1} /> D C B C A <Space width={1} /> B B B
          {Img({src: "Images/408/DataStructure/Exercises/5_3_01to02.png", width: 670, align: "left", className: "m-0 mt-1"})}
          答案: <br />
          1. 先序序列与后序序列相反即与后序序列的逆序相同, 即对于树中任意一个结点满足 NLR=NRL, 所以任意一个结点的L或R都有一个为空, 于是每一层只会有一个结点, 该二叉树的形态是高度等于结点个数. <br />
          2. 先序序列与后序序列相同, 即对于树中任意一个结点满足 NLR=LRN, 于是L和R均为空, 该二叉树只有一个根节点. <br />
          {Img({src: "Images/408/DataStructure/Exercises/5_3_017.png", width: 700, align: "left", className: "m-0 mt-1"})}
          答案: <br />
          {Img({src: "Images/408/DataStructure/Exercises/Solve_5_3_017.png", width: 700, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/Solve_5_3_017_2.png", width: 600, align: "left", className: "m-0 mt-1"})}
          (注: 以上算法未考虑度为1的结点, 但该边界条件不是此题给分点)
          {Img({src: "Images/408/DataStructure/Exercises/5_3_018.png", width: 700, align: "left", className: "m-0 mt-1"})}
          答案: <br />
          {Img({src: "Images/408/DataStructure/Exercises/Solve_5_3_018.png", width: 600, align: "left", className: "m-0 mt-1"})}
        </div>
      </details>

      <h3 className="text-2xl">树、森林</h3>
      <p>
        树的双亲表示法: 一般使用顺序存储.
        {Img({src: "Images/408/DataStructure/树的双亲表示法.png", width: 400, align: "left", className: "m-0"})}
        可以O(1)找到每个结点的双亲结点, 但找子节点需要O(n)遍历. <br />
        <div className="h-2"></div>
        树的孩子表示法: 使用n个单链表存放n个结点的孩子节点, 单链表的头指针一般用数组存放. <br />
        {Img({src: "Images/408/DataStructure/树的孩子表示法.png", width: 400, align: "left", className: "m-0"})}
        可以O(k)(k为度数)找到对应孩子结点, 但找双亲节点需要O(n)遍历. <br />
        <div className="h-2"></div>
        树的孩子兄弟表示法: 又称二叉树表示法, 使用二叉链表作为树的存储结构. <br />
        {Img({src: "Images/408/DataStructure/树的孩子兄弟表示法.png", width: 600, align: "left", className: "m-0"})}
        表示更加灵活, 便于实现树转换为二叉树的操作.(还可以给每个结点增加一个父节点指针) <br />
      </p>
      <p>
        树转换为二叉树: 每个结点的左指针指向其第一个孩子结点, 右指针指向其在树中的相邻右兄弟结点.(根节点没有右子树)(逆向操作可将二叉树转换为树) <br />
        森林转换为二叉树: 现将每棵树转换为二叉树, 再将所有二叉树的根节点视为兄弟结点用右链域连接起来.(第一棵树的根节点成为所有树的根节点) <br />
        二叉树转换为森林: 断开二叉树根节点的右链域, 直到所有二叉树根节点都没有右子树. <br />
        于是树的森林、二叉树的森林、二叉树可相互转换: <br />
        {Img({src: "Images/408/DataStructure/树二叉树森林.png", width: 600, align: "left", className: "m-0"})}
      </p>
      <p>
        树的遍历: <br />
        先根遍历: 与对应二叉树的先序遍历相同. (类似二叉树的先序遍历) <br />
        后根遍历: 与对应二叉树的<strong>中序</strong>遍历相同. (类似二叉树的<strong>后序</strong>遍历) <br />
        森林的遍历: <br />
        先序遍历森林: 与对应二叉树的先序遍历相同. <br />
        中序遍历森林: 与对应二叉树的中序遍历相同.(每棵树的根都是最后访问, 所以也可以理解为后根遍历) <br />
        所以 树的先根遍历序列+树的后根遍历序列/森林的先序遍历序列+森林的中序遍历序列 可以唯一确定 一棵树/一个森林. <br />
      </p>
      <p className="text-[#001080]">
        "将一棵树转换为二叉树"其实就是用孩子兄弟表示法表示这棵树. 孩子兄弟表示法中, <br />
        空的左指针域个数 = 树的叶子结点个数; (左指针域为空说明该节点没有子树) <br />
        空的右指针域个数 = 非叶子结点个数 + 1. (每个非叶子结点的最右孩子的右指针域都为空, 且根节点没有右兄弟)<br />
      </p>
      <details open>
        <summary className="cursor-pointer w-fit font-bold text-lg">例题</summary>
        <div className="pl-6">
          {Img({src: "Images/408/DataStructure/Exercises/5_4_1.png", width: 600, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/5_4_8to10.png", width: 700, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/5_4_13to15.png", width: 700, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/5_4_18.png", width: 700, align: "left", className: "m-0 mt-1"})}
          答案: D C B B B <Space width={1} /> B D C
          {Img({src: "Images/408/DataStructure/Exercises/5_4_05.png", width: 560, align: "left", className: "m-0 mt-1"})}
          答案: 
          {Img({src: "Images/408/DataStructure/Exercises/Solve_5_4_05.png", width: 700, align: "left", className: "m-0 mt-1"})}
        </div>
      </details>

      <h3 className="text-2xl">哈夫曼树</h3>
      <p>
        路径长度: 路径上的边数; <br />
        结点的带权路径长度: 从树根到一个结点的路径长度 <Latex>{`$\\boldsymbol{\\cdot}$`}</Latex> 该节点上的权值; <br />
        树的带权路径长度(WPL): 树中所有叶子结点的带权路径长度之和. <br />
        (令分支结点的权值为其子树根节点的权值之和, 则 WPL = 所有分支节点的权值之和) <br />
        哈夫曼树: WPL最小的二叉树, 又称最优二叉树. <br />
      </p>
      <p>
        给定ｎ个权值为别为 w1,w2,...,wn 的结点, 构造一棵哈夫曼树:<br />
        1) 这ｎ个结点分别作为ｎ棵仅含一个结点的二叉树，构成森林Ｆ. <br />
        2) 构造一个新结点，从Ｆ中选取两棵根结点权值最小的树作为新结点的左、右子树，新结点的权值为左、右子树上根结点的权值之和. <br />
        3) Ｆ中删除刚才选出的两棵树，同时将新得到的树加入Ｆ中. <br />
        4) 重复步骤(2)、(3), 直到Ｆ中只剩下一棵树为止. <br />
        <div className="h-1" />
        从上述构造过程中可以看出哈夫曼树具有如下<strong>特点：</strong> <br />
        １）每个初始结点都作为叶结点，且权值越小的结点到根结点的路径长度越长. <br />
        ２）每次构造都选择２棵树作为新结点的孩子，因此哈夫曼树中不存在度为１的结点. <br />
        ３）构造过程中共新建了ｎ－１个结点(<Latex>{`$n_2=n_0-1$`}</Latex>)，因此哈夫曼树的结点总数为２ｎ－１.
      </p>
      <p>
        哈夫曼编码: <br />
        哈夫曼树中一般约定结点的左分支表示0、右分支表示1, 使用从根到叶子结点路径上的分支标记组成的序列作为叶子结点的编码, 此方式称为哈夫曼编码. 这显然符合<span className="text-[#005cc5]">前缀码没有一个编码是其他编码的前缀</span>的条件.<br />
      </p>
      <p>
        一个度为2的含有n个叶子结点的哈夫曼树高度范围是<Latex>{`$[\\lceil\\log_2n\\rceil, n]$`}</Latex>. <br />
      </p>
      <blockquote>
        由于构造过程中两个树的左右位置不固定, 且可能有多个根结点权值相同, 因此哈夫曼树的构造不是唯一的; 但WPL一定是唯一的. <br />
        对字符使用哈夫曼编码, 将字符的出现频度作为其结点权值, 则其对应哈夫曼树的WPL为所有字符的二进制编码的长度. <br />
        <span className="text-[#001080]">度为m的哈夫曼树就是正则m叉树.</span> <br />
      </blockquote>

      <h3 className="text-2xl">并查集</h3>
      <p>
        通常使用树的双亲表示法(数组顺序存储). 初始化时每个元素自成一个单元素集合, 每个集合用一棵树表示, 所有表示集合的树构成表示全集合的森林.
        要得到两个集合的并集, 只需让其中一个集合的根结点指向另一个集合的根结点. <br />
      </p>
      <p>
        并查集的实现: <br />
        {Img({src: "Images/408/DataStructure/并查集的实现.png", width: 630, align: "left", className: "m-0"})}
        (经过该优化的实现, 集合树的高度平均不超过O(a(n)), 最大不超过O(<Latex>{`$\\log_2n$`}</Latex>). 其中a(n)是一个增长极其缓慢的函数(通常<Latex>{`$\\le 4$`}</Latex>)) <br />
      </p>
      <blockquote>
        <span className="text-[#001080]">并查集可以检测图中的环路和图的连通性.</span> <br />
      </blockquote>

      <details open>
        <summary className="cursor-pointer w-fit font-bold text-lg">例题</summary>
        <div className="pl-6">
          {Img({src: "Images/408/DataStructure/Exercises/5_5_4to6.png", width: 700, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/5_5_9.png", width: 600, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/5_5_12.png", width: 650, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/5_5_16.png", width: 700, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/5_5_18.png", width: 700, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/5_5_21to22.png", width: 700, align: "left", className: "m-0 mt-1"})}
          答案: C B C C D <Space width={1} /> D A D B
          {Img({src: "Images/408/DataStructure/Exercises/5_5_03.png", width: 700, align: "left", className: "m-0 mt-1"})}
          答案:
          {Img({src: "Images/408/DataStructure/Exercises/Solve_5_5_03.png", width: 700, align: "left", className: "m-0"})}
        </div>
      </details>
    </div>
  )
}