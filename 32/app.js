const productItems = [{
    title: 'book1',
    exist: true
},{
    title: 'book2',
    exist: false
},{
    title: 'book3',
    exist: true
},{
    title: 'book4',
    exist: false
}]

const avalableProducts = productItems.filter(function(item){
    return item.exist === true
})

const message = document.createElement('h2')
message.textContent = `number of avalable products: ${avalableProducts.length}`
document.querySelector('body').appendChild(message)

productItems.forEach(function(item){
    const p = document.createElement('p')
    p.textContent = item.title
    document.querySelector('body').appendChild(p)
})