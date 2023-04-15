const cardItems = [`book1`, `book2`, `book3`, `book4`]

//remove first and third item
//add new item
//show array products

cardItems.shift()
cardItems.splice(1,1)
cardItems.push(`book5`)

cardItems.forEach(function(item,index){
    const num = 1 + index
    console.log(`product name: ${item} ${num} `)

})