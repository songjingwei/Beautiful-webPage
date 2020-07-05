var initBackgroundImages = function() {
    // 存放背景图片的路径
    var background_images = []
    background_images.push("upper1.png")
    background_images.push("upper2.png")
    background_images.push("upper3.png")
    return background_images
}

var prevButtonEvent = function() {
    var background_images = initBackgroundImages()
    var prevButton = document.querySelector('.backward')
    prevButton.addEventListener('click', function() {
        console.log('点击回退按钮');
        var slide = document.getElementById('id-div-upper')
        var [prefix, target, suffix] = background_message(slide)
        var index = background_images.indexOf(target)
        if(index === 0) {
            alert('这是第一张图片,无法继续后退')
        } else {
            slide.style.cssText='background-image: ' + prefix + background_images[index-1] + suffix
        }   
        console.log('结束')
})
}

var nextButtonEvent = function() {
    var background_images = initBackgroundImages()
    var nextButton = document.querySelector('.forward')
    nextButton.addEventListener('click', function() {
        console.log('点击前进按钮')
        var slide = document.getElementById('id-div-upper')
        var [prefix, target, suffix] = background_message(slide)
        var index = background_images.indexOf(target)
        if(index === background_images.length - 1) {
            alert('这是最后一张图片,无法继续前进')
        } else {
            slide.style.cssText='background-image: ' + prefix + background_images[index+1] + suffix
        }   
        console.log('结束')
    })

}

var background_message = function(domElement) {
    var background_message = window.getComputedStyle(domElement, null).backgroundImage
    // 找到最后一个‘/’
    var wanted = background_message.lastIndexOf('/') + 1
    var target = background_message.slice(wanted)
    // 取出图片名字
    target = target.slice(0, -2)
    console.log(target)
    // 图片路径前缀
    var prefix = background_message.slice(0, wanted)
    // 图片路径后缀
    var suffix = background_message.slice(-2)
    return [prefix, target, suffix]
}

var ulEvent = function() {
    var selectDiv = document.querySelector('.class-user-select')
    selectDiv.addEventListener('click', function() {
        console.log('选择列表被点击')
        var list = selectDiv.querySelector('ul')
        if(list.classList.contains('active')) {
            list.classList.remove('active')
        } else {
            list.classList.add('active')
        }
    })
}

var liEvent = function() {
    var selectDiv = document.querySelector('.class-user-select')
    var inputDom = selectDiv.querySelector('input')
    var list = selectDiv.querySelector('ul')
    var liArray = list.querySelectorAll('li')
    for(let i = 0; i < liArray.length; i++) {
        liArray[i].addEventListener('click', function() {
            inputDom.value = liArray[i].innerText
        })
    }

}

var selectEvent = function() {
    ulEvent()
    liEvent()
}

var events = function() {
    prevButtonEvent()
    nextButtonEvent()
    selectEvent()
}

var _main = function() {
    events()
}

_main()




