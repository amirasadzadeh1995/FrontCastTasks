const products = [{
    title: 'Node. is Design Patterns'
},{
    title: 'You Dont Know JS: this & Object Prototypes'
},{
    title: 'Functional React'
},{
    title: 'You Dont Know JS: Async & Performance'
}]

const filters ={
    searchItem: ''
}

const renderProducts = function(products,filters){
    const filteredProducts = products.filter(function(item){
        return item.title.toLowerCase().includes(filters.searchItem.toLowerCase())
    })
    console.log(filteredProducts)
}

renderProducts(products,filters)
document.querySelector('#search-products').addEventListener('input',function(e){
    filters.searchItem = e.target.value
    renderProducts(products,filters)
})