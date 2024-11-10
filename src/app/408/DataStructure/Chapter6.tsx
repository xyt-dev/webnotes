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

export default function Chapter6() {
  return (
    <div className="prose daisy-prose p-6 max-w-[1300px]">
      <h2 className="text-3xl">图</h2>
      <h3 className="text-2xl">基本概念</h3>
      <p className="leading-normal">
        有向图(弧)、无向图(边). <strong>[图的顶点集合不为空]</strong> <br />
        <div className="h-2" />
        简单图: 不存在重复边、不存在自环. <strong>(否则为多重图, 以下只讨论简单图)</strong> <br />
        <div className="h-2" />
        完全图: 又称简单完全图. <Latex>{`$|E|=\\frac{n(n-1)}{2}$`}</Latex> 的无向图称为完全图; <Latex>{`$|E|=n(n-1)$`}</Latex> 的有向图称为有向完全图. 完全图的任意两顶点间都存在一条边, 有向完全图的任意两顶点间都存在方向相反的两条弧. <br />
        <div className="h-2" />
        子图: 设有两个图G=(V,E)和G'=(V',E'), 其中V'是V的子集, E'是E的子集, 称G'为G的子图. 若满足 V(G')=V(G), 则称G'为G的生成子图.(不是V和E的任何子集都能构成子图, 因为E'中可能存在边的顶点不在V'中)<br />
        <div className="h-2" />
        连通、连通图、极大连通子图(连通分量): <strong>无向图</strong>中两个顶点间存在<strong>路径(顶点序列(序列中相邻的两顶点间有边连接))</strong>, 则称两顶点连通; 若图中任意两个顶点都连通则称此图为连通图; 包含尽可能多的顶点和边的连通子图称为极大连通子图, 也称为连通分量. <br />
        <div className="h-2" />
        强连通、强连通图、极大强连通子图(强连通分量): <strong>有向图</strong>中两个顶点间存在相互到达对方的路径(两个起点和终点位置相反的顶点序列), 则称两顶点强连通; 若图中任意两个顶点都强连通则称此图为强连通图; 包含尽可能多的顶点和弧的强连通子图称为极大强连通子图, 也称为强连通分量. <br />
        <blockquote className="mt-3 mb-3">强连通图中任意两个顶点都存在与同一环路中. <br /></blockquote>
        <div className="h-2" />
        极小(强)连通子图: 包含一个连通图所有顶点但只包含(强)连通这些顶点的尽可能少的边 的(强)连通子图称为极小(强)连通子图. 对于极小(强)连通子图, 减少任意一条边则会变为非连通图, 加上任意一条边则会形成一个回路(起点和终点相同的路径). 
        <br />(极大(强)连通子图唯一, 极小(强)连通子图可能不唯一) <br />
        <blockquote className="mt-3 mb-3">
          对于含n个顶点的无向图F: 若 E(F) &lt; n-1 则一定不是连通图; 若 E(F) &gt; n-1 则 F 中一定有环路; 若 E(F) &ge; <Latex>{`$\\frac{(n-1)(n-2)}{2}+1$`}</Latex> 则一定为连通图. <br />
        </blockquote>
        生成树、生成森林(对于无向图): 只有连通图才能有生成树. <strong>连通图的生成树 = 连通图的极小连通子图</strong>(若连通图的顶点数为n, 其生成树有且只有n-1条边); 图的所有连通分量的生成树构成图的生成森林.(若图的顶点数为n, 有k个连通分量, 则其生成森林含有n-k条边) <br />
        <blockquote className="mt-3 mb-3">
          非连通情况下边最多的情况: 由n-1个顶点构成一个完全图, 此时再加入一个顶点变成非连通图; 若非连通图中有|E|条边, 令 <Latex>{`$\\frac{n(n-1)}{2}=|E|$`}</Latex>, 则此非连通图至少有 <Latex>{`$\\lceil n\\rceil + 1$`}</Latex> 个顶点. <br />
          <div className="h-2" />
          有向图强连通情况下边最少的情况: 由n条弧构成构成一个环路. <br />
        </blockquote>
        无向图中顶点的度: 连接于顶点的边数, 记为TD(v). 无向图中顶点的度之和=2|E| (每条边连接两个顶点).(无向图中顶点的入度=出度)<br />
        <div className="h-2" />
        有向图中顶点的度: 分为入度和出度, 以顶点为终点/起点的弧数, 记为ID(v)和OD(v), TD(v)=ID(v)+OD(v). 有向图中所有入度之和=所有出度之和=|E|. (每条弧都以一个顶点为起点同时以另一个顶点为终点)<br />
        <div className="h-2" />
        带权图(网): 每条边(弧)都有权值.
        <div className="h-2" />
        稠密图、稀疏图: 边数很少的图称为稀疏图, 一般满足 |E| &lt; |V|log|V|; 反之称为稠密图. <br />
        <div className="h-2" />
        简单路径、简单回路: 顶点不重复出现的路径称为简单路径; 除第一个和最后一个顶点外，其余顶点不重复出现的回路称为简单回路.
        <div className="h-2" />
        距离: 两个顶点间的最短路径长度. (若两个顶点间不存在路径, 则记距离为<Latex>{`$\\infty$`}</Latex>)
        <div className="h-2" />
        有向树: 一个顶点的入度为0, 其余顶点的入度均为1的有向图称为有向树. <br />
        <div className="h-2" />
        图的遍历: 从图中的某一顶点出发, 访问图中所有顶点, 且每个顶点<strong>只访问一次</strong>. <br />
        <blockquote>
          图和树的区别是逻辑上的.
        </blockquote>
      </p>
      <details open>
        <summary className="cursor-pointer w-fit font-bold text-lg">例题</summary>
        <div className="pl-6">
          {Img({src: "Images/408/DataStructure/Exercises/6_1_2.png", width: 650, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/6_1_4.png", width: 680, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/6_1_6to11.png", width: 730, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/6_1_12.png", width: 560, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/6_1_13to15.png", width: 680, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/6_1_18.png", width: 730, align: "left", className: "m-0 mt-1"})}
          答案: D C C A D <Space width={1} /> D D D C B <Space width={1} /> B C B
        </div>
      </details>

      <h3 className="text-2xl">图的存储</h3>
      <p>
        <span className="text-lg">邻接矩阵法</span>
        {Img({src: "Images/408/DataStructure/邻接矩阵结构.png", width: 500, align: "left", className: "m-0 mt-1"})}
        (在简单应用中, 顶点信息等均可忽略, 可直接用二维数组作为图的邻接矩阵) <br />
        (如果EdgeType表示边是否存在, 使用1表示存在0表示不存在; 如果EdgeType表示边的权值, 一般用<Latex>{`$\\infty$`}</Latex>表示边不存在) <br />
        <div className="h-2" />
        邻接矩阵空间复杂度为O(|V|^2), 适合存放稠密图. <br />
        无向图的邻接矩阵一定是对称矩阵, 可以使用压缩存储存放上(或下)三角矩阵. 其第j行(或第j列)中非零元素个数是顶点j的度. <br />
        有向图第j行中非零且非<Latex>{`$\\infty$`}</Latex>元素个数是顶点j的出度, 第j列中非零且非<Latex>{`$\\infty$`}</Latex>元素个数是顶点j的入度. 所以遍历顶点所有边需要O(|V|). <br />
        邻接矩阵查找两个顶点的边, 时间复杂度为O(1), 适合查找操作; 遍历图中每条边需要遍历整个矩阵, 时间复杂度为O(|V|^2), 不适合遍历操作. <br />
        <blockquote className="mt-3 mb-3 text-[#001080] border-l-blue-700">
          <Latex>{`$A^n[j][k]$`}</Latex>是顶点j到顶点k长度为n的路径数目. <br />
          <div className="h-2" />
          若邻接矩阵对角线及其以下(或以上)的元素全为0, 则图中一定不存在环路, 拓扑序列一定存在. <br />
        </blockquote>
      </p>
      <p>
        <span className="text-lg">邻接表法</span>
        {Img({src: "Images/408/DataStructure/邻接表结构.png", width: 500, align: "left", className: "m-0 mt-1"})}
        (顶点表存放所有顶点信息, 使用顺序存储; 边表存放一个顶点连接的所有边的信息, 使用链式存储) <br />
        (邻接表表示不唯一, 即同一顶点的各边结点链接次序任意)
        <div className="h-2" />
        G为无向图, 则所需的存储空间为O(|V|+2|E|)(每条边在邻接表中对称出现两次); G为有向图, 则所需的存储空间为O(|V|+|E|). 适合存放稀疏图. <br />
        邻接表遍历图中每条边需要O(|V|+|E|)或O(|V|+2|E|), 一般比邻接矩阵快, 更适合遍历操作. 查找两个顶点的边所需时间最大为O(|V|), 不适合查找操作. <br />
        对于有向图, 邻接表遍历一个顶点的出度只需要遍历其边表, 时间复杂度最大为O(|V|) (无向图同理); 而遍历一个顶点的入度需要遍历整个邻接表, 时间复杂度为O(|V|+|E|). 
        <span className="mt-2 mb-3 text-[#001080] border-l-blue-700 italic"> (删出边O(|V|), 删入边O(|V|+|E|))</span>
      </p>
      <p>
        <span className="text-lg">十字链表法</span> <br />
        为了能够同时快速找到有向图顶点的出边和入边, 可使用十字链表法存储有向图. <br />
        有向图的每个顶点和每条弧分别用一个顶点结点和一个弧结点来表示: 
        {Img({src: "Images/408/DataStructure/十字链表结点结构.png", width: 700, align: "left", className: "m-0"})}
        tailvex: 弧尾编号; headvex: 弧头编号; hlink: 指向弧头相同的下一个结点; <br />tlink: 指向弧尾相同的下一个结点; info: 弧的相关信息. <br />
        data: 顶点相关信息; firstin: 指向以该顶点为弧头的第一个节点; firstout: 指向以该顶点为弧尾的第一个结点. <br />
        <div className="h-2" />
        其中各顶点结点使用顺序存储, 各弧结点使用链式存储. 插入弧结点时, 根据弧结点的 tailvex 和 headvex 分别找到其弧尾所在顶点结点和弧头所在顶点结点, 然后同时将该弧结点插入(头插法) tailvex 结点的 firstout 链表和 headvex 结点的 firstin 链表. <br />
        十字链表结构示例:
        {Img({src: "Images/408/DataStructure/十字链表结构.png", width: 700, align: "left", className: "m-0"})}
        可知: 图中同一行弧结点弧尾相同(同一顶点出边), 同一列弧结点弧头相同(同一顶点入边). <br />
        有向图的十字链表表示不唯一, 但如果令同一行弧结点按<Latex>{`$headvex$`}</Latex>的顺序排列, 则弧结点<Latex>{`($m$行, $n$列)是从顶点$V_m$指向顶点$V_n$的弧结点.`}</Latex> <br />
      </p>
      <p>
        <span className="text-lg">邻接多重表法</span> <br />
        使用邻接表存放无向图时, 插入和删除边等操作都需要操作两个链表. 为了让一条边只需存放于一个结点中, 可使用邻接多重表法. <br />
        其中每个顶点和每条边分别用一个顶点结点和一个边结点来表示 
        {Img({src: "Images/408/DataStructure/邻接多重表顶点结点结构.png", width: 400, align: "left", className: "m-0"})}
        data: 顶点相关信息; firstedge: 指向第一条依附于该顶点的边结点.
        {Img({src: "Images/408/DataStructure/邻接多重表边结点结构.png", width: 620, align: "left", className: "m-0"})}
        ivex/jvex: 该边连接的两个顶点编号; info: 边的相关信息. <br />
        ilink: 指向下一条依附于顶点ivex的边结点; jlink: 指向下一条依附于顶点jvex的边结点. <br />
        <div className="h-2" />
        与十字链表法类似, 邻接多重表中各顶点结点使用顺序存储, 各边结点使用链式存储. 插入边结点时, 根据边结点的 ivex 和 jvex 找到其连接的两个顶点结点, 然后同时将该边结点插入(头插法) ivex 结点的 firstedge 链表和 jvex 结点的 firstedge 链表. <br />
      </p>
      <p>
        <div className="h-2" />
        {Img({src: "Images/408/DataStructure/图的四种存储方式总结.png", width: 900, align: "left", className: "m-0"})}
      </p>
      <details open>
        <summary className="cursor-pointer w-fit font-bold text-lg">例题</summary>
        <div className="pl-6">
          {Img({src: "Images/408/DataStructure/Exercises/6_2_1to2.png", width: 720, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/6_2_11to12.png", width: 650, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/6_2_14.png", width: 720, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/6_2_18.png", width: 650, align: "left", className: "m-0 mt-1"})}
          答案: B C C B C C
          <hr className="m-3 ml-[-6px]" />
          {Img({src: "Images/408/DataStructure/Exercises/6_2_05.png", width: 460, align: "left", className: "m-0 mt-1"})}
          答案: 
          {Img({src: "Images/408/DataStructure/Exercises/Solve_6_2_05.png", width: 700, align: "left", className: "m-0 mt-1"})}
          <hr className="m-3 ml-[-6px]" />
          {Img({src: "Images/408/DataStructure/Exercises/6_2_07.png", width: 700, align: "left", className: "m-0 mt-1"})}
          答案: 
          {Img({src: "Images/408/DataStructure/Exercises/Solve_6_2_07.png", width: 700, align: "left", className: "m-0 mt-1"})}
        </div>
      </details>

      <h3 className="text-2xl">图的遍历</h3>
      <p>
        广度优先遍历: <br />
        {Img({src: "Images/408/DataStructure/图的BFS算法.png", width: 700, align: "left", className: "m-0"})}
        <blockquote className="mt-3 mb-3">简述BFS过程: 入队第一个顶点同时访问; 顶点出队同时查找其邻接顶点, 所有邻接顶点入队同时被访问.</blockquote>
        <strong>最大空间复杂度为(O|V|); <br />
        采用邻接表存储时, 每个顶点至少入队一次, 每条边至少访问一次, 总时间复杂度为O(|V|+|E|); <br />
        采用邻接矩阵存储时, 每个顶点至少入队一次, 查找每个顶点的邻接点都要遍历邻接矩阵的一行O(|V|), 总时间复杂度为<Latex>{`$O(|V|^2)$`}</Latex>. <br /></strong>
        <div className="h-2" />
        BFS计算单源最短路径长度: <br />
        {Img({src: "Images/408/DataStructure/BFS单源最短路径长度.png", width: 760, align: "left", className: "m-0 mb-1"})}
        <blockquote className="mt-3 mb-3">BFS只适合求边权值相等的图的单源最短路径长度(经过最少边数).</blockquote>
        <div className="h-2" />
        广度优先生成树: <br />
        在广度遍历的过程中, 会得到一棵遍历树/森林, 称为广度优先生成树/广度优先生成森林. 需要注意的是, 同一个图的邻接矩阵存储表示是唯一的, 所以其广度优先生成树也是唯一的; 但邻接表的存储表示不唯一, 其广度优先生成树不唯一.
      </p>
      <p>
        深度优先遍历: <br />
        {Img({src: "Images/408/DataStructure/图的DFS算法.png", width: 700, align: "left", className: "m-0"})}
        深度优先遍历的<strong>空间和时间复杂度都与广度优先遍历相同</strong>, 只有对顶点的访问顺序不同. 深度优先遍历同样会得到深度优先生成树/生成森林, 且为先根遍历. (基于邻接表的生成树/生成森林同样不唯一) <br />
      </p>
      <blockquote className="mt-3 mb-3">对于连通的非强连通有向图, 一次遍历不一定能访问所有顶点(甚至一次遍历不可能访问到所有顶点). </blockquote>
      <p className="text-[#001080]"> 
        <span className="text-lg">判断环路:</span>
        <div className="h-2"/>
        对于存在环的一个连通无向图(一个连通分量), 从任意顶点出发, 一定能在DFS算法的一次搜索过程中检测到环. 注意要特别排除一条路径中下一个顶点指向上一个顶点的情况, 因为无向图中相邻顶点本来就相当于有向图的一个环. (BFS不方便判断第二次遇到的顶点是否为同一条路径中的上一个顶点) <br />
        <div className="h-2"/>
        对于不存在环的一个有向图, DFS的一次搜索过程中仍可以遇到访问过的顶点(汇聚点). <br /> 
        除了visited数组外, 再用一个数组(栈)来记录同一条搜索路径中的前缀顶点; 如果从任意顶点v出发二次遇到同一条搜索路径中的顶点(已访问且未出栈的顶点), 则说明存在环路. <br />
        可以证明, 对于一个有向图, 可以通过一次DFS算法(可以包含n次深度优先搜索过程)判断其是否存在环路. <br />
      </p>
      <details open>
        <summary className="cursor-pointer w-fit font-bold text-lg">例题</summary>
        <div className="pl-6">
          {Img({src: "Images/408/DataStructure/Exercises/6_3_2.png", width: 700, align: "left", className: "m-0 mt-1"})}
          说法正确的是: 第三句.
          <hr className="m-3 ml-[-6px]" />
          {Img({src: "Images/408/DataStructure/Exercises/6_3_4.png", width: 700, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/6_3_6.png", width: 700, align: "left", className: "m-0 mt-1"})}
          答案: C A C A A A
          <hr className="m-3 ml-[-6px]" />
          {Img({src: "Images/408/DataStructure/Exercises/6_3_10.png", width: 700, align: "left", className: "m-0 mt-1"})}
          {Img({src: "Images/408/DataStructure/Exercises/6_3_16to17.png", width: 700, align: "left", className: "m-0 mt-1"})}
          答案: A B D D
          <hr className="m-3 ml-[-6px]" />
          {Img({src: "Images/408/DataStructure/Exercises/6_3_12to14.png", width: 700, align: "left", className: "m-0 mt-1"})}
          答案: C B A
          <hr className="m-3 ml-[-6px]" />
          {Img({src: "Images/408/DataStructure/Exercises/6_3_02.png", width: 700, align: "left", className: "m-0 mt-1"})}
          答案:
          {Img({src: "Images/408/DataStructure/Exercises/Solve_6_3_02.png", width: 700, align: "left", className: "m-0 mt-1"})}
          <hr className="m-3 ml-[-6px]" />
          {Img({src: "Images/408/DataStructure/Exercises/6_3_03.png", width: 700, align: "left", className: "m-0 mt-1"})}
          答案:
          {Img({src: "Images/408/DataStructure/Exercises/Solve_6_3_03.png", width: 700, align: "left", className: "m-0 mt-1"})}
        </div>
      </details>

      <h3 className="text-2xl">图的应用</h3>
      <p>
        <span className="text-lg font-bold">最小生成树:</span> <br />
        <div className="h=2" />
        <span className="font-bold">Prim算法: </span> <br />
        {Img({src: "Images/408/DataStructure/Prim算法实现.png", width: 560, align: "left", className: "m-0"})}
        Prim算法的时间复杂度为<Latex>{`$O(|V|^2)$`}</Latex>, 不依赖于|E|所以适合边稠密图. 也可使用邻接表+优先队列(最小堆)(同时使用索引pos[]从而O(1)定位优先队列中对应顶点位置方便更新权值), 其时间复杂度为<Latex>{`$O(|E|log|V|)$`}</Latex>. 
          (Prim算法不需要使用并查集, 因为只需要维护一个集合, 集合元素使用数组记录即可)<br />
        <div className="h=2" />
        <span className="font-bold ">Kruskal算法: </span> <br />
        {Img({src: "Images/408/DataStructure/Kruskal算法实现.png", width: 600, align: "left", className: "m-0"})}
        Kruskal算法通常使用堆来存放边的集合, 时间复杂度为<Latex>{`$|E|log|E|$`}</Latex>, 适合边稀疏图. (算法可能同时维护有多个集合, 需要使用并查集, 判断两顶点是否属于同一集合平均时间复杂度近似O(1)) <br />
        <blockquote className="mt-3 mb-3">
          无向连通图一定有最小生成树, 最小生成树权值之和一定唯一. <br />
          最小生成树不唯一则无向连通图一定有权值相等的边; 无向连通图没有权值相等的边则最小生成树一定唯一. (无向连通图存在权值相等的边, 最小生成树<strong>不一定</strong>不唯一) 
        </blockquote>
      </p>
      <p>
        <span className="text-lg font-bold">最短路径:</span> <br />
        <span className="font-bold ">Dijkstra算法: </span> <br />
        思想: 最短路径长度最短前k个顶点一定不会由当前最短路径长度更长的顶点缩短(权值非负时到达非直接相连的顶点的距离一定更长), 而当前最短路径长度更长的顶点可能经这k个顶点缩短; 
          其时间复杂度为 <Latex>{`$O(|V|^2)$`}</Latex>.(求解从源点到某个特定顶点的最短距离时间复杂度也相同)
        <blockquote className="mt-1 mb-3">
          Prim算法适用于带权无向图(无向图才讨论生成树), Dijkstra算法适用于<strong>权值非负</strong>的带权有向或无向图.
        </blockquote>
        <span className="font-bold ">Floyd算法: </span> <br />
        {Img({src: "Images/408/DataStructure/Floyd算法思想.png", width: 700, align: "left", className: "m-0"})}
        (其中 <Latex>{`$A^{(k)}[i][j]$`}</Latex> 表示从顶点i到顶点j的中间顶点序号小于等于k的最短路径长度) <br />
        Floyd算法时间复杂度为<Latex>{`$O(|V|^3)$`}</Latex>, 适用于带权有向或无向图, 可以有负权边但不能有负权回路. <br />
        {Img({src: "Images/408/DataStructure/最短路径算法总结.png", width: 800, align: "left", className: "mt-3"})}
      </p>
      <p>
        <span className="text-lg font-bold">构建表达式的有向无环图(DAG):</span> <br />
         注意不要有重复的操作数顶点和子树.
      </p>
      <p>
        <span className="text-lg font-bold">AOV网与拓扑排序:</span> <br />
        AOV网: Activities On Vertex, 即顶点表示活动的网络, 是有向无环图(DAG). <br />
        拓扑排序过程: <br />
        1. 从AOV网中选择任意一个入度为0的顶点输出. <br />
        2. 从网中删除该顶点及其所有出边. <br />
        3. 重复步骤1、2直到AOV网为空或当前网中不存在入度为0的顶点. (后一种情况说明有向图中一定存在环路)<br />
        拓扑排序算法实现: <br />
        {Img({src: "Images/408/DataStructure/拓扑排序算法实现.png", width: 700, align: "left", className: "m-0"})}
        拓扑排序的时间复杂度: 采用邻接表时为<Latex>{`$O(|V|+|E|)$`}</Latex>, 采用邻接矩阵时为<Latex>{`$O(|V|^2)$`}</Latex>. <br />
        <div className="h=2" />
        使用DFS同时记录访问结束时间, 按结束时间从大到小排序同样可以得到一个拓扑排序序列.  <br />
        (先输出出度为0的顶点 或 按结束时间从小到大排序则是逆拓扑排序)
        <blockquote className="mt-1 mb-3">
          邻接矩阵为三角矩阵的图一定存在拓扑排序序列, 存在拓扑排序序列的图的邻接矩阵不一定是三角矩阵, 但能够通过重新编号转换为三角矩阵.
        </blockquote>
      </p>
      <p>
        <span className="text-lg font-bold">关键路径:</span> <br />
        AOE网: Activities On Edge, 即边表示活动的网络, 是有向无环图(DAG). <br />
        关键路径: AOE网中活动可以并行进行, 从源点到汇点可能有不同长度的有向路径, 完成不同路径上活动所需时间不同, 但只有所有活动都完成整个工程才算结束. 
        <strong>其中具有最大长度的路径称为关键路径</strong>, 关键路径上的活动称为关键活动, 完成整个工程的最短时间取决于关键路径的长度. <br />
        事件最早发生时间: <br />
        <div className="pl-2 ml-1 border-l-[3px] border-l-amber-200">
          <Latex>{`$v_e($源点$)=0$`}</Latex> <br />
          <Latex>{`$v_e(k)=Max\\{v_e(j)+Weight(v_j, v_k)\\}~(v_k$为$v_j$的任意后继$)$`}</Latex><br />
          {Img({src: "Images/408/DataStructure/计算Ve.png", width: 750, align: "left", className: "m-0"})}
        </div>
        事件最晚发生时间: <br />
        <div className="pl-2 ml-1 border-l-[3px] border-l-amber-200">
          <Latex>{`$v_l($汇点$)=v_e($汇点$)$`}</Latex> <br />
          <Latex>{`$v_l(k)=Min\\{v_l(j)-Weight(v_j, v_k)\\}~(v_k$为$v_j$的任意前驱$)$`}</Latex><br />
          {Img({src: "Images/408/DataStructure/计算Vl.png", width: 750, align: "left", className: "m-0"})}
        </div>
        <Latex>{`对于边<$v_k, v_j$>表示的活动$m:$`}</Latex> <br />
        <div className="pl-2 ml-1 border-l-[3px] border-l-amber-200">
          活动最早开始时间: <br />
          <Latex>{`$e(m)=v_e(k)$`}</Latex> <br />
          活动最晚开始时间: <br />
          <Latex>{`$l(m)=v_l(j)-Weight(v_k, v_j)$`}</Latex> <br />
          活动的时间余量: <br />
          <Latex>{`$d(m)=l(m)-e(m)$, 其中 $d(m)=0$ 的活动为关键活动`}</Latex> <br />
        </div>
        求解关键路径的算法步骤如下: <br />
        {Img({src: "Images/408/DataStructure/求关键路径算法.png", width: 750, align: "left", className: "m-0"})}
        <blockquote className="mt-3 mb-3">
          注: 缩短关键路径可以缩短整体工期. 但关键路径缩短一定程度就会变成非关键路径; 关键路径也可能同时有多条, 需要同时缩短才能缩短工期.
        </blockquote>
      </p>
      <strong>图相关算法时间复杂度总结: </strong><br />
      {Img({src: "Images/408/DataStructure/图相关算法时间复杂度总结.png", width: 750, align: "left", className: "m-0"})}
    </div>
  )
}