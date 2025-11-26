<script setup lang="ts">
interface IProps {
  modelValue: string;
  placeholder?: string;
  isDisabled?: boolean;
}

interface IEmit {
  (e: 'update:modelValue', value: string): void;
}

defineProps<IProps>();
const emit = defineEmits<IEmit>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <input
    class="ui-input"
    type="text"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="isDisabled"
    @input="handleInput"
  />
</template>

<style scoped>
.ui-input {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 16px;
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  outline: none;
  transition: border-color 0.2s;
}

.ui-input:focus {
  border-color: var(--color-accent);
}

.ui-input:disabled {
  background-color: #f1f5f9;
  cursor: not-allowed;
}
</style>