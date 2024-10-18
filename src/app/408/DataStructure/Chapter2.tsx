import Latex from "react-latex-next"
import 'katex/dist/katex.min.css'; // 导入 KaTeX 样式
import Space from "@/components/Space";

function Img({src, width, align}: { src: string, width?: number, align?: string }) {
  if (align !== "left") align = "mx-auto"
  return (
     <img className={`mt-1 mb-1 ${align}`} src={src} alt="image" width={width} />
  ) 
}

export default function Chapter2() {
  return (
    <div className="prose daisy-prose p-6 max-w-[1200px]">
      <h2>顺序表</h2>
      <p>
        顺序表C语言定义:
        {Img({ src: "Images/408/DataStructure/静态分配的顺序表结构.png", width: 600, align: "left" })}
        {Img({ src: "Images/408/DataStructure/动态分配的顺序表结构.png", width: 600, align: "left" })}
      </p>
      <h2><span></span></h2>
      <p>
        优点: 1. 随机访问, 按位序查找时间为O(1); (按值查找为O(n), 有序时使用二分查找可优化为O(logn)) <br />
        <Space width={5.2} /> 2. 存储密度高, 每个节点只存放数据元素本身. <br />
        缺点: 1. 插入和删除操作需要移动大量元素, 均为O(n); (若无需保持元素间顺序则可以为O(1) ) <br />
        <Space width={5.2} /> 2. 需要分配连续存储空间, 不够灵活. <br />
        <Space width={6} /> (分配空间过小时, 动态分配的数组占满时可重新分配空间, 静态分配的数组则无法扩容; 分配空间过大时则浪费空间) <br />
      </p>
      <p>注意线性表中元素位序从1开始.</p>
      <p className="font-bold">
        <div className="text-lg">顺序表与数组的区别和联系: </div>
        数组就是顺序存储, 即数组一般表示物理结构. 数组保存的线性表就是顺序表, 数组也可以保存树、图等其他数据结构. <br />
        于是顺序表和数组物理结构相同, 都可以进行随机存取. 但数组保存的逻辑结构不一定和顺序表相同. 虽然顺序存储要求逻辑上相邻的元素物理上也一定相邻, 但不要求物理上相邻元素有逻辑关系. <br />
        顺序表(线性表)要求元素间必须存在前驱和后继关系(物理上一定全部相邻), 而数组存放的树、图等数据结构的数据元素间可以没有前驱后继等逻辑关系, 元素间还可以有空元素间隔(物理上可互不相邻). 所以逻辑结构不一定相同. <br />
      </p>
      <blockquote>线性表O(n)内去重, 使用哈希表. (空间复杂度为O(n))</blockquote>
      <details>
        <summary className="cursor-pointer font-bold w-fit text-lg">例题</summary>
        <div className="pl-6">
          <Img src="Images/408/DataStructure/Exercises/2_2_2.png" width={800} align="left" />
          <Space width={1} />由上述顺序表与数组的区别和联系可知, 此题选C. <br />
          <Img src="Images/408/DataStructure/Exercises/2_2_8.png" width={800} align="left" />
          <Img src="Images/408/DataStructure/Exercises/Solve_2_2_8.png" width={800} align="left" />
          <Img src="Images/408/DataStructure/Exercises/2_2_10.png" width={800} align="left" />
          <Img src="Images/408/DataStructure/Exercises/Solve_2_2_10.png" width={800} align="left" />
          <Img src="Images/408/DataStructure/Exercises/2_2_11.png" width={800} align="left" />
          <Img src="Images/408/DataStructure/Exercises/Solve_2_2_11.png" width={800} align="left" />
          <Space width={1} />(其中元素个数为偶数时, d2=m2 而非 d2=m2-1 是为了继续让下一个中位点偏右; 只需要让两个中位点左边和右边元素个数加起来相等即可)
          <Img src="Images/408/DataStructure/Exercises/2_2_12.png" width={800} align="left" />
          <Img src="Images/408/DataStructure/Exercises/Solve_2_2_12.png" width={800} align="left" />
          <Img src="Images/408/DataStructure/Exercises/2_2_13.png" width={800} align="left" />
          <Img src="Images/408/DataStructure/Exercises/Solve_2_2_13.png" width={800} align="left" />
          <Img src="Images/408/DataStructure/Exercises/2_2_14.png" width={800} align="left" />
          <Img src="Images/408/DataStructure/Exercises/Solve_2_2_14.png" width={800} align="left" />
          <Img src="Images/408/DataStructure/Exercises/Solve_2_2_14(2).png" width={800} align="left" />
          <Space width={1} />n=(|S1|+|S2|+|S3|), 时间复杂度为 O(n), 空间复杂度为 O(1).
        </div>
      </details>

      <h2>链表</h2>
      <p>
        优点: 1. 插入和删除操作本身只需要修改指针, 头插和头删为O(1); (按位序插入/删除仍为O(n)) <br />
        <Space width={5.2} /> 2. 不需要分配连续存储空间, 无需扩容, 更灵活; (空间利用率高) <br />
        缺点: 1. 不能随机访问, 按位序查找也需要遍历链表, 时间复杂度为O(n), 也不能二分查找; <br />
        <Space width={5.2} /> 2. 需要额外的指针域, 存储密度较低. <br />
      </p>
      <p>
        已知存储规模, 更常进行按位序访问操作 -&gt; 顺序表; <br />
        难以估计线性表存储规模, 更常进行插入删除操作 -&gt; 链表. (虽然链表进行插入删除操作需要先查找位置, 时间复杂度也是O(n), 但其主要是比较操作, 优于移动大量数据元素(比较只需要读内存, 移动还需要写内存); 此外按值查找后进行插入和删除链式更快) <br />
      </p>
      <h3>单链表</h3>
      <p>单链表C语言定义: 
        {Img({ src: "Images/408/DataStructure/单链表节点结构.png", width: 400, align: "left" })}
      </p>
      <blockquote>
        如果需要删除当前结点, 如果当前结点有后继结点, 则不需要从头遍历.(如果当前结点是单链表表尾结点, 则需要从头遍历)<br />
        方法: 用后继结点的值覆盖当前结点的值, 然后按一般方法删除后继结点. <br />
        在当前结点前插入新结点同理, 且不需要有后继结点. <br />
      </blockquote>
      <h3>双链表</h3>
      <p>双链表C语言定义: 
        {Img({ src: "Images/408/DataStructure/双链表节点结构.png", width: 400, align: "left" })}
      </p>
      <p>插入和删除结点操作: 
        {Img({ src: "Images/408/DataStructure/双链表插入和删除.png", width: 600, align: "left" })}
      </p>
      <p>引入原因: 克服单链表无法直接访问结点前驱的缺点 (插入, 删除操作时)</p>
      <h3>循环链表</h3>
      <p>
        循环链表没有指针域为NULL的结点, 判空条件是看头结点的指针是否指向其自身. <br />
        (循环双链表头结点的prior指针和next指针都指向其自身)
      </p>
      <p>循环链表常使用尾指针, 因为通过尾指针可以快速进行头尾操作(通过尾结点可以快速得到头结点), 而头指针无法快速进行尾部操作.</p>
      <blockquote>
        <ul>
          <li>带头/尾结点指针的循环双链表能实现O(1)的头插, 头删, 尾插, 尾删操作.</li>
          <li>循环链表经过n次p=p-&gt;next操作后回到原结点, 则n的所有因数都可能是该循环链表的长度(包含头结点).</li>
        </ul>
      </blockquote>
      <h3>静态链表</h3>
      <p>静态链表C语言定义:
        {Img({ src: "Images/408/DataStructure/静态链表结构.png", width: 400, align: "left" })}
        {Img({ src: "Images/408/DataStructure/静态链表存储示意图.png", width: 600, align: "left" })}
      </p>
      <p>
        静态链表初始化时需要预先分配一块连续的内存空间, 这一点同顺序表; 且静态链表以 next==-1 作为其结束标志. <br />
        静态链表其余操作及优缺点同链表.
      </p>
      <details open>
        <summary className="cursor-pointer font-bold w-fit text-lg">例题</summary>
        <Img src="Images/408/DataStructure/Exercises/2_3_4.png" width={700} align="left" />
        <Space width={1} /> I. 顺序表是线性逻辑结构, 而顺序存储=数组, 可以存放其他逻辑结构; II. <strong>尾指针无法O(1)删除单链表或循环单链表表尾元素</strong>(对于循环单链表, 值覆盖法会导致表尾指针变成头结点指针); 
          V. 带尾指针的循环链表很适合表示队列, 因为正好可以O(1)删除队头元素, O(1)插入队尾元素. (尾指针可以删除循环链表示的队列的队尾元素(当其同时是队首元素时), 删除后头结点指针自然会指向其自身) 答案选D.
        <Img src="Images/408/DataStructure/Exercises/2_3_17.png" width={700} align="left" />
        <Space width={1} /> 结点A和B分别由指针p和q指示, 但结点C仅能由p-&gt;next间接指示, 因此在改变p-&gt;next之前, 要先将q-&gt;next指向结点C. <br />
          (如果先进行操作1、3, 则操作4应该为: p-&gt;next-&gt;next-&gt;prior=q) 答案选A.
        <Img src="Images/408/DataStructure/Exercises/2_3_34.png" width={700} align="left" />
        <Img src="Images/408/DataStructure/Exercises/Solve_2_3_34.png" width={700} align="left" />
        <Img src="Images/408/DataStructure/Exercises/Solve_2_3_34(2).png" width={700} align="left" />
        <Img src="Images/408/DataStructure/Exercises/2_3_03.png" width={700} align="left" />
        <Img src="Images/408/DataStructure/Exercises/Solve_2_3_03.png" width={600} align="left" />
      </details>
    </div>
  )
}