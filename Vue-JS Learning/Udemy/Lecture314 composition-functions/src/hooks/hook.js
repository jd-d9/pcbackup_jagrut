import { ref } from 'vue';

export default function useHook() {
    const alertIsVisible = ref(false);

    function showAlert() {
      alertIsVisible.value = true;
    }
    function hideAlert() {
      alertIsVisible.value = false;
    }
    
    return [ alertIsVisible, showAlert, hideAlert ];
}