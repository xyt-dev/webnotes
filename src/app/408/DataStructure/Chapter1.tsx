function Img({ src, width }: { src: string, width?: number }) {
  return (
    <img className="m-1 mx-auto" src={src} alt="image" width={width} />
  )
}

export default function Chapter1() {
  return (
    <div className="prose daisy-prose p-6 pl-12 max-w-[1000px]">
      <h3>基本概念</h3>
      <p>
        数据: 信息的载体, 能输入到计算机中并被识别和处理的符号的集合. (0 和 1 及其组成的其他数据)<br />
        数据元素: 数据的基本单位, 通常作为一个整体处理, 可有多个数据项组成. <br />
        数据项: 构成数据元素的不可分割的最小单位, 如 一个整数、一个字符串. <br />
        数据对象: 具有相同性质的数据元素的集合, 是数据的子集. <br />
        数据类型: 对数据元素的集合和在其上定义的操作的抽象描述, 分为原子类型(int)、结构类型(Struct)、抽象数据类型ADT(Class). <br />
        数据结构: 存在一种或多种特定关系的数据元素的集合.
      </p>
      <p >
        <strong className="text-lg">数据结构三要素: 逻辑结构, 存储结构, 数据的运算(操作方法)</strong>
        <br />抽象数据类型(ADT)通常用<strong>(数据对象, 数据关系, 基本操作集)</strong>三元组来定义, 可<strong>定义</strong>一个完整的数据结构.
      </p>
      <h3>逻辑结构与存储结构(物理结构)</h3>
      <p>
        逻辑结构是对数据元素之间关系的抽象描述, 无需考虑具体的存储结构.
        同一逻辑结构可有多种不同的物理实现方式, 但存储结构必须符合逻辑结构的要求, 受逻辑结构约束. 所以, <strong>逻辑结构独立于其存储结构, 存储结构并不独立于逻辑结构.</strong>
      </p>
      <p>
        逻辑结构包括: <strong>一对一、一对多、多对多、集合</strong> <br />
        存储结构包括: <strong>顺序存储</strong>结构、<strong>链式存储</strong>结构、散列存储结构、索引存储结构 <br />
      </p>
      <Img src="Images/408/DataStructure/1.png" width={600} />
      <p>
        <strong>线性表</strong>描述<strong>逻辑结构</strong>, 其数据元素之间具有一对一的线性关系, 即每个元素(除了第一个和最后一个元素外)都有<strong>唯一的前驱和后继</strong>.
        包括顺序表(数组), 链表, 栈和队列(特殊的线性表) 等. <br />
        <strong>顺序表, 链表</strong>等 既描述了<strong>逻辑结构</strong>, 又描述了<strong>存储结构</strong>. <br />
        <strong>有序表</strong>是指关键字有序的线性表, 仅描述数据元素之间的<strong>逻辑关系</strong>.
      </p>
      <p>
        逻辑结构相同, 存储结构不同, 运算效率可能不同, 是不同的数据结构<br />
        eg. 在线性表中插入和删除元素, 顺序存储平均要移动一半的数据元素, 其时间复杂度为 O(n); 链式存储只需要修改指针, 其时间复杂度为 O(1). <br />
        逻辑结构相同, 存储结构相同, 数据的运算定义不同, 运算效率可能不同, 是不同的数据结构<br />
        eg. 二叉树查找平均时间复杂度为 O(n), 二叉排序树查找节点平均时间复杂度为 O(log n). <br />
      </p>
    </div>
  )
}

