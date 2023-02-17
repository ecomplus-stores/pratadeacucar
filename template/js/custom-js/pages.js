// Add your custom JavaScript for storefront pages here.
const readItems = setInterval(() => {
    let items = $('.product-card--inactive')
    let count = 0
    let max = items.length
    if (items.length) {
        for (let item in items) {
            count++
            if (max === count) {
                clearInterval(readItems)
                break
            }
            let $item = items[item]
            $item.parentNode.remove()
        }
    }
}, 500)


