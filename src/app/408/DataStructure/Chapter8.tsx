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
        {Img({ src: "Images/408/DataStructure/堆排序.png", width: 670, align: "left", className: "mt-1 mb-1" })}
        空间复杂度: O(1); <strong>最大、最小、平均</strong>时间复杂度: O(<Latex>{`$nlog_2n$`}</Latex>); 该排序算法<strong>不稳定</strong>. <br />
        <strong>适用性: 堆排序仅适用于顺序存储的线性表. </strong>(或双向链表应该也可以) <br />
        插入操作: 将新节点放至堆的末尾, 然后向上调整, 直到新节点的父节点大于等于新节点. <br />
      </p>
      <p>
        <h3>归并排序</h3>
        {Img({ src: "Images/408/DataStructure/归并排序.png", width: 790, align: "left", className: "m-0 mb-1" })}
        空间复杂度: O(<Latex>{`$n$`}</Latex>) (复用同一个长度为n的辅助数组); <br />
        <strong>最大、最小、平均</strong>时间复杂度: O(<Latex>{`$nlog_2n$`}</Latex>) (每趟归并的时间复杂度为O(<Latex>{`$n$`}</Latex>), 共需要进行<Latex>{`$\\lceil log_2n\\rceil$`}</Latex>趟); <br />
        该排序算法<strong>稳定</strong>. <br />
        适用性: 适用于顺序存储和链式存储的线性表. <br />
        <blockquote className="mb-1 mt-1">
          对N个元素进行k路归并排序, 排序的趟数<Latex>{`$~m=\\lceil log_kN\\rceil$`}</Latex>.
        </blockquote>
      </p>
      <p>
        <h3>基数排序</h3>
        基数排序过程示例: <br />
        {Img({ src: "Images/408/DataStructure/基数排序0.png", width: 600, align: "left", className: "m-0 mb-1" })}
        {Img({ src: "Images/408/DataStructure/基数排序01.png", width: 600, align: "left", className: "m-0 mb-1" })}
        {Img({ src: "Images/408/DataStructure/基数排序02.png", width: 600, align: "left", className: "m-0 mb-1" })}
        {Img({ src: "Images/408/DataStructure/基数排序022.png", width: 600, align: "left", className: "m-0 mb-1" })}
        基数排序的核心原理在于其<strong>稳定</strong>性, 即当前位大小相同的元素会按更低位的大小顺序排列. (基数排序是一种<strong>不基于比较</strong>的排序算法) <br />
        <span className="inline-block w-[1500px]">时间复杂度: O(<Latex>{`$d(n+r)$`}</Latex>) (d为最大位数, r为基数, n为待排序元素个数) (需要进行d趟排序, 每趟排序过程为一次 "分配(O(n))"+"收集(O(r))")</span>
        空间复杂度: O(<Latex>{`$r$`}</Latex>) (辅助存储空间为r个队列, 即r个队头指针和队尾指针(复用)) <br />
        适用性: 适用于顺序存储和链式存储的线性表. <br />
      </p>
      <p>
        <h3>计数排序</h3>
        {Img({ src: "Images/408/DataStructure/计数排序.png", width: 760, align: "left", className: "m-0 mb-1" })}
        计数排序同样是一种<strong>不基于比较</strong>的排序算法. <br />
        空间复杂度: O(<Latex>{`$n+k$`}</Latex>); 时间复杂度: O(<Latex>{`$n+k$`}</Latex>); 该排序算法<strong>稳定</strong>. <br />
        (当<Latex>{`$~k>O(nlogn)~$`}</Latex>时其效率不如快速排序和堆排序等排序算法) <br />
        适用性: 适用于<strong>顺序存储</strong>的线性表, 且序列中的元素须为整数, 同时其范围(0~k-1)不能太大. <br />
      </p>
      <p>
        <h3>八大排序算法总结: </h3>
        {Img({ src: "Images/408/DataStructure/八大排序算法总结.png", width: 800, align: "left", className: "m-0 mb-1" })}
        <blockquote className="mb-2 mt-2 w-[1500px]">
          排序算法的选择要考虑: <br />
          三算法: 算法的时间复杂度、空间复杂度、稳定性. <br />
          二数据: 待排序数据的规模、初始状态(是否基本有序). <br />
          一结构: 待排序数据的存储结构. (存储结构的选择又要考虑单个数据元素规模, 若单个元素规模较大, 则选择链式存储可以在移动元素时降低开销) <br />
        </blockquote>
      </p>
    </div>
  )
}