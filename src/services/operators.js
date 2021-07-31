import { http } from "./config";

export default {
    getOperators: () => {
        return http.get('operators')
    },
    updateOperators: (operator) => {
        return http.put('operator', operator)
    },
    createOperators: (operator) => {
        return http.post('operator', operator)
    },
    deleteOperators: (id) => {
        return http.delete('operator/' + id)
    }
}