import Table from "@/components/DaisyTable"
export default function EnglishWords() {
  return (
    <div className="prose daisy-prose max-w-[1500px] leading-[35px] mx-auto pt-6">
      <h1 className="text-center">Accumulation</h1>
      <Table heads={["Word", "Explanation", "Phrase",  "Sentence"]} indexed>
        <tr> 
          <td>gallery</td> <td>n. (艺术作品的)展览; 画廊</td>
        </tr>
        <tr> 
          <td>saleroom</td> <td>n. 拍卖场</td> 
        </tr>
        <tr>
          <td>justified</td>
        </tr>
        <tr>
          <td>involved</td> 
        </tr>
        <tr> 
          <td>outrage</td> <td>n. 愤慨</td>
        </tr>
        <tr> 
          <td>longstanding</td> <td>adj. 由来已久的,长期存在的</td>
        </tr>
        <tr>
          <td>constitutionality</td> <td>n. 符合宪法性</td>
          <td></td>
          <td>
              Instead, the company has done precisely what it had long promised it would not: challenge
            the <strong>constitutionality</strong> of Vermont's rules in the federal court, as part of 
            an effort to keep its Vermont nuclear power plant running.
          </td>
        </tr>
        <tr>
          <td>democratize</td> <td>v. 使民主化; <strong>使大众化</strong></td>
        </tr>
        <tr>
          <td>uniformity</td> <td>n. 相同性; 统一性; 一致性</td>
        </tr>
        <tr>
          <td>discourse</td> <td>n. 对话; 交流</td>
        </tr>
        <tr>
          <td>deference</td> <td>n. 尊重,尊敬</td>
        </tr>
        <tr>
          <td>absorb</td>
        </tr>
        <tr>
          <td>consumption</td>
        </tr>
        <tr>
          <td>array</td> <td>n. 一系列,一批,大量</td>
          <td>vast arrays of</td>
          <td>
              People are <strong>absorbed into</strong> "a culture of consumption" launched by the
            19th-century department stores that offered <strong>vast arrays of</strong> goods in an
            elegant atmosphere, instead of intimate stores <strong>catering to</strong> a knowledgeable elite.
          </td>
        </tr>
        <tr>
          <td>unanimous</td> <td>adj. 一致的,一致同意的</td>
        </tr>
        <tr>
          <td>ruling</td> <td>n. 裁决; 判决</td>
        </tr>
        <tr>
          <td>corruption</td>
        </tr>
        <tr>
          <td>conviction</td> <td>n. 定罪</td>
          <td></td>
          <td>She had a previous conviction for a similar offense.</td>
        </tr>
        <tr>
          <td>automobil</td>
        </tr>
        <tr>
          <td>overturn</td> <td>v. 推翻,撤销</td>
        </tr>
        <tr>
          <td>ethic</td> <td>n. [~s]道德准则; 伦理标准</td>
          <td></td>
          <td>
              In a rare <strong>unanimous ruling</strong>, the US Supreme Court has <strong>overturned</strong>
            the <strong>corruption conviction</strong> of a former Virginia governor. But it did so while
            <strong>holding its nose at the ethics of his conduct</strong>, which included acception gifts 
            such as a Rolex watch and a Ferrari <strong>automobile</strong> from a company seeking access to government.
          </td>
        </tr>
        <tr>
          <td></td> <td></td> <td>marvel at &nbsp; 对...感到惊奇</td>
        </tr>
        <tr>
          <td>learned</td> <td>adj. 学识丰富的,知识渊博的</td>
        </tr>
        <tr>
          <td>deem</td> <td>v. [不用与进行时]认为,视为; 觉得</td>
        </tr>
        <tr>
          <td>circulation</td> <td>n. [报刊的]发行</td>
          <td></td>
          <td>
              <strong>To read such books today is to marvel at</strong> the fact that their learned contents
            were once <strong>deemed</strong> suitable(作补语, 描述主语"contents"的状态) for publication in
            <strong>general-circulation</strong> dailies.  (综合性日报, 大众日报)
          </td>
        </tr>



      </Table>
    </div>
  )
}
