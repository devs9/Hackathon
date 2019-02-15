export default {
  category() {
    return fetch('https://api.chucknorris.io/jokes/categories')
  },
  randomJoke() {
    return fetch('https://api.chucknorris.io/jokes/random')
  },
  joke(category) {
    return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
  },
}
