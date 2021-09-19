import {action} from '@storybook/addon-actions';
import {text, number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import DefaultView from '../default-view';
import Banner from '../../../src/banner';

storiesOf('Banner Section', module)
  .addDecorator(getStory => (
    <DefaultView style={{backgroundColor: '#f3f2f2'}}>{getStory()}</DefaultView>
  ))
  .add('Single Slide', () => (
    <Banner>
      <Banner.Slide
        key={45}
        imgURL="https://wallpaperaccess.com/full/317501.jpg"
      />
    </Banner>
  ))
  .add('Muliple Slides', () => (
    <Banner>
      <Banner.Slide
        key={1}
        imgURL="https://wallpaperaccess.com/full/317501.jpg"
      />
      <Banner.Slide
        key={2}
        imgURL="https://wallpaperaccess.com/full/317501.jpg"
      />
      <Banner.Slide
        key={3}
        imgURL="https://wallpaperaccess.com/full/317501.jpg"
      />
    </Banner>
  ));
