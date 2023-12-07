import { computed, ref } from "vue";
import { useStore } from "vuex";

export function useHome() {
  const store = useStore();
  const loading = computed(() => store.state.loading);
  const books = computed(() => store.getters.books);
  const searchingTitle = ref("");

  async function onSearchBooks() {
    await store.dispatch("searchBooks", searchingTitle.value);
  }

  return {
    books,
    loading,
    searchingTitle,
    onSearchBooks,
  };
}
