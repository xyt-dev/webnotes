export default function Chapter1() {
  return (
    <div className="prose daisy-prose p-6 pl-12 max-w-[1200px]">
      <p >
        <strong className="text-lg">数据结构三要素: 逻辑结构, 存储结构, 数据的运算(操作方法)</strong>
        <br />抽象数据类型(ADT)通常用(数据对象, 数据关系, 基本操作集)三元组来定义, 其<strong>定义</strong>一个完整的数据结构.
      </p>
      <h3>逻辑结构与存储结构(物理结构)</h3>
      <p>逻辑结构是对数据元素之间关系的抽象描述(一对一, 一对多, 多对多, 集合等关系), 无需考虑具体的存储结构. <br />
        同一逻辑结构可有多种不同的物理实现方式, 但存储结构必须符合逻辑结构的要求, 受逻辑结构约束. 所以, <strong>逻辑结构独立于其存储结构, 存储结构并不独立于逻辑结构.</strong>
      </p>
      <p>
        <strong>线性表</strong>描述<strong>逻辑结构</strong>, 其数据元素之间具有一对一的线性关系, 即每个元素(除了第一个和最后一个元素外)都有<strong>唯一的前驱和后继</strong>.
        包括顺序表(数组), 链表, 栈和队列(特殊的线性表) 等. <br />
        <strong>顺序表, 链表</strong>等 既描述了<strong>逻辑结构</strong>, 又描述了<strong>存储结构</strong>. <br />
        <strong>有序表</strong>是指关键字有序的线性表, 仅描述数据元素之间的<strong>逻辑关系</strong>.
      </p>
    </div>
  )
}