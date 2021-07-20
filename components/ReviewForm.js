app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>

        <label for="recommendation">Would you recommend this product?</label>
        <select id="recommendation" v-model="recommendation">
            <option>Yes</option>
            <option>No</option>
        </select>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <input class="button" type="submit" value="Submit">
    </form>`,
    data() {
        return {
            name: '',
            review: '',
            recommendation: null,
            rating: null
        }
    },
    methods: {
        onSubmit() {
            // basic form validation
            if (this.name === '' || this.review === '' || this.recommendation === null || this.rating === null) {
                alert('Review is incomplete. Please fill out every field.')
                return // return out of the method
            }

            let productReview = {
                name: this.name,
                review: this.review,
                recommendation: this.recommendation,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview)

            // reset
            this.name = '',
            this.review = '',
            this.recommendation = null,
            this.rating = null
        }
    }
})