// 数学环境
window.marc4 = { 
}
function get_mathenv(a, b) {
    let t = `${a} ${b} 环境`
    let t1 = `
\\begin{${b}}[ ]

\\end{${b}}
    `
    window.marc4[t] = t1
}
a = ["Axiom","Theorem","Proposition","Property","Lemma","Corollary","Definition","Example","Remark","Condition","Conclusion","Assumption"]
b = ["公理","定理","命題","性質","引理","推論","定義","例","註解","條件","結論","假設"]
//将a,b 组合
for (let i = 0; i < a.length; i++) {
    get_mathenv(b[i],a[i])
}