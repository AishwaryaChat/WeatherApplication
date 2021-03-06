const React = require('react')
const {Link, IndexLink} = require('react-router') // provide the links to route to different paths
import Weather from 'Weather'
const weather = new Weather()

export default class Nav extends React.Component {

  onSearch (e) {
    e.preventDefault()
    const location = this.refs.location.value

    if (location.length > 0) {
      this.refs.location.value = ''
      const encodedLocation = encodeURIComponent(location)
      window.location.hash = '#/?location=' + encodedLocation
    }
  }

  render () {
    return (
      <div>
        <nav className='nav-wrapper'>
            <a href='#' className='brand-logo'>Weather App</a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              {/* "to" points to specific path */}
              {/* 'Link' is used instead of <a> tag, because Link comes with extra styling features */}
              {/* 'activeClassName' property gives a classname(active in this case) to a component when then component is rendered */}
              {/* While using IndexRoute donot use Link instead use 'IndexLink' */}
              <li><IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
              <li><Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link></li>
              <li><Link to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
              <li>
                <form onSubmit={this.onSearch.bind(this)}>
                    <input id="search" ref="location" type="search" placeholder='Search Weather by city' />
                </form>
              </li>
            </ul>
        </nav>
      </div>
    )
  }
}
