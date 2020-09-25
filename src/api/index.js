import { create } from 'apisauce'

const api = create({
  baseURL: 'http://localhost:3000/',
  headers: {
    accept: 'application/json',
    contentType: 'application/json',
  },
})

const ApiCall = async (action) => {
  switch(action.type){
    case 'SAVE_DEVELOPERSDATA':
      return await api.post(`items`, action.payload).then((response) => {
        return response
      })
    
    case 'UPDATE_DEVELOPERSDATA':
      return await api.put(`items/${action.payload.id}`, action.payload).then((response) => {
        console.log('response--', response);
        return response
      });

    case 'DELETE_DEVELOPERSDATA':
      return await api.delete(`items/${action.payload.id}`, action.payload).then((response) => {
        return response
      });

    default:
      return await api.get(`items`).then((response) => {
        return response
      })
  }
}

export default ApiCall;
