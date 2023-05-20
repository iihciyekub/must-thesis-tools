var s2t_div = window.tool['s2t'];
s2t_div.innerHTML = `
<div class="modal-header">
<h4 class="modal-title"> - 剪贴板操作</h4>
<div class="container-fluid">
<div class="buthere" style="width: 10%;">
<button id="s2t_opt" class="btn btn-primary s2t"> -&gt; 繁体</button>
<button id="t2s_opt" class="btn btn-primary t2s"> -&gt; 简体</button>
</div>
</div>
</div><div class="modal-header">
<h4 class="modal-title"> - 簡 &lt;=&gt; 繁</h4>
<p class="modal-title" style="font-size:10pt">&nbsp;&nbsp;&nbsp;&nbsp; (任何情況下) 左邊文本框顯示簡體, 右邊顯示繁體。<a id="copyclearst" style="font-size: 14px;">注意:右擊文本框清空文本。</a></p>
<div class="container-fluid">
<div style="display: flex; justify-content: center;">
<textarea id="cliinput" spellcheck="false" placeholder="任何情况下,这里都显示简体中文; \n鼠标右击可以清空已有文本;"></textarea>
<textarea id="clioutput" spellcheck="false" placeholder="任何情況下,这里都顯示繁體中文; \n鼠標右擊可以清空已有文本;"></textarea>
</div>
<div class="buthere" style="width: 10%;">
<button id="copyt" class="btn btn-primary l">copy 繁體</button>
<button id="copys" class="btn btn-primary l">copy 簡體</button>
</div>
</div>
</div>
`






function s2t() {
    navigator.clipboard.readText().then(text => {
        var newText = window.cn2hk(text);
        navigator.clipboard.writeText(newText).then(function () {
            window.tooltip('已转换成繁体');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
    });
};
function t2s() {
    navigator.clipboard.readText().then(text => {
        var newText = window.hk2cn(text);
        navigator.clipboard.writeText(newText).then(function () {
            window.tooltip('已转换成简体');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
    });
};



document.querySelector('#s2t_opt').addEventListener('click', s2t);
document.querySelector('#t2s_opt').addEventListener('click', t2s);








var copyt = document.getElementById("copyt")
copyt.addEventListener('click', function () {
    let t = document.getElementById("clioutput").value;
    if (t != "") {
        navigator.clipboard.writeText(t).then(function () {
            window.tooltip('繁體已 寫入到剪貼板!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
    }
});


var copys = document.getElementById("copys")
copys.addEventListener('click', function () {
    let t = document.getElementById("cliinput").value;
    if (t != "") {
        navigator.clipboard.writeText(t).then(function () {
            window.tooltip('简体已 写入到剪贴板!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
    }
});


var cliinput = document.getElementById("cliinput")
cliinput.addEventListener('input', function () {
    let text = document.getElementById("cliinput").value;
    var tt = window.cn2hk(text);
    var st = window.hk2cn(text);
    document.getElementById("cliinput").value = st;
    document.getElementById("clioutput").value = tt;
});
cliinput.addEventListener('contextmenu', (event) => {
    event.preventDefault(); //阻止默認事件
    document.getElementById("cliinput").value = "";
    document.getElementById("clioutput").value = "";
});

var clioutput = document.getElementById("clioutput")
clioutput.addEventListener('input', function () {
    let text = document.getElementById("clioutput").value;
    var tt = window.cn2hk(text);
    var st = window.hk2cn(text);
    document.getElementById("cliinput").value = st;
    document.getElementById("clioutput").value = tt;
});
clioutput.addEventListener('contextmenu', (event) => {
    event.preventDefault(); //阻止默認事件
    clearst()
});

function clearst() {
    document.getElementById("cliinput").value = "";
    document.getElementById("clioutput").value = "";
};
var copyclearst = document.getElementById("copyclearst")
copyclearst.addEventListener('click', function () {
    clearst()
});