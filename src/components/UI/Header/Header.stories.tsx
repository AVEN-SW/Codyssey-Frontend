import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <BrowserRouter>
      <RecoilRoot>
        <Header />
      </RecoilRoot>
    </BrowserRouter>
  ),
};
