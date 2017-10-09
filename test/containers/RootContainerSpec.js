import React from 'react'
import {shallow} from 'enzyme'
import {Root} from '../../src/containers/RootContainer'

describe('RootContainer', () => {
    describe('Root', () => {
      let props, component

      beforeEach(() => {
        props = {
          message: 'test message'
        }
        component = shallow(<Root {...props}/>)
      })

      it('renders message', () => {
        component.find('.message').children().text().should.equal(props.message)
      })
    })
})
