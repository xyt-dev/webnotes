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
      <h2>Hyprland配置</h2>
      <p>
        配置双显示器<br/>
        # monitor=monitor名称, 分辨率@刷新率,位置,缩放比例<br/>
        monitor=eDP-1,preffered,0x0,1<br/>
        monitor=DP-1,1920x1200@60Hz,0x1080,1<br/>
        <br/>
        # 分配workspace到monitor<br/>
        workspace=1, monitor:eDP-1<br/>
        workspace=2, monitor:eDP-1<br/>
        workspace=3, monitor:DP-1<br/>
        <br/>
        配置默认程序<br/>
        $terminal = kitty<br/>
        $fileManager = dolphin<br/>
        $menu = wofi -show drun<br/>
        <br/>
        配置窗体<br/>
        general &#123;<br/>
        # 间距<br/>
        gaps_in = 5<br/>
        gaps_out = 60<br/>
        <br/>
        # 边框宽度<br/>
        border_size = 2<br/>
        …<br/>
        &#125;<br/>
        <br/>
        decoration &#123;<br/>
        # 透明度<br/>
        active_opacity = 0.95<br/>
        inactive_opacity = 0.80<br/>
        …<br/>
        &#125;<br/>
        <br/>
        blur &#123;<br/>
        # 毛玻璃效果<br/>
        enabled = false<br/>
        …<br/>
        &#125;<br/>
        <br/>
        # 配置按键重复延迟和速率<br/>
        Input &#123;<br/>
        repeat_rate = 50 # 重复速率<br/>
        repeat_delay = 220 # 延迟<br/>
         …<br/>
        &#125;<br/>
        <br/>
        # 应用自动启动<br/>
        exec = killall -q fcitx5; fcitx5; # 输入法<br/>
        exec = killall -q clash; clash; # 魔法<br/>
        exec = killall -q swaybg; swaybg -i path/to/picture.png; # 背景图片(不先关闭swaybg可能在更新配置后导致内存溢出)<br/>
        exec = killall -q waybar; waybar; # 状态栏<br/>
        # 网络服务在systemd中, 应该能自动连接WiFi, 蓝牙同理<br/>
        <br/>
        # 防止应用模糊<br/>
        xwayland &#123;<br/>
        force_zero_scaling = true<br/>
        &#125;<br/>
        <br/>
        # 键位绑定<br/>
        bind = $mainMod, K, exec, $terminal<br/>
        bind = $mainMod, N, exec, neovide<br/>
        bind = $mainMod SHIFT, Q, killactive,<br/>
        bind = $mainMod, Escape, exit,<br/>
        bind = $mainMod, E, exec, $fileManager<br/>
        bind = $mainMod, V, togglefloating,<br/>
        bind = $mainMod, R, exec, $menu<br/>
        bind = $mainMod, P, pseudo, # dwindle<br/>
        bind = $mainMod, J, togglesplit, # dwindle<br/>
        # Move focus with mainMod + CTRL + [hjkl]<br/>
        bind = $mainMod CTRL, h, movefocus, l<br/>
        bind = $mainMod CTRL, l, movefocus, r<br/>
        bind = $mainMod CTRL, k, movefocus, u<br/>
        bind = $mainMod CTRL, j, movefocus, d<br/>
        # Switch workspaces with ALT + [0-9]<br/>
        bind = ALT, 1, workspace, 1<br/>
        bind = ALT, 2, workspace, 2<br/>
        bind = ALT, 3, workspace, 3<br/>
        bind = ALT, 4, workspace, 4<br/>
        bind = ALT, 5, workspace, 5<br/>
        bind = ALT, 6, workspace, 6<br/>
        bind = ALT, 7, workspace, 7<br/>
        bind = ALT, 8, workspace, 8<br/>
        bind = ALT, 9, workspace, 9<br/>
        bind = ALT, 0, workspace, 10<br/>
        <br/>
        # Move active window to a workspace with mainMod + ALT + [0-9]<br/>
        bind = $mainMod ALT, 1, movetoworkspace, 1<br/>
        bind = $mainMod ALT, 2, movetoworkspace, 2<br/>
        bind = $mainMod ALT, 3, movetoworkspace, 3<br/>
        bind = $mainMod ALT, 4, movetoworkspace, 4<br/>
        bind = $mainMod ALT, 5, movetoworkspace, 5<br/>
        bind = $mainMod ALT, 6, movetoworkspace, 6<br/>
        bind = $mainMod ALT, 7, movetoworkspace, 7<br/>
        bind = $mainMod ALT, 8, movetoworkspace, 8<br/>
        bind = $mainMod ALT, 9, movetoworkspace, 9<br/>
        bind = $mainMod ALT, 0, movetoworkspace, 10<br/>
        bind = $mainMod CTRL, left, resizeactive, -50 0<br/>
        bind = $mainMod CTRL, right, resizeactive, 50 0<br/>
        bind = $mainMod CTRL, up, resizeactive, 0 -50<br/>
        bind = $mainMod CTRL, down, resizeactive, 0 50<br/>
        # Move window
        bind = CTRL ALT, h, movewindow, l<br/>
        bind = CTRL ALT, l, movewindow, r<br/>
        bind = CTRL ALT, k, movewindow, u<br/>
        bind = CTRL ALT, j, movewindow, d<br/>
        <br/>
        # Example special workspace (scratcpad)<br/>
        # bind = $mainMod, S, togglespecialworkspace, magic<br/>
        # bind = $mainMod SHIFT, S, movetoworkspace, special:magic<br/>
        <br/>
        # Scroll through existing workspaces with mainMod + scroll<br/>
        bind = $mainMod, mouse_down, workspace, e+1<br/>
        bind = $mainMod, mouse_up, workspace, e-1<br/>
        <br/>
        # Move/resize windows with mainMod + LMB/RMB and dragging<br/>
        bindm = $mainMod, mouse:272, movewindow<br/>
        bindm = $mainMod, mouse:273, resizewindow<br/>
        <br/>
        # chrome启动需要附带参数启用代理<br/>
        bind = $mainMod SHIFT, C, exec, google-chrome-stable -proxy-server=”127.0.0.1:7890”<br/>
        bind = $mainMod SHIFT, N, exec, neovide<br/>
        # 截图: 需要安装grim和slurp<br/>
        bind = $mainMod SHIFT, 4, exec, grim -g "$(slurp)" - | wl-copy<br/>
        # make fcitx5 more stable<br/>
        windowrule=pseudo,fcitx;<br/>
      </p>
      <h3>代理</h3>
      <p>
        export http_proxy=http://127.0.0.1:7890<br/>
        export https_proxy=http://127.0.0.1:7890 # 注意，应都用"http://", 否则可能有SSL相关问题<br/>
      </p>
      <p>
        <a href='http://clash.razord.top'>http://clash.razord.top</a> 可进入clash的前端界面
      </p>
      <h2>VSCode Config</h2>
      <li>ArchLinux 下使用 yay -S visual-studio-code-bin 以安装正常版本 VSCode<br/></li>
      <li>code -r [path] 可以在原窗口切换到新工作目录<br/></li>
      <li>配置所用插件: Gruvbox Theme, Vim, Apc Customize UI++, Material Icon Theme/Catppuccin Icons,<br/>
                      Error Lens, Code Spell Checker, Project Manager</li>
      <h3>settings.json</h3>
      <DaisyCode>
        <span>"workbench.colorTheme": "Gruvbox Dark Hard",</span>
        <span>"editor.semanticTokenColorCustomizations": &#123;</span>
        <span>  "[Gruvbox Dark Hard]": &#123;</span>
        <span>    "rules": &#123;</span>
        <span>      "function": &#123;</span>
        <span>        "foreground": "#ffcc99",</span>
        <span>        "fontStyle": "bold"</span>
        <span>      &#125;,</span>
        <span>      "method": &#123;</span>
        <span>        "foreground": "#ffcc99",</span>
        <span>        "fontStyle": "bold"</span>
        <span>      &#125;</span>
        <span>    &#125;</span>
        <span>  &#125;</span>
        <span>&#125;,</span>
        <span>"editor.tokenColorCustomizations": &#123;</span>
        <span>  "[Gruvbox Dark Hard]": &#123;</span>
        <span>    // "keywords": "#ffaacc",</span>
        <span>    "functions": "#ffcc99",</span>
        <span>    "textMateRules": [</span>
        <span>      &#123;</span>
        <span>        "scope": "keyword.operator.logical",</span>
        <span>        "settings": &#123;</span>
        <span>          "foreground": "#8EC07C"</span>
        <span>        &#125;</span>
        <span>      &#125;,</span>
        <span>      &#123;</span>
        <span>        "scope": "source.go entity.name.function", //go</span>
        <span>        "settings": &#123;</span>
        <span>          "foreground": "#ffcc99",</span>
        <span>          "fontStyle": "bold"</span>
        <span>        &#125;</span>
        <span>      &#125;,</span>
        <span>      &#123;</span>
        <span>        "scope": "storage.type",</span>
        <span>        "settings": &#123;</span>
        <span>          "foreground": "#fabd2f",  // primitive type golden</span>
        <span>        &#125;,</span>
        <span>      &#125;</span>
        <span>    ]</span>
        <span>  &#125;</span>
        <span>&#125;,</span>
        <span>"editor.fontSize": 16,</span>
        <span>"editor.fontWeight": "500",</span>
        <span>"terminal.integrated.fontSize": 15,</span>
        <span>"editor.fontFamily": "JetBrainsMono Nerd Font",</span>
        <span>"editor.fontLigatures": true,</span>
        <span>"terminal.integrated.defaultProfile.linux": "zsh",</span>
        <span>"editor.cursorBlinking": "smooth",</span>
        <span>"editor.cursorSmoothCaretAnimation": "on",</span>
        <span>"editor.smoothScrolling": true,</span>
        <span>"workbench.list.smoothScrolling": true,</span>
        <span>"terminal.integrated.smoothScrolling": true,</span>
        <span>"terminal.integrated.fontFamily": "JetBrainsMono Nerd Font",</span>
        <span>"explorer.confirmDelete": false,</span>
        <span>"C_Cpp.intelliSenseEngine": "disabled",</span>
        <span>"git.enableSmartCommit": true,</span>
        <span>"git.confirmSync": false,</span>
        <span>"git.autofetch": true,</span>
        <span>"editor.tabSize": 2,</span>
        <span>"git.openRepositoryInParentFolders": "always",</span>
        <span>"workbench.iconTheme": "material-icon-theme",  // "catppuccin-mocha",</span>
        <span>"catppuccin-icons.hidesExplorerArrows": true,</span>
        <span>"material-icon-theme.hidesExplorerArrows": true,</span>
        <span>"material-icon-theme.folders.color": "#ffaacc",</span>
        <span>"material-icon-theme.files.color": "#ffaacc",</span>
        <span>"security.workspace.trust.untrustedFiles": "open",</span>
        <span>"editor.quickSuggestions": &#123;</span>
        <span>  "comments": "on",</span>
        <span>  "strings": "on"</span>
        <span>"editor.suggest.insertMode": "replace",  // overwrite</span>
        <span>&#125;,</span>
        <span>"vim.useSystemClipboard": true,</span>
        <span>"vim.highlightedyank.enable": true,</span>
        <span>"vim.highlightedyank.textColor": "#282828",  // gruvbox bg0</span>
        <span>"vim.highlightedyank.color": "#fbf1c7",  // gruvbox fg0</span>
        <span>"vim.hlsearch": true,</span>
        <span>"vim.normalModeKeyBindingsNonRecursive": [  // Esc remove highlight</span>
        <span>    &#123;</span>
        <span>        "before": ["&lt;Esc&gt;"],</span>
        <span>        "commands": [":nohlsearch"]</span> 
        <span>    &#125;</span>
        <span>],</span>
        <span>"http.proxy": "http://127.0.0.1:7890",</span>
        <span>"http.proxyStrictSSL": false,</span>
        <span>"files.exclude": &#123;</span>
        <span>  "**/.git": false</span>
        <span>&#125;,</span>
        <span>"terminal.external.linuxExec": "kitty",</span>
        <span>"editor.linkedEditing": true,  // html tag linked edit</span>
        <span>// ui</span>
        <span>"window.zoomLevel": 2.3,</span>
        <span>"window.titleBarStyle": "native",  // custom</span>
        <span>"window.menuBarVisibility": "compact",</span>
        <span>"window.customMenuBarAltFocus": false,</span>
        <span>"window.customTitleBarVisibility": "never",</span>
        <span>"editor.minimap.showSlider": "always",</span>
        <span>"editor.scrollbar.verticalScrollbarSize": 0,</span>
        <span>"editor.scrollbar.horizontalScrollbarSize": 5,</span>
        <span>"workbench.tree.indent": 23,</span>
        <span>"apc.header": &#123;</span>
        <span>  "height": 30,</span>
        <span>&#125;,</span>
        <span>"apc.sidebar.titlebar": &#123;</span>
        <span>  "height": 30</span>
        <span>&#125;,</span>
        <span>"apc.listRow": &#123;"fontSize": 15, "height": 26&#125;,</span>
        <span>"apc.stylesheet": &#123;</span>
        {`  // ".split-view-container .split-view-view.visible:nth-child(3)":
            // "top:0 !important; height: 100vh !important;",`}
        <span>  // ".monaco-workbench .part.titlebar": "display: none",</span>
        <span>  </span>
        <span>  // ".title-label": "display: none !important",</span>
        {`  // ".monaco-workbench .part.sidebar .title-actions .actions-container":
            // "justify-content: space-evenly !important",`}
        <span>  ".composite.title": "display: block !important",</span>
        <span>&#125;,</span>
        <span>"apc.electron": &#123;</span>
        <span>    "frame": false,  // disable native menu in native mode</span>
        <span>&#125;,</span>
        <span>"apc.activityBar": &#123;</span>
        <span>    "size": 30,</span>
        <span>    "itemSize": 30,</span>
        <span>    "itemMargin": 5,</span>
        <span>    "position": "bottom",</span>
        <span>&#125;,</span>
        <span>"apc.statusBar": &#123;</span>
        <span>    "position": "editor-bottom",</span>
        <span>    "height": 30</span>
        <span>&#125;,</span>
        <span>"errorLens.onSave": true,  // show message only on save</span>
        <span>"workbench.layoutControl.enabled": false,</span>
        <span>"window.commandCenter": false,</span>
        <span>// projects manager</span>
        <span>"projectManager.git.baseFolders": [</span>
        <span>    // "$home/CodeSpace"  // git projects base folder</span>
        <span>],</span>
        <span>"cSpell.diagnosticLevel": "Hint",</span>
        <span>"cSpell.minWordLength": 5,</span>
        <span>// add user words:</span>
        <span>"cSpell.userWords": [</span>
        <span>    "gruvbox",</span>
        <span>]</span>
      </DaisyCode>
      <h3>keybindings.json:</h3>
      <DaisyCode>
        <span>&#123;</span>
        <span>  "key": "ctrl+t",</span>
        <span>  "command":"workbench.action.terminal.toggleTerminal",</span>
        <span>  "when": "terminal.active"</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "ctrl+shift+t",</span>
        <span>  "command": "workbench.action.toggleMaximizedPanel",</span>
        <span>  "when": "panelAlignment == 'center' || panelPosition != 'bottom'"</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "space e",</span>
        <span>  "command": "workbench.view.explorer",</span>
        <span>  "when": "(vim.mode == 'Normal' && editorFocus) || !inputFocus"</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "space shift+e",</span>
        <span>  "command": "workbench.action.toggleSidebarVisibility",</span>
        <span>  "when": "(vim.mode == 'Normal' && editorFocus) || !inputFocus"</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "space s",</span>
        <span>  "command": "workbench.action.quickTextSearch",</span>
        <span>  "when": "(vim.mode == 'Normal' && editorFocus) || !inputFocus"</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "space f",</span>
        <span>  "command": "workbench.action.quickOpen",</span>
        <span>  "when": "(vim.mode == 'Normal' && editorFocus) || !inputFocus"</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "space c",</span>
        <span>  "command": "workbench.action.closeActiveEditor",</span>
        <span>  "when": "(vim.mode == 'Normal' && editorFocus) || !inputFocus"</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "shift+l",</span>
        <span>  "command": "workbench.action.nextEditor",</span>
        <span>  "when": "((vim.mode=='Normal' && editorFocus) || !inputFocus) && !renameInputVisible"</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "shift+h",</span>
        <span>  "command": "workbench.action.previousEditor",</span>
        <span>  "when": "((vim.mode=='Normal' && editorFocus) || !inputFocus") && !renameInputVisible</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "ctrl+w",</span>
        <span>  "command": "-workbench.action.closeActiveEditor",</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "shift+a",</span>
        <span>  "command": "explorer.newFolder",</span>
        <span>  "when": "explorerViewletVisible && !inputFocus && explorerViewletFocus"</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "a",</span>
        <span>  "command": "explorer.newFile",</span>
        <span>  "when": "explorerViewletVisible && !inputFocus && explorerViewletFocus"</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "r",</span>
        <span>  "command": "renameFile",</span>
        <span>  "when": "explorerViewletVisible && !inputFocus && explorerViewletFocus"</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "ctrl+c",</span>
        <span>  "command": "workbench.action.closeQuickOpen",</span>
        <span>  "when": "inQuickOpen"</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "ctrl+e",</span>
        <span>  "command": "-workbench.action.quickOpen",</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "ctrl+p",</span>
        <span>  "command": "-workbench.action.quickOpen",</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "ctrl+n",</span>
        <span>  "command": "-workbench.action.files.newUntitledFile",</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "shift+k",</span>
        <span>  "command": "editor.action.showHover",</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "ctrl+n",</span>
        <span>  "command": "quickInput.next",</span>
        <span>  "when": "inQuickInput && quickInputType == 'quickPick'"</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "ctrl+p",</span>
        <span>  "command": "quickInput.previous",</span>
        <span>  "when": "inQuickInput && quickInputType == 'quickPick'"</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "ctrl+n",</span>
        <span>  "command": "editor.action.triggerSuggest",</span>
        <span>  "when": "(vim.mode == 'Insert' && editorFocus) && !suggestWidgetVisible"</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "ctrl+p",</span>
        <span>  "command": "editor.action.triggerSuggest",</span>
        <span>  "when": "(vim.mode == 'Insert' && editorFocus) && !suggestWidgetVisible"</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "space b",</span>
        <span>  "command": "workbench.action.toggleAuxiliaryBar",</span>
        <span>  "when": "(vim.mode == 'Normal' && editorFocus) || !inputFocus",</span>
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "enter",</span>
        <span>  "command": "explorer.openAndPassFocus",</span>
        {`  "when": "filesExplorerFocus && foldersViewVisible && 
                !explorerResourceIsFolder && !inputFocus"`}
        <span>&#125;,</span>
        <span>&#123;</span>
        <span>  "key": "enter",</span>
        <span>  "command": "list.toggleExpand",</span>
        {`  "when": "filesExplorerFocus && foldersViewVisible &&
                explorerResourceIsFolder && !inputFocus"`}
        <span>&#125;,</span>
      </DaisyCode>
    </div>
  )
}