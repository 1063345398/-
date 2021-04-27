var navMobile = document.querySelector('.nav-m');
var navItem = document.querySelectorAll('.nav>.nav-item')
navMobile.onclick = function() {
    for (var i = 0; i < navItem.length; i++) {
        if (navItem[i].style.display == 'block') {
            navItem[i].style.display = 'none';
        } else {
            navItem[i].style.display = 'block';
        }

    }
}
var listEl = document.querySelector('.banner-list');
var lis = listEl.children;
var liWidht = lis[0].offsetWidth;
var count = 0;
var iconEl = document.querySelector('.banner-icon');
var iconLi = iconEl.children;
// var contentList = document.querySelector('.content-nav-list');
// var contentLis = contentList.children;
// var contentPicture = document.querySelector('.content-list');
// var contentPictureLis = contentPicture.children;
// var contentLisWidht = contentPictureLis[0].offsetWidth;
// for (var i = 0; i < contentLis.length; i++) {
//     count = 0;
//     contentLis[i].onclick = function() {


//         boxMove(contentPicture, targetLeft)
//     }

// }

function next(isRight) {
    // 判断点击的翻页方向
    if (isRight) {
        count++
        // 设置最后同一张时返回第一张
        if (count == lis.length) {
            count = 1;
            listEl.style.left = 0;
            console.log(count);

        }
    } else {
        count--
        // 设置第一张时返回最好一张
        if (count < 0) {
            listEl.style.left = -liWidht * (lis.length - 1) + 'px';
            count = 3;
        }
    }
    // 计算移动距离存入targetLeft
    var targetLeft = -1 * count * liWidht;
    contentPicture
    boxMove(listEl, targetLeft, 70);
    if (count == lis.length - 1) {
        isActive();
        iconLi[0].classList.add('active');
    } else {
        // 设置小球随着翻页变化 
        isActive();
        iconLi[count].classList.add('active')
    }

}


function boxMove(el, target, outStep) {
    if (el.offsetLeft == target) {
        return;
    }
    // 清除上一个定时器
    clearInterval(el.timer);
    // 设置步长 默认为20
    var step = outStep || 20;
    // 判断目标位置和本身位置方位
    step = (target - el.offsetLeft) > 0 ? step : -1 * step;
    // 开启计时器
    el.timer = setInterval(function() {
        var actual = el.offsetLeft;
        actual += step;
        // 设置移动
        el.style.left = actual + 'px';
        // 判断最后一步满不满足
        if (Math.abs(target - actual) < Math.abs(step)) {
            el.style.left = target + 'px';
            // 清除定时器
            clearInterval(el.timer);
        }

    }, 8)
}

function isActive() {
    // 遍历iconLi
    for (j = 0; j < iconLi.length; j++) {
        // 查看有元素没有active类名
        if (iconLi[j].classList.contains('active')) {
            // 有的话删除该类名
            iconLi[j].classList.remove('active')
        }
    }
    // 第二种方式
    // var remoActive = document.querySelector('.icon .icon-item.active')
    // remoActive.classList.remove('active')
}