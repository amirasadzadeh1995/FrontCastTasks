const cartItems = ['Book1', 'Book2', 'Book3', 'Book4']

cartItems.shift()
cartItems.splice(1, 1)
cartItems.push('Book5')

cartItems.forEach(function(item, index) {
    const num = index + 1
    console.log(`${num} - Product Name: ${item}`)
})