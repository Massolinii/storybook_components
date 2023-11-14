// TextArea.stories.ts
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '../TextArea/TextArea.tsx';

export default { component: TextArea };

export const Primary = { args: { } };

export const WithCustomStyles = {
  ...Primary,
  args: {
    ...Primary.args,
    padding: '20px',
    margin: '15px',
    textAlign: 'center',
    letterSpacing: '1px',
    lineHeight: '1.5',
    backgroundColor: 'lightgrey',
  },
};
