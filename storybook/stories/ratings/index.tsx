import React from 'react';
import {number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import DefaultView from '../default-view';
import {Ratings} from '../../../src';
import {Divider} from 'native-base';

storiesOf('Ratings Section', module)
  .addDecorator(getStory => (
    <DefaultView style={{backgroundColor: '#f3f2f2'}}>{getStory()}</DefaultView>
  ))
  .add('demo', () => (
    <Ratings>
      <Ratings.Total
        avgReview={number('Avergage Rating', 4.5, {min: 1, max: 5})}
        totalRatings={number('Total Ratings', 25586, {min: 0})}
        totalReviews={number('Total Reviews', 3546, {min: 0})}
      />
      <Divider orientation="vertical" />
      <Ratings.ProgressBar
        total5Stars={number('Total 5 Stars Ratings', 21856, {min: 0})}
        total4Stars={number('Total 4 Stars Ratings', 3457, {min: 0})}
        total3Stars={number('Total 3 Stars Ratings', 500, {min: 0})}
        total2Stars={number('Total 2 Stars Ratings', 277, {min: 0})}
        total1Stars={number('Total 1 Stars Ratings', 139, {min: 0})}
      />
    </Ratings>
  ));
