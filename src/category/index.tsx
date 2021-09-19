import React from 'react';
import {Flex, Box, Text, Image} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

type CategoryModel = {
  _key: string | number;
  title: string;
  thumbnail: string;
  color?: string;
};

interface CategorySectionProps {
  variant?: 'grid';
  data: Array<CategoryModel>;
  color?: string;
  onPress?: (category: CategoryModel) => void;
}

const CategorySection = (props: CategorySectionProps) => {
  let {variant, data, onPress} = props;

  if (!variant) variant = 'grid';

  return variant === 'grid' ? (
    <Flex
      wrap="wrap"
      direction="row"
      justify="space-between"
      padding={4}
      pr={0}>
      {data.map(cat => (
        <TouchableOpacity
          style={{width: '25%'}}
          key={cat._key}
          onPress={() => {
            onPress ? onPress(cat) : '';
          }}>
          <CategoryBlock {...cat} />
        </TouchableOpacity>
      ))}
    </Flex>
  ) : (
    <></>
  );
};

export default CategorySection;

interface CategoryBlockProps {
  title: string;
  thumbnail: string;
  color?: string;
}

const CategoryBlock = (props: CategoryBlockProps) => {
  let {title, thumbnail, color} = props;

  if (!color) color = 'black';

  return (
    <Box pr={4}>
      <Flex
        mr={4}
        mb={4}
        borderRadius="lg"
        overflow="hidden"
        direction="column"
        width="100%"
        bg="white">
        <Flex height="60px" direction="row" align="center" justify="center">
          <Image
            width="100%"
            height="60px"
            resizeMode={'cover'}
            source={{
              uri: thumbnail,
            }}
            alt="Alternate Text"
          />
        </Flex>
        <Text
          color={color}
          textAlign="center"
          fontSize="xs"
          fontWeight="semibold"
          m={2}>
          {title}
        </Text>
      </Flex>
    </Box>
  );
};
