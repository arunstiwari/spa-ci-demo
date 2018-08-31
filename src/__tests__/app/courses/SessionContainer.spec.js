import React from 'react'
import configureStore from 'redux-mock-store';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {initialState} from '../../../store/initialState';
import SessionContainer from '../../../components/app/sessions/SessionContainer';

Enzyme.configure({adapter: new Adapter()});

const mockStore = configureStore();
let wrapper;
let store;

describe('SessionContainer', () => {
    
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<SessionContainer store={store} />)
    });

    it('Should render the container', () => {
        expect(wrapper.length).toBe(1);
    });

    it('Should have Sessions Component', () => {
        expect(wrapper.find('CourseSession')).toHaveLength(1)
    });

    it('Should have sessions as properties', () => {
        expect(wrapper.prop('sessions')).toEqual(initialState.sessions);
    });
});