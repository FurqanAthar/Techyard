export function getDataOfID (id, allData) {
    let product = {}
    allData.forEach(item => {
        if (item.id === id) {
            product = {...item}
        }
    })
    return product
}

export function validateStockWithColor (orderItem, stockedItem) {
    let coloredStock = {}
    let i = 0
    stockedItem.colors.forEach((item, index) => {
        if (item.name === orderItem.color) {
            coloredStock = {...item}
            i = index
        }
    })
    if (coloredStock.stock >= orderItem.amount) {
        stockedItem.colors[i].stock = coloredStock.stock - orderItem.amount
        return [orderItem.amount, 0, stockedItem]
    }
    else {
        stockedItem.colors[i].stock = 0
        return [coloredStock.stock, Math.abs(coloredStock.stock - orderItem.amount) * stockedItem.price, stockedItem]
    }
}

export function validateStockWithoutColor (orderItem, stockedItem) {
    if (stockedItem.stock >= orderItem.amount) {
        stockedItem.stock = stockedItem.stock - orderItem.amount
        return [orderItem.amount, 0, stockedItem]
    }
    else {
        let i = stockedItem.stock
        stockedItem.stock = 0
        return [i, Math.abs(orderItem.amount - i) * stockedItem.price, stockedItem]
    }
}