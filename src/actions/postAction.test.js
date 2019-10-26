import { fetchPost, addPost} from './postAction';
global.fetch = require('jest-fetch-mock')
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
    const mockJSON = {
        title: "Title", 
        text: "Text"
      };

    describe("fetchPosts", () => {
      afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
      })
  
      it("creates request fetch post when fetching posts", () => {
        fetchMock.get('https://jsonplaceholder.typicode.com/posts', {
          body: mockJSON
        })

        const store = mockStore({})
  
        return store.dispatch(fetchPost()).then(() => {
          expect(store.getActions()[0]).toMatchObject({type: 'FETCH_POST'})
        })
      })
    })
    describe("add posts", () => {
        afterEach(() => {
            fetchMock.reset()
            fetchMock.restore()
          })
      
          it("creates request fetch post when fetching posts", () => {
            fetchMock.post('https://jsonplaceholder.typicode.com/posts', {
              body: JSON.stringify(mockJSON),
            })
    
            const store = mockStore({})
            return store.dispatch(addPost(mockJSON)).then(() => {
              expect(store.getActions()[0]).toMatchObject({type: 'NEW_POST'})
            })
          })

    })
  })