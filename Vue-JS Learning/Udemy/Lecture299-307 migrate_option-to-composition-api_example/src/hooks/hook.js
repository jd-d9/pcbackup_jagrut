import { ref, computed, watch } from 'vue';

export default function useSearch(items, searchProps) {
    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');

    const availableItems = computed(() => {
      let filteredItem = [];
      if (activeSearchTerm.value) {
        filteredItem = items.filter((item) =>
          item[searchProps].toLowerCase().includes(activeSearchTerm.value)
        );
      } else if (items) {
        filteredItem = items;
      }
      return filteredItem;
    });

    watch(enteredSearchTerm, (newValue) => {
      setTimeout(() => {
        if (newValue === enteredSearchTerm.value) {
          activeSearchTerm.value = newValue;
        }
      }, 300);
    })

    console.log(availableItems.value)

    function updateSearch(val) {
      enteredSearchTerm.value = val;
    }

    return { 
        enteredSearchTerm,
        availableItems,
        updateSearch,
    }
}