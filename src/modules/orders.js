const state = {
    orders: []
}

// getters just Admin.vue use mapGetters
const getters = {
    numberOfOrders: (state) => state.orders.length,
    getOrders: state => state.orders 
}

export default {
    state,
    getters,
}