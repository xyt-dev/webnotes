import DaisyTable from "@/components/DaisyTable"
export default function TablePage() {
  return (
    <div className="prose daisy-prose max-w-[1500px] leading-[35px] mx-auto pt-6">
      <h1 className="text-center">Tasks</h1>
        <DaisyTable heads={["Tasks", "Time"]} indexed>
          <tr>
            <td>肖1000 10题 + 复习知识点</td>
            <td>0.5h</td>
          </tr>
          <tr>
            <td>阅读的逻辑 1篇 + 单词</td>
            <td>1h</td>
          </tr>
          <tr>
            <td>数学20题</td>
            <td>3.5h</td>
          </tr>
          <tr>
            <td>408两节</td>
            <td>2h</td>
          </tr>
        </DaisyTable>
        DataStructure: 29节
        OS: 16节
        机组: 27节
        计网: 27节
        <br />
        三大公式习题复习<br />
        级数复习, 背常用泰勒级数, 傅里叶级数<br />
        数列习题复习<br />
        背常用积分公式, 有理分式积分<br />
    </div>
    
  )
}