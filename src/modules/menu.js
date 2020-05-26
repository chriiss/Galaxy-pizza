import { firestoreAction } from 'vuexfire'
import { dbRef } from '../Firebase'

const state = {
    datasMenu: []
}

// getters Menu.vue and Admin.vue 
const getters = {
    getDatasMenu: (state) => state.datasMenu
}


const actions = {
    setMenuRef: firestoreAction(context => { // actions data element stockage with firebase store dispatch App.vue
        return context.bindFirestoreRef('datasMenu',  dbRef)
    }),
    addDatasMenu: async (context, pizza) => { // actions creating pizza and add firebase and dispatch addOrder.Vue function addFirebase
        try {
            await dbRef.add(pizza)
        } catch(error) {
            alert(`Error creating new pizza, ${error}`)
        }
    },
    removeDatasMenu: async (context, id) => { // actions removing pizza and remove firebase and dispatch Admin.Vue function removeDatasMenu
        try {
            const data = await dbRef.doc(id)
            data.delete()
        } catch(error) {
            alert(`Error removing menu data, ${error}`)
        }
    }
}


export default {
    state,
    getters,
    actions
}
