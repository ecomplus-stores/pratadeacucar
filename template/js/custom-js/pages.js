// Add your custom JavaScript for storefront pages here.

const readItems = setInterval(() => {
    let items = $('.product-card--inactive')
    let count = 0
    let max = items.length
    if (items.length) {
        for (let item in items) {
            count++
            let $item = items[item]
	    if ($item.parentNode) {
		$item.parentNode.remove()
            }
        }
    }
}, 500)

