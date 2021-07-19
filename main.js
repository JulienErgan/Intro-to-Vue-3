// const product = 'Socks'

// without ES6 shorthand
// const app = Vue.createApp({
//     data: function() {
//         return {
//             product: 'Socks'
//         }
//     }
// })

// with ES6 shorthand
const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'Socks made of cotton'
        }
    }
})