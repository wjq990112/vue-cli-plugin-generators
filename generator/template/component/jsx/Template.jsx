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
