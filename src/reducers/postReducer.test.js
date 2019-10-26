import postReducer from './postReducer'
import {FETCH_POST, NEW_POST} from '../actions/constants';


describe('post reducer', () => {
    it('should fill the state with fetched data', () => {
        const inistialState = {items: []}
        const payload = [{title: 'title', text: 'text'}]
        const action = {
            type: FETCH_POST,
            payload
        }
        expect(postReducer(inistialState, action)).toEqual({items: [{title: 'title', text: 'text'}]})
    })
    it('should add new post to existing state', () => {
        const inistialState = {items: [{title: 'title', text: 'text'}]}
        const payload = {title: 'title1', text: 'text1'}
        const action = {
            type: NEW_POST,
            payload
        }
        expect(postReducer(inistialState, action)).toEqual({items: [{title: 'title', text: 'text'},{title: 'title1', text: 'text1'} ]})
    })
})