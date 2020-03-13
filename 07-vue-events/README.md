### Assert that the component correctly react to children's events

Given a component:

```javascript
<template>
  <ChildComponent @somethingChanged="reactNow" />
</template>
<script>
  import TrackingHelper from 'src/helpers/tracking';
  export default Vue.extend({
    methods: {
      reactNow() {
        TrackingHelper.track('something changed');
      }
    }
  });
</script>
```

By mocking the component's method and asserting it was called we test the default Vue mechanisms and not what we really care about

```javascript
it("calls the reactNow method", () => {
  const spy = jest.fn();
  const wrapper = shallowMount(Component, { reactNow: spy });

  wrapper.find(ChildComponent).vm.$emit("somethingChanged");

  expect(spy).toHaveBeenCalled();
});
```

By asserting that the tracking helper was called we check what's really important - the component correctly reacts to an event

```javascript
import TrackingHelper from "src/helpers/tracking";
jest.mock("src/helpers/tracking");

it("calls the reactNow method", () => {
  const wrapper = shallowMount(Component);

  wrapper.find(ChildComponent).vm.$emit("somethingChanged");

  expect(TrackingHelper.track).toHaveBeenCalledWith("something changed");
});
```
