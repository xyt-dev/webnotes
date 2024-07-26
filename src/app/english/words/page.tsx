import Table from "@/components/DaisyTable"
export default function EnglishWords() {
  return (
    <div className="prose daisy-prose max-w-[1350px] leading-[35px] mx-auto pt-6">
      <h1 className="text-center">Accumulation</h1>
      <Table heads={["Word", "Explanation", "Phrase",  "Sentence"]} indexed>
        <tr> 
          <td>gallery</td> <td>n. (艺术作品的)展览; 画廊</td>
        </tr>
        <tr> 
          <td>saleroom</td> <td>n. 拍卖场</td> 
        </tr>
        <tr> <td></td> </tr>
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
            the constitutionality of Vermont's rules in the federal court, as an effort to keep its Vermont
            nuclear power plant running.
          </td>
        </tr>
        <tr>

        </tr>
      </Table>
    </div>
  )
}