

import React from 'react';
import { shallow, mount, render } from '../enzyme'
import List from './List';

describe('List - tests ', () => {

    // it('should be true', () => {
    //     expect(true).toBe(true)
    // })


    it('render list items', () => {

        const items = ['one', 'two', 'three']
        // const wrapper = shallow(<List items={items} />)
        // const wrapper = mount(<List items={items} />)
        // const wrapper = mount(<List items={items} />)
        const wrapper = render(<List items={items} />)

        //console.log(wrapper.debug());

        expect(wrapper.find('.list-group')).toBeDefined()
        expect(wrapper.find('.list-group-item')).toHaveLength(items.length)

    })

    it('renders a list item', () => {

        const items = ['idly', 'vada']
        // const wrapper = shallow(<List items={items} />)
        expect(wrapper.contains(<li key="idly" className="list-group-item">idly</li>))
    })

    // it('renders correct text in item', () => {

    //     const items = ['Nag', 'Indu', 'Ria']

    //     // const wrapper = shallow(<List items={items} />)
    //     const wrapper = mount(<List items={items} />)
    //     console.log(wrapper.debug())
    //     expect(wrapper.find('.list-group-item').get(0).props.children).toEqual('Nag')


    // })





})