var myNotes = `WUdCWGArei9bbHx1ZjI5K2kjMF5uY3tAZHBKWCtEeUZeM3NfSS9pWS1mWnRFQntJciR7eVpXUHovNXwjQVU9JAmyNotes`
var body = document.querySelector('body')
document.addEventListener('DOMContentLoaded',()=>{
    body.innerText = localStorage.getItem(myNotes)
})

body.addEventListener('keydown',(e)=>{
    if(e.keyCode === 9){
        e.preventDefault();
        document.execCommand('insertHTML', false, '&#009');
    }
})
body.addEventListener('keyup',()=>{
    localStorage.setItem(myNotes,body.innerText)
})
