import EngWord from "@/components/EngWord"
import wordList from "../../english/EnglishWordList.json"
import Space from "@/components/Space"
import CodeBlock from "@/components/CodeBlock"

const words : Record<string, Record<string, string[]>> = wordList
function Word({children, word, highlight}:{children:React.ReactNode, word:string, highlight?:string}) {
  return (
    <EngWord word={word} wordInfo={words[word]} highlight={highlight}>{children}</EngWord>
  )
}
function Img({ src, width }: { src: string, width?: number }) {
  return (
    <img className="m-1 mx-auto" src={src} alt="" width={width} />
  )
}

function Para({children}:{children?:React.ReactNode}) {
  return (
    <div className="leading-normal pb-[0.15rem]">
      <Space width={2} />{children}
    </div>
  )
}

function S({children}: {children?:React.ReactNode}) {
  return (
    <div className="leading-normal text-[1.02rem] pb-[0.15rem] pt-[0.3rem]">
      <strong>{children}</strong>
    </div>
  )
}

export default function Xv6Book() {
  return (
    <div className="prose daisy-prose max-w-full leading-[35px] pl-24 pr-48">
      <h1 className="text-center">Xv6Book</h1>
      <h2>1. Operating system interface</h2>
      <h3>Introduction</h3>
      <S>Definition and functionality of Operating system: </S>
      <Para>
        The job of an operating system is to share a computer among multiple programs and to provide a
        more useful set of services than the hardware alone supports. An operating system manages and
        abstracts the low-level hardware, so that, for example, a word processor need not concern itself
        with which type of disk hardware is being used. An operating system shares the hardware among
        multiple programs so that they run (or appear to run) at the same time. Finally, operating systems
        provide controlled ways for programs to interact, so that they can share data or work together.
      </Para>
      <Para>
        An operating system provides services to user programs through an interface. Designing a good
        interface turns out to be difficult. On the one hand, we would like the interface to be simple and
        narrow because that makes it easier to get the implementation right. On the other hand, we may be
        tempted to offer many sophisticated features to applications. The trick in resolving this tension is to
        design interfaces that rely on a few mechanisms that can be combined to provide much generality.
      </Para>
      <S>The collection of system calls of Xv6: </S>
      <Para>
        The collection of system calls that a kernel provides is the interface that user programs see. The
        xv6 kernel provides a subset of the services and system calls that Unix kernels traditionally offer.
        Figure 1.2 lists all of xv6’s system calls:
      </Para>
      {Img({ src:"Images/xv6/Xv6systemcalls.png", width:900 })}
      <S>The shell of Xv6: </S>
      <Para>
        The shell is an ordinary program that reads commands from the user and executes them. The
        fact that the shell is a user program, and not part of the kernel, illustrates the power of the system
        call interface: there is nothing special about the shell. It also means that the shell is easy to replace;
        as a result, modern Unix systems have a variety of shells to choose from, each with its own user
        interface and scripting features. The xv6 shell is a simple implementation of the essence of the
        Unix Bourne shell. Its implementation can be found at (user/sh.c).
      </Para>
      <h3>1.1 Process and Memory</h3>
      <Para>
        An xv6 process consists of user-space memory (instructions, data, and stack) and per-process
        state <Word word="private to ..." highlight=" 0">private to</Word> the kernel. Xv6 time-shares processes: it transparently switches the available CPUs
        among the set of processes waiting to execute. When a process is not executing, xv6 saves its CPU
        registers, restoring them when it next runs the process. The kernel associates a process identifier,
        or PID, with each process.
      </Para>
      <S>The fork()、wait()、exit() system call: </S>
      <Para>
        A process may create a new process using the fork system call. Fork() creates a new process,
        called the child process, with exactly the same memory contents as the calling process, called
        the parent process. Fork returns in both the parent and the child. In the parent, fork returns the
        child’s PID; in the child, fork returns zero. For example, consider the following program fragment
        written in the C programming language: 
      </Para>
      <CodeBlock lang="c" className="m-1 w-[700px]">{
`int pid = fork();
if(pid > 0) {
  printf("parent: child=%d\\n", pid);
  pid = wait((int *)0);
  printf("child %d is done\\n", pid);
} else if(pid == 0) {
  printf("child: exiting\\n"); exit(0);
} else {
  printf("fork error\\n");
}`
        }</CodeBlock>
      <Para>
        The exit() system call causes the calling process to stop executing and to release resources such as
        memory and open files. Exit() takes an integer status argument, conventionally 0 to indicate success.
      </Para>
      <Para>
        The wait() system call returns the PID of an exited (or killed) child of
        the current process and copies the exit status of the child to the address passed to wait(); if none of
        the caller’s children has exited, wait() waits for one to do so. If the caller has no children, wait()
        immediately returns -1. If the parent doesn’t care about the exit status of a child, it can pass a 0
        address to wait().
      </Para>
      <Para>
        In the example, the output lines:
        <blockquote className="mt-1 mb-1 pl-[1rem] ml-[1rem] border-l-blue-300">
          parent: child=1234 <br />
          child: exiting <br />
        </blockquote>
        might come out in either order, depending on whether the parent or child gets to its printf() call
        first. After the child exits, the parent’s wait() returns, causing the parent to print:
        <blockquote className="mt-1 mb-1 pl-[1rem] ml-[1rem] border-l-blue-300">
          parent: child 1234 is done
        </blockquote>
        Although the child has the same memory contents as the parent initially, the parent and child are
        executing with different memory and different registers: changing a variable in one does not affect
        the other. For example, when the return value of wait is stored into pid in the parent process, it
        doesn’t change the variable pid in the child. The value of pid in the child will still be zero.
      </Para>
      <blockquote className="mt-3 mb-3 border-l-amber-200">
        <details>
          <summary className="cursor-pointer font-bold w-fit">Linux man(2) of wait(): </summary>
          <CodeBlock lang="js">{
`  #include <sys/wait.h>
  pid_t wait(int *_Nullable wstatus);
  pid_t waitpid(pid_t pid, int *_Nullable wstatus, int options);

  The wait() system call suspends execution of the calling thread until one of its children terminates.
  The call wait(&wstatus) is equivalent to:
      waitpid(-1, &wstatus, 0);

  The waitpid() system call suspends execution of the calling thread until a child specified by pid argument
  has changed state. By default, waitpid() waits only for terminated children, but this behavior
  is modifiable via the options argument, as described below.

  The value of pid can be:
  < -1   meaning wait for any child process whose process group ID is equal to the absolute value of pid.
    -1   meaning wait for any child process.
    0    meaning wait for any child process whose process group ID is equal to that of the calling process 
         at the time of the call to waitpid().
  > 0    meaning wait for the child whose process ID is equal to the value of pid.

  The value of options is an OR of zero or more of the following constants:

  WNOHANG
          return immediately if no child has exited.

  WUNTRACED
          also return if a child has stopped (but not traced via ptrace(2)). Status for traced children
          which have stopped is provided even if this option is not specified.

  WCONTINUED (since Linux 2.6.10)
          also return if a stopped child has been resumed by delivery of SIGCONT.

  (For Linux-only options, see below.)

  If wstatus is not NULL, wait() and waitpid() store status information in the int to which it points.
  This integer can be inspected with the following macros (which take the integer itself as an argument,
  not a pointer to it, as is done in wait() and waitpid()!):

  WIFEXITED(wstatus)
          returns true if the child terminated normally, that is, by calling exit(3) or _exit(2), or by
          returning from main().

  WEXITSTATUS(wstatus)
          returns the exit status of the child. This consists of the least significant 8 bits of the
          status argument that the child specified in a call to exit(3) or _exit(2) or as the argument
          for a return statement in main(). This macro should be employed only if WIFEXITED returned true.

  WIFSIGNALED(wstatus)
          returns true if the child process was terminated by a signal.

  WTERMSIG(wstatus)
          returns the number of the signal that caused the child process to terminate. This macro should
          be employed only if WIFSIGNALED returned true.

  WCOREDUMP(wstatus)
          returns true if the child produced a core dump (see core(5)). This macro should be employed
          only if WIFSIGNALED returned true.
          This macro is not specified in POSIX.1-2001 and is not available on some UNIX implementations
          (e.g., AIX, SunOS). Therefore, enclose its use inside #ifdef WCOREDUMP ... #endif.

  WIFSTOPPED(wstatus)
          returns true if the child process was stopped by delivery of a signal; this is possible only if
          the call was done using WUNTRACED or when the child is being traced (see ptrace(2)).

  WSTOPSIG(wstatus)
          returns the number of the signal which caused the child to stop. This macro should be employed
          only if WIFSTOPPED returned true.

  WIFCONTINUED(wstatus)
          (since Linux 2.6.10) returns true if the child process was resumed by delivery of SIGCONT.
          `}</CodeBlock>
        </details>
      </blockquote>
      <Para>
        The exec() system call replaces the calling process’s memory with a new memory image loaded
        from a file stored in the file system. The file must have a particular format, which specifies which
        part of the file holds instructions, which part is data, at which instruction to start, etc. xv6 uses the
        ELF format, which Chapter 3 discusses in more detail. When exec() succeeds, it does not return
        to the calling program; instead, the instructions loaded from the file start executing at the entry
        point declared in the ELF header. Exec() takes two arguments: the name of the file containing the
        executable and an array of string arguments. For example:
        <CodeBlock lang="c" className="m-1 w-[700px]">{
`char *argv[3];
argv[0] = "echo";
argv[1] = "hello";
argv[2] = 0;
exec("/bin/echo", argv);
printf("exec error\\n");`
        }</CodeBlock>
        This fragment replaces the calling program with an instance of the program /bin/echo running
        with the argument list echo hello. Most programs ignore the first element of the argument array,
        which is conventionally the name of the program.
      </Para>
      <S>The principle of runcmd: </S>
      <Para>
        The xv6 shell uses the above calls to run programs on behalf of users. The main structure of
        the shell is simple; see main() (user/sh.c:145). The main loop reads a line of input from the user with
        getcmd(). Then it calls fork(), which creates a copy of the shell process. The parent calls wait(),
        while the child runs the command. For example, if the user had typed “echo hello” to the shell,
        runcmd would have been called with “echo hello” as the argument (user/sh.c:58), and then,
        it would call exec() (user/sh.c:78). If exec() succeeds then the child will execute instructions 
        from echo instead of runcmd. At some point echo will call exit(), which will cause the parent to 
        return from wait() in main() (user/sh.c:145).
      </Para>
      <Para>
        You might wonder why fork and exec are not combined in a single call; we will see later that
        the shell exploits the separation in its implementation of I/O redirection. To avoid the wastefulness
        of creating a duplicate process and then immediately replacing it (with exec), operating kernels
        optimize the implementation of fork for this use case by using virtual memory techniques such
        as copy-on-write (see Section 4.6).
      </Para>
      <Para>
        Xv6 allocates most user-space memory implicitly: fork() allocates the memory required for the
        child’s copy of the parent’s memory, and exec() allocates enough memory to hold the executable
        file. A process that needs more memory at run-time (perhaps for malloc) can call sbrk(n) to
        grow its data memory by n bytes; sbrk() returns the location of the new memory.
      </Para>












      <div className="h-12" />
    </div>
  )
}