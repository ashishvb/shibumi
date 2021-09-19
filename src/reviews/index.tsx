import React from 'react';
import {Flex, Avatar, Box, Text, Divider} from 'native-base';
import {StarIcon} from '../ratings';

interface IReviewComponent {
  by: string;
  byProfilePic?: string;
  stars: number;
  createdAt: string;
  review: string;
}

const ReviewComponent = (props: IReviewComponent) => {
  const {by, byProfilePic, stars, createdAt, review} = props;

  return (
    <Flex p={4} direction="column">
      <Flex direction="row" height="50px">
        <Avatar
          source={{
            uri: byProfilePic ? byProfilePic : undefined,
          }}>
          {by}
        </Avatar>
        <Box ml={2}>
          <Text>{by}</Text>
          <Flex direction="row">
            <StarIcon type="full" />
            <Text size="md" ml={-2} color="gray.400">
              {stars} Stars
            </Text>
          </Flex>
        </Box>

        <Text ml="auto" color="gray.400">
          {createdAt}
        </Text>
      </Flex>

      <Text color="gray.400">{review}</Text>

      <Divider my={4} />
    </Flex>
  );
};

export default ReviewComponent;
