import Latex from "react-latex-next"
import 'katex/dist/katex.min.css'; // 导入 KaTeX 样式

function Img({ src, width, align, className }: { src: string, width?: number, align?: string, className?: string }) {
  if (align !== "left") align = "mx-auto"
  return (
    <img className={`${className} ${align} `} src={src} alt="image" width={width} />
  )
}

export default function CSNetReview() {
  return (
    <div>
      <div className="prose daisy-prose p-6 max-w-[1500px]">
      <h2 className="text-3xl">计算机网络重点复习</h2>
      <p className="font-bold">CSMA/CD与CSMA/CA <br />
        <ul>
          <li>
            CSMA/CD 和 CSMA/CA 都是 MAC(Medium Access Control, 介质访问控制) 协议, 属于动态介入控制技术. <br />
            二者都能监听信道是否空闲; 但由于无线通信的特点(发送信号强度远大于接收信号强度, 且存在隐蔽站问题), 无线通信时无法检测碰撞. <br />
          </li>
          <li>
            CSMA/CD中96<Latex>{`$\\mu s$`}</Latex>IFG(InterFrameGap)的作用: <br />
            在接收方成功收到上一帧(如数据帧)后, 它可能需要时间进行处理(CRC校验+处理缓冲区数据). <br />
          </li>
          <li>
            CSMA/CA中10<Latex>{`$\\mu s$`}</Latex>(一般)SIFS(Short InterFrame Space)和DIFS(Distributed InterFrame Space)的作用: <br />
            SIFS保证对方能做好接收准备; ACK, RTS, CTS 等高优先级帧只需要等待SIFS. DIFS&gt;SIFS 保证前述高优先级帧能先发送. <br />
          </li>
          <li>
            数据帧之间都要间隔DIFS帧间间隔时间+随机退避时间(0, ... , <Latex>{`$2^{k+2}-1$`}</Latex>)(<Latex>{`$k\\le 6$`}</Latex>); 
            一般在数据帧较长时使用RTS和CTS, 即信道预约(虚拟载波侦听)技术, 以防传输数据帧时冲突. (CTS用以解决隐蔽站问题) <br />
          </li>
          <li>
            CSMA、CSMA/CD 不使用确认机制(提供不可靠传输服务), CSMA/CA 采用停等协议. <br />
          </li>
          {Img({ src: "Images/408/CSNet/CSMACA.png", width: 800, align: "left", className: "m-0 mt-1" })}
          {Img({ src: "Images/408/CSNet/RTSCTS.png", width: 800, align: "left", className: "m-0 mt-1" })}
        </ul>
      </p>
      <hr />
      <p className="font-bold">
        <ul>结合GPT理解: <br />
          <li>一个设备可以有多个网络接口, 一个网络接口也可以有多个IP地址和MAC地址(多播组地址), 对于单播MAC地址(第一字节第一位为0)只需要保证其所在网络中唯一即可(一般不需要绝对全球唯一)</li>
          <li>一个网络号可以是另一个网络号的前缀，通过子网掩码可以有效地区分两个网络</li>
          <li>
            如果路由器两端为两个不同网络广播域，即使两边各有1个机器MAC地址相同，发送到的包也能正确转发？如果用MAC地址映射接口肯定会冲突，所以是直接用IP地址映射接口？ <br />
            GPT: 是的, 路由器通过 IP 地址映射接口号来转发数据, 而不用MAC地址映射接口号(以防两端存在MAC地址相同); 路由器能隔离广播域, 只要隔离了广播域，MAC 地址相同的设备可以正常工作，而不会引发冲突.
          </li>
          <li>虽然MAC地址不要求必须全球唯一, 但为了方便跨网(比如移动设备)等使用场景, 往往使用全球管理的MAC地址(唯一性, 永久性)避免冲突. </li>
          <li>MAC地址和IP地址的本质区别(自己理解): MAC地址一般绑定至设备, 设备位置的大幅变动相当于MAC地址位置的大幅变动, 导致可能需要修改所有的交换节点中的帧交换表, 所以只适用于小型本地网络;
            IP地址的拓扑位置一般只有边界处动态变化, 设备接入时分配的IP地址属于该局部地域, 所以分支节点的路由表一般都不需要变动, 比较稳定, 适用于大规模网络.</li>
          <li> {/*todo*/}
            帧交换表中填的是[直连目的接口MAC地址, 发出接口号], 直接匹配目标接口MAC地址. <br />
            路由表中填的是[目标网络号/特定主机路由, 发出接口号/下一跳IP地址, 类型(直连/静态/动态)], 匹配路由条目类型为直连时直接从接口发出, 
            匹配路由条目为下一跳IP地址时用该IP地址再次查表应能查到直连条目, 然后从对应接kj发出; 当目标在直连网络中时使用目的IP地址映射MAC地址, 当目标不在直连网络中时用下一跳IP地址映射MAC地址.
          </li>
          <li>
            只要路由器在第三层工作, 其不同接口所在网络就一定为不同子网, 且路由器间不透明.
          </li>
          <li>
            OSPF分区域的目的主要是限制拓扑结构, 所有非主干区域都只能和主干区域相连, 从而减少了网络复杂度, 同时将洪泛法交换链路信息(LSA)限制在区域内, 边界路由器偶尔交换整个区域的链路状态信息即可, 减少了整个网络的通信量.
          </li>
        </ul>
      </p>
      </div>
    </div>
  )
}
