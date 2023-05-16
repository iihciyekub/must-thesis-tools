// 表
window.marc3 = {
}

k = '读取csv 三线表样式'
v = `
\\begin{table}[htbp]
    \\centering
    \\caption{read csv data}
    \\label{tab:mytable}
    \\csvautobooktabular{ csv文件路径 } 
\\end{table}
`
window.marc3[k] = v;


k = '横置的表(旋转90)'
v = `
\\begin{sidewaystable}[!htp]
    % 设置表格的列间距
    \\setlength{\\tabcolsep}{10mm}
    \\centering
    \\caption{旋转表标题}
    % 下面一行代码创建了一个左对齐的表格，并且具有 3 列。lcc 表示第一列左对齐，其余 2 列都是居中对齐
    \\begin{tabular}[l]{lcc}
    \\toprule
        % 这里填写表头
        col1 & col2 & col3 \\\\
    \\midrule
        % 这里填写表格内容
        value1 & value2 & value3 \\\\
    \\bottomrule
    \\end{tabular}
\\end{sidewaystable}
`
window.marc3[k] = v;



k = `设置表格的列间距`
v = `\\setlength{\\tabcolsep}{10mm}`
window.marc3[k] = v;


k = `设置表格的行高缩放因子`
v = `\\renewcommand\\arraystretch{0.5}`
window.marc3[k] = v;
