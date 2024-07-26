import Table from "@/components/DaisyTable"
export default function EnglishWords() {
  return (
    <div className="prose daisy-prose max-w-[1350px] leading-[35px] mx-auto pt-6">
      <h1 className="text-center">Accumulation</h1>
      <Table heads={["Word", "Phrase", "Sentence"]} indexed>
        <tr> 
          <td>gallery</td> 
          <td>(艺术作品的)展览; 画廊</td> 
        </tr>
        <tr> 
          <td>saleroom</td> 
          <td>拍卖场</td> 
        </tr>
        <tr>
          <td>justified</td>
        </tr>
        <tr>
          <td>involved</td> 
        </tr>
        <tr> 
          <td>outrage</td>
        </tr>
        <tr><></><td>asf</td> </tr>
        <tr> </tr>
      </Table>
    </div>
  )
}