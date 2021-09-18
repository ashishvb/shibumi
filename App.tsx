import * as React from 'react';
import StorybookUIRoot from './storybook';
import {NativeBaseProvider, Box} from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <StorybookUIRoot />
    </NativeBaseProvider>
  );
}
