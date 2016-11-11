function add () {
    const input = document.querySelector('.input-group input')
    input.focus()
}

export default function () {
    window.__INPUT_FOCUS__ = false

    document.addEventListener('keyup', event=>{
        if (window.__INPUT_FOCUS__) return

        const keycode = event.keyCode
        switch (keycode) {
            case 80: // key 'P'
                add()
                break
        }
    }, false)
}
