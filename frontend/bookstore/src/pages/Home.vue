<template>
    <div class="text-center text-3xl bg-dark-red">Home</div>
    <div
    v-if="loading"
    class="relative"
  >
    <Loading />
  </div>
    <div v-else>
        <div>
      <input
        type="text"
        v-model="searchingTitle"
        @input.enter="onSearchBooks"
      />
    </div>
    {{ 1 }}
    <div v-for="book of books">
        {{ 2 }}
        {{ book.value }}
      <!-- {{ get(book, "title", "Book title") }} -->
    </div>
    </div>
</template>

<script setup>
import { useHome } from "../composables/home";
import Loading from "../components/Loading.vue";


const { books, loading, searchingTitle, onSearchBooks } = useHome();
console.log(books);
import { get } from "lodash";
</script>
