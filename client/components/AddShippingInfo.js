import React from 'react'
import {connect} from 'react-redux'
import {addShippingInfoToServer} from '../store/shippinginfo'
import ShippingInfoFormRedux from './ShippingInfoReduxForm'
import {withRouter, NavLink} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Checkout from './Checkout'
import OrderSummary from './OrderSummary'

const mapDispatchToProps = dispatch => {
  return {
    addShippingInfo: shippingInfo =>
      dispatch(addShippingInfoToServer(shippingInfo))
  }
}

const mapStateToProps = state => {
  return {
    shippingInfo: state.shippingInfo
  }
}

class NewShippingInfo extends React.Component {
  constructor(props) {
    super(props)
  }
  add = event => {
    const shippingInfoId = this.props.match.params.shippingInfoId
    event.preventDefault()
    const shippingInformation = {
      id: shippingInfoId,
      firstName: event.target.elements.firstName.value,
      lastName: event.target.elements.lastName.value,
      streetAddress: event.target.elements.streetAddress.value,
      city: event.target.elements.city.value,
      region: event.target.elements.region.value,
      postalCode: event.target.elements.postalCode.value,
      country: event.target.elements.country.value,
      phoneNumber: event.target.elements.phoneNumber.value,
      email: event.target.elements.email.value
    }
    this.props.addShippingInfo(shippingInformation)
    this.props.history.push('/shippingInfo')
  }
  render() {
    return (
      <div className="verticalForm">
        <h3>Shipping Information</h3>
        <div>
          <ShippingInfoFormRedux handleSubmit={this.add} form="shippingInfo" />
        </div>
        <div>
          <Checkout shippingInfo={this.props.shippingInfo} />
        </div>
      </div>
    )
  }
}

const ConnectedShippingInfo = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewShippingInfo)
)

export default ConnectedShippingInfo