import API from '../../api'
import { GetCategories } from '../types'

const getCategoryStart = () => ({ type: GetCategories.start })
const getCategorySuccess = payload => ({ type: GetCategories.success, payload })
const getCategoryFailure = payload => ({ type: GetCategories.failure, payload })

export const setCategory = () => async dispatch => {
  try {
    dispatch(getCategoryStart())

    const apiCall = await API.category()
    const dataApi = await apiCall.json()

    dispatch(getCategorySuccess(dataApi))
  } catch (err) {
    dispatch(getCategoryFailure('500 internal server error'))
  }
}
