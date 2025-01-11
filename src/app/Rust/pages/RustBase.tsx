import EngWord from "@/components/EngWord"
import wordList from "../../english/EnglishWordList.json"
import CodeBlock from "@/components/CodeBlock"

const words : Record<string, Record<string, string[]>> = wordList
function Word({children, word, highlight}:{children:React.ReactNode, word:string, highlight?:string}) {
  return (
    <EngWord word={word} wordInfo={words[word]} highlight={highlight}>{children}</EngWord>
  )
}

function S({children}: {children?:React.ReactNode}) {
  return (
    <div className="leading-normal text-[1.1rem] pb-[0.15rem] pt-[0.3rem]">
      <strong>{children}</strong>
    </div>
  )
}

function Quote({children, className}: {children?:React.ReactNode, className?:string}) {
  return (
    <div className={`border-l-[0.2rem] border-l-amber-200 pl-3 mt-2 mb-2 ${className}`}>
      {children}
    </div>
  )
}

function Para({children}:{children?:React.ReactNode}) {
  return (
    <div className="leading-8 pb-[0.15rem]">
      {children}
    </div>
  )
}

function Img({src, width, align}: { src: string, width?: number, align?: string }) {
  if (align !== "left") align = "mx-auto"
  return (
     <img className={`mt-1 mb-1 ${align}`} src={src} alt="image" width={width} />
  ) 
}

