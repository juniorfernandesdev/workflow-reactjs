import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import SeachCep from './search-cep';
import ajax from '@fdaciuk/ajax';
import { updateAddress } from 'reducers/address/action-creators'


class SeachCepContainer extends PureComponent {

    state = { isFetching: false }

    handleSubmit = async (e) => {
        e.preventDefault()
        this.setState({ isFetching: true })

        const cep = e.target.cep.value
        const response = await ajax().get(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${cep}`, )

        this.setState({ isFetching: false })

        // this.setState(response)
        this.props.dispatch(updateAddress(response))
    }


    render() {
        console.log('this.props', this.props)
        return (
            <SeachCep 
                {...this.state}
                {...this.props.address}
            handleSubmit={this.handleSubmit}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    address: state.address
})

export default connect(mapStateToProps)(SeachCepContainer)