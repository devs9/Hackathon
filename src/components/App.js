import React, { PureComponent } from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import Div from './atom/Div'
import Category from './molecules/CategoryWithLoading'
import JokesBlock from './organisms/JokesBlock'
import { Header } from './organisms/Header'
import { setCategory } from '../store/actions/getCategoryAction'
import { getRandomJoke, getJoke } from '../store/actions/getJokeAction'

class App extends PureComponent {
  static propTypes = {
    category: T.shape({
      isFetch: T.bool.isRequired,
      error: T.string.isRequired,
      dataCategory: T.array,
    }).isRequired,
    joke: T.shape({
      isFetch: T.bool.isRequired,
      error: T.string.isRequired,
      joke: T.string,
    }).isRequired,
    setCategory: T.func.isRequired,
    getJoke: T.func.isRequired,
    getRandomJoke: T.func.isRequired,
  }
  static defaultProps = {
    category: { isFetch: false, error: '', dataCategory: [] },
    joke: { isFetch: false, error: '', joke: '' },
  }
  state = {
    selectedCategory: null,
  }

  componentDidMount() {
    this.props.setCategory()
  }

  getJoke = () => {
    const { selectedCategory } = this.state
    const { getJoke, getRandomJoke } = this.props

    selectedCategory ? getJoke(selectedCategory) : getRandomJoke()
  }
  clickCategory = e => {
    const value = e.target.getAttribute('value')

    this.setState(() => ({ selectedCategory: value }))
    this.props.getJoke(value)
  }
  reset = () => {
    this.setState(() => ({ selectedCategory: null }))
  }

  render() {
    const { category, joke } = this.props
    const { selectedCategory } = this.state
    const { isFetch, dataCategory } = category

    return (
      <>
        <Header />
        <Div maxWidth="600px" margin="25px auto">
          <Category
            isLoading={isFetch}
            userCategory={selectedCategory}
            event={this.clickCategory}
            categories={dataCategory}
          />
          <JokesBlock
            joke={joke}
            reset={this.reset}
            getJoke={this.getJoke}
            selectedCategory={selectedCategory}
          />
        </Div>
      </>
    )
  }
}
const mapSate = ({ category, joke }) => ({
  category,
  joke,
})
export default connect(
  mapSate,
  { setCategory, getRandomJoke, getJoke }
)(App)
