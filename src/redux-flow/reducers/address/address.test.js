import { expect } from 'chai'
import address from './index'
import deepFreeze from 'deep-freeze'


it('address shoul be a function', () => {
    expect(address).to.be.a('function')
})

it('shoul action UPDATE_ADDRESS update adrress', () => {
    const before = deepFreeze({
        address: '',
        city: '',
        code: '',
        district: '',
        state: '',
        status: 1,
    })

    const action = deepFreeze({
        type: 'UPDATE_ADDRESS',
        payload: {
            address: 'Endereco',
            city: 'Aracaju',
            code: '49032490',
            district: 'Farolandia',
            state: 'Sergipe',
            status: 1,
        }
    })

    const after = {
        address: 'Endereco',
        city: 'Aracaju',
        code: '49032490',
        district: 'Farolandia',
        state: 'Sergipe',
        status: 1,
    }

    expect(address(before, action)).to.be.deep.equal(after)
})