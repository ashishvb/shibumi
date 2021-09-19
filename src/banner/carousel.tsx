import React, {FC} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const Carousel: FC = props => {
  return (
    <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      index={2}
      showPagination>
      {props.children}
    </SwiperFlatList>
  );
};

export default Carousel;
