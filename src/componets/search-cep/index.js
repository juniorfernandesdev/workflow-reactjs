import React, { PureComponent } from 'react'
import SeachCep from './search-cep'
import ajax from '@fdaciuk/ajax';


class SeachCepContainer extends PureComponent {

    state = {
        address: '',
        city: '',
        code:'',
        district: '',
        state: '',
        status: 1,
        isFetching: false
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        this.setState({ isFetching: true })

        console.log(e.target.cep.value)
        const cep = e.target.cep.value
        const response = await ajax().get(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${cep}`, )

        this.setState({ isFetching: false })

        this.setState(response)
    }


    render() {
        return (
            <SeachCep 
                {...this.state} 
                handleSubmit={this.handleSubmit}
            />
        )
    }
}


export default SeachCepContainer