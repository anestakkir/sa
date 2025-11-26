import type { Meta, StoryObj } from '@storybook/vue3';


const meta: Meta = {
  title: 'Docs/Colors',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Palette: StoryObj = {
  render: () => ({
    template: `
      <div style="font-family: sans-serif; min-width: 600px;">
        <h1 style="margin-bottom: 24px;">Color Palette</h1>
        <p style="color: #666; margin-bottom: 32px;">
           Цвета проекта из файла <code>src/styles/colors.scss</code>.
        </p>

        <div style="display: flex; flex-direction: column; gap: 24px;">
          
          <!-- Primary Colors -->
          <div>
            <h3 style="margin-bottom: 8px;">Backgrounds</h3>
            <div style="display: flex; gap: 16px;">
              <div style="display: flex; flex-direction: column; gap: 4px; align-items: center;">
                <div style="width: 80px; height: 80px; background: var(--color-bg-primary); border: 1px solid #ddd; border-radius: 8px;"></div>
                <span style="font-size: 12px; color: #555;">Primary</span>
              </div>
              <div style="display: flex; flex-direction: column; gap: 4px; align-items: center;">
                <div style="width: 80px; height: 80px; background: var(--color-bg-form); border: 1px solid #ddd; border-radius: 8px;"></div>
                <span style="font-size: 12px; color: #555;">Form</span>
              </div>
              <div style="display: flex; flex-direction: column; gap: 4px; align-items: center;">
                <div style="width: 80px; height: 80px; background: var(--color-result-bg); border: 1px solid #ddd; border-radius: 8px;"></div>
                <span style="font-size: 12px; color: #555;">Result</span>
              </div>
            </div>
          </div>

          <!-- Buttons -->
          <div>
            <h3 style="margin-bottom: 8px;">Accent & Buttons</h3>
            <div style="display: flex; gap: 16px;">
              <div style="display: flex; flex-direction: column; gap: 4px; align-items: center;">
                <div style="width: 80px; height: 80px; background: var(--color-accent); border-radius: 8px;"></div>
                <span style="font-size: 12px; color: #555;">Accent</span>
              </div>
              <div style="display: flex; flex-direction: column; gap: 4px; align-items: center;">
                <div style="width: 80px; height: 80px; background: var(--color-accent-hover); border-radius: 8px;"></div>
                <span style="font-size: 12px; color: #555;">Hover</span>
              </div>
              <div style="display: flex; flex-direction: column; gap: 4px; align-items: center;">
                <div style="width: 80px; height: 80px; background: var(--color-disabled); border-radius: 8px;"></div>
                <span style="font-size: 12px; color: #555;">Disabled</span>
              </div>
            </div>
          </div>

          <!-- Text -->
          <div>
            <h3 style="margin-bottom: 8px;">Text & Status</h3>
            <div style="display: flex; gap: 16px;">
              <div style="display: flex; flex-direction: column; gap: 4px; align-items: center;">
                <div style="width: 80px; height: 80px; background: var(--color-text-primary); border-radius: 8px;"></div>
                <span style="font-size: 12px; color: #555;">Text</span>
              </div>
              <div style="display: flex; flex-direction: column; gap: 4px; align-items: center;">
                <div style="width: 80px; height: 80px; background: var(--color-error); border-radius: 8px;"></div>
                <span style="font-size: 12px; color: #555;">Error</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    `,
  }),
};