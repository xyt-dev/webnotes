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

        <h3 className="text-2xl">二叉树遍历与线索二叉树</h3>
        <p>
          二叉树遍历: 前序遍历(NLR), 中序遍历(LNR), 后序遍历(LRN). <br />
          以上三种遍历算法递归遍历左、右子树顺序相同, 只是访问根节点顺序不同, 每个结点都只访问一次, 时间复杂度均为O(n). <br />
          <span className="text-[1.05rem] text-[#005cc5]">[方法]</span>快速写出遍历序列: 画出二叉树链式结构图, 从根节点左侧开始, 用曲线逆时针围绕二叉树结构图外侧描线(至根节点右侧), 曲线分别经过各结点左侧、下侧、右侧;
            先序遍历时经过结点左侧时输出结点信息, 中序遍历时经过结点下侧时输出结点信息, 后序遍历时经过结点右侧时输出结点信息. <br />
          遍历算法描述: <br />
          {Img({src: "Images/408/DataStructure/遍历二叉树.png", width: 560, align: "left", className: "m-0 mb-1"})}
          <span className="text-[1.05rem] text-[#005cc5]">注: </span>
          按后序非递归遍历二叉树, 访问一个结点p时, 栈中的结点恰好是结点p的所有祖先结点序列.
        </p>
        <p>
          中序遍历序列 + 先序|后序|层序遍历序列 可以唯一确定(构造)一棵二叉树. <br />
          先序|后序|层序遍历序列都能确定第一个根节点, 但后续结点位于左子树还是右子树都要结合中序遍历序列才能确定. <br />
        </p>          
        <p>
          线索二叉树: 含n个结点的二叉树中, 有n+1个空指针域, 利用这些空指针域来存放指向其前驱或后继, 这样就能想遍历单链表一样方便的遍历二叉树.
          二叉树结点结构如下: <br />
          {Img({src: "Images/408/DataStructure/线索二叉树结构.png", width: 400, align: "left", className: "m-0 mb-1"})}
          以中序遍历为例, 构造线索二叉树算法如下: <br />
          {Img({src: "Images/408/DataStructure/中序遍历构造线索二叉树.png", width: 600, align: "left", className: "m-0 mb-1"})}
        </p>
           
      </details>
    </div>
  )
}