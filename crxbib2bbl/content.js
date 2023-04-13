var modal = document.createElement('div');
modal.innerHTML = `
<div id="must">
	<div class="fade modal-backdrop in"></div>
	<div id="modalxx" role="dialog" tabindex="-1" class="fade in modal" style="display: block;">
		<div class="modal-dialog" style="width:70%">
			<div class="modal-content" role="document">
				<div class="modal-header">
					<button id="mustx" class="close"> × </button>
					<h3 class="modal-title">MUST bib2bbl ver 1.40.5 &nbsp;&nbsp;<a class="fa fa-github fa-fw" style="font-size: 14px;"></a>
						<a href="https://github.com/iihciyekub/must-thesis-tools" target="_blank" style="font-size: 14px;">GitHub @Yongjian.Li</a>
					</h3>
				</div>
				<div class="modal-header">
					<div class="container-fluid">
						<h4 class="modal-title"> - bib 轉 bbl</h4>
						<p class="modal-title" style="font-size:10pt">&nbsp&nbsp&nbsp&nbsp 步驟1: 將 bib 複製到左邊的文本框中; 左邊文本框右擊時，會清空文本。</p>
						<p class="modal-title" style="font-size:10pt">&nbsp&nbsp&nbsp&nbsp 步驟2: 將右邊的文本框中文本全部複製到 "ref.bbl" 文件中;</p>
						<p class="modal-title" style="font-size:10pt">&nbsp&nbsp&nbsp&nbsp 備註: 如果您的 LaTeX 項目根目錄中沒有 "ref.bbl" 文件,請自行創建.</p>
						<div style="display: flex; justify-content: center;">
							<textarea id="left-input" spellcheck="false" placeholder="步驟1: 在這裏輸入bib, 右擊可以清空已有文本;"></textarea>
							<textarea id="right-input" spellcheck="false" placeholder="步驟2: 結果會自動轉繁體, 在這裏將得到符郃澳門科技大學論文文獻排版要求的 bbl"></textarea>
						</div>
						<div style="display: flex; justify-content: center;">
							<textarea id="citekeys" spellcheck="false" placeholder="這裏將得到所有citekeys, 如果妳不需要對 citekey 進行自動重命名處理,請忽畧!!"></textarea>
						</div>
						<div class="buthere">
							<button id="copybib" class="btn btn-primary l">copy bib</button>
							<button id="copybbl" class="btn btn-primary l">copy bbl</button>
							<button id="copycitekeys" class="btn btn-primary l">copy citekeys</button>
							<button id="copyclear" class="btn btn-primary l">clear</button>
							<button id="recitekeys" class="btn btn-primary l">rename citekey</button>
						</div>
					</div>
				</div>
				<div class="modal-header">
					<h4 class="modal-title"> - 簡 轉 繁</h4>
						<p class="modal-title" style="font-size:10pt">&nbsp&nbsp&nbsp&nbsp (任何情況下) 左邊文本框輸出簡體, 右邊文本框輸出繁體。左邊文本框右擊時，會清空文本。</p>

					<div class="container-fluid">
						<div style="display: flex; justify-content: center;">
							<textarea id="cliinput" spellcheck="false" placeholder="在這輸入簡體中文, 右擊可以清空已有文本;"></textarea>
							<textarea id="clioutput" spellcheck="false" placeholder="得到 繁體中文"></textarea>
						</div>
						<div class="buthere" style="width: 10%;">
							<button id="copyt" class="btn btn-primary l">copy 繁體</button>
							<button id="copys" class="btn btn-primary l">copy 簡體</button>
						</div>
					</div>
				</div>
				<div class="modal-footer-share modal-footer" style="height:60px">
					<div class="modal-footer-left">
						<p id='outputinfo' style="color:red"></p>
					</div>
					<div class="modal-footer-right">
						<button id="mustx2" type="button" class="btn-secondary btn" style="height:35px">Close</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
`
document.body.appendChild(modal);




const toolbarLeftNode = document.querySelector('.toolbar-right');
var firstToolbarItem = document.querySelector(".toolbar-item");
// 如果找到了該元素，則複製插入到當前頁靣
if (firstToolbarItem) {
    //  複製 firstToolbarItem 節點
    var clone1 = firstToolbarItem.cloneNode(true);
    // 獲取 cloneElement 節點下 button i
    clone1.querySelector('button i').className = 'fa fa-fw fa-language';
    clone1.querySelector('.toolbar-label').innerText = '簡<->繁';

    var clone2 = firstToolbarItem.cloneNode(true);
    clone2.querySelector('button i').className = 'fa fa-code me-1';
    clone2.querySelector('.toolbar-label').innerText = 'bbl格式';

    // 在 toolbarleftNode 節點下插入指定位置(第3個)
    toolbarLeftNode.insertBefore(clone2, toolbarLeftNode.childNodes[1]);
    toolbarLeftNode.insertBefore(clone1, toolbarLeftNode.childNodes[1]);

    // 獲取 cloneElement 節點下 button
    var button = clone1.querySelector('button');

    button.onclick = function () {
        // 讀取剪貼闆的內容
        navigator.clipboard.readText().then(text => {

            var newText = cnchar.convert.simpleToTrad(text);
            // 將內容寫入剪貼闆
            navigator.clipboard.writeText(newText).then(function () {
                alert('此操作會對剪貼闆中的文本進行繁體轉換,並重新寫入剪貼闆!');
            }, function (err) {
                console.error('Async: Could not copy text: ', err);
            });
        });
    };


    // 顯示 bib2bbl 窗口
    var button2 = clone2.querySelector('button');
    var div = document.getElementById('must');
    button2.addEventListener('click', function () {
        div.style.display = 'block';
        document.getElementById("outputinfo").textContent = "";
    });

}



