import Latex from "react-latex-next"
import 'katex/dist/katex.min.css'; // 导入 KaTeX 样式
import Space from "@/components/Space";

function Img({ src, width, align, className }: { src: string, width?: number, align?: string, className?: string }) {
  if (align !== "left") align = "mx-auto"
  return (
    <img className={`${className} ${align} `} src={src} alt="image" width={width} />
  )
}

function Indent({ n = 2 }: { n?: number }) {
  return (
    <span style={{ display: 'inline-block', height: '1rem', width: `${n}rem` }} />
  )
}

export default function Chapter7() {
  return (
    <div className="prose daisy-prose p-6 max-w-[1300px]">
      <h2 className="text-3xl">查找</h2>
      <h3>基本概念</h3>
      <p>
        查找: 在数据集合中寻找满足某种条件的数据元素的过程. <br />
        查找表: 用于查找的数据结构, 由同一类型数据元素组成. 常见操作有查找元素、插入元素、删除元素. <br />
        静态查找表: 只涉及查找操作的查找表. <br />
        <strong>关键字: 数据元素中唯一标识该元素的数据项的值. </strong><br />
        平均查找长度(ASL): <Latex>{`$ASL=\\sum_{j=1}^{n}P_jC_j$, 其中$P_j$是查找第j个元素的概率, $C_j$是找到第j个元素所需的比较次数.`}</Latex><br />
      </p>
      <h3>顺序查找</h3>
      <p>
        顺序查找分为对一般的无序线性表的查找和关键字有序的线性表的查找. <br />
        一般线性表的顺序查找: <br />
        {Img({ src: "Images/408/DataStructure/顺序查找.png", width: 660, align: "left", className: "m-0 mb-1" })}
        其中, <Latex>{`当$P_j=\\frac{1}{n}$时, $ASL_{表中元素}=\\frac{n+1}{2},~ASL_{不在表中元素}=n+1$.`}</Latex>
        <div className="h-3" />
        有序线性表的顺序查找: <br />
        当发现第j个元素小于key, 第j+1个元素大于key时, 则第j个元素一定不在表中. <br />
        顺序表上的顺序查找判定树如图, <br />
        {Img({ src: "Images/408/DataStructure/顺序表上的顺序查找判定树.png", width: 600, align: "left", className: "m-0 mb-1" })}
        可知, <Latex>{`$ASL_{不在表中元素}=\\frac{1+2+\\cdots+n+n}{n+1}=\\frac{n}{2}+\\frac{n}{n+1}$`}</Latex>. (假设查找元素在各区间节点概率相同)
      </p>
      <h3>二分查找</h3>
      <p>
        {Img({ src: "Images/408/DataStructure/二分查找.png", width: 530, align: "left", className: "m-0 mb-1" })}
        二分查找过程的判定树如下, <br />
        {Img({ src: "Images/408/DataStructure/二分查找判定树.png", width: 560, align: "left", className: "m-0 mb-1" })}
        二分查找的判定树有ｎ个圆形的非叶子结点和ｎ＋１个方形的叶结点, 比较次数不会超过判定树的高度(方形结点不计入判定树高度). <br />
        显然，二分查找的判定树是一棵<strong>平衡二叉树</strong>, 且树的高度不超过<Latex>{`$\\lceil \\log_2(n+1) \\rceil$`}</Latex>, <strong>最大</strong>时间复杂度为<Latex>{`$O(log_2n)$`}</Latex>. <br />
        <Latex>{`$ASL=\\frac{1\\times 1+2\\times 2+\\cdots+h\\times 2^{h-1}}{n}=\\frac{n+1}{n}log_2(n+1)-1$`}</Latex>. <br />
        注意二分查找只适用于顺序存储的有序表.
      </p>
      <blockquote className="mb-3 mt-3">
        平衡二叉树只有最后两层可能不满, 其它层均填满. 二分查找的判定树的倒数第二层一定是满的, 只有最后一层可能不满; 且要保持所有分支结点的左右子树结点数量相同 或 左/右子树仅多一个结点. (多一结点的子树都在同一侧)
      </blockquote>
      <h3>分块查找(索引顺序查找)</h3>
      <p>
        将查找表分为若干子块, 块内元素无序, 块间元素有序(第k-1个块中最大关键字小于第k个块中最小关键字). 然后建立一个索引表, 索引表中每个元素含有各块的最大(或最小)关键字和块中第一个元素的地址, 索引表中元素按关键字有序排列. <br />
        分块查找的步骤: <br />
        1. 在索引表中使用顺序或二分查找确定块号. <br />
        2. 在块中使用顺序查找. <br />
        将长度为n的查找表均匀分为b块, 每块s个元素, 索引表和块中均使用顺序查找, 则在等概率情况下: <br />
        <Latex>{`$ASL=\\frac{b+1}{2}+\\frac{s+1}{2}=\\frac{n/s+1}{2}+\\frac{s+1}{2}=\\frac{s^2+2s+n}{2s}$`}</Latex>, 取 <Latex>{`$s=\\sqrt{n}$ 时有最小值 $ASL=\\sqrt{n}+1$`}</Latex>. (证明: 均值不等式)
      </p>
      <h3 className="text-2xl">树形查找</h3>
      <p>
        <div className="text-xl font-bold">二叉排序树</div>
        二叉排序树的构造和查找: <br />
        {Img({ src: "Images/408/DataStructure/BST.png", width: 600, align: "left", className: "m-0 mb-1" })}
        二叉排序树删除结点分三种情况: <br />
        ① 若被删除结点z为叶结点, 则直接删除, 不会破坏二叉排序树的性质. <br />
        ② 若结点z只有一棵左子树或右子树, 则让z的子树成为其父结点的子树, 替代z的位置. <br />
        ③ 若结点z有左、右两棵子树, 则令z的直接后继(或直接前驱)替代z, 然后从二叉排序树中删除该直接后继(或直接前驱), 这样就转换成了第①或第②种情况. (显然结点的直接前驱或直接后继不会是第③种情况的结点)<br />
        <blockquote className="mb-3 mt-3">
          插入顺序不同, 得到的二叉排序树一般不同. <br />
          删除某结点再重新插入该节点, 若删除的不是叶子结点则得到的二叉排序树和原来不同. <br />
          二叉排序树的插入和删除操作的时间复杂度为<Latex>{`$~O(log_2n)$`}</Latex>, 适合作为动态查找表; 二分查找的对象是有序顺序表, 插入和删操作的时间复杂度为<Latex>{`$~O(n)$`}</Latex>, 只适合作为静态查找表. (二分查找判定树唯一, 查找一般平均比二叉排序树快一点)<br />
        </blockquote>
        <div className="pl-2 border-l-[6px] border-l-amber-200 w-[1500px] font-bold">
          二叉树终极定理(自己总结): <br />
          <Latex>{`二叉查找树确定(二叉树确定)$~\\Leftrightarrow~$二叉树的形态+中序序列确定$~\\Leftrightarrow~$二叉树的形态+每个结点的值确定$~\\Leftrightarrow~$二叉树中序序列+先/后/层序序列确定`}</Latex>. <br />
          将二叉树中任一结点z的左子树上结点视为结点z出栈前入栈的结点, 将结点z的右子树结点视为结点z出栈后入栈的结点, 将二叉树的中序序列视为结点入栈序列, 则二叉树的一个先序序列即为一个出栈序列, 对应一个二叉查找树(一种二叉树的形态), 同时也对应一个后序/层序序列. <br />
          于是, n个结点构成的二叉查找树(二叉树的形态)有<Latex>{`$~\\frac{1}{n+1}C_{2n}^{n}$(卡特兰数)$~$`}</Latex>种, 中序序列确定时对应不同的先/后/层序序列同样有<Latex>{`$~\\frac{1}{n+1}C_{2n}^{n}~$`}</Latex>种.
        </div>
      </p>
      <p>
        <div className="text-xl font-bold">平衡二叉树(AVL树)</div>
        为了避免树的高度增长过快而影响二叉排序树性能, 规定插入和删除结点时保证任意结点的左、右子树高度差不超过1, 这样的二叉排序树称为平衡二叉树. <br />
        <div className="h-3"/>
        平衡二叉树的插入: {`在二叉排序树中插入(或删除)一个结点时，首先检查其插入路径上的结点是否因此次操作而导致不平衡. 若导致了不平衡，则找到插入路径上离插入结点最近的平衡因子绝对值大于１的结点Ａ，再对以Ａ为根的子树(最小不平衡子树)，
          在保持二叉排序树特性的前提下，调整各结点的位置关系，使之重新达到平衡.`} <br />
        <div className="h-3"/>
        四种调节操作: <br />
        {Img({ src: "Images/408/DataStructure/LL平衡旋转.png", width: 600, align: "left", className: "m-0 mb-1" })}
        {Img({ src: "Images/408/DataStructure/RR平衡旋转.png", width: 600, align: "left", className: "m-0 mb-1" })}
        {Img({ src: "Images/408/DataStructure/LR平衡旋转.png", width: 600, align: "left", className: "m-0 mb-1" })}
        {Img({ src: "Images/408/DataStructure/RL平衡旋转.png", width: 600, align: "left", className: "m-0 mb-1" })}
        <blockquote className="mb-1 mt-1">注: LR和RL旋转时, 新节点究竟是插入C的左子树还是C的右子树不影响旋转过程, 因为其目的是转化为LL/RR的情况. </blockquote>
        <div className="h-3"/>
        平衡二叉树的删除: <br />
        ① 用二叉排序树的删除操作删除结点w. <br />
        ② 从结点w向上回溯, 尝试找到第一个不平衡的结点z(最小不平衡子树), 对以z为根的子树进行平衡调节. <br />
        ③ 若调节后以z为根的子树高度减少1, 则继续向上回溯尝试找到其第一个不平衡的祖先结点(最多可回溯到根节点). <br />
        <div className="h-3"/>
        平衡二叉树的查找: <br />
        在平衡二叉树上的查找与二叉排序树相同, 进行关键字的比较次数不超过树的高度. <br />
        以<Latex>{`$~n_h~$表示深度为$~h~$的平衡二叉树中含有的最少结点数, 显然$~n_1=1, n_2=2$, 且$~n_h=n_{h-2}+n_{h-1}+1$, 从而可以推出后续项最少结点数. ($n_3=4, n_4=7, n_5=12 ~\\cdots$)`}</Latex>
        <blockquote className="mb-2 mt-2">按关键字有序的顺序插入初始为空的平衡二叉树时, 若关键字个数<Latex>{`$~n=2^k-1~$`}</Latex>, 则得到的平衡二叉树一定是一棵满二叉树.</blockquote>
      </p>
      <p>
        <div className="text-xl font-bold">红黑树</div>
        AVL树保持平衡会非常频繁地调整全树整体拓扑结构, 开销较大, 红黑树在AVL树的基础上放宽了条件. <br />
        <div className="h-3"/>
        一棵红黑树是满足以下红黑性质的二叉排序树: <br />
        ① 每个结点不是红色就是黑色的. <br />
        ② 根结点是黑色的. <br />
        ③ 叶结点(NULL结点)是黑色的. <br />
        ④ 不存在两个相邻的红色结点(即红色结点的父结点和孩子结点均是黑色的). <br />
        ⑤ 对每个结点, 从该结点到任意一个叶结点的简单路径上所含黑色结点的数量相同(黑高bh). <br />
        <div className="h-3"/>
        红黑树重要结论: <br />
        ① 从根到叶子结点的最长路径不大于最短路径的两倍. (路径最短时全部由黑色节点构成, 路径最长时为黑色节点和红色节点相间构成) <br />
        ② 有n个内部节点的红黑树的高度<Latex>{`$~h\\le 2log_2(n+1)$`}</Latex>. (由于红黑树的黑高<Latex>{`$~bh\\ge h/2$, 于是有: $n\\ge 2^{h/2}-1$`}</Latex>) <br />
        ③ 新插入红黑树中的结点为红色. (如果新插入结点为黑色则此结点所在路径比其他路径多一个黑色节点, 调整较为麻烦) <br />
        <div className="h-3"/>
        红黑树的插入: <br />
        ① 用二叉排序树插入操作插入结点z, 并将其标记为红色, 若结点z的父结点为黑色, 则无需调整结束. <br />
        ② 若结点z为根节点, 则将z标记为黑色, 结束.(树的bh增加1) <br />
        ③ 若结点z不是根节点且z的父节点z.p为红色, 则z.p.p必然存在且为黑色, 此时分三种情况: <br />
        <div className="pl-[1.6rem]">
          情况1和情况2: <br /> 
          {Img({ src: "Images/408/DataStructure/红黑树插入情况12.png", width: 700, align: "left", className: "m-0 mb-1" })}
          情况3: <br />
          {Img({ src: "Images/408/DataStructure/红黑树插入情况3.png", width: 750, align: "left", className: "m-0 mb-1" })}
          情况3中z.p和z.p的兄弟节点y都为红色, 将z.p和y着为黑色、z.p.p着为红色, 然后把z.p.p作为新节点z重复第②步或第③步. <br />
        </div>
        <div className="h-3"/>
        红黑树的删除: <br />
        删除操作也是先执行二叉排序树的删除操作, 总体只有两种情况: 1)待删节点只有右子树或左子树; 2)待删节点没有孩子节点. <br />
        ① 若待删结点只有右子树或左子树, 则待删结点一定为黑色结点, 且子树一定只有一个红色结点. <br />
        ② 若待删结点没有孩子节点, 且该结点为红色, 则直接删除该结点结束. <br />
        ③ 若待删结点没有孩子节点, 且该节点为黑色, 则用NULL结点x取代该结点同时着二重黑色, 然后进行进一步调整(了解). <br />
        <blockquote className="mb-2 mt-2">
          红黑树中以黑分支结点为根的子树也为红黑树. <br />
        </blockquote>
      </p>
      <p>
        <div className="text-xl font-bold">B树</div> 
        <Latex>{`$m$`}</Latex>阶B树是所有结点的平衡因子均等于0的<Latex>{`$m$`}</Latex>路平衡二叉查找树. <br />
        <div className="h-3"/>
        一棵<Latex>{`$m$`}</Latex>阶B树或为空树, 或满足下列条件: <br /> 
        ① 树中每个节点至多有<Latex>{`$m$`}</Latex>棵子树, <Latex>{`$m-1$`}</Latex>个关键字. <br />
        ② 根结点不是叶结点, 则至少有2棵子树, 即至少有1个关键字.<br />
        ③ 根结点外的所有非叶结点至少有<Latex>{`$~\\lceil\\frac{m}{2}\\rceil~$`}</Latex>棵子树，即至少有<Latex>{`$~\\lceil\\frac{m}{2}\\rceil-1~$`}</Latex>个关键字.<br />
        ④ 所有非叶子结点结构: <br />
          <div className="pl-[1.6rem]">
            {Img({ src: "Images/408/DataStructure/B树结点结构.png", width: 600, align: "left", className: "m-0 mb-1" })}
            其中<Latex>{`$~K_j (j=1, 2, \\cdots, n)~$`}</Latex>为结点关键字, 且满足<Latex>{`$~K_1<K_2\\cdots <K_n$`}</Latex>. <Latex>{`$~P_j~$`}</Latex>为指向子树根结点的指针, 
            且指针<Latex>{`$~P_{j-1}~$`}</Latex>所指子树中所有结点的关键字均小于<Latex>{`$~K_j$`}</Latex>, 指针<Latex>{`$~P_j~$`}</Latex>所指子树中所有结点的关键字均大于<Latex>{`$~K_j$`}</Latex>. 
            结点中的关键字个数为<Latex>{`$~n(\\lceil\\frac{m}{2}\\rceil-1\\le n \\le m-1)~$`}</Latex>.<br />
          </div>
        ⑤ 所有叶子结点都出现在同一层, 叶子结点不带信息, 实际上为虚拟结点(NULL). <br />
        <div className="h-3"/>
        B树的查找: <br />
        从头结点开始, 在结点中查找关键字, 若命中则返回, 否则根据关键字范围找到对应指针指向的结点向下查找, 直到命中关键字或指针为空. 在下一节点中查找前需先将下一结点从磁盘取到内存中, 从磁盘读取的次数即目标结点在B树上的层次数, 层次数决定了查找效率. <br />
        <div className="h-3"/>
        B树的高度与关键字个数的关系(磁盘存取次数): <br />
        <Latex>{`B树中每个结点最多有$m$棵子树, $m-1$个关键字, 所以在一棵高度为$h$的$m$阶B树中关键字的个数应满足: $\\\\~n\\le (m-1)(1+m+m^2+\\cdots +m^{h-1})=m^h-1$`}</Latex>. 于是<Latex>{`$~h\\ge log_m(n+1)$`}</Latex>. <br />
        <Latex>{`B树第一层至少有1个结点, 第二层至少有2个结点; 除根节点外每个节点至少有$\\lceil\\frac{m}{2}\\rceil$棵子树, 所以第三层至少有$2\\lceil\\frac{m}{2}\\rceil$个结点$~\\cdots~$第h+1层至少有$2\\lceil\\frac{m}{2}\\rceil^{h-1}$个结点. `}</Latex>
        <Latex>{`而第$h+1$层为叶子结点, 对于含有$n$个关键字的B树, 叶子结点个数为$n+1$. 于是$~n+1\\ge 2(\\lceil\\frac{m}{2}\\rceil)^{h-1}$, 即$~h\\le log_{\\lceil\\frac{m}{2}\\rceil}\\frac{n+1}{2}+1.$`}</Latex> <br />
        <div className="h-3"/>
        B树插入关键字: <br />
        <div className="pl-[0.6rem] ml-1 border-l-[3px] border-amber-200 w-[1390px]">
        使用B树的查找算法找到待插入位置(会在最底层的非叶节点(终端结点)中找到一个空指针), 若结点插入新的关键字后对应结点关键字个数大于<Latex>{`$m-1$`}</Latex>, 则分裂此节点. <br />
        分裂结点方法: 从中间位置<Latex>{`$\\lceil\\frac{m}{2}\\rceil$`}</Latex>处将关键字分成两部分, 左部分关键字保留在原结点中, 右部分关键字移至新结点中, 
        <Latex>{` $\\lceil\\frac{m}{2}\\rceil$`}</Latex>处关键字插入父节点中指向原结点的指针后, 同时在其后新增一个指针指向新节点. 若此时此父结点中的关键字个数也大于<Latex>{`$m-1$`}</Latex>, 则继续分裂父结点, 
        此过程可向上传至根节点, 若根节点也需进行分裂操作则产生一个新的根节点, 同时B树高度增加1. <br />
        </div>
        <div className="h-3"/>
        B树删除关键字: <br />
        <div className="pl-[0.6rem] ml-1 border-l-[3px] border-amber-200 w-[1390px] ">
          1. 若被删关键字k不在终端结点中, 则用k的前驱(k的左侧子树中"最右下"关键字)或k的后继(k的右侧子树中"最左下"关键字)k'代替k, 然后在相应结点中删除关键字k'. 此时转化为被删关键字在终端结点中的情况. <br />
          2. 若被删关键字k在终端结点中, 此时有三种情况: <br />
          <div className="pl-[1.8rem]">
            ① 被删关键字所在结点关键字个数<Latex>{`$~\\ge \\lceil\\frac{m}{2}\\rceil$`}</Latex>, 则删除该关键字即可, 删除后该结点仍满足B树的要求. <br />
            ② 被删关键字所在结点关键字个数<Latex>{`$~= \\lceil\\frac{m}{2}\\rceil-1$`}</Latex>, 若其左(右)兄弟节点中关键字个数<Latex>{`$~\\ge \\lceil\\frac{m}{2}\\rceil$`}</Latex>, 则删除此关键字同时将父结点中指向该结点的指针的左(右)侧关键字移至该结点, 
            然后将左(右)兄弟结点中最右(左)关键字移至父节点原关键字处. <br />
            ③ 被删关键字所在结点关键字个数<Latex>{`$~= \\lceil\\frac{m}{2}\\rceil-1$`}</Latex>, 且其左右兄弟节点中关键字个数都<Latex>{`$~= \\lceil\\frac{m}{2}\\rceil-1$`}</Latex>, 
            则将关键字删除后, 将被删结点所在结点与左(或右)兄弟结点及其父结点中指向这两个节点的指针所夹关键字合并成一个新的子结点. 合并后父结点关键字个数减1, 此时父结点不能再像情况1一样找前驱或后继关键字代替(注意合并子节点和仅删除关键字的区别), 
            而是将被合并的关键字当做被删除的关键字再次进行情况2的操作. 若只有一个关键字的根节点中关键字被合并, 则合并形成的新结点自然成为新的根节点. <br />
          </div>
        </div>
        </p>
        <p>
          <div className="text-xl font-bold">B+树</div> 
          B+树应满足下列条件: <br />
          ① 每个分支结点最多有<Latex>{`$m$`}</Latex>棵子树; 非叶根结点至少有2棵子树, 其他每个分支结点至少有<Latex>{`$\\lceil\\frac{m}{2}\\rceil$`}</Latex>棵子树. <br />
          ② 结点由索引项组成, 每个索引项包含一个关键字及指向其子树根结点的指针(结点的子树个数和关键字个数相等), 分支结点的关键字是其对应子树中最大关键字的副本, 叶结点的关键字对应一条实际数据记录. <br />
          ③ 所有叶结点包含全部关键字及指向相应记录的指针，叶结点和分支结点中都将关键字按大小顺序排列，并且相邻叶结点按大小顺序相互链接起来(支持顺序查找). <br />
          <blockquote className="mt-3 mb-3">
            B+树的非叶节点每个索引项不含对应记录的存储地址, 结点占用空间更小, 这样一个磁盘块可以容纳更多关键字, 磁盘存取次数也就更少, 所以B+树的查询效率更高. <br />
            B+树有两个头指针, 一个指向根节点, 一个指向关键字最小的叶节点, 因此B+树支持按关键字大小的顺序查找和从根节点开始的多路查找两种查找方式. <br />
            B+树的插入删除操作和B树基本类似, 只是查找过程中非叶节点上关键字等于目标值时不终止, 而是继续向下查找, 直到到达对应叶节点. (每次查找路径都是一条从根节点到叶节点的路径) <br />
          </blockquote>
      </p>
    </div>
  )
}