import API from '../../api'
import { GetJoke } from '../types'

const getJokeStart = () => ({ type: GetJoke.start })
const getJokeSuccess = payload => ({ type: GetJoke.success, payload })
const getRandomJokeSuccess = payload => ({ type: GetJoke.randomSuccess, payload })
const getJokeFailure = payload => ({ type: GetJoke.failure, payload })

export const getRandomJoke = () => async dispatch => {
  try {
    dispatch(getJokeStart())

    const apiCall = await API.randomJoke()
    const dataApi = await apiCall.json()

    dispatch(getRandomJokeSuccess(dataApi.value))
  } catch (err) {
    dispatch(getJokeFailure('500 internal server error'))
  }
}
export const getJoke = category => async dispatch => {
  try {
    dispatch(getJokeStart())

    const apiCall = await API.joke(category)
    const dataApi = await apiCall.json()

    dispatch(getJokeSuccess(dataApi.value))
  } catch (err) {
    dispatch(getJokeFailure('500 internal server error'))
  }
}
