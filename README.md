# vue-cli-plugin-generators

## Description

A Vue CLI plugin to generate components or pages.

## Support

### Component

[x] SFC(.vue)

[x] TSX(.tsx)

[x] JSX(.jsx)

### Style

[x] CSS(.css)

[x] SCSS(.scss)

[x] Sass(.sass)

[x] Less(.less)

[x] Stylus(.styl)

## Usage

### Install

```bash
vue add vue-cli-plugin-generators
```

or

```bash
yarn add vue-cli-plugin-generators -D
yarn invoke generators
```

### Run

#### Add a component

```bash
yarn add-component
```

#### Add a page

```bash
yarn add-page
```

### Template

#### Component

##### JSX/TSX

```js
/**
 * @file HelloWorld
 */
import { defineComponent, ref } from 'vue';

import './index.css';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const str = ref('World');

    /**
     * @function ChangeStr
     * @description handle str change
     */
    const handleStrChange = () => {
      str.value = 'Vue';
    };

    return {
      str,
      handleStrChange
    };
  },
  render() {
    const { str, handleStrChange } = this;

    return (
      <div className="HelloWorld_container">
        <h1>Hello{str}!</h1>
        <button onClick={handleStrChange}>Change Hello</button>
      </div>
    );
  }
});
```

##### SFC

```vue
<template>
  <div class="HelloWorld_container">
    <h1>Hello{{ str }}</h1>
    <button @click="handleStrChange">Change Hello</button>
  </div>
</template>

<script>
/**
 * @file HelloWorld
 */
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const str = ref('World');

    /**
     * @function ChangeStr
     * @description handle str change
     */
    const handleStrChange = () => {
      str.value = 'Vue';
    };

    return {
      str,
      handleStrChange
    };
  }
});
</script>

<style>
</style>
```
