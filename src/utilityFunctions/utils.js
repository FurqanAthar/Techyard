export function paginateProducts(products) {
    const itemsPerPage = 6
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