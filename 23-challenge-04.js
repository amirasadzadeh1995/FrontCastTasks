const ProductItems = [{
    title: `book1`
}, {
    title: `book2`
}, {
    title: `book3`
}, {
    title: `book4`
}]

const deletProduct = function(products,productTitle){
   const indexValue = products.findIndex(function(item){
    return item.title.toLowerCase() === productTitle
   })
   if(indexValue > -1){
    products.splice(indexValue, 1)
   } else {
    console.log(`Product Not Found`)
   }
}

deletProduct(ProductItems, `book2`)
console.log(ProductItems)