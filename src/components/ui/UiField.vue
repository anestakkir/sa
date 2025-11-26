<script setup lang="ts">
interface IProps {
  label: string;
}

defineProps<IProps>();
</script>

<template>
  <div class="ui-field">
    <label class="ui-field__label">{{ label }}</label>
    <div class="ui-field__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.ui-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
}

.ui-field__label {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-primary);
  opacity: 0.8;
}
</style>