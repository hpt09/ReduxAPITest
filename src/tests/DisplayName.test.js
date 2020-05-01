import * as actions from '../actions/DisplayName'

describe('actions', () => {
  it('should create an action to display the name of the album clicked', () => {
    const payload = 'Eminem Album'
    const expectedAction = {
      type: 'DISPLAYNAME',
      payload
    }
    expect(actions.displayName(payload)).toEqual(expectedAction)
  })
})