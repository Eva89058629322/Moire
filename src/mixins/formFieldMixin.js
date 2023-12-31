import BaseFormField from '@/components/BaseFormField.vue'

export default {
  components: { BaseFormField },
  emits: ['update:modelValue'],
  props: ['title', 'error', 'placeholder', 'modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
  },
}
