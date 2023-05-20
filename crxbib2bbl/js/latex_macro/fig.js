// 图
window.marc2 = {
}


k = "figure 环境"
v = `
% width=2cm | sacle= | height= | angle=40 | keepaspectratio=true | trim=1cm | clip=false 
\\begin{figure}[H]
    \\centering
    \\includegraphics[width=.5\\textwidth, angle=40]{图形文件的路径}
    \\caption{图标题}
    \\label{fig:sub}
\\end{figure}
`
window.marc2[k] = v



k = "figure 环境 (多个)"
v = `
% width=2cm | sacle= | height= | angle=40 | keepaspectratio=true | trim=1cm | clip=false 
\\begin{figure}[H]
    \\begin{subfigure}{0.49\\textwidth}
        \\centering
        \\includegraphics[width=.5\\textwidth, angle=40]{图形文件的路径}
        \caption{A subfigure}
        \label{fig:sub1}
    \\end{subfigure}
    \hfill
    \\begin{subfigure}{0.49\\textwidth}
        \\centering
        \\includegraphics[width=.5\\textwidth, angle=40]{图形文件的路径}
        \caption{A subfigure}
        \label{fig:sub1}
    \\end{subfigure}
\\end{figure}
`
window.marc2[k] = v


k = "tikzpicture 环境(行间模式)"
v = `
% 
\\begin{tikzpicture}
\\node[name=R] at (0,0) {\\textbf{$\\checkmark$ }};
\\end{tikzpicture}
`
window.marc2[k] = v

k = "tikzpicture 环境(自由模式)"
v = `
\\begin{tikzpicture}[remember picture,overlay]
\\coordinate (O) at (current page.north west);
\\node[name=R,anchor=north west] at (O) {\\textbf{$\\checkmark$ }};
\\end{tikzpicture}
`
window.marc2[k] = v






k = "设置图标题居左"
v = `
% figure | subfigure | table | subtable
\\captionsetup[figure]{singlelinecheck=off,justification=raggedright}
`
window.marc2[k] = v




