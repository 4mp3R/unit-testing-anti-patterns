### Assert that a child component

Checking the attrs does not give us the confidence the prop is of a correct type and that it's value is what we expect to be:

```javascript
it("displays the child component component with correct props", () => {
  expect(wrapper.find(ChildComponent).attributes("data")).toEqual(
    "[object Object],[object Object]"
  );
});
```

Checking the props instead solves this issue:

```javascript
it("displays the child component component with correct props", () => {
  expect(wrapper.find(ChildComponent).props()).toEqual({
    data: [{ id: 1 }, { id: 2 }]
  });
});
```
