import type { Meta, StoryObj } from '@storybook/vue3';
import UiButton from '../components/ui/UiButton.vue';

const meta: Meta<typeof UiButton> = {
    title: 'UI/UiButton',
    component: UiButton,
    tags: ['autodocs'],
    argTypes: {
        layout: { control: 'select', options: ['primary', 'secondary'] },
        type: { control: 'select', options: ['button', 'submit'] },
        isDisabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof UiButton>;

export const Primary: Story = {
    args: {
        layout: 'primary',
        default: 'Кнопка Primary',
    },
};

export const Secondary: Story = {
    args: {
        layout: 'secondary',
        default: 'Кнопка Secondary',
    },
};

export const Disabled: Story = {
    args: {
        layout: 'primary',
        isDisabled: true,
        default: 'Неактивная',
    },
};