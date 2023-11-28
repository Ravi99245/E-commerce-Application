import {Component} from 'react'
import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <div className="home-content">
            <div className="description-content">
              <h1 className="heading">Clothes That Get YOU Noticed</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                className="clothes-mobile-img1"
                alt="clothes that get you noticed"
              />
              <p className="description">
                Fashion is part of the daily air and it does not quite help that
                it changes all the time clothes have always been a marker of the
                era and we are in revolution. Your fashion makes you seen and
                heard that way you are. So, celebrate the seasons new and
                exciting fashion in your own.
              </p>
              <button className="home-button" type="button">
                Shop Now
              </button>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
              className="clothes-img"
              alt="clothes that get you noticed"
            />
          </div>
        </div>
      </>
    )
  }
}

export default Home
