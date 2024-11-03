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
    </div>
  )
}