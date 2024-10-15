import Latex from "react-latex-next"
import 'katex/dist/katex.min.css'; // 导入 KaTeX 样式
import Space from "@/components/Space";

function Img({ src, width, align}: { src: string, width?: number, align?: string }) {
  if (align !== "left") align = "mx-auto"
  return (
     <img className={`mt-1 mb-1 ${align}`} src={src} alt="image" width={width} />
  ) 
}

export default function Chapter2() {
  // const listItems = document.querySelectorAll('#sm-list li');
  // listItems.forEach((li) => {
  //   li.classList.add('m-0.5');
  // });
  return (
    <div className="prose daisy-prose p-6 max-w-[1200px]">
      <h3>顺序表</h3>
      <p>
        优点: 1. 随机访问, 查找时间 O(1); <br />
        <Space width={5.2} /> 2. 存储密度高, 每个节点只存放数据元素本身. <br />
        缺点: 1. 插入和删除操作需要移动大量元素, 均为 O(n); (若无需保持元素间顺序则可以为 O(1) ) <br />
        <Space width={5.2} /> 2. 需要分配连续存储空间, 不够灵活. (动态分配的数组占满时需要重新分配空间) <br />
        此外, 按位序查找为 O(1), 按值查找为 O(n).
      </p>
      <p>注意线性表中元素位序从1开始.</p>
      <p className="font-bold">
        <div className="text-lg">顺序表与数组的区别和联系: </div>
        数组就是顺序存储, 即数组一般表示物理结构. 数组保存的线性表就是顺序表, 数组也可以保存树、图等其他数据结构. <br />
        于是顺序表和数组物理结构相同, 都可以进行随机存取. 但数组保存的逻辑结构不一定和顺序表相同. 虽然顺序存储要求 逻辑上相邻的元素物理上也一定相邻, 但不要求物理上相邻元素有逻辑关系. <br />
        顺序表(线性表)要求元素间必须存在前驱和后继关系(物理上一定全部相邻), 而数组存放的树、图等数据结构的数据元素间可以没有前驱后继等逻辑关系, 元素间还可以有空元素间隔(物理上可互不相邻). 所以逻辑结构不一定相同. <br />
      </p>
      <blockquote>线性表O(n)内去重, 使用哈希表. (空间复杂度为O(n))</blockquote>
    </div>
  )
}