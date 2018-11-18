
import TopicList from './TopicList';
import React from 'react';
import { mount, shallow } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// test('TopicList renders the panel with title All Topics', () => {

//     const handleSelectTopic = jest.fn(); // mock
//     const wrapper = shallow(
//         <TopicList onTopicSelect={handleSelectTopic} />
//     );
//     const titleDiv = wrapper.find('.panel-heading');
//     expect(titleDiv.text()).toBe('All Topics');

//     const topicEle = wrapper.find('.list-group-item').first();
//     topicEle.simulate('click');
//     expect(handleSelectTopic).toBeCalledWith('React')

// });

//-------------------------------------------------------



// // snapshot Testing  ( unique )


import renderer from 'react-test-renderer';

describe('TopicList component renders the topics correctly', () => {
    it('renders correctly', () => {
        // snapshop 
        const rendered = renderer.create(
            <TopicList />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});