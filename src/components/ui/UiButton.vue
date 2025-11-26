<script setup lang="ts">
import { computed } from 'vue';

interface IProps {
  layout?: 'primary' | 'secondary';
  isDisabled?: boolean;
  type?: 'button' | 'submit';
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  isDisabled: false,
  type: 'button',
});


</script>

<template>
  <button
    class="ui-button"
    :type="props.type"
    :disabled="props.isDisabled"
    :data-variant="props.layout"
  >
    <slot />
  </button>
</template>

<style scoped>
.ui-button {
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  color: white;
}

.ui-button:disabled {
  background-color: var(--color-disabled);
  cursor: not-allowed;
  opacity: 0.7;
}


.ui-button[data-variant='primary'] {
  background-color: var(--color-accent);
}
.ui-button[data-variant='primary']:hover:not(:disabled) {
  background-color: var(--color-accent-hover);
}

.ui-button[data-variant='secondary'] {
  background-color: var(--color-secondary);
}
.ui-button[data-variant='secondary']:hover:not(:disabled) {
  background-color: var(--color-secondary-hover);
}
</style>