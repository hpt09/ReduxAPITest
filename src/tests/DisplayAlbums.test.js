import * as actions from '../actions/DisplayAlbums'

describe('actions', () => {
  it('should create an action to display the albums', () => {
    const payload = ['Eminem Album']
    const expectedAction = {
      type: 'DISPLAYALBUMS',
      payload
    }
    expect(actions.displayAlbums(payload)).toEqual(expectedAction)
  })
})