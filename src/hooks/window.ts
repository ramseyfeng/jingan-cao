import { computed } from "vue";

export const useWindow = () => {
    const containerWidth = computed<number>(() => window.innerWidth);
    const containerHeight = computed<number>(() => window.innerHeight);
    return {containerWidth, containerHeight}
}
