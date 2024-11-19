import Latex from "react-latex-next"
import 'katex/dist/katex.min.css'; // 导入 KaTeX 样式
import Space from "@/components/Space";

function Img({ src, width, align }: { src: string, width?: number, align?: string }) {
  if (align !== "left") align = "mx-auto"
  return (
    <img className={`mt-1 mb-1 ${align}`} src={src} alt="image" width={width} />
  )
}

export default function Review() {
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
        理解用户级线程: <br />
        在用户级线程库中, 内核级线程(物理PC)并不会直接在用户级线程的代码中执行，而是在一个统一的调度程序中执行，从多个虚拟的用户级线程的代码中选择并取出一段来执行. (其实就是一种虚拟化技术) <br />
        <div className="h-3" />
        多线程模型: <br />
        多线程模型中并发性较好的模型是<strong>一对一模型</strong>和<strong>多对多模型</strong>, 因为多对一模型中一个内核级线程阻塞会导致其所有用户级线程全部阻塞. <br />
      </p>
    </div>
  )
}