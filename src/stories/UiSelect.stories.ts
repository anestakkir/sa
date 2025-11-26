import type { Meta, StoryObj } from '@storybook/vue3';
import UiSelect from '../components/ui/UiSelect.vue';

const meta: Meta<typeof UiSelect> = {
    title: 'UI/UiSelect',
    component: UiSelect,
    tags: ['autodocs'],
    argTypes: {
        isDisabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof UiSelect>;

export const Default: Story = {
    args: {
        modelValue: 'Опция 1',
        options: ['Опция 1', 'Опция 2', 'Опция 3'],
    },
};