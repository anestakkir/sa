import type { Meta, StoryObj } from '@storybook/vue3';
import UiField from '../components/ui/UiField.vue';
import UiInput from '../components/ui/UiInput.vue';

const meta: Meta<typeof UiField> = {
  title: 'UI/UiField',
  component: UiField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UiField>;

export const WithInput: Story = {
  args: {
    label: 'Email адрес',
  },
  render: (args) => ({
    components: { UiField, UiInput },
    setup() {
      return { args };
    },
    template: `
      <UiField v-bind="args">
        <UiInput placeholder="user@example.com" modelValue="" />
      </UiField>
    `,
  }),
};