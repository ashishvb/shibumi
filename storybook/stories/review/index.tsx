import React from 'react';
import {text, number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import DefaultView from '../default-view';
import {Review} from '../../../src';

storiesOf('Review Section', module)
  .addDecorator(getStory => (
    <DefaultView style={{backgroundColor: '#f3f2f2'}}>{getStory()}</DefaultView>
  ))
  .add('Review Demo', () => (
    <Review
      by={text('by', 'Ashwin Patel')}
      byProfilePic={text(
        'profilePic',
        'https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg',
      )}
      stars={number('Stars', 3.2)}
      createdAt={text('by', '2 Days ago')}
      review={text(
        'review',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi commodi fuga voluptas modi. Distinctio, atque, ducimus dignissimos fugiat aperiam dolorum nemo neque eos, sit saepe quibusdam. Voluptate ut eligendi quos!',
      )}
    />
  ));
//by, byProfilePic, stars, createdAt, review
