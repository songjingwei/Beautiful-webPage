var editorEvents = function(editor, preview, md) {
    //  editor 绑定监听事件
    editor.addEventListener('keyup', () => {
        log('开始输入!')
        var val = editor.value
        var text = md.render(val)
        preview.innerHTML = text
    })
}  

const __main = function() {
    //  获取到 editor
    var editor = e('#editor')
    // 获取到 preview  
    var preview = e('#preview')
    // 新建一个 remarkable 对象
    var md = new Remarkable()
    editorEvents(editor, preview, md)
}

__main()

