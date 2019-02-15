const START = 'START'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

const CATEGORY = 'CATEGORY_'
const JOKE = 'JOKE_'
const RANDOM_JOKE = 'RANDOM_JOKE_'

export const GetCategories = {
  start: CATEGORY + START,
  success: CATEGORY + SUCCESS,
  failure: CATEGORY + FAILURE
}
export const GetJoke = {
  start: JOKE + START,
  success: JOKE + SUCCESS,
  failure: JOKE + FAILURE,
  randomSuccess: RANDOM_JOKE + SUCCESS,
}