function processText(rename = 0) {
    // 獲取左側文本輸入框的文本
    var text = document.getElementById("left-input").value;
    //使用正則錶達式, 判斷 text 是否包含@符號
    var t = /@.*?/gm;

    if (!t.test(text)) {
        document.getElementById("outputinfo").textContent = "無傚或不完的 bib 信息,請重新輸入!";
        return;
    }

    let a = new read_bib(text)
    // a.sortby = 'year'
    a.recitekey = rename
    // a.sortby = 'author'
    // a.recitekey = 1;
    let bibt = a.to_bib;
    let bblt = a.to_bbl;
    // 將排序後的數組輸齣成文本，顯示在右側文本輸入框中
    document.getElementById("left-input").value = bibt;
    document.getElementById("right-input").value = bblt;

    let citekeys = a.citekeys;
    document.getElementById("citekeys").value = citekeys;

    let zhnum = a.numofzhbib;
    let endum = a.numofenbib;
    let info = `成功!  中文文獻數量:${zhnum}; 英文文獻數量:${endum}`
    document.getElementById("outputinfo").textContent = info;
}




function copyfbib() {
    let t = document.getElementById("left-input").value;
    if (t != "") {
        navigator.clipboard.writeText(t).then(function () {
            alert('bib 結果已復製到剪貼闆!')
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
    }
}

function copyfbbl() {
    let t = document.getElementById("right-input").value;
    if (t != "") {
        navigator.clipboard.writeText(t).then(function () {
            alert('bbl 結果已復製到剪貼闆!')
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
    }
}


function copyfcitekeys() {
    let t = document.getElementById("citekeys").value;
    if (t != "") {
        navigator.clipboard.writeText(t).then(function () {
            alert('citekeys 結果已復製到剪貼闆!')
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
    }
}

function clearbibbbl() {
    document.getElementById("left-input").value = "";
    document.getElementById("right-input").value = "";
    document.getElementById("citekeys").value = "";
}







var leftinput = document.getElementById("left-input")

leftinput.addEventListener('input', function () {
    processText(0);
});

leftinput.addEventListener('contextmenu', (event) => {
    event.preventDefault(); //阻止默認事件
    clearbibbbl()
});









var copybib = document.getElementById("copybib")
copybib.addEventListener('click', function () {
    copyfbib()
});


var copybbl = document.getElementById("copybbl")
copybbl.addEventListener('click', function () {
    copyfbbl()
});



var copycitekeys = document.getElementById("copycitekeys")
copycitekeys.addEventListener('click', function () {
    copyfcitekeys()
});


var copyclear = document.getElementById("copyclear")
copyclear.addEventListener('click', function () {
    clearbibbbl()
});


var recitekeys = document.getElementById("recitekeys")
recitekeys.addEventListener('click', function () {
    processText(1);
});



var copyt = document.getElementById("copyt")
copyt.addEventListener('click', function () {
    let t = document.getElementById("clioutput").value;
    if (t != "") {
        navigator.clipboard.writeText(t).then(function () {
            alert('繁體已復製到剪貼闆!')
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
            alert('簡體已復製到剪貼闆!')
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
    }
});



var cliinput = document.getElementById("cliinput")

cliinput.addEventListener('input', function () {
    let text = document.getElementById("cliinput").value;
    var tt = cnchar.convert.simpleToTrad(text);
    var st = cnchar.convert.tradToSimple(text);
    document.getElementById("cliinput").value = st;
    document.getElementById("clioutput").value = tt;
});




cliinput.addEventListener('contextmenu', (event) => {
    event.preventDefault(); //阻止默認事件
    document.getElementById("cliinput").value = "";
    document.getElementById("clioutput").value = "";
});






var mustx = document.getElementById('mustx');
mustx.addEventListener('click', function () {
    div.style.display = 'none';

});


var mustx2 = document.getElementById('mustx2');
mustx2.addEventListener('click', function () {
    div.style.display = 'none';
});
