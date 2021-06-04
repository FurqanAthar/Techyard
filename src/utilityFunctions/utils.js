export function paginateProducts(products) {
    const itemsPerPage = 9
    const numberOfPages = Math.ceil(products.length / itemsPerPage)

    const newProducts = Array.from({length : numberOfPages}, (_, index) => {
        const start = index * itemsPerPage
        return products.slice(start, start + itemsPerPage);
    })

    return newProducts
}

export function getAllUnique(a) {
    let unique = []
    for (var i=0; i<a.length; i++) {
        if (unique.indexOf(a[i]) === -1) {
            unique = [...unique, a[i]]
        }
    }
    return unique
}

export function getAllTitles(comparisonProducts){
    let titles = comparisonProducts.map(single => {
        return single.model;
    })
    return titles;
}

export function checkStockWithColor (id, color, amount, allProducts) {
    const product = allProducts.find(item => {
        if (item.id == id) {
            return item
        }
    })
    let value = false
    product.colors.forEach(singleItem => {
        if (singleItem.name == color) {
            if (Math.abs(singleItem.stock - amount) >= 1) {
                value = true
            }
        }
    })
    return value
}

export function checkStockWithoutColor (id, amount, allProducts) {
    const product = allProducts.find(item => {
        if (item.id == id) {
            return item
        }
    })
    if (Math.abs(product.stock - amount) >= 1) {
        return true
    }
    return false
}

export function applyDiscount (discount, total) {
    return total - (total * discount/100)
}