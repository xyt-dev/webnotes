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
        <span>出栈序列相关问题的Key: </span>
        <ul className="pl-[1rem] m-0">
          <li className="pl-0">给入栈元素按入栈顺序编号, 输出一定为一个或多个单调递减序列, 每个单调递减序列的左端点所构成的序列一定单调递增. </li>
          <li className="pl-0">若两个单调递减输出序列的左端点相差k个序号, 则说明第二个左端点出栈操作与其上一个出栈操作之间进行了k次入栈操作, 其余出栈操作间没有入栈操作. </li>
          <li className="pl-0">任何一个出栈元素其所有前序元素都已入过栈, 尚未出栈的前序元素都升序存放在栈中, 任何时候出栈元素序号都大于栈内所有元素. </li>
          <li className="pl-0">单调递减序列中, 若下一个序号在之前出现过则要跳过, 否则不能跳过. </li>
        </ul></strong>
        <div className="pl-[1rem]">
          例题: <br />
          {Img({src:"Images/408/DataStructure/Exercises/3_1_14to23.png", width: 700, align: "left" })}
          根据上述方法可知答案为: D A D D D <Space width={1} /> C C A C C. <br />
          (对于不方便直接逻辑判断的题, 看是否可以代入选项验证)
        </div>
      </p>

    </div>
  )
}