export default function RustBase() {
  return (
    <div className="prose daisy-prose max-w-[1600px] leading-[35px] pl-24 pr-12">
      <div className="h-12" />
      <h1 className="text-center">Rust语言基础</h1>
      <h2>初步认识</h2>
      <h3>创建项目:</h3>
      <Para>
        可直接使用rustc编译.rs文件(似乎vscode插件对rust单文件没有语言提示), 更常用"<Word word="cargo" highlight="n 0">cargo</Word> new [Project Name]"创建Rust项目. <br />
        默认会创建一个.git仓库也可以用参数"--vcs=git"显示指定版本控制系统, 使用"--vcs=none"可指明不使用版本控制系统. <br />
        同时会自动创建: src目录、cargo.toml文件. (使用"cargo init"也可以创建项目) <br />
        <Quote>
          .gitignore中添加"target/"即可忽略target目录及其内容. <br />
        </Quote>
        <S>Cargo.toml</S>
        TOML即Tom's Obvious, Minimal Language, 是Cargo配置文件的格式. <br />
        第一行: [package]是一个片段(section)标题, 表明下面的语句用来配置一个package. <br />
        接下来的三行: 设置了Cargo编译程序所需的配置: 项目的名称(name)、项目的版本(version)以及要使用的Rust版本(edition). <br />
        最后一行: [dependencies]是罗列项目依赖的片段. 在Rust中，package被称为<Word word="crate" highlight="">crate</Word>. <br />
        <Quote>
          Cargo期望源文件存放在src目录中, 项目根目录只存放README、license、配置文件和其他跟代码无关的文件, 帮助保持项目干净整洁. <br />
        </Quote>
      </Para>
      <h3>项目的构建和执行: </h3>
      <Para>
        可使用"cargo build"构建项目, 然后使用"cargo run"即可运行项目; 也可以直接用"cargo run"一键构建并运行项目.
        如果项目源文件没有改变, 则"cargo run"不会自动重新构建项目, 而是直接运行项目. <br />
        默认的构建方法是调试构建(debug build), 会在 target/debug 目录下生成对应可执行文件. <br />
        首次运行build时，会使Cargo在项目根目录创建一个新文件: Cargo.lock, 这个文件记录项目依赖的实际版本. <br />
        使用"cargo check"可对源码进行检查, 同时生成(AST、符号表等)中间文件, 但不链接和生成二进制文件, 所以比"cargo build"更快速, 也更常用. <br />
        使用"cargo build/run --release"来构建要发布的程序, 这会启用一些优化, 同时也需要消耗更长的编译时间. 此外会在 target/release 而不是 target/debug 下生成可执行文件.
      </Para>
      <h3>第一个程序: </h3>
      <Para>
        <CodeBlock lang="rust" className="w-[800px] m-2">
          {`use std::io; \nfn main() { \n  let mut guess = String::new(); \n  io::stdin()\n    .read_line(&mut guess)\n    .expect("tldr"); \n  println!("number read: {}", guess); \n}`}
        </CodeBlock>
        <S>use 语句</S>
        默认情况下, Rust设定了若干个会自动导入到每个程序作用域中的标准库内容，这组内容被称为预导入(prelude)内容. <br />
        <details className="pl-[0.5rem] text-base m-1">
            <summary className="cursor-pointer w-fit">[预导入内容]</summary>
            {Img({src:"Rust/prelude.png", width:700, align:"left"})}
        </details>
        如果需要使用的类型不在预导入内容中, 就必须使用 use 语句显式地将其引入作用域, 然后即可调用io库中的函数stdin().
        (如果程序的开头没有使用 use std::io 引入io库，我们仍可以通过把函数调用写成 std::io::stdin() 来使用该函数). <br />
        <S>变量赋值语句、创建String类型变量</S>
        Rust中使用 let 语句创建变量同时赋值, 默认是不可变的, 可变变量需要在变量名前使用 mut 修饰.
        <Quote>Rust中不可变变量有两层含义[自己理解]: 1. 不能对该变量重复赋值(不能修改该变量的内存位置); 2. 不能对该变量创建可变引用(不能修改变量指向内存位置中的内容). </Quote>
        String是一个标准库提供的字符串类型，它是UTF-8编码的可增长文本块. '::' 语法表明 new 是 String 类型的一个关联函数(associated function). 
        关联函数是针对某个类型实现的函数, 这个例子中 String::new() 会返回一个 String 类型的新实例(内容为空字符串).
        <Quote>总的来说, let mut guess = String::new(); 这一行创建了一个可变变量, 当前它绑定到一个新的 String 类型空实例上. </Quote>
        <S>函数调用、输入/输出</S>
        stdin()返回一个 std::io::Stdin 类型的实例，Stdin一种代表终端标准输入句柄的类型. <br />
        .read_line(&mut guess) 调用了标准输入句柄中的 read_line 方法, 其需要 &mut String(String的可变借用) 类型变量作为参数, 其返回一个类型为Result的值. <br />
        <Quote>注意 &mut 为一个整体, 表示可变借用. </Quote>
        Result是一种枚举类型(enum), 其值可以是Ok或Err, Result的实例拥有expect方法用于结果处理. 当实例的值为Err时, expect()输出参数中的信息然后终止程序; 当实例的值为Ok时, expect()将Ok的具体值返回(这里是输入到标准输入中的字节数). <br />
        (不使用expect()也能编译通过, 但会触发 warning: unused `Result` that must be used. ) <br />
        println! 是一个宏, 能接受传入的参数然后在编译时进行展开.
        (例如: <CodeBlock lang="rust" inline className="p-0">{`println!("... {} ...", "tldr");`}</CodeBlock> 会展开为 <CodeBlock lang="rust" inline className="p-0">{`std::io::_print(format_args!("... {} ...", "world"));`}</CodeBlock>
        , 然后再进一步展开...)
        {`'{}'`}在宏里作为占位符, 表示在其所在位置插入一个值.
      </Para>
      <h3>进一步修改: </h3>
      <S>添加与更新依赖</S>
      <Para>
        首先添加一个crate: 在Cargo.toml中的 dependencies section 下添加一行 rand = "0.8.5", "0.8.5" 是 "^0.8.5" 的简称, 表示任何至少是0.8.5但小于0.9.0的版本, Cargo认为这些版本与 0.8.5 版本的公有API相兼容. 
        (也可以使用"cargo add rand"来添加该crate.) <br />
        现在使用"cargo build", 此例中虽然只声明了rand一个依赖，但Cargo额外获取了rand所需的其他crates，因为rand依赖它们来正常工作. 引入crates的版本信息和源码会统一缓存在本地registry中(Linux中一般是 ~/.cargo/registry/ 目录).
        之后Cargo对这些依赖以及本项目文件进行编译, 然后一同构建, 编译的相关产物会放在项目的 target/[debug|release]/deps/ 目录下.<br />
        如果此时对项目源码进行一般修改(依赖没有变化)再次使用"cargo build", 则Cargo只会重新编译相关文件并更新构建. <br />
        此外, Cargo还会维护Cargo.lock文件, 如果构建时发现Cargo.lock中已存在对应依赖项, 则Cargo会使用依赖项在Cargo.lock中被指定的版本进行构建, 这使得项目可以准确的重复构建. <br />
        使用"cargo update", 则Cargo会忽略Cargo.lock文件，并计算出所有符合Cargo.toml声明的最新版本, 然后把这些更新的版本写入Cargo.lock文件.
        (此例中Cargo会寻找大于 0.8.5 而小于 0.9.0 的版本进行更新; 如需使用0.9.0及以上版本, 则需进行手动更新.)
      </Para>
      <S>修改程序</S>
      <Para>
        <CodeBlock lang="rust" className="w-[800px] m-2">
          {`use std::io;
use std::cmp::Ordering;
use rand::Rng;
fn main() {
	let secret_number = rand::thread_rng().gen_range(1..=1000000);
	loop {
		println!("Please input your guess.");
		let mut guess = String::new();
		io::stdin()
			.read_line(&mut guess)
			.expect("tldr");
		let guess: u32 = match guess.trim().parse() {
			Ok(num) => num,
			Err(_) => continue,
		};
		match guess.cmp(&secret_number) {
			Ordering::Less => println!("Too small!"),
			Ordering::Greater => println!("Too big!"),
			Ordering::Equal => {
				println!("You win!");
				break;
			}
		}
	}
}`}
        </CodeBlock>
      </Para>
      <S>引入生成随机数的trait方法</S>
      <Para>
        Rust中trait定义一组方法，任何实现该trait的类型都需要提供这些方法的实现. Rng是一个trait，它定义了随机数生成器应实现的方法. 
        由于Rust支持多种类型实现同一个trait，<strong>以及同一类型的同名方法实现多个trait</strong>, 所以为了避免歧义, 必须在作用域中指明要使用的trait. <br />
        rand::thread_rng 函数提供实际使用的随机数生成器, 接着调用该随机数生成器的 gen_range 方法. 这个方法由 use rand::Rng 语句引入到作用域的 Rng trait 定义, 
        其参数可以是一个 RangeInclusive 类型, 这里的 1..=100 就是一个 std::ops::RangeInclusive&lt;i32&gt;类型, 其表示[1,100]内的整数.
        <Quote>应该use哪个trait以及该从crate中调用哪个方法? Cargo有一个很棒的功能是: 运行"cargo doc --open"命令来构建所有本地依赖提供的文档, 然后使用浏览器查看. </Quote>
      </Para>
      <S>类型转换</S>
      <Para>
        Rust是强类型(statically typed)语言, 且它要求显式转换不同类型. Rust中数值默认使用i32类型(创建变量时不显式指定变量类型或者没有类型推断信息时, 就创建为默认类型), 此例中secret_number的类型是u32, 
        而之前从标准输入读取的信息为String类型, 必须显式转换才能与secret_number进行比较. <br />
        这里使用 <CodeBlock lang="rust" inline className="p-0">{`let guess: u32 = guess.trim().parse().expect("Please type a number!");`}</CodeBlock>, 新创建的变量与之前同名, 
        这是因为Rust允许用一个新值来隐藏(Shadowing)其之前的值(原先值所在内存的所有权会被转移或丢弃), 这个功能常用于需要转换值的类型之类的场景. 其中trim()用于去除字符串开头和结尾的空白字符(包括读入的回车符\r和换行符\n).
        parse()能将字符串表示的数值转换为数值变量类型, 其定义中有一个泛型参数对应其返回值(具体的数值变量类型), 需要明确指出对应泛型的实际类型或提供类型推断信息
        (这里也可以使用<CodeBlock lang="rust" inline className="p-0">{`let guess = guess.trim().parse()::<u32>.expect("Please type a number!");`}</CodeBlock>)
      </Para>
      <S>比较输入值与随机数</S>
      <Para>
        从标准库引入了一个叫 std::cmp::Ordering 的类型到作用域中, Ordering 是一个枚举, 其成员是 Less、Greater 和 Equal, 对应比较两个值时可能出现的三种结果. <br />
        cmp 方法用来比较两个值并可以在任何可比较的值上调用, 其参数是被比较值的引用, 此例中把 guess 与 secret_number 做比较, 然后 cmp 方法会返回一个 Ordering 的成员(一个枚举值). <br />
        一个 match 表达式由待匹配的目标值和分支(arms)构成; 一个分支为 一个模式(pattern) =&gt; 与该模式相匹配时执行的代码. 所有模式必须能覆盖目标值的取值范围("_"通配符可匹配任何取值), 各模式按顺序依次匹配. <br />
        (赋值语句后跟match语句, 如果执行continue或break, 则不需要返回值, 因为赋值语句不会执行)
      </Para>

      <h2>Rust基础</h2>
      <S>变量和常量</S>
      常量使用const关键字, 不能使用mut修饰. 常量可以在任意作用域内声明(包括全局作用域), 声明时必须指明具体类型且绑定到编译期确定的值, 使用常量相当于内联. <br />
      let定义的变量虽然也默认不可变, 但只能在局部作用域内声明, 声明时可以暂时不绑定任何值, 可以绑定运行期才能确定的值, 且可自动推断出其类型. <br />
      <Quote><strong>注: 不是mut的变量理论上不具有内部可变性, 因为可变性定义会递归向成员传递.</strong> (除非使用Cell类型(UnsafeCell是Rust唯一允许通过不可变引用修改内部数据的类型)) (GPT理解)</Quote>
      <S>字符和字符串</S>
      Rust中字符类型char为Unicode编码, 一个字符占4字节, 除非通过 b'' 显式指出其为ASCII编码(实际为u8类型); 而字符串是UTF-8编码, ASCII字符在UTF-8编码中占用的是1字节. <br />
      &str是字符串切片(对字符串数据的引用), 其内部包含一个指针和长度字段, 在64位系统下&str类型变量占16字节. <br />
      由于Rust中字符串是UTF-8编码, 字符长度不等, 所以不提供基于地址的下标索引, 同时也要谨慎使用字符串切片(保证边界落在字符边界上). <br />
      <CodeBlock lang="rust" className="w-[800px] m-2">
        {`let x = "哈哈哈";\nlet y = "hhh";\nprintln!("{}", std::mem::size_of_val(&x)); // output: 16\nprintln!("{}", std::mem::size_of_val(x)); // output: 9
println!("{}", std::mem::size_of_val(y)); // output: 3\nprintln!("{}", std::mem::size_of_val(&&x)); // output: 8`}
      </CodeBlock>
      &x类型的为&&str. 此例说明&str占用内存大小为16字节, x指向的字符串占用内存大小为9字节, y指向的字符串占用内存大小为3字节, &&str占用内存大小为8字节(&&...&str占用内存大小也是8字节). <br />
      String的底层是一个u8类型的字节数组; 此外注意成员方法调用的隐含参数可以是 self / & self / <strong>mut& self</strong>. 示例如下:
      <CodeBlock lang="rust" className="w-[800px] m-2">
        {`fn main() {
  let mut s = String::from("hello world");
  let word = first_word(&s); // immutable borrow.
  s.clear(); // error: mutable borrow occurs here.
  println!("the first word is: {}", word);
}
fn first_word(s: &String) -> &str {
  &s[..1]
}
// s.clear():
pub fn clear(&mut self) {
  self.vec.clear()
}
`}
      </CodeBlock>
      <Quote>注: 布尔类型在Rust中占1字节</Quote>
      <Quote><strong>可以推测: Rust中引用的实质是一个包含指向目标内存的指针(及其他元数据)的结构. 可以把引用看做指针(或胖指针), 其中可变引用的指针相当于指针常量, 不可变引用的指针相当于常量指针常量.
        <br />Rust中访问字段、运算符重载(如<span className="italic">u32+&u32</span>)、方法调用(通过self参数)时可以自动 引用/解引用 以适配 类型(形参类型), 普通函数调用参数没有自动适配. <br />
        可使用运算符'*'手动解引用, 注意解引用运算符'*'优先级比成员访问运算符'.'的优先级低. </strong></Quote>
      <Quote>Rust要求类型转换必须显式转换, 但Rust又提供<strong>自动解引用机制(Auto-deref)</strong>, 可以通过自定义自动解引用机制来作为一种隐式转换机制. </Quote>
      <S>对临时值的引用</S>
      <CodeBlock lang="rust" className="w-[800px] m-2">
        {`let x: i32 = 6;\nlet y = &(x as u32);\nprintln!("Address of x: {:p}", &x); // 原变量地址\nprintln!("Address of y: {:p}", y);  // 临时值的地址`}
      </CodeBlock>
      如上所示, (x as u32)产生一个临时值, 其存放位置不再是x的内存地址, 该临时值的所有权归Rust系统管理, y对其引用会使其周期延长至与y相同.
      <CodeBlock lang="rust" className="w-[800px] m-2">
        {`let s = &String::from("hello");`}
      </CodeBlock>
      以上代码同理. <br />
      注意: 引用临时值周期自动延长只适用于绑定的声明和初始化同时发生的情况, 如下不能通过编译: 
      <CodeBlock lang="rust" className="w-[1030px] m-2">
        {`let s;\ns = &String::from("hello"); // error: creates a temporary value which is freed while still in use.\nprintln!("{}", s);`}
      </CodeBlock>
      <S>表达式</S>
      什么是表达式: <strong>有返回值就是表达式</strong>.
      <CodeBlock lang="rust" className="w-[800px] m-2">
        {`let y = {\n  let x = 3;\n  x + 1\n};`}
      </CodeBlock>   
      如上所示, {`'{}'`}及其内部为一个表达式, x + 1 的计算结果应该不会存放在单独的临时区域, 而是直接存放到变量y所有的内存中. 而包含了';'的一定为语句, 语句没有返回值.
      <S>切片</S>
      切片允许我们引用集合中部分连续的元素序列，而不是引用整个集合, Rust 语言特性内置的 str 和 [u8] 等类型都是切片, 而 [u8;N(固定大小)] 是数组. <br />
      Rust中, 栈的总大小是固定的, 栈变量的大小也必须在编译期就能确定, 因此栈上只能创建固定大小类型的变量. 切片是一种动态大小类型(DST), 因此只能在堆上创建, 然后在栈上创建其引用. <br />
      <CodeBlock lang="rust" className="w-[800px] m-2">
        {`let s = String::from("哈哈哈");\n// let s1 = s[0..3];\n//     ^^ doesn't have a size known at compile-time\nlet s1 = &s[0..3]; // correct, s1: &str`}
      </CodeBlock>
      还要注意, 即使是切片的不同部分, 也不能同时存在可变引用:
      <CodeBlock lang="rust" className="w-[1000px] m-2">
        {`let mut s = String::from("哈哈哈");\nlet mut s1 = &mut s[0..=2];\nlet mut s2 = &mut s[3..=5]; // error: cannot borrow 's' as mutable more than once at a time.\nprintln!("{}", s1);`}
      </CodeBlock>
      <S>Rust的"传值"(包括传参、返回值、for语句传入集合等)</S>
      <strong>Rust中"传值"要分情况讨论, 对于实现了Copy trait的类型(如所有基本类型和不可变引用&T, 以及基本类型的元组和数组, 基本类型的数组的数组...)来说传值是自动拷贝(使用Copy语义), 
        而对于没有实现Copy trait的类型(如String等非基本类型, 可变引用&mut T)来说传值是传递所有权(默认是Move语义)而不是拷贝. 
        而且要注意拥有所有权的变量周期结束时会释放该内存.(尤其对于函数传参要注意是否应该 传引用 / 使用clone手动拷贝 / 通过返回值归还所有权)</strong> <br />
      <strong>注意, 变量被引用(即借用)时, 无论存在可变引用还是不可变引用, 都不能在中途Move所有权. </strong>
      <Quote>注意可变引用 &mut T 是不可以Copy的; <br />Copy是浅拷贝.</Quote>
      示例代码:
      <CodeBlock lang="rust" className="w-[800px] m-2">
        {`let s = String::from("哈哈哈");\n{\n  let s1 = s; \n}\nprintln!("{}", &s); // error: borrow of moved value: s`}
      </CodeBlock>
      <S>模式匹配</S>
      <Quote>一般而言, 只匹配一个条件且忽略其他条件时就用 if let, 否则都用 match.</Quote>
      模式具有可反驳模式和不可反驳模式, 即看模式是否一定能匹配待匹配的值. 注意, 模式匹配基于的是待匹配值的类型而非其具体值. 如: <br />
      <CodeBlock lang="rust" className="w-[800px] m-2">
        {`// 'let' bindings require an "irrefutable pattern".\nlet 42 = 42; // refutable pattern!\nlet Some(a) = Some(42); // refutable pattern!`}
      </CodeBlock>
      let语句, 函数传参等在Rust中本质上都属于模式匹配. <br />
      对于可反驳模式, 可以使用 let-else 语句. <br />
      模式匹配同时常进行绑定操作(即模式可能创建新变量, 且会遮蔽同名变量), 可以绑定为所有者或绑定为引用(模式中的变量名前+ref), 见以下示例:
      <CodeBlock lang="rust" className="w-[800px] m-2">
        {`enum Message {\n  Quit,\n  Move { x: i32, y: i32 },\n  Write(String),\n  ChangeColor(i32, i32, i32),\n}\nlet m = Message::Write("哈哈哈".to_string());\nlet m1 = &m;\n// ...
let &Message::Write(ref s) = m1 else { return; };\nprintln!("{:?}", s);`}
      </CodeBlock>
      Rust模式匹配是静态的, 即要求模式在编译期完全确定, 不允许直接使用动态计算的值(如 String). 对于动态的(运行时的)值的匹配, 可以使用"条件守卫". 如: <br />
      <CodeBlock lang="rust" className="w-[800px] m-2">
        {`let msg = Message::Write("哈哈哈".to_string());\nmatch msg {\n  Message::Write(ref s) if s == "哈哈哈" =>\n     println!("Matched static string 'haha'!"),
  _ => println!("No match."),\n}`}
      </CodeBlock>
      <Quote>matches!(expression, pattern) 可检验模式是否匹配.</Quote>
      <S>多态、分发与Trait</S>
      多态 包括编译时多态和运行时多态, 其核心思想是"同一个接口, 不同的行为". <br />
      分发(分派, dispatch) 指根据条件将程序的执行“分派”到合适的函数或方法, 是实现多态的主要机制，包括静态分发(编译时决定)和动态分发(运行时决定). 重载在编译时确定, 属于静态分发; 重写在运行时确定, 属于动态分发. 
        泛型在编译时的单态化属于静态分发(Java泛型没有单态化, 但Java泛型的类型检查和方法绑定发生在编译时, 是静态分发; 之后将类型擦除为其上界, 运行时为动态分发). Rust的dyn Trait为动态分发.
      <Quote><strong>对类型系统的理解(自己理解): 任何类型都可定义为其数据字段和其支持的操作(方法)的集合, 为了避免无限嵌套循环定义, 要先规定一组基本类型和基本操作(一般为计算机底层天然支持的(如u32、f32等)基本类型及其基本数学运算和逻辑运算), 
        这些基本类型和基本操作不再含有其他类型和操作, 由该类型系统外部(计算机硬件)直接实现.</strong></Quote>
      <Quote>对于实现了From&lt;T&gt;的类型，Rust会通过<strong>blanket implementation</strong>方式自动实现Into&lt;T&gt;: <br />
      <CodeBlock lang="rust" className="w-[800px] m-2">
        {`impl<T, U> Into<U> for T\nwhere\n  U: From<T>,\n{\n  fn into(self) -> U {\n    U::from(self)\n  }\n}`}
      </CodeBlock>
      </Quote>
      <Quote>数组元素的类型实现了 Copy/Clone Trait, 对应数组也会自动实现 Copy/Clone Trait. (应该是编译器为这两个特殊Trait提供了特殊支持) </Quote>
      <div className="h-12" />
    </div>
  )
}