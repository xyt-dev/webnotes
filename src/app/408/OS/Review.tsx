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
        <div className="h-3" />
      </p>
      <p>
        <span className="text-lg font-bold">同步与互斥</span> <br />
        为了保证对临界资源的互斥访问, 同时保证系统的整体性能, 要遵循以下原则: <br />
        <strong>空闲让进、忙则等待、有限等待、让权等待(非必须)</strong> <br />
        <div className="h-3" />
        Peterson算法: 基于双标志法、增加谦让变量turn, <strong>先设置flag再谦让变量turn (均为进程全局变量)</strong> <br />
        TestAndSet: <br />
        {Img({ src: "Images/408/OS/TestAndSet.png", width: 650, align: "left", className: "m-0 mt-1" })}
        Swap: <br />
        {Img({ src: "Images/408/OS/Swap.png", width: 600, align: "left", className: "m-0 mt-1" })}
        Peterson算法、TestAndSet、Swap 均没有满足让权等待.  <br />
        <blockquote className="mb-1 mt-1" ><strong>中断屏蔽法只适用于内核空间、且不适用于多核处理机. (多处理机下中断屏蔽只防止当前CPU被外中断, 不防止其他CPU操作, 内核访问临界资源应该要同时使用中断屏蔽和互斥)</strong></blockquote>
        <div className="h-3" />
        信号量(记录型): <br />
        {Img({ src: "Images/408/OS/Semaphore.png", width: 550, align: "left", className: "m-0 mt-1" })}
        <blockquote className="mb-1 mt-1" ><strong>使用PV操作时(还未修改信号量时), 信号量的正值表示当前可用资源数, 信号量负值的绝对值表示当前该信号量等待队列中的进程个数.</strong></blockquote>
        <blockquote className="mb-1 mt-1 w-[1600px]" ><strong>互斥操作PV之间的代码并不能称之为临界区, 只有其中访问临界资源的代码才成为临界区, PV操作需要“框住”临界区.</strong></blockquote>
        <div className="h-3" />
        生产者消费者: <br />
        {Img({ src: "Images/408/OS/生产者消费者.png", width: 460, align: "left", className: "m-0 mt-1" })}
        <blockquote className="mb-1 mt-1" ><strong>
        同步的P操作不能放在互斥的P操作后, 否则在同步的P操作上等待导致无法释放Mutex导致进程死锁. <br />
        V操作互换一般不影响. <br />
        临界区应尽可能减少无关代码, 提高系统整体效率(并发度). <br />
        </strong></blockquote>
        <div className="h-3" />
        多生产者消费者: <br />
        {Img({ src: "Images/408/OS/多生产者消费者.png", width: 700, align: "left", className: "m-0" })}
        <blockquote className="mb-1 mt-1 w-[1600px]" ><strong>图中可以不使用额外Mutex的原因：最大值为1的信号量相当于互斥信号量，同一时间段只可能有一个进程进入运行；若同步信号量大于2，则需要额外的互斥信号量.</strong></blockquote>
        <div className="h-3" />
        读者写者: <br />
        {Img({ src: "Images/408/OS/读者写者.png", width: 700, align: "left", className: "m-0" })}
        <blockquote className="mb-1 mt-1" ><strong>
        使用count变量后, 无需每个reader线程都P(rw)从而使reader可以同时访问资源. <br />
        reader中的mutex有什么用: 防止多个线程(进程)同时读写count变量(避免全局变量的赋值失去原子性), count的值不正确可能导致部分reader线程被阻塞不释放或同时读写临界区资源. <br />
        为什么P(rw)放在互斥PV内: 因为此处rw信号量由writer释放且writer不会用到mutex, 所以没有死锁问题; 且应至多只有一个reader线程在rw处等待. <br />
        </strong></blockquote>
        上述方法中如果一直有reader线程进入临界区, 则会导致writer线程饥饿, 下面是优化后的方法: <br />
        {Img({ src: "Images/408/OS/读者写者优化.png", width: 700, align: "left", className: "m-0" })}
        <blockquote className="mb-1 mt-1" ><strong>
        增加"写优先"信号量w, 当writer线kj抢到互斥信号量w时(如果还有reader线程在临界区则writer线程在P(rw)处等待), reader线程只出不进.
        </strong></blockquote>
        <div className="h-3" />
        哲学家进餐: <br />
        {Img({ src: "Images/408/OS/哲学家进餐.png", width: 460, align: "left", className: "m-0" })}
        <blockquote className="mb-1 mt-1 w-[1600px]" ><strong>
        如何防止死锁: <br />
        方法一: 最多允许k-1个哲学家拿筷子.(一定有一个哲学家能拿到两只筷子) <br />
        方法二: 要求奇数位置哲学家先拿左边筷子再拿右边筷子, 偶数位置哲学家反之.(任一哲学家拿到第一只筷子, 则他与竞争位置的哲学家必有一人能拿到两只筷子) <br />
        方法三: 将拿左右筷子的动作作为整体互斥执行.(要么不拿, 要么一次性拿两只筷子) <br />
        方法四: 给筷子按顺序编号, 只能先拿编号小的筷子再拿编号大的筷子.(拿到k-1号筷子的哲学家一定能拿k-2号或k号筷子) <br />
        </strong></blockquote>
        <div className="h-3" />
        管程: <br />
        一个管程类似于一个类(Class); 管程中的<strong>"入口函数"</strong>(类似于类的方法)由编译器实现<strong>互斥</strong>使用, 管程中的<strong>共享数据</strong>只能通过"入口函数"<strong>互斥</strong>访问;
        管程中能定义条件(condition)变量, 但注意condition变量不同于信号量, condition变量类似于只是一个等待队列, 使用wait(condition)使当前线程等待, 使用signal(condition)从等待队列中唤醒一个线程, 
        可在"入口函数"中结合共享数据实现类似信号量的功能进而实现所需同步功能; <br />
        <strong>注意, 管程中的入口函数共用同一个互斥锁, wait()执行前会自动释放该互斥锁所以不会导致死锁(其中进入等待队列和释放互斥锁是原子的, 不会错过signal信号); 
          执行signal()但此进程(线程)还未退出函数时, 被释放的进程(线程)还要等待获取互斥锁才能接着执行. (jyy讲过condition). </strong><br />
        <div className="h-6" />
        <strong> 死锁的产生原因: <br />
        系统资源的竞争+不当的进程推进顺序. </strong><br />
        <div className="h-3" />
        <strong> 死锁的必要条件: <br />
        互斥(不能同时访问资源)、非抢占(不能抢占使用资源)、请求+保持(请求其它资源+不主动释放已占用资源)、循环等待(等待其他进程释放资源的等待链形成环路)</strong>
        <strong> 处理策略: </strong><br />
        预防死锁: 破坏死锁产生必要条件中的一个或几个. <br />
        避免死锁: 防止进入不安全状态(可能产生死锁的状态), 从而避免死锁(银行家算法). <br />
        死锁的检测和解除: 允许死锁发生, 但操作系统负责检测和解除死锁. <br />
        <div className="h-3" />
        <strong>预防死锁</strong> <br />
        <div className="pl-[1rem] ml-[2px] border-l-[3px] border-rose-200">
          破坏互斥: SPOOLing技术(逻辑上改造成可共享的资源/设备). (大部分情况不能破坏互斥)<br />
          破坏不剥夺条件: 操作系统帮助抢占必要资源, 一般需要考虑各进程优先级.(实现复杂; 资源的反复分配和释放增大系统开销)<br />
          破坏保持条件: 进程得不到所需所有资源时要释放所有资源.(容易产生饥饿; 资源的反复分配和释放增大系统开销)<br />
          破坏请求条件: 可采用静态分配方法, 一次性分配进程所需所有资源.(若运行期间保持资源, 则资源利用率低; 此方法也可能导致一些进程饥饿)<br />
          破坏循环等待: 可采用顺序资源分配法, 给各资源编号, 各进程必须按编号递增顺序请求资源(原理: 任一时刻总有进程持有当前已分配编号最大的资源, 该进程一定能继续获取资源). 
          (进程使用资源顺序可能和获取顺序不一致, 导致资源利用率低; 必须按编号大小顺序申请资源, 不便于编程)<br />
        </div>
        <div className="h-3" />
        <strong>避免死锁</strong> <br />
        <div className="pl-[1rem] ml-[2px] border-l-[3px] border-rose-200">
          安全序列: 按照这种序列所有进程都一定能顺利完成.  <br />
          安全状态: 如存在安全序列，则称系统处于安全状态.<br />
          <strong>安全性算法(计算安全序列+判断安全状态): 当前剩余空闲资源能满足至少一个进程的资源最大需求，该进程完成后释放所分配资源后又能满足剩余进程中至少一个进程的资源最大需求，以此类推若所有进程均可执行完, 则存在安全序列(处于安全状态). 
            (若当前空闲资源满足所有进程尚需资源中的最大值则可直接判断为安全状态) (安全序列不一定唯一) <br /></strong>
          <strong>银行家算法: </strong>
          {Img({ src: "Images/408/OS/银行家算法1.png", width: 720, align: "left", className: "m-0" })}
          {Img({ src: "Images/408/OS/银行家算法2.png", width: 720, align: "left", className: "m-0" })}
        </div>
        <blockquote className="mb-1 mt-1" ><strong>
          银行家算法(安全性算法)只能判断当前系统是否处于安全状态, 不能判断当前系统是否存在死锁. 
        </strong> </blockquote>
        <div className="h-3" />
        <strong>检测和解除死锁</strong> <br />
        <div className="pl-[1rem] ml-[2px] border-l-[3px] border-rose-200">
        {Img({ src: "Images/408/OS/资源申请分配图.png", width: 400, align: "left", className: "m-0" })}
        <strong>检测死锁: <br />
          在资源分配图中找到不是孤立点且所有请求边资源申请数量都小于对应空闲资源数量的进程，释放其所有请求边和分配边; 
          <br />按此方法继续若能消除所有的边，则称该图为可完全简化的；若不能完全简化，则说明系统死锁, 此时还连着边的进程就是死锁进程. </strong><br />
        <strong>解除死锁: </strong><br />
          方法1: 资源剥夺法: 挂起某些死锁进程, 释放其占有的资源然后分配给其它死锁进程. (同时要注意避免挂起进程饥饿) <br />
          方法2: 终止进程法: 终止部分或全部死锁进程. (实现简单但代价较大) <br />
          方法3: 进程回退法: 让一个或多个进程回退至可避免死锁的状态. (需要系统记录进程的历史信息, 设置还原点)<br />
        </div>
      </p>
      <h2 className="text-2xl">内存管理</h2>
      <p>
        <span className="text-lg font-bold">装载与链接(自己总结)</span> <br />
        <strong>装载</strong> <br />
        <div className="pl-[1rem] ml-[2px] border-l-[3px] border-amber-200">
          <strong>绝对装入: </strong>程序编译时编译器直接确定符号对应的实际物理地址, 即编译后文件中符号的地址是实际物理地址(绝对地址, 硬编码). (只适用于单道系统(不算操作系统)) <br />
          <strong>可重定位装入(静态重定位): </strong>程序在装入时确定符号的内存地址, 即编译后的文件中符号的地址仍为段内地址(符号在对应代码段/数据段中的相对偏移)(对其他模块的符号引用暂时不管), 
          装入后符号地址才是内存地址(如果在分页系统中则为线性逻辑地址, 因为分页系统中指令使用线性逻辑地址, 如果存在分段系统则线性逻辑地址指经过段表映射后的地址); 特点是装入程序时必须分配其要求的全部物理内存空间, 装入时一次性将所有符号逻辑地址重定位到内存地址. <br />
          <strong>动态运行时装入(动态重定位): </strong>
          程序在实际运行时才确定符号的完整内存地址, 即编译后的文件中符号的地址和装入内存后符号的地址都为其段内地址(对未装入模块的符号引用暂时不管), 
          需要重定位寄存器在运行时进行地址转换(重定位寄存器存放对应段的内存基址, 实际运行时与段内地址加起来); 特点是可以移动一个代码段/数据段在内存中的位置, 同时这也使得其允许只装入部分程序. <br />
        </div>
        <strong>链接</strong> <br />
        <div className="pl-[1rem] ml-[2px] border-l-[3px] border-amber-200">
          <strong>静态链接: </strong>装载前进行, 将各代码模块(文件)及它们所需的库函数链接为一个装入模块(一个文件). (链接过程中模块间的符号引用修改为在装入模块中对应段及段内地址(段内偏移量)) <br />
          <strong>装入时动态链接: </strong>将所需模块都装入内存, 模块(代码文件)装入内存时, 边装入边链接(将符号引用修改为对应段及段内地址). <br />
          <strong>运行时动态链接: </strong>程序执行时需要该模块才实际装入(配合动态运行时装入), 边装入边链接(同上). <br />
        </div>
        <blockquote className="mb-1 mt-1" ><strong>
          <strong>程序中的逻辑地址是链接时确定的(段号是逻辑地址的一部分), 装入和运行时确定实际装入的物理地址和分页系统的线性逻辑地址(段页式系统装入和运行时对应的页表也可能不确定). (自己理解)</strong>
        </strong></blockquote>
        <blockquote className="mb-1 mt-1" ><strong>
        分不分页对于链接和装载透明; 装载重点在于本模块符号地址的确定, 链接重点在于模块间引用符号地址的确定. 
        </strong></blockquote>
        <blockquote className="mb-1 mt-1" ><strong>
          交换技术一般指整个进程换入换出, 注意与虚拟内存的页面换入换出区别. (不用虚拟存储技术应该也可以有SWAP区用于存放挂起进程数据) <br />
          页表的长度基于虚拟地址空间的大小, 同一操作系统中不同进程的虚拟地址空间一般都相同, 所以同时其页表长度也都相同. <br />
          文件区离散分配, 对换区连续分配: 应该是指要载入同一个页面的数据在文件区不连续, 而内存页面数据在交换区中以页面为整体连续存放. (个人理解) <br />
          Unix页面交换方式: 未使用过的页面从文件区调入内存, 使用过的页面均写回对换区. <br />
        </strong></blockquote>
        <hr></hr>
        <blockquote className="mb-1 mt-1" ><strong>
          防混淆: 顺序文件意思是记录线性存储的有结构文件(可顺序存储可链式存储, 一般默认顺序存储); 顺序存储逻辑地址连续; 顺序结构中记录还要有序. <br />
        </strong></blockquote>
        <blockquote className="mb-1 mt-1" ><strong>
          索引文件中每个索引项对应一个记录, 索引项不需要有序;<br />
          索引顺序文件是顺序文件和索引文件的结合, 索引项指向的分组文件中的记录不要求有序, 分组间记录要有序, 以分组中关键字作为键的索引项有序(类似数据结构的索引查找表, 要求索引表中关键字有序, 子结点之间关键字有序)<br />
          B+树中无论分支还是叶子节点关键字都要有序, 且叶子结点一个关键字对应一个记录. <br />
          (索引项本质是能代表一组记录, 索引项不一定要按照什么有序. 个人理解)
        </strong></blockquote>
        <blockquote className="mb-1 mt-1" ><strong>
          个人理解: <br />
          硬链接就是目录文件中的一个索引项, 为了防止形成环路, 硬链接不能指向另一个目录文件(理论上可以指向后继目录结点); 软连接是一个包含目标路径的文件(叶子结点), 可以指向任意文件(包括任意目录文件). <br />
          (文件至少有一个硬链接) <br />
          inode就是索引节点, 记录文件的元数据, 减少目录项开销从而减少I/O次数, 提高检索速度. <br />
        </strong></blockquote>
        <blockquote className="mb-1 mt-1" ><strong>
          页面大小须和内存物理块大小相等, 外存块大小不一定和内存物理块大小相等. 外存中的逻辑地址(文件中偏移量)通常也以字节为单位. <br />
        </strong></blockquote>
        <blockquote className="mb-1 mt-1" ><strong>
          离散分配的优点: 存储空间利用率高, 方便拓展; <br />
          个人理解: 注意固定分配才没有外部碎片(内存的段式存储属于可变离散分配). <br />
        </strong></blockquote>
        <hr />
        <blockquote className="mb-1 mt-1" ><strong>
        计算题注意事项: <br />
        <ul>
          <li>编址单位(字? 字节? bit(位图!))、分配单位(多少B?KB?) -&gt; 表项长度(多少B?bit(位图!)?) <br /></li>
          <li>起始位置(0? 1? 其他位置开始?) <br /></li>
          <li>逻辑地址OR物理地址? 表指向的地址OR表项所在地址? <br /></li>
        </ul>
        </strong></blockquote>
      </p>
    </div>
  )
}
