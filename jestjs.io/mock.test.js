function forEach(items, callback) {
    for(let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

const mockCallback = jest.fn(x=> 42 + x);
forEach([0,1], mockCallback);

expect(mockCallback.mock.calls.length).toBe(2);

expect(mockCallback.mock.calls[0][0]).toBe(0);

expect(mockCallback.mock.calls[1][0]).toBe(1);

expect(mockCallback.mock.results[0].value).toBe(42);

const myMock = jest.fn();
const a = new myMock();
const b = {};
const bound = myMock.bind(b);
bound();

console.log(myMock.mock.instances);

expect(someMockFunction.mock.calls.length).toBe(1);

expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

expect(someMockFunction.mock.results[0].value).toBe('return value');

expect(someMockFunction.mock.instances.length).toBe(2);

expect(someMockFunction.mock.instances[0].name).toEqual('test');

console.log(myMock());
myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());


const filterTestFn = jest.fn();

filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

const result = [11, 12].filter(num => filterTestFn(num));

console.log(result);
console.log(filterTestFn.mock.calls);




// Mocking modules

