/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onSelect = event => {
    this.setState({activeId: event.target.value})
  }

  getCountry = () => {
    const {activeId} = this.state

    const getCountryActiveId = countryAndCapitalsList.find(
      each => each.id === activeId,
    )
    return getCountryActiveId.country
  }

  render() {
    const {activeId} = this.state
    const country = this.getCountry(activeId)
    console.log(country)

    return (
      <div className="container">
        <div className="card">
          <h1>Countries And Capitals</h1>
          <select className="option-item" onChange={this.onSelect}>
            {countryAndCapitalsList.map(eachItem => (
              <option key={eachItem.id} value={eachItem.id}>
                {eachItem.capitalDisplayText}
              </option>
            ))}
          </select>
          <label>is capital of which country?</label>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
