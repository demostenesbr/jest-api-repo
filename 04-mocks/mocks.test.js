const forEach = (items, callback) => {
  for(let i = 0; i < items.length; i++){
    callback(items[i])
  }
}

it("Mock Callback", () => {
  const mockCalledback = jest.fn(x => 42 + x);
  forEach([0,1], mockCalledback);
  expect(mockCalledback.mock.calls.length).toBe(2)
  expect(mockCalledback.mock.calls)
})