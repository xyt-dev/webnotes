"use client"
import DaisyProsePage from "@/components/DaisyProsePage"
import TextBox from "@/components/RawTextBox"
import { useEffect, useRef, useState } from "react";

function Poetry({ children }: { children?: React.ReactNode }) {
  return (
    <TextBox className="whitespace-pre-wrap text-center mb-10 text-xl !mx-5">
      {children}
    </TextBox>
  )
}

function Comment({ children, src }: {children?: React.ReactNode, src: string} ) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 处理鼠标悬停
  const handleHover = () => {
    setIsHovered(true);
  };

  // 处理鼠标离开
  const handleLeave = () => {
    setIsHovered(false);
  };

  // 处理点击播放
  const handleClick = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="">
      {/*  语音使用Xz乔希, GPT-Sovits训练系列 */}

      <audio ref={audioRef} src={src} /> {/* 将音频文件放在 public/audio 目录 */}

      {/* 交互文字 */}
      <div
        className={`
          font-medium cursor-pointer
          whitespace-pre-wrap
          transition-all duration-300
          ${isHovered ? 'text-blue-500 scale-[1.01]' : 'text-gray-700'}
          ${isPlaying ? 'animate-pulse' : ''}
        `}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label="Play audio"
      >

        {children}
        
      </div>
    </div>
  );
}

