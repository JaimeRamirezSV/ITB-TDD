import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { mount, shallowMount } from "@vue/test-utils";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import list from "src/pages/listV2.vue";
installQuasarPlugin({ plugins: {} });

describe("Todo list", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(list);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("Listar tareas", () => {
    let ul = wrapper.find("ul");
    let li = wrapper.find("li");
    expect(ul.exists()).toBeTruthy();
    expect(li.exists()).toBeTruthy();
  });

  it("Agreegar una nueva tarea", async () => {
    let save = await wrapper.find("#save");
    wrapper.vm.newTask = "Nueva tarea";
    save.trigger("click");
    await wrapper.vm.$nextTick();
    const ul = wrapper.find("ul");
    const liElements = ul.findAll("li");
    const liCount = liElements.length;
    expect(liCount).toBe(6);
  });
});
