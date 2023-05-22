const productItems = [{
    title: 'Book1'
}, {
    title: 'Book2'
}, {
    title: 'Book3'
}, {
    title: 'Book4'
}]

const deleteProduct = function(products, productTitle) {
    const indexValue = products.findIndex(function(item) {
        return item.title.toLowerCase() === productTitle.toLowerCase()
    })
    if (indexValue > -1) {
        products.splice(indexValue, 1)
    } else {
        console.log('Product Not Found!')
    }
}

deleteProduct(productItems, 'book2')
console.log(productItems)