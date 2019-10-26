import React from 'react';
import { shallow, configure } from 'enzyme';
import { PostForm } from './PostForm';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()})

describe('posts form component', () => {
    const addPost = jest.fn();
    const props = {
        addPost
    }
    const wrapper = shallow(<PostForm {...props} />)
    
    it('should render and match a stapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
    it('should contain title', () => {
        const wrapper = shallow( <PostForm {...props} />).shallow();
        wrapper.instance().onSubmit = jest.fn();
        const {onSubmit} = wrapper.instance();
        const mockedEvent = {target: {}};
        wrapper.find('form').simulate('submit', mockedEvent);
        expect(onSubmit).toHaveBeenCalled();
    });
})