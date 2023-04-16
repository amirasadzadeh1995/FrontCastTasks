const paraghraphs = document.querySelectorAll('p')

paraghraphs.forEach(function(item){
    if(item.textContent.includes('JS'))
    item.remove()
})