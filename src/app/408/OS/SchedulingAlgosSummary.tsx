 export default function SchedulingAlgosSummary() {
  return (
    <div>
      <details open>
        <summary className="cursor-pointer font-bold w-fit text-lg"><strong>多道批处理系统中的调度算法: </strong></summary>
        <ul className="m-0">
          <li><strong>FCFS(First Come First Serve, 先来先服务)</strong>
            <ul>
              <li><strong>算法思想: </strong>主要从“公平”的角度考虑. </li>
              <li><strong>算法规则: </strong>按照作业/进程到达的先后顺序进行服务. </li>
              <li><strong>用于作业/进程调度: </strong>
                <ul>
                  <li>作业调度: 考虑哪个作业先到达后备队列. </li>
                  <li>进程调度: 考虑哪个进程先到达就绪队列. </li>
                </ul>
              </li>
              <li><strong>是否可抢占？</strong> 非抢占式算法. </li>
              <li><strong>优点：</strong>
                <ul>
                  <li>公平. </li>
                  <li>算法实现简单. </li>
                </ul>
              </li>
              <li><strong>缺点:</strong>
                <ul>
                  <li>排在长作业（进程）后面的短作业需要等待很长时间，带权周转时间很大. </li>
                  <li>对短作业来说，用户体验不好. </li>
                  <li>对长作业有利，不利于短作业. </li>
                </ul>
              </li>
              <li><strong>是否会导致饥饿? </strong> 不会. </li>
            </ul>
          </li>
          <li><strong>SJF(Shortest Job First, 最短作业优先)(个人理解, 原理类似于1叉哈夫曼树)</strong>
            <ul>
              <li><strong>算法思想: </strong>追求最少的平均等待时间和平均带权周转时间. </li>
              <li><strong>算法规则: </strong>最短的作业/进程优先得到服务. </li>
              <li><strong>用于作业/进程调度：</strong>
                <ul>
                  <li>作业调度:简称"短进程优先"(SPF, Shortest Process First). </li>
                  <li>进程调度:SRTN(Shortest Remaining Time Next, 最短剩余时间优先)为抢占式版本. </li>
                </ul>
              </li>
              <li><strong>是否可抢占? </strong>
                <ul>
                  <li>非抢占式: SPF. </li>
                  <li>抢占式: SRTN. </li>
                </ul>
              </li>
              <li><strong>优点: </strong>
                <ul>
                  <li><strong>具有"最短"平均等待时间和平均周转时间. (引号因为运行时间不一定能准确预测)</strong></li>
                </ul>
              </li>
              <li><strong>缺点: </strong>
                <ul>
                  <li>不公平: 对短作业有利, 对长作业不利. </li>
                  <li>可能产生"饥饿"现象. </li>
                  <li>作业/进程的运行时间不一定真实, 可能无法实现真正的短作业优先. </li>
                </ul>
              </li>
              <li><strong>是否会导致饥饿? </strong>
                <ul>
                  <li>会: 如果短作业源源不断地到来，长作业可能得不到服务，最终饥饿. </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>HRRN(Highest Response Ratio Next, 最高响应比优先)</strong>
            <ul>
              <li><strong>算法思想: </strong>综合考虑作业/进程的等待时间和要求服务的时间, 要求服务时间短的作业应使其响应更快. </li>
              <li><strong>算法规则: </strong>
                <ul>
                  <li>在每次调度时先计算各个作业/进程的响应比，选择响应比最高的作业/进程为其服务. </li>
                  <li>公式：<code className="p-2 pb-1">响应比 = (等待时间 + 要求服务时间) / 要求服务时间. </code></li>
                  <li>响应比 ≥ 1. </li>
                </ul>
              </li>
              <li><strong>用于作业/进程调度: </strong>即可用于作业调度，也可用于进程调度. </li>
              <li><strong>是否可抢占? </strong>非抢占式算法。因此只有当前运行的作业/进程主动放弃处理机时，才需要调度，计算响应比. </li>
              <li><strong>优缺点: </strong>
                <ul>
                  <li>综合考虑了等待时间和运行时间(要求服务时间). </li>
                  <li>当等待时间相同时，要求服务时间短的优先(类似于 SJF 的优点). </li>
                  <li>当要求服务时间相同时，等待时间长的优先(类似于 FCFS 的优点). </li>
                  <li>对于长作业来说，随着等待时间越来越久，其响应比也会越来越高，从而避免了长作业饥饿的问题. </li>
                </ul>
              </li>
              <li><strong>是否会导致饥饿? </strong>不会. </li>
            </ul>
          </li>
          <blockquote className="m-0 mb-2 mt-[-0.5rem]">
            FCFS考虑了等待时间(单纯的等待时间公平), 未考虑运行时间; SJF考虑了运行时间, 未考虑等待时间; HRRN综合考虑了等待时间和运行时间(响应比). <br />
            SRTN仍然可能导致饥饿, 所以不能说抢占式算法就不会导致饥饿.
          </blockquote>
        </ul>
      </details>
      <details open>
        <summary className="cursor-pointer font-bold w-fit text-lg"><strong>交互式系统系统中的调度算法: </strong></summary>
        <ul className="m-0">
          <li><strong>时间片轮转 (Round Robin)</strong>
            <ul>
              <li><strong>算法思想:</strong> 公平地、轮流地为各个进程服务, 让每个进程在一定时间间隔内都可以得到响应.</li>
              <li><strong>算法规则:</strong>
                <ul>
                  <li>按照各进程到达就绪队列的顺序, 轮流让各个进程执行一个时间片 (如 100ms).</li>
                  <li>若进程未在一个时间片内执行完, 则剥夺处理机, 将进程重新放到就绪队列队尾重新排队.</li>
                </ul>
              </li>
              <li><strong>用于作业/进程调度:</strong> 用于进程调度 (只有作业放入内存建立了相应的进程后, 才能被分配处理机时间片).</li>
              <li><strong>是否可抢占?</strong>
                <ul>
                  <li>若进程未能在时间片内运行完, 将被强行剥夺处理机使用权, 因此时间片轮转调度算法属于<strong>抢占式</strong>的算法.</li>
                  <li>由时钟装置发出<strong>时钟中断</strong>来通知CPU时间片已到.</li>
                </ul>
              </li>
              <li><strong>优缺点:</strong>
                <ul>
                  <li>优点: 公平, 响应快, 适用于分时操作系统.</li>
                  <li>缺点: 由于高频率的进程切换, 因此有一定开销; 不区分任务的紧急程度.</li>
                </ul>
              </li>
              <li><strong>是否会导致饥饿?</strong> 不会.</li>
              <li>
                <strong>补充:</strong> 时间片太大或太小分别有什么影响? <br />
                时间片太大: 响应时间增大, 甚至退化为FCFS. <br />
                时间片太小: 进程切换频率增大, 系统开销增大, 进程实际执行占比减少. (时间片趋于0且忽略开销则相当于运行速度被各进程均分的并行执行)<br />
              </li>
            </ul>
          </li>
          <blockquote className="m-0 mb-2 mt-[-0.5rem]">
            <strong>如果一个进程时间片用完下处理机同时另一个进程也同时到达, 默认让新到达的进程先进入就绪队列.</strong>
          </blockquote>
          <li><strong>优先级调度 (Priority Scheduling)</strong>
            <ul>
              <li>
                  <strong>算法思想:</strong> 随着计算机的发展, 特别是实时操作系统的出现, 越来越多的应用场景需要根据任务的紧急程度来决定处理顺序.
              </li>
              <li>
                  <strong>算法规则:</strong> 调度时选择优先级最高的作业/进程.
              </li>
              <li>
                  <strong>用于作业/进程调度:</strong> 既可用于作业调度, 也可用于进程调度. 甚至还可用于 I/O 调度中. 
              </li>
              <li>
                  <strong>是否可抢占:</strong> 抢占式、非抢占式都有. 做题时的区别在于:
                  <ul>
                      <li>非抢占式只需在进程主动放弃处理机时进行调度即可. </li>
                      <li>而抢占式还需在就绪队列变化时, 检查是否会发生抢占. </li>
                  </ul>
              </li>
              <li>
                  <strong>优缺点:</strong>
                  <ul>
                      <li>
                          <strong>优点:</strong> 用优先级区分紧急程度、重要程度, 适用于实时操作系统. 可灵活地调整各类作业/进程的优先级.
                      </li>
                      <li>
                          <strong>缺点:</strong> 如果设计不当, 可能会导致低优先级作业/进程长期得不到执行.
                      </li>
                  </ul>
              </li>
              <li>
                  <strong>是否会导致饥饿?</strong> 会.
              </li>
              <li>
                  <strong>补充: </strong> 就绪队列可以不止一个, 可以按不同优先级分组. <br />
                  根据优先级是否可以改变, 分为静态优先级和动态优先级. <br />
                  优先级一般而言: 系统进程 &gt; 用户进程; 前台进程 &gt; 后台进程; I/O型进程 &gt; 计算型进程(CPU繁忙型进程), 因为让I/O设备尽早投入工作与CPU并行, 可提升资源利用率和系统吞吐率.
              </li>
            </ul>
          </li>
          <li><strong>多级反馈队列调度</strong>
            <ul>
              <li>
                  <strong>算法思想:</strong> 对其他调度算法的折中权衡. 
              </li>
              <li>
                  <strong>算法规则:</strong>
                  <ol>
                      <li>设置多级就绪队列, 各级队列优先级从高到低, 时间片从小到大. </li>
                      <li>新进程到达时先进入第 1 级队列, 按 FCFS 原则排队等待分配时间片。若用完时间片进程还未结束，则进程进入下一级队列队尾. </li>
                      <li>只有第k级队列为空时, 才会为 k+1 级队头的进程分配时间片. </li>
                  </ol>
              </li>
              <li>
                  <strong>用于作业/进程调度:</strong> 用于进程调度. 
              </li>
              <li>
                  <strong>是否可抢占:</strong> 是抢占式的算法. 在k级队列的进程运行过程中, 若更上级的队列(1~k-1级)中进入了一个新进程, 则新进程会抢占处理机. 原来运行的进程放回第k级队列队尾.
              </li>
              <li>
                  <strong>优点: </strong>
                  对各类型进程相对公平(FCFS的优点); 每个新到达的进程都可以很快就得到响应(RR的优点); 短进程只用较少的时间就可完成(SPF的优点); 不必估计进程的运行时间; 
                  可灵活地调整对各类进程的偏好程度(比如可将I/O等待的进程重新放回原队列(重置时间片), 这样I/O型进程就可以保持较高优先级).
              </li>
              <li>
                  <strong>是否会导致饥饿?</strong> 会.
              </li>
            </ul>
          </li>
        </ul>
      </details>
    </div>
  )
}
