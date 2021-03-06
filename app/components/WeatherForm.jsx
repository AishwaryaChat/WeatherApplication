const React = require('react')

export default class WeatherForm extends React.Component {
  constructor (props) {
    super(props)
  }
  onFormSubmit (e) {
    e.preventDefault()
    const location = this.refs.location.value

    if (location.length > 0) {
      this.refs.location.value = ''
      this.props.onSearch(location)
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input type='text' ref='location' placeholder='Search Weather by city' /> <br />
          <button className="btn waves-effect waves-light" type="submit" name="action">Get Weather</button>
        </form>
      </div>
    )
  }
}
