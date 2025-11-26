import type { Meta, StoryObj } from '@storybook/vue3';
import UiInput from '../components/ui/UiInput.vue';

const meta: Meta<typeof UiInput> = {
    title: 'UI/UiInput',
    component: UiInput,
    tags: ['autodocs'],
    argTypes: {
        isDisabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof UiInput>;

export const Default: Story = {
    args: {
        modelValue: '',
        placeholder: 'Введите текст...',
    },
};

export const Disabled: Story = {
    args: {
        modelValue: 'Заблокированный текст',
        isDisabled: true,
    },
};