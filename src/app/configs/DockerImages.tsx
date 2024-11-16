export default function DockerImages() {
  return (
    <div className="prose daisy-prose max-w-[1500px] leading-[35px] p-6">
      <h3>photoprism:</h3>
      <blockquote className="whitespace-pre-line">
        {`docker run -d \\
        --name photoprism \\
        --restart=always \\
        --security-opt seccomp=unconfined \\
        --security-opt apparmor=unconfined \\
        -p 2342:2342 \\
        -e PHOTOPRISM_UPLOAD_NSFW="true" \\
        -e PHOTOPRISM_ADMIN_PASSWORD="123456" \\
        -v /photoprism/storage \\
        -v ~/feet:/photoprism/originals \\
        photoprism/photoprism `}
      </blockquote>
      <h3>portainer:</h3>
      <blockquote className="whitespace-pre-line">
        {` docker run -d \\
          -p 9000:9000 \\
          --name portainer \\
          --restart=always \\
          -v /var/run/docker.sock:/var/run/docker.sock \\
          portainer/portainer-ce
        `}
      </blockquote>
      <h3>jellyfin: </h3>
      <blockquote className="whitespace-pre-line">
        {` docker run -d \\
          --name jellyfin \\
          -e PUID=1000 \\
          -e PGID=1000 \\
          -e TZ=Asia/Shanghai \\
          -p 8096:8096 \\
          -v ~/jellyfin/config:/config \\
          -v ~/jellyfin/cache:/cache \\
          -v ~/jellyfin/media:/media \\
          jellyfin/jellyfin
        `}
      </blockquote>
      <h3>gitea: </h3>
      <blockquote className="whitespace-pre-line w-[1500px]">
        {` docker run -d \\
          --name gitea \\
          --restart always \\
          --network host \\
          -e GITEA__SERVER__HTTP_PORT=3002 \\
          -v /srv/gitea/config:/data/gitea/conf \\ # gitea的配置文件
          -v /srv/gitea/data:/data/gitea/data \\ # gitea的仓库文件和lfs文件
          -v /srv/gitea/log:/data/gitea/log \\
          -v ~/LocalRepos:/FromLocalRepos \\
          gitea/gitea:latest
        `}
        注意: 1. 外部目录中的配置文件"app.ini"挂载到内部目录: /data/gitea/conf (或者将所有必要文件整体挂载到内部目录: /data) <br /> 
        <span className="pl-[3rem]"/> 2. network host 选项可以让容器使用宿主机的网络环境, 然后可以 -e GITEA__SERVER__HTTP_PORT=3002 从而用宿主机的端口访问 Gitea.  <br /> 
        <span className="pl-[3rem]"/> 3.1. "app.ini"中要添加以下配置才能在页面中直接迁移本地仓库: <br />
        <span className="pl-[5rem]"/> [security]  <br /> 
        <span className="pl-[5rem]"/> IMPORT_LOCAL_PATHS = true  <br /> 
        <span className="pl-[3rem]"/> 同时, 要将仓库在宿主机的目录挂载到内部目录, 之后迁移使用的"本地路径"是内部目录中的仓库路径(注意勾选migrate lfs). <br />
         <span className="pl-[3rem]"/> (gitea中仓库为裸仓库, 存放在内部目录"/data/gitea/data/gitea-repositories/用户名/仓库名.git") <br />
        <span className="pl-[3rem]"/> 3.2.(方法2): 直接在gitea中创建一个新的空仓库, 然后从本地仓库push. lfs大文件也会自动push到内部目录的"/data/gitea/data/lfs". <br /> 
        <span className="pl-[3rem]"/> 为避免每次push都要输入用户名密码, 可启用git自动保存用户名密码功能: git config --global credential.helper store <br /> 
      </blockquote>
    </div>
  )
}