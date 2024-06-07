import { defineStore } from 'pinia';

export const useImageStore = defineStore('image', {
  state: () => ({
    imageUrl: null,
  }),
  actions: {
    setImageUrl(url) {
      this.imageUrl = url;
    },
  },
});