import DaisyTable from "@/components/DaisyTable"
export default function PCTable() {
  return (
    <div className="prose daisy-prose max-w-[1500px] leading-[35px] mx-auto pt-6">
      <h1 className="text-center">PC</h1>
      <h3 className="text-center">6750+7500F(2024.8)</h3>
        <DaisyTable heads={["Component", "Price"]} indexed>
          <tr>
            <td>R5 7500F+B650M迫击炮WIFI</td>
            <td>2160</td>
          </tr>
          <tr>
            <td>蓝宝石RX6750GRE10G白金 + 650W电源</td>
            <td>2200</td>
          </tr>
          <tr>
            <td>瓦尔基里240水冷</td>
            <td>260</td>
          </tr>
          <tr>
            <td>玩嘉T02 手提机箱240水冷</td>
            <td>200</td>
          </tr>
          <tr>
            <td>芝奇16Gx2 6400 C32</td>
            <td>800</td>
          </tr>
          <tr>
            <td>致钛TiPlus7100 500G+1T</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>风扇x5</td>
            <td>130</td>
          </tr>
          <tr>
            <td></td>
            <td>6750</td>
          </tr>
        </DaisyTable>
    </div>
    
  )
}