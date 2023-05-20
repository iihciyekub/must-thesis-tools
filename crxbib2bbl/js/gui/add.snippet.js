function gen_opt(marc) {
    let c = ""
    for (var key in marc) {
        c += `\t<option>${key}</option>\n`
    }
    return c
}
var c1 = gen_opt(window.marc1)
var c2 = gen_opt(window.marc2)
var c3 = gen_opt(window.marc3)
var c4 = gen_opt(window.marc4)
var c5 = gen_opt(window.marc5)
var c6 = gen_opt(window.marc6)
var c7 = gen_opt(window.marc7)

var snippet_div = window.tool['snippet'];
snippet_div.innerHTML = `
<div class="modal-header">
<select class="maseeselect" id="c1">
    <option selected disabled">Base</option>
${c1}
</select>
<select class="maseeselect" id="c2">
    <option selected disabled">Fig</option>
${c2}
</select>
<select class="maseeselect" id="c3">
    <option selected disabled">Tab</option>
${c3}
</select>
<select class="maseeselect" id="c4">
    <option selected disabled">Math</option>
${c4}
</select>
<select class="maseeselect" id="c5">
    <option selected disabled">TikZ</option>
${c5}
</select>
<select class="maseeselect" id="c6">
    <option selected disabled">PGF</option>
${c6}
</select>
<select class="maseeselect" id="c7">
    <option selected disabled">Dev</option>
${c7}
</select>
</div>
<div class="modal-header">
<textarea id="latex-macro" spellcheck="false" placeholder="步驟1: 在這裏輸入bib;"></textarea>
</div>
<div class="modal-header">
<textarea id="latex-macro-example" spellcheck="false" placeholder="步驟1: 在這裏輸入bib;"></textarea>
</div>


`
var textarea = document.querySelector('textarea#latex-macro-example');



// 选项点击事件
function fun(idv, marc) {
    let c1 = document.getElementById(idv)
    c1.addEventListener('change', function () {
        let info = c1.options[c1.selectedIndex].text;
        let t = marc[info];
        if (t != "") {
            navigator.clipboard.writeText(t).then(function () {
                // window.tooltip(info + "  >> latex code 已复制")
            }, function (err) {
                // console.error('Async: Could not copy text: ', err);
            });
            textarea.value = t;


        }
        c1.selectedIndex = 0; // 将选择索引设置为第一个选项
    });
}

fun("c1", window.marc1);
fun("c2", window.marc2);
fun("c3", window.marc3);
fun("c4", window.marc4);
fun("c5", window.marc5);
fun("c6", window.marc6);
fun("c7", window.marc7);



var textarea = document.querySelector('textarea#latex-macro-example');
textarea.addEventListener('select', function () {
    var selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    copyToClipboard(selectedText);
});

textarea.addEventListener('mouseup', function () {
    var selectedText = getSelectedLineText();
    if (selectedText) {
        copyToClipboard(selectedText);
    }
});

function getSelectedLineText() {
    var startIndex = textarea.selectionStart;
    var endIndex = textarea.selectionEnd;
    var value = textarea.value;

    // 找到选中行的起始和结束位置
    var startLineIndex = value.lastIndexOf('\n', startIndex - 1) + 1;
    var endLineIndex = value.indexOf('\n', endIndex);

    // 提取选中行的内容
    var selectedText = value.substring(startLineIndex, endLineIndex);

    return selectedText.trim(); // 去除选中行前后的空格
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(function () {
            // console.log("已成功复制行内容到剪贴板");
        })
        .catch(function (error) {
            // console.error("复制行内容到剪贴板失败:", error);
        });
}