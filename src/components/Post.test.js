import React from 'react';
import { shallow, configure } from 'enzyme';
import { Posts } from './Posts';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()})

describe('posts component', () => {
    
    const fetchPost = jest.fn();
    const props = {
        posts: [{title: 'title', body: 'text'}],
        fetchPost
    }
    const wrapper = shallow(<Posts {...props} />)
    
    it('should render and match a stapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
    it('should contain title', () => {
        expect(wrapper.find('h3').text()).toEqual('title')
    });
    it('should contain text', () => {
        expect(wrapper.find('p').text()).toEqual('text')
    })
})