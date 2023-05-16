window.marc6 = {
}


k = '取随机数'
v = `
\pgfmathparse{random(1,5)} 
\pgfmathresult
}`
window.marc6[k] = v;

k = '取随机数并赋值给变量'
v = `
\pgfmathparse{random(1,5)}\let\alea\pgfmathresult
}`
window.marc6[k] = v;


k = '取随机整数'
v = `
\pgfmathrandominteger{\alea}{1}{5}
}`
window.marc6[k] = v;










