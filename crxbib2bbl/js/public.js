try {
    window.name = chrome.runtime.getManifest().name;
    window.version = chrome.runtime.getManifest().version;
}
catch (e) {
    window.name = "overleaf s2t/bib2bbl";
    window.version = "?";
}

function tooltip(txt) {
    // 创建提示框元素，显示 1 秒后移除
    const tooltip = document.createElement('div');
    tooltip.innerText = txt;
    tooltip.style.position = 'fixed';
    tooltip.style.top = '50%';
    tooltip.style.left = '50%';
    tooltip.style.transform = 'translate(-50%, -50%)';
    tooltip.style.background = 'rgba(0, 0, 0, 0.8)';
    tooltip.style.color = '#fff';
    tooltip.style.padding = '10px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.transition = 'opacity 0.5s';
    document.body.appendChild(tooltip);

    setTimeout(() => {
        tooltip.style.opacity = 0;
        setTimeout(() => {
            document.body.removeChild(tooltip);
        }, 500);
    }, 1000);
}


function add_ico(ico, tagname, fun) {
    let modal = document.createElement('div');
    modal.className = 'toolbar-item'
    modal.innerHTML = `
     <button class="btn btn-full-height btn-full-height-no-border"><i class="${ico}" aria-hidden="true"></i><p class="toolbar-label">${tagname}</p></button> 
    `
    let toolbarLeftNode = document.querySelector('.toolbar-right');
    toolbarLeftNode.insertBefore(modal, toolbarLeftNode.childNodes[1]);
    modal.querySelector('button').addEventListener('click', fun);
}













// 外部调用
window.tooltip = tooltip;
window.add_ico = add_ico;