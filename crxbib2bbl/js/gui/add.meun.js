// # 一级开关
var toolbarLeftNode = document.querySelector('.toolbar-right');
var eig = ''
//遍历 toolbarLeftNode.childNodes
for (let i = 0; i < toolbarLeftNode.childNodes.length; i++) {
    eig = toolbarLeftNode.childNodes[i];
    if (eig.textContent == 'Chat') {
        toolbarLeftNode.insertBefore(eig, toolbarLeftNode.childNodes[1]);
        eig.querySelector('.toolbar-label').innerText = "latex Tool & Chat";
        eig.querySelector('button i').className = "fa fa-book fa-fw";
        break;
    }
}



var meun_list = ['home', 's2t', 'bib2bbl', 'snippet', 'chat']

var toolmeun = document.createElement('div');
toolmeun.className = 'toolbar toolbar-editor ng-scope meun'

var meun_label = ``
for (let i = 0; i < meun_list.length; i++) {
    meun_label += `
    <label class="toggle-switch-label">
        <span class="meun ${meun_list[i]}">${meun_list[i]}</span>
    </label>
`
}
toolmeun.innerHTML = `
<a>must tool ${window.version} </a>
<div style="width:1px; heigth:auto;background-color:#E7E9EE;"></div>
<div class="toggle-wrapper">
    <div class="editor-toggle-switch">
        <fieldset class="toggle-switch">
            ${meun_label}
        </fieldset>
    </div>
</div>
`

// 插入到指定位置
var aside = document.querySelector("aside.chat");
if (aside) {
    // 找到目标容器的父级节点的第一个子节点位置
    aside.parentNode.insertBefore(toolmeun, aside.parentNode.childNodes[0]);
}
aside.style.display = 'none';




// 切换开关
var meun_tog_dic = {}
// 容器
var meun_div_dic = {}

// 创建 switch 对应容器
for (let i = 0; i < meun_list.length; i++) {
    toolmeun = document.createElement('div');
    toolmeun.className = `must ${meun_list[i]}`;
    meun_div_dic[meun_list[i]] = toolmeun;
    aside.parentNode.insertBefore(toolmeun, aside.parentNode.childNodes[1]);
    // 保存开关对象
    meun_tog_dic[meun_list[i]] = document.querySelector('.meun.' + meun_list[i]);
    // 注册 click 事件
    meun_tog_dic[meun_list[i]].addEventListener('click', active_tog);
}


window.tool = meun_div_dic;










// 点不同 label 时,触以事件
var tog_active = 'home';
act_style(tog_active);

function unact_style(meun_name) {
    let tog = meun_tog_dic[meun_name];
    tog.style.backgroundColor = '#E7E9EE';
    tog.style.color = '#495365';
    meun_div_dic[meun_name].style.display = 'none';
    if (meun_name == 'chat') {
        aside.style.display = 'none';
    }
}
function act_style(meun_name) {
    let tog = meun_tog_dic[meun_name];
    tog.style.backgroundColor = '#138A07';
    tog.style.color = '#FFF';
    meun_div_dic[meun_name].style.display = 'block';
    if (meun_name == 'chat') {
        aside.style.display = 'block';
    }
}

function active_tog() {
    let e = window.event;
    let target = e.target.textContent;
    unact_style(tog_active);
    act_style(target);
    tog_active = target;
}













