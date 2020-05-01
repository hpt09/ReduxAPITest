import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {AlbumList} from '../AlbumList'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    albums: [{"title":"idk", "id":"1"}]
  }

  const enzymeWrapper = shallow(<AlbumList {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Header', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('span').hasClass('card-title')).toBe(true)

      expect(enzymeWrapper.find('h4').text()).toBe('Albums')

    })

  })
})