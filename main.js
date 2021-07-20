const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            onSale: true,
            // image: './assets/images/socks_blue.jpg',
            selectedVariant: 0,
            // inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
            // console.log(index)
        }
    }, 
    computed: {
        title() {
            return `${this.brand} ${this.product} ${this.onSale ? 'is on sale' : ''}`
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            if (this.variants[this.selectedVariant].quantity > 0) {
                this.onSale = true
                return this.variants[this.selectedVariant].quantity
            } else {
                this.onSale = false
                return this.variants[this.selectedVariant].quantity
            }
        }
    }
})
