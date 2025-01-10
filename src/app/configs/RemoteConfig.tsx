import CodeBlock from "@/components/CodeBlock"
export default function RemoteConfig() {
  return (
    <div className="prose daisy-prose max-w-[1500px] leading-[35px] p-12">
      <h2>远程服务器相关配置</h2>
      <h3>ssh连接: </h3>
      本地连接文件: <br />
      <CodeBlock lang="bash" className="whitespace-pre-line w-[1000px] m-1">
        {`#! /bin/zsh
SERVER="IPADDR"
USER="username"
PASSWORD="password"
# sshpass -p 自动输入密码, -R 使用本地代理映射
sshpass -p "$PASSWORD" ssh "$USER@$SERVER" -R 127.0.0.1:7890:127.0.0.1:7890`}
      </CodeBlock>
      <strong>常见问题: </strong><br />
      远程自动断开, 之后提示无法连接本地代理: <br />
      因为自动断开连接但相关ssh连接process仍在运行占用端口. 首先执行: "sudo lsof -i:7890", "sudo kill -9 [pid]". <br />
      在服务器 /etc/ssh/sshd_config 中配置保持连接相关设置, 如: <br />
      <CodeBlock lang="yaml" className="whitespace-pre-line w-[1000px] m-1">
        {`ClientAliveInterval 60\nClientAliveCountMax 3`}
      </CodeBlock>
       然后执行"sudo systemctl restart sshd". <br />
      <h3>命令行界面相关配置: </h3>
      首先在root用户登陆, 使用 adduser 命令创建好新用户, 然后执行"sudo usermod -aG sudo [username]", 给予新用户sudo权限. <br />
      使用新用户登陆, 安装 zsh 和 oh-my-zsh, 然后执行"chsh -s /bin/zsh"切换终端; 安装 trash, lsd, neovim ... <br />
      使用"sudo ln -s [目标可执行文件绝对路径] /usr/local/bin/[命令名称]"添加所需软链接.<br />
      添加.zshrc文件配置:
      <CodeBlock lang="bash" className="whitespace-pre-line w-[1000px] m-1">
        {`alias rm="trash"\nalias rm-l="trash-list"\nalias ls="lsd"\nalias la="ls -lAh"\nalias vim="nvim"\n
export http_proxy=http://127.0.0.1:7890\nexport https_proxy=http://127.0.0.1:7890\n# ...`}
      </CodeBlock>
    </div>
  )
}