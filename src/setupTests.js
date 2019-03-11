import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// error: Module my-serializer-module in the snapshotSerializers option was not found.
configure({ adapter: new Adapter() });

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
};
global.localStorage = localStorageMock;