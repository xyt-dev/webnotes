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
    <div className="prose daisy-prose p-6 max-w-[1300px]">
      <h2>栈、队列和数组</h2>
      <h3>栈</h3>
      <p>
        <Latex>{`卡特兰数$^*$`}</Latex>: 当有n个元素入栈时, 出栈元素的不同排列个数. <br />
        {Img({src:"Images/408/DataStructure/卡特兰数.png", width: 1200, align: "left" })}
      </p>
      <p>
        <span>顺序栈:</span> 采用顺序存储(物理结构)的栈(逻辑结构)
        {Img({src:"Images/408/DataStructure/顺序栈.png", width: 400, align: "left" })}
        (顺序栈入栈需要判断栈是否已满, 防止上溢) <br />
        共享栈: 两个顺序栈共享一个一维数组空间，两个栈的栈底分别设置在共享空间的两端，两个栈顶向共享空间的中间延伸，如图. 
        {Img({src:"Images/408/DataStructure/共享栈.png", width: 500, align: "left" })}
        共享栈的优点: 提高内存利用率, 减少上溢可能. <br />
        (对于顺序栈, 为了减少上溢可能, 需要给栈分配很大空间, 但这样会造成内存浪费, 于是可以将两个栈合并, 这样一个栈使用较多空间时还能够使用另一个栈的空间. 这样既减少上溢可能, 又提高了内存利用率.)
      </p>
      <p>
        <span>链栈:</span> 限制存取点的单链表
        {Img({src:"Images/408/DataStructure/链栈.png", width: 400, align: "left" })}
        链栈也分带头结点不带头结点两种, 一般带头结点. (单链表一般不带头节点)<br />
        链栈插入和删除结点操作一般都在表头进行.
      </p>
      <p>
        <strong>
        <span>出入栈序列相关问题的Key: (以入栈序号作为元素序号)</span>
        <ul className="pl-[1rem] m-0">
          <li className="pl-0">给入栈元素按入栈顺序编号, 输出一定为一个或多个单调递减序列, 每个单调递减序列的左端点所构成的序列一定单调递增; 单调递减序列中, 若下一个序号在之前出现过则要跳过, 否则不能跳过. (判断出栈序列合法性) 【核心】</li>
          <li className="pl-0">当前出栈元素序号 + 出栈序号 - 1 <Latex>{`$\\boldsymbol{\\ge}$`}</Latex> <span className="underline underline-offset-[0.5rem]">最大已入栈元素序号</span> 
            <Latex>{` $\\boldsymbol{\\ge}$`}</Latex> 当前出栈元素序号 <Latex>{`$\\boldsymbol{\\gt}$`}</Latex> <span className="underline underline-offset-[0.5rem]">当前栈内元素序号</span>; 
            尚未出栈的元素都升序存放在栈中. (判断栈内元素 及 出栈元素合法性)</li>
          <li className="pl-0">若两个单调递减输出序列的左端点相差k个序号, 则说明第二个左端点的出栈操作前有k次入栈操作, 其余出栈操作前没有入栈操作; 
            出入栈过程中入栈数 <Latex>{`$\\boldsymbol{\\ge}$`}</Latex> 出栈数, 最终相等. (判断出入栈操作序列)</li>
          <li className="pl-0">判断第j个入栈元素是否可以是第k个出栈元素 等价于 判断第k个出栈元素是否可以是第j个入栈元素; 已知出栈序列判断入栈序列合法性 等价于 已知入栈序列判断出栈序列合法性 [且一定可以判断合法性]. (问题转化)</li>
        </ul></strong>
        <div className="pl-[1rem]">
          例题: <br />
          {Img({src:"Images/408/DataStructure/Exercises/3_1_14to23.png", width: 700, align: "left" })}
          {Img({src:"Images/408/DataStructure/Exercises/3_1_28to29.png", width: 700, align: "left" })}
          根据上述方法可知答案为: D A D D D <Space width={1} /> C C A C C <Space width={1} /> B C.<br />
          写出第21题中1,2号出栈元素的所有可能入栈序号. <br />
          答案: 结合第一、二点可知, 所有可能入栈序号为:  <Latex>{`$P_5P_4, P_4P_5, P_2P_4, P_2P_1, P_1P_4, P_1P_2$`}</Latex>
        </div>
      </p>
      <details open>
        <summary className="cursor-pointer font-bold w-fit text-lg">其他例题</summary>
        <div className="pl-6">
          {Img({src:"Images/408/DataStructure/Exercises/3_1_13.png", width: 600, align: "left" })}
          {Img({src:"Images/408/DataStructure/Exercises/Solve_3_1_13.png", width: 400, align: "left" })}
          <hr className="m-3 ml-[-6px]" />
          {Img({src:"Images/408/DataStructure/Exercises/3_1_25.png", width: 700, align: "left" })}
          对于共享栈, 先移动指针再压栈判满条件为top2-top1==1; 先压栈再移动指针判满条件为top2-top1==-1. 压栈方式可通过初值判断. 此题选A. 
          <hr className="m-3 ml-[-6px]" />
          {Img({src:"Images/408/DataStructure/Exercises/3_1_04.png", width: 700, align: "left" })}
          {Img({src:"Images/408/DataStructure/Exercises/Solve_3_1_04.png", width: 600, align: "left" })}
        </div>
      </details>

      <h3>队列</h3>
      <p>
        队列的顺序存储:
        {Img({src:"Images/408/DataStructure/队列的顺序存储.png", width: 400, align: "left" })}
        队列的顺序存储要使用循环队列.(防止假溢出) <br />
        <blockquote className="mt-1 mb-10">
          <span className="text-[#005cc5]">操作</span><br />
          指针进一: Q.front = (Q.front + 1) % MaxSize; <br />
          <Space width={9} /> Q.rear = (Q.rear + 1) % MaxSize; <br />
          计算队列长度: Length = (Q.rear + MaxSize - Q.front) % MaxSize; <br />
          判断队满/队空: <br />
          <div className="pl-[1rem]">
            <a href="Images/408/DataStructure/队列少入队一个元素方便判满.png" target="_blank">方法一: 入队时少用一个队列单元. </a><br />
            <Space width={2} />判断队空: Q.front == Q.rear <br />
            <Space width={2} />判断队满: (Q.rear + 1) % MaxSize == Q.front 或 size == MaxSize <br />
            方法二: 维护一个 size 变量. <br />
            <Space width={2} />判断队空: size == 0 <br />
            <Space width={2} />判断队满: size == MaxSize <br />
            方法三: 维护一个 tag 标志.(入队成功时置为1, 出队成功时置为0) <br/>
            <Space width={2} />判断队空: Q.front == Q.rear && tag == 0 <br />
            <Space width={2} />判断队满: Q.front == Q.rear && tag == 1 <br />
          </div>
          出队入队采用<strong>先读/写值再更新指针</strong>的操作.(因为初始状态时 Q.front=Q.rear, 且队列非空时要让 Q.front 指向队首元素)
        </blockquote>
      </p>
      <p>
        队列的链式存储:
        {Img({src:"Images/408/DataStructure/队列的链式存储.png", width: 400, align: "left" })}
        链式存储的队列是受限单链表, 判空条件是 front==rear, 不需要判满, 一般采用带头结点操作.(不带头结点时, 插入第一个元素和取出唯一一个元素时, 要同时修改头尾两个指针) <br />
        入队操作最后记得修改 rear 指针; 出队操作释放结点前判断是否只有唯一数据结点, 若是则移动尾指针到头结点. <br />
      </p>
      <p>
        双端队列: 两端都可以进行插入和删除操作的线性表, 还包括输入受限和输出受限的双端队列. <br />
        {Img({src:"Images/408/DataStructure/受限双端队列.png", width: 560, align: "left" })}
        双端队列也不能输出任意排列顺序的序列.(证明[自己想的]: 令输出序列首先输出最大序号, 则双端队列中元素序号一定为一端大一端小 或 两端大中间小, 
          于是输出序列一段只可能出现一个递减或递增序列 或 两个递减序列的交叉序列 或 一个递减序列和一个递增序列的交叉序列, 而不可能出现如更多个递减或递增序列的交叉序列) <br />
        题目一般只需代入验证序列是否合法.
      </p>
    </div>
  )
}