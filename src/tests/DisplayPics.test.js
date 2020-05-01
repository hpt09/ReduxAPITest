import * as actions from '../actions/DisplayPics'

describe('actions', () => {
  it('should create an action to pics of an album', () => {
    const payload = ['Eminem Album URL']
    const expectedAction = {
      type: 'DISPLAYPICS',
      payload
    }
    expect(actions.displayPics(payload)).toEqual(expectedAction)
  })
})