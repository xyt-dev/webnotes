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

export default function Chapter8() {
  return (
    <div className="prose daisy-prose p-6 max-w-[1300px]">
      <h2 className="text-3xl">排序</h2>
      <p>
        <h3>插入排序</h3>
        <span>直接插入排序: </span> <br />
        {Img({ src: "Images/408/DataStructure/直接插入排序.png", width: 600, align: "left", className: "m-0 mb-1" })}
        空间复杂度: O(1); 平均时间复杂度: O(<Latex>{`$n^2$`}</Latex>); <span className="font-bold">最好时间复杂度: O(<Latex>{`$n$`}</Latex>)(对于有序的表).</span> 该排序算法稳定. <br />
        <div className="h-3" />
        <span>二分插入排序: </span> <br />
        {Img({ src: "Images/408/DataStructure/二分插入排序.png", width: 590, align: "left", className: "m-0 mb-1" })}
        空间复杂度: O(1); 移动元素的时间复杂度: O(<Latex>{`$nlog_2n$`}</Latex>) (每次查找插入位置的时间复杂度都为O(<Latex>{`$log_2n$`}</Latex>)), 移动元素的平均时间复杂度仍为O(<Latex>{`$n^2$`}</Latex>).
        <span className="font-bold"> 所以总体时间复杂度: O(<Latex>{`$n^2$`}</Latex>); 最好时间复杂度: O(<Latex>{`$nlog_2n$`}</Latex>)</span>. 该排序算法稳定(若存在相同关键字则会插入到相同关键字的最后). <br />
        <div className="h-3" />
        <span>希尔排序(缩小增量排序): </span> <br />
        从上述内容可知, 直接插入排序适用于基本有序且数据量不大的排序表. <br />希尔排序基于这两点对直接插入排序进行改进 (先对数据量不大的子列直接插入排序, 再对基本有序的更大的数列直接插入排序).
        {Img({ src: "Images/408/DataStructure/希尔排序.png", width: 790, align: "left", className: "m-0 mb-1" })}
        空间复杂度: O(1); 当n在一定范围内时, 平均时间复杂度大约为: O(<Latex>{`$n^{1.3}$`}</Latex>); 最好时间复杂度: O(<Latex>{`$nlogn$`}</Latex>)(对于有序的表); 最大时间复杂度为O(<Latex>{`$n^2$`}</Latex>).
        该排序算法<span className="font-bold">不稳定(相同关键字可能被划分到不同子列排序)</span>. <br />
        <blockquote className="mb-1 mt-1">判断希尔排序间隔是否为dk, 只需检查所有间隔为dk的元素间大小关系是否相同. </blockquote>
      </p>
      <p>
        <h3>交换排序</h3>
        <span>冒泡排序: </span> <br />
        {Img({ src: "Images/408/DataStructure/冒泡排序.png", width: 500, align: "left", className: "m-0 mb-1" })}
        空间复杂度: O(1); 当n在一定范围内时, 平均时间复杂度大约为: O(<Latex>{`$n^{1.3}$`}</Latex>); 最好时间复杂度: O(<Latex>{`$nlogn$`}</Latex>)(对于有序的表); 最大时间复杂度为O(<Latex>{`$n^2$`}</Latex>).
        空间复杂度: O(1); 平均时间复杂度: O(<Latex>{`$n^2$`}</Latex>); <span className="font-bold">最好时间复杂度: O(<Latex>{`$n$`}</Latex>)(对于有序的表).</span> 该排序算法稳定. <br />
        其中, <Latex>{`比较次数=$\\underset{j=1}{\\overset{n-1}\\sum}(n-j)=\\frac{n(n-1)}{2}$`}</Latex>, <Latex>{`最大移动次数=$\\underset{j=1}{\\overset{n-1}\\sum}3(n-j)=\\frac{3n(n-1)}{2}$`}</Latex>. <br />
        <blockquote className="mb-2 mt-0">冒泡排序过程中产生的有序子序列一定是全局有序的(该子序列中每个元素都在其最终位置上), 插入排序则不一定. </blockquote>
        <div className="h-3" />
        <span>快速排序: </span> <br />
        {Img({ src: "Images/408/DataStructure/快速排序.png", width: 600, align: "left", className: "m-0 mb-1" })}
        最小、平均空间复杂度: O(<Latex>{`$log_2n$`}</Latex>); 最大空间复杂度: O(<Latex>{`$n$`}</Latex>). (栈的调用深度) <br />
        最小、平均时间复杂度: O(<Latex>{`$nlog_2n$`}</Latex>); 最大时间复杂度: O(<Latex>{`$n^2$`}</Latex>). <br />
        <blockquote className="mb-1 mt-1">
          理想情况下, Partition()能作最平衡的划分, 这样能有最好的时间和空间复杂度. <br />
          快速排序是所有内部排序算法中平均性能最优的算法. <br />
        </blockquote>
        <blockquote className="mb-1 mt-1">
          快速排序过程中每一趟排序会将上一趟划分的各无序子表的枢轴元素放到其最终位置上, 该最终位置还要同时满足左边元素小于等于枢轴元素, 右边元素大于等于枢轴元素. (从小到大排序为例) <br />
          判断序列是否为快速排序第k趟排序的结果: 看有哪些元素在其最终位置上, 从而判断是否符合第k趟划分的结果. <br />
        </blockquote>
        <blockquote className="mb-1 mt-1">
          Partition思想同样适用于快速找到第k小元素: <br />
          {Img({ src: "Images/408/DataStructure/快速查找第k小元素.png", width: 790, align: "left", className: "m-0 mb-1" })}
        </blockquote>
      </p>
      <p>
        <h3>选择排序</h3>
        <span>简单选择排序: </span> <br />
        {Img({ src: "Images/408/DataStructure/简单选择排序.png", width: 460, align: "left", className: "m-0 mb-1" })}
        空间复杂度: O(1); 时间复杂度<strong>始终</strong>为: O(<Latex>{`$n^2$`}</Latex>); 该排序算法<strong>不稳定</strong>. <br />  
        <div className="h-3" />
        <span>堆排序: </span> <br />
        n个关键字的序列<Latex>{`$L[1\\cdots n]$`}</Latex>称为堆, 当且仅当其满足如下性质: <br />
        ① <Latex>{`$L[j] \\ge L[2j] ~$且$~ L[j] \\ge L[2j+1]$`}</Latex> (1 ≤ j ≤ n/2), 称为大顶堆; <br />
        ② <Latex>{`$L[j] \\le L[2j] ~$且$~ L[j] \\le L[2j+1]$`}</Latex> (1 ≤ j ≤ n/2), 称为小顶堆; <br />
        {Img({ src: "Images/408/DataStructure/堆排序.png", width: 700, align: "left", className: "mt-1 mb-1" })}
        空间复杂度: O(1); <strong>最大、最小、平均</strong>时间复杂度: O(<Latex>{`$nlog_2n$`}</Latex>); 该排序算法<strong>不稳定</strong>. <br />
        <strong>适用性: 堆排序仅适用于顺序存储的线性表. </strong> <br />
        插入操作: 将新节点放至堆的末尾, 然后向上调整, 直到新节点的父节点大于等于新节点. <br />
      </p>
    </div>
  )
}