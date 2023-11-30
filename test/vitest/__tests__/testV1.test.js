import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-vitest";
import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import list from "src/pages/listV2.vue";
installQuasarPlugin({ plugins: {} });

describe("Todo list", () => {
  // Happy path
  it.todo("Listar tareas");
  it.todo("Agreegar una nueva tarea");
  it.todo("Eliminar una tarea");
  it.todo("Editar una tarea");

  // Unhappy path
  it.todo("Mostrar un mensaje cuando la lista esta vacia");
  it.todo("validar tarea");
});
