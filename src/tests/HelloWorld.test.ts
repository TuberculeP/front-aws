// integration test for the Hello World component
import {expect, test} from "vitest";
import { mount } from '@vue/test-utils';
import HelloWorld from "../components/HelloWorld.vue";
import { nextTick } from 'vue';

test("HelloWorld renders correctly", async () => {
    const wrapper = mount(HelloWorld, {
        props: {
            msg: "Hello, World!"
        }
    });
    expect(wrapper.find("h1").text()).toContain("Hello, World!");
    // click the button and check if it emits the correct event
    const button = wrapper.find('button');
    const counter = wrapper.find('[data-testid="counter"]');
    expect(counter.text()).toBe("0");
    await button.trigger('click');
    await nextTick(); // Attendez la mise à jour du DOM
    expect(counter.text()).toBe("1");
});