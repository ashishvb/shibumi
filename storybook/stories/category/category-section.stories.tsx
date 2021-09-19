import {action} from '@storybook/addon-actions';
import {text, number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CategorySection from '../../../src/category';
import DefaultView from '../default-view';
import {categoriesArray} from '../../../data';
import {Box, Text} from 'native-base';

storiesOf('Category Section', module)
  .addDecorator(getStory => (
    <DefaultView style={{backgroundColor: '#f3f2f2'}}>
      <Box>
        <Text m={4}>Categories</Text>
        {getStory()}
      </Box>
    </DefaultView>
  ))
  .add('grid', () => <CategorySection data={categoriesArray} variant="grid" />);
// To be added
// .add('overflow', () => <CategorySection variant="overflow" />)
