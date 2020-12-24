# @vue/cli-plugin-generator

## Description

A Vue CLI plugin to generator Vue components or pages.

## Usage

### Install

```bash
yarn add @vue/cli-plugin-generator -D
yarn invoke generator
```

### Edit `package.json`

```json
{
  "scripts": {
    "add-component": "vue-cli-service add-component",
    "add-page": "vue-cli-service add-page"
  }
}
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
      <>
        <h1>Hello{str}!</h1>
        <button onClick={handleStrChange}>Change Hello</button>
      </>
    );
  }
});
```

##### SFC

```vue
<template>
  <h1>Hello{{ str }}</h1>
  <button @click="handleStrChange">Change Hello</button>
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

<style lang="scss" module></style>
```
