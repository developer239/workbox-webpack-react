import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from 'modules/counter/ducks'


export const CounterContainer = ({ increment, decrement, counterValue }) => (
  <section>
    <h2>Redux Counter</h2>
    <p>
      Lorem ipsum dolor sit amet, an eius aeque est, vel vidisse fuisset rationibus an. Eu nam
      ullum consul. Te putant scripta albucius pri, vim oblique scriptorem in. Eos te mazim
      aliquip, ea erat utinam oblique cum, has simul scripta tractatos et.
    </p>
    <p>
      Current counter value is: <strong>{counterValue}</strong>
    </p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </section>
)

CounterContainer.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counterValue: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  counterValue: state.counter.value,
})

const mapDispatchToProps = {
  increment: incrementCounter,
  decrement: decrementCounter,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer)
