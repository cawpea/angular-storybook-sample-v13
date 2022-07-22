import { Story, Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Components/button',
  component: ButtonComponent,
  argTypes: {
    label: { control: 'text' },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});

Primary.args = {
  label: 'Primary',
  priority: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: 'Secondary',
  priority: 'secondary',
};

export const Normal = Template.bind({});

Normal.args = {
  label: 'Normal',
  priority: 'normal',
};
