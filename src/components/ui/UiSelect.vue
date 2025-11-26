<script setup lang="ts">
interface IProps {
  modelValue: string;
  options: string[];
  isDisabled?: boolean;
}

interface IEmit {
  (e: 'update:modelValue', value: string): void;
}

defineProps<IProps>();
const emit = defineEmits<IEmit>();

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <div class="ui-select-wrapper">
    <select
      class="ui-select"
      :value="modelValue"
      :disabled="isDisabled"
      @change="handleChange"
    >
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.ui-select {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 16px;
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  outline: none;
  cursor: pointer;
}

.ui-select:focus {
  border-color: var(--color-accent);
}
</style>