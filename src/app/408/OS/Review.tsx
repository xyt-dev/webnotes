import Latex from "react-latex-next"
import 'katex/dist/katex.min.css'; // 导入 KaTeX 样式
import Space from "@/components/Space";
import SchedulingAlgosSummary from "./SchedulingAlgosSummary";

function Img({ src, width, align, className }: { src: string, width?: number, align?: string, className?: string }) {
  if (align !== "left") align = "mx-auto"
  return (
    <img className={`${className} ${align} `} src={src} alt="image" width={width} />
  )
}

export default function OSReview() {
  return (
    <div className="prose daisy-prose p-6 max-w-[1500px]">
      <h2 className="text-3xl">操作系统重点复习</h2>
      <h2 className="text-2xl">概述</h2>
      <p>
        操作系统均发展历程: <br />
        手工操作阶段 -&gt; 单道批处理系统[自动性、顺序性] -&gt; 多道批处理系统[<strong>引入中断, 操作系统诞生, 并发性</strong>] -&gt; 分时系统[时间片, 同时性(不是并行, 是指允许多个中断用户同时使用)、交互性、独立性(用户使用相独立)、及时性(用户及时获得相应)]、实时系统(及时性、可靠性) ...
      </p>
      <p>
        操作系统的特征: <br />
        并发、共享、虚拟、异步 <br />
        其中并发与共享互为存在条件; 并发是虚拟和异步的存在条件. <br />
      </p>
      <p>
        <strong>中断相关概念: </strong><br />
        中断狭义上指外中断而非内中断, 外中断是由CPU外部硬件发出的中断; 内中断又称异常, 是由CPU内部引发的中断. <br />
        外中断分为可屏蔽中断(INTR线发出)和不可屏蔽中断(NMI线发出). <br />
        异常(内中断)不可屏蔽, 包括软中断和Abort异常(属于硬件中断), 其中软中断包括Trap和Fault. Trap用于用户态下主动调用系统内核程序, 主要指系统调用指令(访管指令, 如INT指令); Fault为指令执行引起的其他非硬件异常(是可恢复的异常), 包括除零、缺页、地址越界等; Abort(终止)异常是指出现了CPU无法继续执行的硬件故障, 如存储器校验异常等. <br />
        CPU检测到中断信号时, 由硬件自动保存程序计数器PC和程序状态字寄存器PSW, 同时硬件自动将CPU模式切换到内核态, 之后硬件自动找到中断向量表中对应中断服务程序入口地址, 进入中断服务程序时一般要暂时修改中断屏蔽字(寄存器)以屏蔽低优先级中断, 在退出中断服务程序之前恢复中断屏蔽字. <br />
      </p>
      <h2 className="text-2xl">进程与线程</h2>
      <p>
        <span className="text-lg font-bold">进程基本概念与状态模型: </span><br />
        {Img({ src: "Images/408/OS/进程导图.png", width: 900, align: "left", className: "m-0 mb-1 mt-1" })}
        五状态模型: <br />
        {Img({ src: "Images/408/OS/五状态模型.png", width: 700, align: "left", className: "m-0 mb-1" })}
        七状态模型: <br />
        {Img({ src: "Images/408/OS/七状态模型.png", width: 700, align: "left", className: "m-0" })}
        (个人理解) 挂起态: 逻辑上保存进程的所有数据和状态, 实际上是否将数据段和代码段换出到磁盘依具体策略而定(比如可以优先换出挂起进程的页), PCB一般保持在内存中不换出. 同时标记挂起态, 暂停对该进程调度直到满足恢复条件. <br />
        <div className="h-1" />
        进程切换(五状态模型): <br />
        {Img({ src: "Images/408/OS/进程切换.png", width: 1000, align: "left", className: "m-0 mb-1" })}
        进程切换原语主要功能总结: 更新PCB信息、创建/删除/移动PCB至对应队列、分配和回收资源. <br />
      </p>
      <p>
        <span className="text-lg font-bold">进程间通信</span> <br />
        共享存储: <br />
        <div className="pl-[1rem] ml-[2px] border-l-[3px] border-rose-200">
          将同一片共享的物理内存映射到多个进程的虚拟地址空间, 使得它们可以访问同一块物理内存. 注意各进程对共享内存的访问应该是互斥的. <br />
          {Img({ src: "Images/408/OS/共享内存.png", width: 500, align: "left", className: "m-0" })}
          共享存储分为基于数据结构和基于共享存储区两种方式. <br />
          <div className="pl-[1rem] ml-[2px] border-l-[3px] border-rose-200">
            基于数据结构的共享: 操作系统指定一个数据结构用于共享, 效率较低. <br />
            基于共享存储区的共享: 操作系统在内存中划出一块共享存储区, 数据形式和存放位置均由通信的进程自行控制, 效率更高, 是一种高级通信方式. <br />
          </div>
        </div>
        消息传递: <br />
        <div className="pl-[1rem] ml-[2px] border-l-[3px] border-rose-200">
          进程通过操作系统提供的发送消息、接收消息两个<strong>原语</strong>进行通信, 以格式化的"消息"为单位. <br />
          消息传递分为直接通信方式和间接通信方式. <br />
          <div className="pl-[1rem] ml-[2px] border-l-[3px] border-rose-200">
            直接通信方式: 发送进程直接将消息发送给接收进程, 将消息挂在接收进程的消息缓冲队列上. <br />
            间接通信方式: 发送进程将消息发送到中间实体, 接受进程从中间实体接收消息, 中间实体一般称为信箱(RabbitMQ等消息队列就可看作信箱). <br />
          </div>
        </div>
        管道通信: <br />
        <div className="pl-[1rem] ml-[2px] border-l-[3px] border-rose-200 w-[1800px]">
          管道(又称pipe文件, 但不是磁盘文件), 允许两个进程按生产者消费者方式进行通信. 一个管道是<strong>单工</strong>的(双向通信要建立两个管道), 数据在管道中先进先出(FIFO, 传输的形式是字节流). <br />
          管道必须提供三方面协调能力: 互斥、同步(管道满则写进程等待, 管道空则读进程等待)、管道两端进程必须存在(信箱不需要确定进程存在, 且信箱支持多对多通信). <br />
          <div className="pl-[1rem] ml-[2px] border-l-[3px] border-rose-200 w-[1600px]">
            管道只能由拥有其的进程访问, 父进程创建管道后, 子进程通过继承打开文件的形式继承管道, 然后通过其与父进程通信. <br />
          </div>
          <blockquote className="mb-1 mt-1 ">一个管道一般允许多个读进程一个写进程或多个写进程一个读进程(也可能允许多个读进程多个写进程). </blockquote>
        </div>
      </p>
      <p>
        <span className="text-lg font-bold">线程</span> <br />
        在引入线程的操作系统中, 线程(<strong>内核级</strong>)是<strong>独立调度的基本单位</strong>, 是基本的CPU执行单元; 一个进程可以有多个线程(一般一个进程至少有一个主线程), 同一个进程中的不同线程也可以并发和并行, 并行时可减少进程执行时间; 
        <strong> 引入线程后的进程只作为除CPU以外系统资源的分配单位. (线程不拥有系统资源, 但共享其所属进程的系统资源, 隶属同一进程的线程都具有相同地址空间)</strong> <br />
        <strong>作为独立调度和CPU执行的的基本单元, 线程也有类似进程的状态模型, 同时每个线程都有自己的TCB, 用于保存TID、线程状态、处理机状态、堆栈指针、调度信息等. 线程调度切换的开销比进程小, 所以可以提高系统并发度. </strong><br />
        <div className="h-3" />
        理解用户级线程: <br />
        在用户级线程库中, 内核级线程(物理PC)并不会直接在用户级线程的代码中执行, 而是在一个统一的调度程序中执行, 从多个虚拟的用户级线程的代码中选择并取出一段来执行. (其实就是一种虚拟化技术) <br />
        为什么引入用户级线程: <br />
        内核级线程调度切换在内核态, 引入用户级线程后, 内核级线程只需要执行线程库程序即可(自己理解), 而用虚拟出的用户级线程执行需要多线程的任务, 在用户态进行调度切换, 减少模式切换相关开销. <br />
        <div className="h-3" />
        多线程模型: <br />
        多线程模型中并发性较好的模型是<strong>一对一模型</strong>和<strong>多对多模型</strong>, 因为多对一模型中一个内核级线程阻塞会导致其所有用户级线程全部阻塞. (内核级线程能够并行) <br />
        <div className="h-3" />
        <div className="inline-block mr-[2rem]">
        临界资源：<br />
        同一时刻只允许一个线程(不引入线程的进程)访问的资源. <br />
        </div>
        <div className="inline-block">
        临界区：<br />
        访问临界资源的一段代码, 每次只允许一个线程进入执行临界区代码. <br />
        </div>
      </p>
      <p>
        <span className="text-lg font-bold">进程调度</span> <br />
        进程三级调度: <br />
        高级调度(作业调度): 按一定策略<strong>从外存后备队列中</strong>选择一个作业调入内存, 每个作业只调入一次调出一次, 调入时创建PCB, 调出时删除PCB. (相当于用户让操作系统启动好几个程序, 操作系统来决定先启动哪个)<br />
        中级调度(内存调度): 按一定策略将进程挂起或重新调入内存. (一般将等待进程挂起, 被挂起的进程PCB组成挂起队列) <br />
        低级调度(进程调度): 按一定策略从就绪队列中选择一个进程, 为其分配CPU执行. (最基本且必须的调度) <br />
        (三种调度从上至下频率递增) <br />
        <div className="h-3" />
        <blockquote className="mb-1 mt-1 ">
          进程上下文切换与模式切换的区别: <br />
          中断(系统调用)时用户态和内核态的切换成为模式切换而不是上下文切换, 上下文切换一般指进程(或内核级线程)的上下文切换. <strong>上下文切换只发生在内核态.</strong> <br />
        </blockquote>
        <blockquote className="mb-1 mt-1 ">
          PSW和PC寄存器在中断时被硬件自动压栈, 进程切换(上下文切换)时内核中的调度程序再PSW和PC及其它所需寄存器保存到对应进程PCB中. (个人理解)<br />
        </blockquote>
        <blockquote className="mb-1 mt-1 ">
          调度与切换的区别: <br />
          调度是指决定资源分配给哪个进程的行为, 是一种决策行为；切换是指实际进行分配的行为, 是执行行为. 一般来说, 先有资源的调度, 然后才有进程的切换. <br />
          (进程的调度和切换由中断或系统调用驱动) <br />
        </blockquote>
        <blockquote className="mb-1 mt-1 ">
          进程调度切换情况: <br />
          <span className="pl-[1rem]"/>主动: 进程正常终止、进程异常终止、主动等待. <br />
          <span className="pl-[1rem]"/>被动: 时间片用完、硬件中断, 高优先级进程抢占. <br />
          <strong>不能进行调度切换的情况: <br />
          与硬件密切相关的复杂中断处理程序中; 进程处于内核数据结构相关的临界区时(<strong className="p-[3px]">不代表</strong>任何临界区都不能进行调度切换); 原子操作过程中(原语). <br /></strong>
        </blockquote>
        <blockquote className="mb-1 mt-1 ">
          <strong>非抢占式调度只能由进程主动放弃CPU, 适合于早期批处理系统. (基于时间片的调度属于抢占式调度)</strong>
        </blockquote>
        <blockquote className="mb-1 mt-1 ">抢占和时间片用完都相当于只剥夺进程的CPU资源, 而其他资源均满足运行条件, 因此进程进入就绪态. </blockquote>
        <blockquote className="mb-1 mt-1 ">
          引入线程的操作系统中<strong>调度的对象是内核级线程</strong>(原因见上文).
        </blockquote>
        <div className="h-3" />
        <strong>调度算法的评价指标: </strong><br />
        {Img({ src: "Images/408/OS/CPU利用率.png", width: 490, align: "left", className: "m-0 mt-1" })}
        {Img({ src: "Images/408/OS/系统吞吐量.png", width: 400, align: "left", className: "m-0 mt-1" })}
        {Img({ src: "Images/408/OS/周转时间.png", width: 800, align: "left", className: "m-0 mt-1" })}
        (周转时间=作业在外存后备队列中时间+就绪队列中时间+等待队列中时间+CPU上运行时间)
        {Img({ src: "Images/408/OS/平均和带权周转时间.png", width: 800, align: "left", className: "m-0 mt-1" })}
        {Img({ src: "Images/408/OS/等待时间.png", width: 800, align: "left", className: "m-0 mt-1" })}
        (进程的等待时间=进程在就绪队列中等待的时间(任务的等待时间再+任务在外存后备队列中等待的时间)=周转时间-运行时间-等待时间(外部设备提供服务时间))
        {Img({ src: "Images/408/OS/响应时间.png", width: 800, align: "left", className: "m-0 mt-1" })}
        <div className="h-3" />
        <SchedulingAlgosSummary />
      </p>
    </div>
  )
}