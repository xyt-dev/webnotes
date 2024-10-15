import DaisyTable from "@/components/DaisyTable"
export default function TablePage() {
  return (
    <div className="prose daisy-prose max-w-[1500px] leading-[35px] mx-auto pt-6">
      <h1 className="text-center">Tasks</h1>
        DataStructure: 29节
        OS: 16节
        机组: 27节
        计网: 27节
        <br />
        三大公式习题复习<br />
        级数复习, 背常用泰勒级数, 傅里叶级数<br />
        数列习题复习<br />
        背常用积分公式, 有理分式积分<br />
        <a className="text-blue-500" href="https://www.bilibili.com/video/BV1sw411c7iV/?spm_id_from=333.788.recommend_more_video.0&vd_source=300821d3481ca096ffd4cc3c140d2ced" target="_blank">政治选择题核心带背</a>
    </div>
    
  )
}