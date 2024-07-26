import DaisyCode from "@/components/DaisyCode"

export default function EnglishPage() {
  return (
    <div className="prose daisy-prose max-w-[1000px] leading-[35px] mx-auto pt-6"> 
      <h1>Configs</h1>
      <h2>CPP刷题MAKEFILE</h2>
      <DaisyCode>
        <span># Compiler Command</span>
        <span>CC = clang++</span>
        <span></span>
        <span># Find all .cpp source files</span>
        <span>SRCS = $(shell find . -name '*.cpp')</span>
        <span></span>
        <span># For each source file, add a .PHONY rule</span>
        <span>.PHONY:$(SRCS)</span>
        <span></span>
        <span># Executabel files (remove the .cpp extension for each source file)</span>
        <span>EXES = $(SRCS:.cpp=)  </span>
        <span></span>
        <span>OUTPUTDIR = bin</span>
        <span></span>
        <span>mkdir: </span>
        <span>  mkdir -p $(OUTPUTDIR)</span>
        <span></span>
        <span># Compile source files into excutable|object files</span>
        <span>%: %.cpp mkdir</span>
        <span>  $(CC) $&lt; -o $(OUTPUTDIR)/$@</span>
        <span>  ./$(OUTPUTDIR)/$(@:.cpp=)</span>
        <span></span>
        <span>$(SRCS): mkdir</span>
        <span>  $(CC) $@ -o $(OUTPUTDIR)/$(@:.cpp=) </span>
        <span>  ./$(OUTPUTDIR)/$(@:.cpp=)</span>
        <span></span>
        <span>%.o: %.cpp</span>
        <span>  $(CC) -c $&lt; -o $(OUTPUTDIR)/$@</span>
        <span></span>
        <span># Clean the generated files</span>
        <span>clean:</span>
        <span>  rm -f $(EXES)</span>
      </DaisyCode>
    </div>
  )
}
