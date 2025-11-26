<script setup lang="ts">
import { ref, computed } from 'vue';

import { SUBNET_MASK_OPTIONS } from '../constants/subnetMask'; 
import { isIpValid, getNetworkAddress, getAddressesCount } from '../utils/ipCalculations';


import UiButton from './ui/UiButton.vue';
import UiInput from './ui/UiInput.vue';
import UiSelect from './ui/UiSelect.vue';
import UiField from './ui/UiField.vue';

const ip = ref('');
const selectedMask = ref('255.255.255.0');
const isShowResult = ref(false);

const isFormValid = computed(() => {
  return isIpValid(ip.value) && selectedMask.value !== '';
});

const networkAddress = computed(() => {
  if (isIpValid(ip.value) && selectedMask.value) {
    return getNetworkAddress(ip.value, selectedMask.value);
  }
  return '';
});

const addressCount = computed(() => {
  if (selectedMask.value) {
    return getAddressesCount(selectedMask.value);
  }
  return 0;
});

function handleSubmit() {
  if (isFormValid.value) {
    isShowResult.value = true;
  }
}
</script>

<template>
  <div class="calculator-container">
    <h2 class="calculator-title">Калькулятор подсетей</h2>
    
    <form @submit.prevent="handleSubmit" class="calculator-form">
      
     
      <UiField label="IP-адрес">
        <UiInput
          v-model="ip"
          placeholder="например, 192.168.1.1"
        />
      </UiField>

     
      <UiField label="Маска подсети">
        <UiSelect
          v-model="selectedMask"
          :options="SUBNET_MASK_OPTIONS"
        />
      </UiField>

      
      <div class="form-actions">
        <UiButton
          type="submit"
          layout="primary"
          :isDisabled="!isFormValid"
        >
          Рассчитать
        </UiButton>
      </div>
    </form>

    <div v-if="isShowResult" class="result-block">
      <h3 class="result-title">Результат:</h3>
      <div class="result-item"><strong>IP:</strong> {{ ip }}</div>
      <div class="result-item"><strong>Маска:</strong> {{ selectedMask }}</div>
      <div class="result-item"><strong>Адрес сети:</strong> {{ networkAddress }}</div>
      <div class="result-item"><strong>Хостов:</strong> {{ addressCount }}</div>
    </div>
  </div>
</template>

<style scoped>
.calculator-container {
  max-width: 500px;
  margin: 32px auto;
  padding: 24px;
  background-color: var(--color-bg-primary);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.calculator-title {
  text-align: center;
  margin-bottom: 24px;
  color: var(--color-text-primary);
}

.calculator-form {
  background-color: var(--color-bg-form);
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
}

.form-actions {
  margin-top: 10px;
}

.result-block {
  margin-top: 24px;
  padding: 16px;
  background-color: var(--color-result-bg);
  border-left: 4px solid var(--color-result-border);
  border-radius: 8px;
}

.result-item {
  margin-bottom: 8px;
  color: var(--color-text-primary);
}
</style>