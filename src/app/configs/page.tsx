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
        配置双显示器<br />
        # monitor=monitor名称, 分辨率@刷新率,位置,缩放比例<br />
        monitor=eDP-1,preffered,0x0,1<br />
        monitor=DP-1,1920x1200@60Hz,0x1080,1<br />
        <br />
        # 分配workspace到monitor<br />
        workspace=1, monitor:eDP-1<br />
        workspace=2, monitor:eDP-1<br />
        workspace=3, monitor:DP-1<br />
        <br />
        # 配置默认程序<br />
        # $terminal = kitty  # kitty 和 fcitx5 有 bug 打开 kitty fcitx5 在其它窗口就无法正常聚焦使用<br />
        $terminal = wezterm  # 安装 wezterm-git 版本才能用<br />
        # dolphin 总是不能正确选择应用程序打开文件<br />
        $fileManager = nautilus<br />
        # $menu = rofi -show drun -show-icons  # 使用 rofi-wayland <br />
        $menu = ~/.config/rofi/launchers/type-6/launcher.sh # choose theme <br />
        <br />
        # 配置窗体<br />
        general &#123;<br />
        # 间距<br />
        gaps_in = 3<br />
        gaps_out = 7<br />
        <br />
        # 边框宽度<br />
        border_size = 3<br />
        …<br />
        &#125;<br />
        <br />
        decoration &#123;<br />
        # 透明度<br />
        active_opacity = 1<br />
        inactive_opacity = 1<br />
        …<br />
        &#125;<br />
        <br />
        blur &#123;<br />
        # 毛玻璃效果<br />
        enabled = false<br />
        …<br />
        &#125;<br />
        <br />
        # 配置按键重复延迟和速率<br />
        Input &#123;<br />
        repeat_rate = 60 # 重复速率<br />
        repeat_delay = 200 # 延迟<br />
        …<br />
        &#125;<br />
        <br />
        # 应用自动启动<br />
        exec = killall -q fcitx5; fcitx5; # 输入法<br />
        exec = killall -q clash; clash; # 魔法<br />
        exec = killall -q swaybg; swaybg -i path/to/picture.png; # 背景图片(不先关闭swaybg可能在更新配置后导致内存溢出)<br />
        exec = killall -q waybar; waybar; # 状态栏<br />
        # 网络服务在systemd中, 应该能自动连接WiFi, 蓝牙同理<br />
        <br />
        # 防止应用模糊<br />
        xwayland &#123;<br />
        force_zero_scaling = true<br />
        &#125;<br />
        <br />
        # 键位绑定<br />
        bind = $mainMod, K, exec, $terminal<br />
        bind = $mainMod, N, exec, neovide<br />
        bind = $mainMod SHIFT, Q, killactive,<br />
        bind = $mainMod, Escape, exit,<br />
        bind = $mainMod, E, exec, $fileManager<br />
        bind = $mainMod, V, togglefloating,<br />
        bind = $mainMod, R, exec, $menu<br />
        bind = $mainMod, P, pseudo, # dwindle<br />
        bind = $mainMod, J, togglesplit, # dwindle<br />
        # Move focus with mainMod + CTRL + [hjkl]<br />
        bind = $mainMod CTRL, h, movefocus, l<br />
        bind = $mainMod CTRL, l, movefocus, r<br />
        bind = $mainMod CTRL, k, movefocus, u<br />
        bind = $mainMod CTRL, j, movefocus, d<br />
        # Switch workspaces with ALT + [0-9]<br />
        bind = ALT, 1, workspace, 1<br />
        bind = ALT, 2, workspace, 2<br />
        bind = ALT, 3, workspace, 3<br />
        bind = ALT, 4, workspace, 4<br />
        bind = ALT, 5, workspace, 5<br />
        bind = ALT, 6, workspace, 6<br />
        bind = ALT, 7, workspace, 7<br />
        bind = ALT, 8, workspace, 8<br />
        bind = ALT, 9, workspace, 9<br />
        bind = ALT, 0, workspace, 10<br />
        <br />
        # Move active window to a workspace with mainMod + ALT + [0-9]<br />
        bind = $mainMod ALT, 1, movetoworkspace, 1<br />
        bind = $mainMod ALT, 2, movetoworkspace, 2<br />
        bind = $mainMod ALT, 3, movetoworkspace, 3<br />
        bind = $mainMod ALT, 4, movetoworkspace, 4<br />
        bind = $mainMod ALT, 5, movetoworkspace, 5<br />
        bind = $mainMod ALT, 6, movetoworkspace, 6<br />
        bind = $mainMod ALT, 7, movetoworkspace, 7<br />
        bind = $mainMod ALT, 8, movetoworkspace, 8<br />
        bind = $mainMod ALT, 9, movetoworkspace, 9<br />
        bind = $mainMod ALT, 0, movetoworkspace, 10<br />
        bind = $mainMod CTRL, left, resizeactive, -50 0<br />
        bind = $mainMod CTRL, right, resizeactive, 50 0<br />
        bind = $mainMod CTRL, up, resizeactive, 0 -50<br />
        bind = $mainMod CTRL, down, resizeactive, 0 50<br />
        # Move window
        bind = CTRL ALT, h, movewindow, l<br />
        bind = CTRL ALT, l, movewindow, r<br />
        bind = CTRL ALT, k, movewindow, u<br />
        bind = CTRL ALT, j, movewindow, d<br />
        <br />
        # Example special workspace (scratcpad)<br />
        # bind = $mainMod, S, togglespecialworkspace, magic<br />
        # bind = $mainMod SHIFT, S, movetoworkspace, special:magic<br />
        <br />
        # Scroll through existing workspaces with mainMod + scroll<br />
        bind = $mainMod, mouse_down, workspace, e+1<br />
        bind = $mainMod, mouse_up, workspace, e-1<br />
        <br />
        # Move/resize windows with mainMod + LMB/RMB and dragging<br />
        bindm = $mainMod, mouse:272, movewindow<br />
        bindm = $mainMod, mouse:273, resizewindow<br />
        <br />
        # chrome启动需要附带参数启用代理<br />
        bind = $mainMod SHIFT, C, exec, google-chrome-stable -proxy-server=”127.0.0.1:7890”<br />
        bind = $mainMod SHIFT, N, exec, neovide<br />
        <br />
        # 截图: 需要安装grim和slurp<br />
        bind = $mainMod SHIFT, 4, exec, grim -g "$(slurp)" - | wl-copy<br />
        # make fcitx5 more stable<br />
        windowrule=pseudo,fcitx;<br />
      </p>
      <h3>代理</h3>
      <p>
        export http_proxy=http://127.0.0.1:7890<br />
        export https_proxy=http://127.0.0.1:7890 # 注意，应都用"http://", 否则可能有SSL相关问题<br />
      </p>
      <p>
        <a href='http://clash.razord.top'>http://clash.razord.top</a> 可进入clash的前端界面
      </p>
      <p className="font-bold">设置git代理:</p>
      <p>
        git config --global http.proxy http://127.0.0.1:7890 <br />
        git config --global https.proxy http://127.0.0.1:7890
      </p>
      <h2>Kitty Config</h2>
      font_size 16<br />
      font_family JetBrainsMono Nerd Font<br />
      background_opacity 0.8<br />
      <h2>WezTerm Config (wezterm.lua)</h2>
      <p className="whitespace-pre-line">
        {`
          local wezterm = require("wezterm")
          local act = wezterm.action
          local config = {
            font_size = 16,
            font = wezterm.font("JetBrainsMono Nerd Font", {weight = "Regular"}),
            color_scheme = "GruvboxDarkHard",

            use_fancy_tab_bar = false,
            hide_tab_bar_if_only_one_tab = true,
            show_new_tab_button_in_tab_bar = false,
            window_background_opacity = 0.8,
            text_background_opacity = 0.8,
            
            window_padding = {
              left = 20,
              right = 20,
              top = 5,
              bottom = 5,
            },

            keys = {
              { key = 'l', mods = 'CTRL', action = act.ActivateTabRelative(1) },
              { key = 'h', mods = 'CTRL', action = act.ActivateTabRelative(-1) },
            },
          }

          return config
        `}
      </p>
      <h2>VSCode Config</h2>
      <li>ArchLinux 下使用 yay -S visual-studio-code-bin 以安装正常版本 VSCode<br /></li>
      <li>code -r [path] 可以在原窗口切换到新工作目录<br /></li>
      <li>配置所用插件: Gruvbox Theme, Vim, Apc Customize UI++, Material Icon Theme/Catppuccin Icons,<br />
        Error Lens, Code Spell Checker, Project Manager</li>
      <li>给Apc修改权限: sudo chown -R $(whoami) /opt/visual-studio-code</li>
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
        <span>"editor.fontSize": 17,</span>
        <span>"editor.fontWeight": "400",</span>
        <span>"terminal.integrated.fontSize": 15,</span>
        <span>"editor.fontFamily": "'JetBrainsMono Nerd Font', 'vivo Sans'",</span>
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
        <span>"window.zoomLevel": 1.5,  // (行高: 7mm) </span>
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
        <span>"editor.wordSegmenterLocales": "zh-CN"</span>
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
        <span>  "when": "((vim.mode=='Normal' && editorFocus) || !inputFocus) && !renameInputVisible"</span>
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
        <span>  "when": "vim.mode == 'Normal'", </span>
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
      <h2>ranger 配置</h2>
      <h3>rc.conf:</h3>
      <p>
        set show_hidden true<br />
        set preview_images true<br />
        set preview_images_method kitty<br />
      </p>
      <h3>rifle.conf:</h3>
      <p>
        mime ^text, label editor = nvim -- "$@"<br />
        !mime ^text, label editor, ext |sml|json|csv|tex|py|pl|rb|js|sh|php = nvim -- "$@"<br />
      </p>
      <h2>yazi 配置</h2>
      <h3>yazi.toml:</h3>
      <p>
        [opener] <br />
        edit = [ <br />
        &nbsp;&nbsp;&#123; run = 'nvim "$@"', block = true, for = "unix" &#125;, <br />
        &nbsp;&nbsp;&#123; run = "code %*",   block = true, for = "windows" &#125;, <br />
        ] <br />
      </p>
      <h2>其他配置</h2>
      <h3>Env: </h3>
      <p>
        export MANPAGER="nvim +Man!" <br />
        alias suspend="systemctl suspend" <br />
        alias reload="hyprctl reload" <br />
      </p>
      <h2>rofi.rasi: </h2>
      <p className="whitespace-pre-line">
        {`使用 https://github.com/adi1090x/rofi.git , hyprland 启动rofi时直接启动对应主题的 launcher.sh 脚本即可.
          进入对应 .rofi 文件可以微调配置, 比如字体大小, 长宽, 还有背景图片[doge]等`}
      </p>
      <h2>waybar</h2>
      <p className="whitespace-pre-line">
        {`基于 https://github.com/knightfallxz/Hyprland-Dots.git 配置
          waybar/config.jsonc: 
          {
            "layer": "top",
            "height": 10,
            "margin-top": 0,
            "margin-left": 0,
            "margin-bottom": 0,
            "margin-right": 0,
            "spacing": 0,
            "modules-left": ["custom/arch", "custom/separator", "hyprland/workspaces", "custom/separator" , "cpu", "memory", "temperature"],
            "modules-center": ["custom/playerctl" ],
            "modules-right": ["tray", "battery", "pulseaudio",  "network", "custom/blueberry", "clock", "battery"],
            "custom/arch": {
              "format": "  ",
              "on-click": "~/.config/rofi/launchers/type-6/launcher.sh" // choose rofi theme
            },
            "hyprland/workspaces": {
              "all-outputs": true,
              "active-only": false,
              "on-click": "activate",
              "format": "{icon}",
              "on-scroll-up": "hyprctl dispatch workspace e+1",
              "on-scroll-down": "hyprctl dispatch workspace e-1",
              "format-icons": {
                "1": " ",
                "2": " ",
                "3": " ",
                "4": " ",
                "5": " ",
                "6": " ",
                "7": " ",
                "8": " ",
                "9": " ",
                "urgent": " ",
                "active": " ",
                "default": " "
              }
            },
            "clock": {
              "format": "<span color='#b69bf1'> </span>{:%H:%M}",
              "format-alt": "<span foreground='#b69bf1'> </span><span>{:%I:%M %p %a %d}</span>",
              "tooltip-format": "<big>{:%Y %B}</big>\n<tt><small>{calendar}</small></tt>"
            },
            "battery": {
              "bat": "BAT0",
              "interval": 10,
              "states": {
                "warning": 30,
                "critical": 15
              },
              "format": " {icon} {capacity}%",
              "format-charging": "󰂄 {capacity}%",
              "format-icons": ["", "", "", "", "", "", "", "", "", ""],
              "max-length": 25,
              "tooltip": false
            },
            "custom/separator": {
              "format": " "
            },
            "custom/blueberry": {
              "format": "  ",
              "on-click": "blueberry"
            },
            "network": {
              "interface": "wlo1",
              "format": "{ifname}",
              "format-wifi": "<span color='#90cdfa'>  </span>{essid}({signalStrength}%)",
              "format-ethernet": "{ipaddr}/{cidr} ",
              "format-disconnected": "<span color='#ff005f'>󰖪 </span>No Network",
              "on-click": "kitty nmtui"
            },
            "pulseaudio": {
              "on-click": "pactl set-sink-mute @DEFAULT_SINK@ toggle",
              "format": "<span color='#f7768e'> </span> {volume}%",
              "format-muted": "<span color='#f7768e'>ﱝ</span>",
              "format-icons": {
              "headphone": " ",
              "hands-free": "",
              "headset": " ",
              "phone": " ",
              "portable": " ",
              "car": " ",
              "default": ["奔"]
            },
            "memory": {
              "format": "<span foreground='#9ece6a'></span> {}%",
              "on-click": "kitty htop"
            },
            "cpu": {
              "format": "<span foreground='#ff005f'> </span>{usage}%",
              "on-click": "kitty htop"
            },
            "temperature": {
              "critical-threshold": 80,
              "format": "<span foreground='#5d73ca'></span> {temperatureC}°C"
            },
            "tray": {
              "icon-size": 20,
              "reverse-direction": true,
              "spacing": 6
            },
            "custom/playerctl": {
              "format": "<span>{}</span>  {icon} ",
              "return-type": "json",
              "max-length": 100,
              "format-icons": {
                "Paused": "<span foreground='#bb9af7'> </span>",
                "Playing": "<span foreground='#bb9af7'> </span>"
              },
              "escape": true,
              "exec": "playerctl -a metadata --format '{\"alt\": \"{{status}}\", \"text\": \"  {{markup_escape(title)}}\", \"tooltip\": \"{{playerName}} : {{markup_escape(title)}}\",  }' -F",
              "on-click-middle": "playerctl previous",
              "on-click": "playerctl play-pause",
              "on-click-right": "playerctl next"
            }
          }
          style.css:
          * {
            border: none;
            font-family: 'JetBrainsMono Nerd Font' , 'Symbols Only';
            font-size: 16px;
            font-feature-settings: '"zero", "ss01", "ss02", "ss03", "ss04", "ss05", "cv31"';
            min-height: 26px;
          }
          window#waybar {
            background: transparent;
          }
          #custom-arch, #workspaces {
            border-radius: 15px;
            background-color: #191a24;
            color: #c0caf5;
            margin-top: 7px;
            margin-right: 15px;
            padding-top: 1px;
            padding-left: 10px;
            padding-right: 10px;
          }
          #custom-arch {
            font-size: 20px;
            margin-left: 10px;
            padding-right: 16px;
          }
          #workspaces button {
            background: #191a24;
            color: #c0caf5;
          }
          #workspaces button.active {
            color: #2ac3de;
          }
          #workspaces button.urgent {
            color: #ff0066;
          }
          #clock, #temperature, #cpu, #pulseaudio, #network, #battery , #tray, #memory ,#custom-playerctl, #custom-blueberry {
            border-radius: 15px;
            background-color: #191a24;
            color: #c0caf5;
            margin-top: 7px;
            padding-left: 9px;
            padding-right: 9px;
            margin-right: 15px;
          }
          #clock {
            margin-right: 10px;
          }
          @keyframes blink {
            to {
              background-color: #ffffff;
              color: black;
            }
          }
          #battery.warning:not(.charging) {
            background: #f38ba8;
            color: white;
            animation-name: blink;
            animation-duration: 0.5s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            animation-direction: alternate;
          }
          #tray{
            padding-right: 8px;
            padding-left: 10px;
          }
        `}
      </p>
    </div>
  )
}







