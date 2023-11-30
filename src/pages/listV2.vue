<template>
  <q-page class="row justify-center">
    <!-- Form -->
    <q-form class="q-mt-lg">
      <input v-model="newTask" />
      <button @click="addTask" id="save" class="q-ml-md">Agregar</button>
    </q-form>

    <br />
    <br />

    <!-- Lista -->
    <ul>
      <li v-for="(el, index) in elements" :key="el" :id="index">
        {{ el }}
        <q-btn
          class="q-ml-lg text-grey-5"
          icon="delete"
          @click.prevent="deleteTask(index)"
          dense
          flat
          outline
        />
      </li>
    </ul>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const newTask = ref("");
const elements = ref([
  "Elemento 1",
  "Elemento 2",
  "Elemento 3",
  "Elemento 4",
  "Elemento 5",
]);

const addTask = () => {
  elements.value.push(newTask.value);
  newTask.value = "";
};

const deleteTask = (index) => {
  elements.value.splice(index, 1);
};
</script>
