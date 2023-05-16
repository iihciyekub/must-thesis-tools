// 正文
window.marc1 = {
}
var k = ""
var v = ""


k = "枚举 enumerate 环境"
v = `
% roman | Roman | arabic | alph | Alph
\\begin{enumerate}[label=\\roman*).]
\\item  
\\item  
\\end{enumerate}
`
window.marc1[k] = v


k = "引用 quote 环境"
v = `
\\begin{quote}

\\end{quote}
`
window.marc1[k] = v


k = "引用 quote 环境"
v = `
% adjustwidth 环境有两个必选参数，分别是左侧的调整量和右侧的调整量，单位可以是长度值（如 2cm）或长度命令（如 \\parindent）
\\begin{adjustwidth}{2cm}{2cm}

\\end{adjustwidth}
`
window.marc1[k] = v




k = "设定为两端对齐"
v = `\\justifying`
window.marc1[k] = v



k = "字体大小命令"
v =`\\tiny  \\scriptsize  \\footnotesize  \\small  \\normalsize  \\large  \\Large  \\huge  \\Huge`
window.marc1[k] = v






