import axios from 'axios';
import Users from './users';

jest.mock('axios');

test('should fetch users', () => {
    const users = [{name: 'Bob'}];
    const resp = {data: users};
    axios.get.mockResolvedValue(resp);
    // or
    // axios.get.mockImplementation(()=>Promise.resolve(resp));

    return Users.all().then(data => expect(data).toEqual(users));
});

const myMockFn = jest.fn(cb => cb(null, true));
myMockFn((err, val)=>console.log(val));
