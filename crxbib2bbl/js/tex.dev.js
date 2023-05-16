window.marc7 = {
}

k = 'foreach'
v = `
\\foreach \\i in {0,...,5}{
    \\i
}
`
window.marc7[k] = v


k = '- foreach 带计数器'
v = `
\\foreach [count=\\n]  \\i in {0,...,5}{
    \\i,\\n
}
`
window.marc7[k] = v

k = '- foreach 带 evaluate'
v = `
\\foreach  [count=\\e,evaluate = {\\N= max(99, \\m-7);}] \\m in {0,...,5}{
    \\m,\\N,\\e
}
`
window.marc7[k] = v



k = '- foreach 带 evaluate as'
v = `
\\foreach[evaluate=\\i as \\r using {int(mod(\\i+1,12))}] \\i in {0,...,11}{
    \\i,\\r
}
`
window.marc7[k] = v



k = '- foreach 带 breakforeach'
v = `
\\foreach [count=\\e,evaluate={\\n= max(-4\\,\\i-7);\\m = min(3\\,4);}] \\i in {0,...,5}{
    \\ifnum \\e > 3
        \\breakforeach
    \\fi
}
`
window.marc7[k] = v



k = '- foreach 全局变量'
v = `
\\foreach [count =\\e] \\o in {3,5,6}{
    \\global\\xdef\popo{\\e}
}
\\popo
`
window.marc7[k] = v




k = 'ifcase'
v = `
\\def\\alea{1}

\\ifcase\\alea
\\or 1
\\or 2
\\or 3
\\or 4
\\or 35
\\else 0
\\fi
`
window.marc7[k] = v



k = 'ifdefined'
v = `
\\def\\f{3}

%  \\是否已经定义了命令
\\ifdefined\\f
defined
\\else
not defined
\\fi
`
window.marc7[k] = v


k = 'ifnum'
v = `
\\def\\x{4}
%\\ifnum 1<\\x<2
%\\ifnum\\x>3
\\ifnum\\x=4
    1
\\else
    0
\\fi
`
window.marc7[k] = v



k = 'newif'
v = `
\\newif\\ifset \\settrue

\\ifset
    % 为真 <code>
\\else
    % 为假 <code>
\\fi
`
window.marc7[k] = v



k = 'ifthenelse'
v = `
% \\usepackage{ifthen} 
\\ifthenelse{<condition>}{
    <true code>
}{
    <false code>
}
`
window.marc7[k] = v



k = 'whiledo'
v = `
% \\usepackage{ifthen} 
\\newcounter{count}
\\setcounter{count}{0}

\\whiledo{\\value{count} < 5}{
  Count: \\thecount 
  \\stepcounter{count}
}
`
window.marc7[k] = v





k = 'pgfmathsetmacro'
v = `
\\pgfmathsetmacro{\\x}{rand}
\\x
`
window.marc7[k] = v



k = '- pgfmathsetmacro 例子'
v = `
% >>> texdoc tikz p998
% \\pgfmathparse{<函数,方法>}\\let\\mydef=\\pgfmathresult
% \\usepackage{pgfmath} \\usepackage{tikz}

% 设置一个宏,注意这是静态
\\pgfmathsetmacro{\\dx}{rand*0.1}
\\dx,\\dx,\\dx,

% 解算宏内容
\\pgfmathparse{1 ? 4 : 2}\\let\\mymax\\pgfmathresult
\\mymax

% 用\\def的 可以展开命令
% 额外命令,可以先设定好随机种子
\\pgfmathsetseed{10}
\\def\\dy{\\pgfmathparse{rand*0.1}\\pgfmathresult}
\\dy,\\dy,\\dy

% 用\\def的 使用 noexpand 设定为不展开命令
\\def\\dy{\\noexpand\\pgfmathparse{max(3,4)}\\pgfmathresult}
\\dy 

\\pgfmathparse{rand}\\pgfmathresult						% [-1,-1] 随机数
\\pgfmathparse{random()}\\pgfmathresult					% [0,1] 随机数
\\pgfmathparse{random(100)}\\pgfmathresult				% 小于100的正随机数
\\pgfmathparse{random(232,762)}\\pgfmathresult			% 区间中的随机数

\\pgfmathparse{div(75,9)} \\pgfmathresult					% 去掉余数,返回正整数
\\pgfmathparse{sqrt(8765.432)} \\pgfmathresult			% 根号
\\pgfmathparse{pow(2,7)} \\pgfmathresult					% 
\\pgfmathparse{abs(-5)} \\pgfmathresult					% 取到绝对值
\\pgfmathparse{mod(20,6)} \\pgfmathresult					% 余数2
\\pgfmathparse{sign(-5)} \\pgfmathresult					% 判断正负数
\\pgfmathparse{round(32.5/17)} \\pgfmathresult			% 4舍5入 取整数
\\pgfmathparse{floor(-398/12)} \\pgfmathresult			% 向下取整数
\\pgfmathparse{ceil(32.5/17)} \\pgfmathresult				% 向上取整数
\\pgfmathparse{int(32.5/17)} \\pgfmathresult				% 取整数
\\pgfmathparse{frac(32.5/17)} \\pgfmathresult 			% 商值取小数
\\pgfmathparse{real(4)} \\pgfmathresult					% 转为小数点
\\pgfmathparse{veclen(12,5)} \\pgfmathresult		% 两数平方根
\\pgfmathparse{gcd(42,56)} \\pgfmathresult		% 两数相减

\\pgfmathparse{min(3,4,-2,250,-8,100)} \\pgfmathresult	% min函数
\\pgfmathparse{max(3,4,-2,250,-8,100)} \\pgfmathresult	% max函数
\\pgfmathparse{not(true)} \\pgfmathresult					% not函数
\\pgfmathparse{ifthenelse(5==4,"yes","no")} \\pgfmathresult
\\pgfmathparse{true ? "yes" : "no"} \\pgfmathresult
\\pgfmathparse{false ? "yes" : "no"} \\pgfmathresult		% 二元判断语句
\\pgfmathparse{iseven(2)} \\pgfmathresult			% 是否为偶数
\\pgfmathparse{isodd(2)} \\pgfmathresult			% 是否为奇数
\\pgfmathparse{isprime(1)} \\pgfmathresult		% 是否素数
\\pgfmathparse{greater(20,25)} \\pgfmathresult	% 大于
\\pgfmathparse{less(20,25)} \\pgfmathresult
\\pgfmathparse{notequal(20,25)} \\pgfmathresult	% 不等于
\\pgfmathparse{notgreater(20,25)} \\pgfmathresult	% 大于等于
\\pgfmathparse{notless(20,25)} \\pgfmathresult	% 小于等于
\\pgfmathparse{and(5>4,6>7)} \\pgfmathresult		% 并条件
\\pgfmathparse{or(5>4,6>7)} \\pgfmathresult		% 或条件

%文本
\\pgfmathparse{depth("Some Lovely Text")} \\pgfmathresult		% 获得文本框深度
\\pgfmathparse{height("Some Lovely Text")} \\pgfmathresult	% 获得文本框高度
\\pgfmathparse{width("Some Lovely Text")} \\pgfmathresult		% 获得文本框宽度

`
window.marc7[k] = v



k = 'definecolor'
v = `
% 定义
\\definecolor{myRed}{RGB}{255,0,0}
\\definecolor{myBlue}{rgb}{0,0,1}
\\definecolor{myGreen}{HTML}{00FF00}
% 使用
\\textcolor{myRed}{Red text}
{\\color{myBlue} Blue text}
`
window.marc7[k] = v
