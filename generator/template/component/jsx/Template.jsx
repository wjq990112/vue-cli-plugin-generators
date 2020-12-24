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
