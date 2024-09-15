import TextBox from "@/components/RawTextBox"
function Episode({href, children}: {href: string, children: any}) {
  return (
    <a className={"text-blue-500 hover:text-blue-700 text-lg block w-fit mx-auto"} href={href}>{children}</a>
  )
}
export default function RickMortyPage() {
  return (
    <div className={`w-[100%] mx-auto`}>
      <TextBox>
        <Episode href="https://drive.google.com/file/d/1oypGZckYusBc8dLOPBvz6vkgNFg-wpSb/view?usp=drive_link">第一集</Episode> {/* 1-1 */}
        <Episode href="https://drive.google.com/file/d/1-qxwTX51hEdowGHQjqzt9EiXgikyBSLb/view?usp=drive_link">第二集</Episode> {/* 1-4 */}
        <Episode href="https://drive.google.com/file/d/1-cgZnuAgdq5hNNHIIx3yzcbEnzm044Py/view?usp=drive_link">第三集</Episode> {/* 1-4 */}
        <Episode href="https://drive.google.com/file/d/1DcQkaGk9Rx_rKjUcc7IlOzwJQi7gVuc6/view?usp=drive_link">第四集</Episode> {/* 1-10 */}
        <Episode href="https://drive.google.com/file/d/1d92Qe-xtlkV0bU_F5deoO5v_YFF1UMzJ/view?usp=drive_link">第五集</Episode> {/* 1-11 */}
        <Episode href="https://drive.google.com/file/d/1q3KeRmUsXEDmw3FjYz3tM8LplJwe3_ON/view?usp=drive_link">第六集</Episode> {/* 2-1 */}
        <Episode href="https://drive.google.com/file/d/1h3PyQ7H_1TilvKCw6W882mOtoJrq-ybe/view?usp=drive_link">第七集</Episode> {/* 2-4 */}
        <Episode href="https://drive.google.com/file/d/1SC6MyyICYNlqSHM3TiZTmc1QkHYBPqvu/view?usp=drive_link">第八集</Episode> {/* 2-5 */}
        <Episode href="https://drive.google.com/file/d/1cjgWtYOjCD_-TJNUaV5c1g6l5ap7_YoV/view?usp=drive_link">第九集</Episode> {/* 2-6 */}
        <Episode href="https://drive.google.com/file/d/1pqD5MdlRtLJfyQRxVI-oaU0f-CN_yWXN/view?usp=drive_link">第十集</Episode> {/* 2-10 */}
        <Episode href="https://drive.google.com/file/d/1o4sT8rzFQGX64CyW99hW_mV7xvOusnUW/view?usp=drive_link">第十一集</Episode> {/* 3-1 */}
        <Episode href="https://drive.google.com/file/d/1f4Lrz-bypF2PIJex2ZkFj761qXZF0JLH/view?usp=drive_link">第十二集</Episode> {/* 3-3 */}
        <Episode href="https://drive.google.com/file/d/18-bF0uMi1qAr4jn_6sNpyZCZ0ahm8Opb/view?usp=drive_link">第十三集</Episode> {/* 3-6 */}
        <Episode href="https://drive.google.com/file/d/1z02v8JkEctLLNZc-XIA7XcG4xkAszmKy/view?usp=drive_link">第十四集</Episode> {/* 3-7 */}
        <Episode href="https://drive.google.com/file/d/1TvVdycdy5UwOPOnC2vDekJNuP6fnW_74/view?usp=drive_link">第十五集</Episode> {/* 3-8 */}
        <Episode href="https://drive.google.com/file/d/1JbIcxLywMuEXem4BEO8IfqREKn9c0GuU/view?usp=drive_link">第十六集</Episode> {/* 4-1 */}
        <Episode href="https://drive.google.com/file/d/1iRf9LSVmd-v0WmArrzZTw1DzLJlmx-ah/view?usp=drive_link">第十七集</Episode> {/* 4-3 */}
        <Episode href="https://drive.google.com/file/d/1KFA7NtUNFGYx7fqsZWh0ls_rXMqX9kVF/view?usp=drive_link">第十八集</Episode> {/* 4-8 */}
        <Episode href="https://drive.google.com/file/d/1GLngrj50IJnUiwLUrv3SSnfrzXJI1WPn/view?usp=drive_link">第十九集</Episode> {/* 4-10 */}
        <Episode href="https://drive.google.com/file/d/1F6WbtGNKptumGDGqblhCSOrviLlS6QYF/view?usp=drive_link">第二十集</Episode> {/* 5-9 */}
        <Episode href="https://drive.google.com/file/d/1-OUl5bXLfCPhHTS5KWVbz5PjdnLsW1h8/view?usp=drive_link">第二十一集</Episode> {/* 5-10 */}
        <Episode href="https://drive.google.com/file/d/1e9xGWzNsIlaB-TQXtj0h03PzMxvKwfbm/view?usp=drive_link">第二十二集</Episode> {/* 6-1 */}
        <Episode href="https://drive.google.com/file/d/1Axk3TgbVi8y9BfxWdI7a1flpHNyUe4Ys/view?usp=drive_link">第二十三集</Episode> {/* 6-4 */}
        <Episode href="https://drive.google.com/file/d/1ToCbCGGg10hLYhWoYTKK2iP7upL4xJNL/view?usp=drive_link">第二十四集</Episode> {/* 6-6 */}
        <Episode href="https://drive.google.com/file/d/1T8_Cc5WxGXBHn8FX2XX7mYm4XwY1TR_j/view?usp=drive_link">第二十五集</Episode> {/* 7-5 */}
      </TextBox>
    </div>
  )
}