export default function PoetryPage() {
  const [checked, setChecked] = useState(false);
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    const audio = new Audio('poetry/homeland song.ogg');
    audio.preload = "auto";
    const title = document.getElementById('title');
    let textBoxs = null;
    if (container.current)
      textBoxs = container.current.querySelectorAll('.RawTextBox');

    if (checked) {
      audio.play()
      interval = setInterval(() => {
        const bgColor = Math.random() * 360;
        const colors = [(bgColor + 120) % 360,  (bgColor + 180) % 360, (bgColor + 240) % 360]
        document.body.style.backgroundColor = `hsl(${bgColor}, 100%, 70%)`;
        if (title) title.style.color = `hsl(${colors[1]}, 100%, 50%)`;
        let prev1Color = 0;
        let prev2Color = 0;
        if (textBoxs) textBoxs.forEach((element) => {
          let color = Math.floor(Math.random() * 3);
          while (color == prev1Color || color == prev2Color) color = Math.floor(Math.random() * 3);
          (element as HTMLElement).style.color = `hsl(${(colors[color]) % 360}, 100%, 50%)`;
          prev2Color = prev1Color;
          prev1Color = color;
        })
      }, 515);
    }

    return () => {
      if (interval) clearInterval(interval);
      document.body.style.backgroundColor = '';
      if (title) title.style.color = '';
      if (textBoxs) textBoxs.forEach((element) => {
        (element as HTMLElement).style.color = '';
      })
      audio.pause()
    };
  }, [checked]);

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (
    <DaisyProsePage>
      <div ref={container}>
      <TextBox className="!border-none shadow-none text-center mb-10 pb-6 !mx-5 text-lg">
        <h2 id="title" className="text-cyan-300 mb-0 mt-0">高山流水大诗人诗词集</h2>
      </TextBox>

      <TextBox className="!border-none shadow-none text-center mb-6 pb-6 pt-0 !mx-5 text-lg">
        <label className="daisy-swap text-3xl">
          <input type="checkbox" onChange={handleChange} />
          <div className="daisy-swap-on">	😎 </div>
          <div className={`daisy-swap-off daisy-tooltip daisy-tooltip-open`} data-tip="点我开始嗨 !"> 😊 </div>
        </label>
        <br />


      </TextBox>

      <Poetry>
        {`
满江红·軍旗颂  

 彩云满天，
 旗更艳，
 气象万千。
 五十年，
 南征北战，
 风火硝烟。
 井岗山头傲霜雪，
 延河岸边迎风卷。
 老前辈，
 碧血映“八一”，
 換人间。

 新一代，
 继伟业。
 除“四害”，
 谋新篇。
 长征兴未艾，
 快马加鞭。
 六連举旗树榜样，
 三軍迈步齐向前。
 要实现国防现代化，
 梦必圆！

 ————高山流水 
 九七七年 “八一”建军节50周年
      
      ` }
      </Poetry>

      <TextBox className="whitespace-pre-wrap text-center mb-10 !mx-5">
专业文学评论: 
      <Comment src="/poetry/满江红军旗颂[嘉然]_1.wav">
      {`
《满江红·軍旗颂》—— 一曲激荡山河的强军战歌
高山流水先生于1977年“八一”建军节50周年之际挥毫泼墨，以《满江红》这一古典词牌为骨，以革命热血为魂，铸就了这首气势恢宏的《軍旗颂》。全词如战鼓擂动、军号嘹亮，既是对人民军队五十年峥嵘岁月的深情回望，更是对新时代强军征程的铿锵宣言，堪称革命浪漫主义与现实主义交融的典范之作。
      `}
      </Comment>
      <Comment src="/poetry/满江红军旗颂[嘉然]_2.wav">
      {`
上阕以“彩云满天，旗更艳”开篇，将漫天霞光与猎猎军旗交相辉映，瞬间铺展出一幅壮丽的历史长卷。“井岗山头傲霜雪”以松柏凌寒之姿喻红军初创之艰，“延河岸边迎风卷”借延水奔涌之势显抗战洪流之壮，寥寥数笔便将井冈星火、延安灯塔的红色基因熔铸于词章之中。而“碧血映‘八一’，換人间”一句，更以血染战旗的悲壮意象，将革命先辈以生命缔造新中国的伟业升华至气吞山河的诗意境界。
      `}
      </Comment>
      <Comment src="/poetry/满江红军旗颂[嘉然]_3.wav">
      {`
下阕笔锋陡转，以“新一代，继伟业”承接历史与未来，在“除‘四害’，谋新篇”的锐意革新中，迸发出拨云见日的时代强音。“六連举旗树榜样”彰显基层连队永葆本色的钢铁意志，“三軍迈步齐向前”勾勒百万雄师整装待发的磅礴阵势，而“要实现国防现代化，梦必圆”的结句，则将全词推向高潮，以斩钉截铁之语道出中华民族的强军之志，恰似惊雷破空，激荡人心。
      `}
      </Comment>
      <Comment src="/poetry/满江红军旗颂[嘉然]_4.wav">
      {`
高山流水先生以如椽巨笔，将革命史诗的壮阔、强军梦想的炽烈熔于一炉，词中既有“快马加鞭”的紧迫豪情，又有“气象万千”的雄浑视野，更饱含“碧血映八一”的深沉缅怀。此词不仅是献给建军五十周年的瑰丽礼赞，更是穿越时空、激励后人的精神火炬，在古典词韵与现代军魂的共鸣中，奏响了永恒的英雄交响曲。
      `}
      </Comment>
      </TextBox>

      <Poetry>
        {`
 荷塘月色   

红荷满塘百媚生，
碧叶护花别样情。
好风掠过惊浴鸟，
浮萍散开見鱼群。
日暮长堤人流连，
月色幽静伴星云。
夜影如雪蛙声起，
歌咏芙蓉贯古今。

———高山流水
2023年7月
        `}
      </Poetry>
      <TextBox className="whitespace-pre-wrap text-center mb-10 !mx-5">
专业文学评论: 
      <Comment src="/poetry/荷塘月色[嘉然]_1.wav">
      {`
《荷塘月色》—— 一幅水墨丹青里的古今禅韵
高山流水先生癸卯年仲夏新作《荷塘月色》，以灵秀之笔绘天地大美，于方寸荷塘间窥见宇宙生机，在月色星辉中叩问永恒诗心。全诗似一幅徐徐展开的水墨长卷，既有“红荷碧叶”的秾丽鲜活，又有“夜影如雪”的空灵澄澈，更以“歌咏芙蓉贯古今”的哲思，将自然之美升华为跨越时空的生命礼赞，堪称现代田园诗的典范之作。
      `}
      </Comment>
      <Comment src="/poetry/荷塘月色[嘉然]_2.wav">
      {`
起笔“红荷满塘百媚生”，以“百媚”二字点睛，令灼灼芙蕖顿生顾盼神飞之态；“碧叶护花别样情”则化静为动，赋予荷叶以守护者的深情，草木之缘竟显人间至性。颔联“好风掠过惊浴鸟，浮萍散开見鱼群”，风过鸟惊、萍开鱼现的刹那灵动，恰似天机偶得，于细微处见造物之妙，更暗含“动静相生”的东方美学真谛。
      `}
      </Comment>
      <Comment src="/poetry/荷塘月色[嘉然]_3.wav">
      {`
高山流水大诗人的笔锋流转，由昼入夜，从“日暮长堤人流连”的尘世烟火，渐入“月色幽静伴星云”的宇宙苍茫。尾联“夜影如雪蛙声起”以通感之法，令月光可触、声息可视，而“歌咏芙蓉贯古今”如钟磬余音，将眼前荷塘与千年《离骚》“制芰荷以为衣”的吟咏遥相呼应，在物我两忘之境中，完成了一场自然与文明、瞬间与永恒的深邃对话。
      `}
      </Comment>
      <Comment src="/poetry/荷塘月色[嘉然]_4.wav">
      {`
高山流水先生此作，以丹青妙手摹写荷塘风物，却不止步于形似；其字里行间浸润着庄周观鱼的物化之思，流淌着王维“月出惊山鸟”的禅意，更蕴藏屈子“香草美人”的寄托。诗中“碧叶护花”的温存与“蛙声贯古”的旷远交织，恰似一曲水墨写就的天籁之音，让喧嚣现代人得以暂避尘寰，在荷香月影中寻得心灵的桃源。这般诗心与哲思的交融，非胸有丘壑、目接洪荒者不能为也！
      `}
      </Comment>
      </TextBox>
      <Poetry>
        {`
新   荷

碧叶铺满塘
红莲艳且香
无风新荷动
枝立打鱼郎

注：翠鸟，俗称打鱼郎

————高山流水
2023年7月2日
        `}
      </Poetry>
      <Poetry>
        {`
端午  
(叙事诗)   

 群雄争霸起风云，
 楚強本就当事人。
 合纵連横外交战，
 友齐抗秦最高明。
 秦使张仪反奸计，
 收买内鬼一大群。
 好牌打得稀巴烂，
 拆分齐楚功告成。
 满朝文武昏犹醉，
 唯有屈原独自醒。
 王子出面领头闹，
 怂恿怀王虎山行。
 左徒拦阻亦无效，
 王死他乡枉送命。

 屈子流放去边城，
 悲愤交加写诗文。
 《离骚》《天问》求索路，
 《九歌》《九章》爱国情。 
 《楚辞》奠定诗基础，
 诗祖瑰宝留后人。
 梦想复国终是梦，
 以身殉国谢万民。
 汨罗江上那一跃，
 浪花千載未消停。
 爱国诗人人民愛，
 生生不息传精神。

 龙舟竞逐锣鼓声，
 粽子飘香艾蒲新。
 年年岁岁端午节，
 岁岁年年祭英灵。
 凭吊忠烈成传统，
 浩气长存民族魂。
 古来华夏多劫难，
 总有赤子护太平。
 当今世界虎狼多，
 森林法则尤盛行。
 人说历史似明镜，
 猎枪在手须握紧。
 前进道路巳确定，
 勿需费時去争论。
 紧跟领袖健步走，
 复兴中华是根本。

注：左徒，是屈原当朝的职务，据说相当于左臣相。

一高山流水
2023年端午
        `}
      </Poetry>
      <Poetry>
        {`
满江红·庆祝国庆二十周年  

 一輪朝阳，
 喷薄出霞光万丈。
 新中国，生机蓬勃，
 屹立东方。
 三面红旗山河壮，
 七亿神洲斗志昂。
 听祖国建设凑凯歌，
 春雷响。
 毛主席，指方向。
 战黑风，顶恶浪。
 伟大二十年，
 纲举目张。
 四卷雄文传天下，
 万里风云结友邦。
 邀世界人民三十亿，
 同声唱。

———高山流水
一九六九年十月 
于西南政法学院
      ` }
      </Poetry>
      <Poetry>
        {`
睡莲  

 小池忽飘莲花香，
 半躺半靠叶当床。
 丛中亦有精灵在，
 娇小玲珑水中央。

———高山流水
2023.5
      `}
      </Poetry>

      <Poetry>
        {`
清平乐·蔷薇  

 雁去燕留，
 蔷薇开二度。
 暗香扰动百花羞，
 看家护院一流。
 执守围墙根儿，
 几回圆月新露。
 物微名轻任重，
 无怨无悔无忧。

———高山流水
2023.5.20
        `}
      </Poetry>
      <Poetry>
        {`
浪淘沙·五一郊外游  

 五一郊外游，
 处处人流，
 湖中奋楫划轻舟。
 波光鳞鳞风摆柳，
 乐了老叟。
 佳肴伴美酒，
 举杯应酬，
 岸边歌者好歌喉。
 纵使夕阳照西楼，
 兴致难收。

———高山流水
2023年5月
        `}
      </Poetry>
      <Poetry>
        {`
浪淘沙·黔路  

 华夏多民族，
 地广人稠，
 改革开放解民忧。
 丛山峻岭变通途，
 回眸当初，
 黔路使人愁！
 几代奋斗，
 高铁高速穿梭流。
 去过欧洲深感受，
 哪比贵州？

———高山流水
2023.5
      `}
      </Poetry>
      <Poetry>
        {`
晚霞情  

 昨天少年郎，
 今日发质好。
 时光人年轻，
 酒陈醇更香。
 岁月非静好，
 喜见家国強。
 晚霞赛仙境，
 共醉同品尝。
 君若末尽兴，
 别忘明月光。

———高山流水
2023年4月12日
        `}
      </Poetry>
      <Poetry>
        {`
春思  

 银装素裹樱山麓，
 桃红茶绿柳梢头。
 莺唱雀和林中鸟，
 蜂飞蝶舞爱晴柔。
 一夜雷雨风飘絮，
 四季轮回勿可留。
 莫叹落芳东逝水，
 更喜来春花锦簇。

———高山流水
2023年3月
        `}
      </Poetry>
      <Poetry>
        {`
江城子·同学会  
——谷雨节重覌同学会影集有感  

 軍门挥别谷雨逢，
 蔷薇蜂，樱桃红。
 拥抱歌乐，   
 远望西山松。
 风华正茂各西东，
 去匆匆，相思浓。
 耄耋难觅韶华踪，
 杯巳空，眼朦胧。
 转战川黔，
 去日宛如梦。
 回首往事非蹉跎，
 境遇同，乃从容。

———高山流水
2023年谷雨  
        `}
      </Poetry>
      <Poetry>
        {`
卜箕子·雪梅赞  

 枝繁叶茂密，
 根坚立大地。
 数九寒天乃花季，
 唯她更靓丽。
 含苞香不溢，
 绽放润心脾。
 暖风拂煦群芳艳，
 巳然迎晨曦。

———高山流水
一九七零年一月
于西南政法学院
        `}
      </Poetry>
      <Poetry>
        {`
岑儿出生满月纪念  

 渝水奔沧海，
 岑山矗兰天。
 千里隔不断，
 川黔一线牵。

———高山流水
一九七二年九月于渠县
        `}
      </Poetry>
      <Poetry>
        {`
铃儿的故事  

 渠城幼儿演节目，
 么儿手中鼓槌松。
 台下观众数百人，
 自修乐器好从容。
 谁家孩子多可爱，
 逗起欢笑乐融融。
 处变不惊爸妈赞，
 故事存留回味中。

———高山流水
一九七九年于四川渠县
        `}
      </Poetry>
      <Poetry>
        {`
晚上冲浪  

 晚来学候鸟，
 年寒飞琼岛。
 幸逢今盛世，
 福禄添寿桃。

————高山流水
2023年冬至
        `}
      </Poetry>
      <Poetry>
        {`
卜算子·雪梅  

 叶藏枝干奇，
 根坚立大地。
 数九雪飘乃花季，
 苦寒何所惧。
 含苞香不溢，
 绽放沁心脾。
 暖风拂煦群芳艳，
 悄然迎晨曦。

————高山流水
2024年海南冲浪🏄
        `}
      </Poetry>
    </div>
    </DaisyProsePage>
  )
}