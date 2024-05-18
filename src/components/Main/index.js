import {Component} from 'react'
import './index.css'

class Main extends Component {
  state = {click: true, val: ''}

  valChange = event => {
    this.setState({
      val: event.target.value,
    })
  }

  isClicked = () => {
    this.setState(prevState => ({
      click: !prevState.click,
    }))
  }

  render() {
    const {val, click} = this.state
    const btntext = click ? 'Save' : 'Edit'
    return (
      <div className="main">
        <div className="card">
          <h1 className="head">Editable Text Input</h1>
          <div className="inputContainer">
            {click ? (
              <input
                onChange={this.valChange}
                className="input"
                type="text"
                value={val}
              />
            ) : (
              <p className="para">{val}</p>
            )}

            <button onClick={this.isClicked} className="btn">
              {btntext}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Main
