import reducer from '../reducers/rootReducer'
//import * as types from '../../constants/ActionTypes'

describe('todos reducer', () => {


  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        albums: [],
        pics: [],
        name: ''
      }
    )
  })

  it('should handle DISPLAY_ALBUMS', () => {
    expect(
      reducer({
        albums: [],
        pics: [],
        name: ''
    }, {
        type: "DISPLAYALBUMS",
        payload: ['Test Album']
      })
    ).toEqual(
      {
        albums: ['Test Album'],
        pics: [],
        name: ''
      }
    )
  })

  it('should handle DISPLAY_PICS', () => {
    expect(
      reducer({
        albums: [],
        pics: [],
        name: ''
    }, {
        type: "DISPLAYPICS",
        payload: ['Test Album URL']
      })
    ).toEqual(
      {
        albums: [],
        pics: ['Test Album URL'],
        name: ''
      }
    )
  })

  it('should handle DISPLAY_NAME', () => {
    expect(
      reducer({
        albums: [],
        pics: [],
        name: ''
    }, {
        type: "DISPLAYNAME",
        payload: 'Test Album'
      })
    ).toEqual(
      {
        albums: [],
        pics: [],
        name: 'Test Album'
      }
    )
  })




})