import React from 'react';
import {Flex, Text, theme, Progress, Icon} from 'native-base';
import Svg, {G, Path, Polygon, Rect} from 'react-native-svg';
import formatNumber from '../helpers/formatNumber';

interface RatingsProps {
  /**
   * Children
   */
  children: any;
}

const Ratings = (props: RatingsProps) => {
  return (
    <Flex
      width="100%"
      direction="row"
      align="center"
      height="200px"
      justify="center">
      {props.children}
    </Flex>
  );
};

interface TotalProps {
  /**
   * The number of avergae review
   */
  avgReview: number;
  /**
   * Total number of ratings
   */
  totalRatings: number;
  /**
   * Total number of reviews
   */
  totalReviews: number;
}

const Total = (props: TotalProps) => {
  const {avgReview, totalRatings, totalReviews} = props;

  const showStars = () => {
    return (
      <Flex direction="row" align="center" my={1} mx={-2}>
        {new Array(1, 2, 3, 4, 5).map((el, index) => {
          if (Math.round(avgReview) >= index + 1) {
            return <StarIcon key={index} type="full" />;
          }

          return <StarIcon key={index} />;
        })}
      </Flex>
    );
  };

  return (
    <Flex p={4} direction="column" justify="center" align="center">
      <Text fontSize="2xl" fontWeight="bold" textAlign="center">
        {avgReview}
      </Text>

      {showStars()}

      <Text
        color="gray.400"
        fontSize="md"
        fontWeight="normal"
        textAlign="center">
        {formatNumber(totalRatings)} Ratings
      </Text>
      <Text
        color="gray.400"
        fontSize="md"
        fontWeight="normal"
        textAlign="center">
        {'&'} {formatNumber(totalReviews)} Reviews
      </Text>
    </Flex>
  );
};

interface ProgressBarProps {
  /**
   * Total 5 Stars of reviews
   */
  total5Stars: number;
  /**
   * Total 4 Stars of reviews
   */
  total4Stars: number;
  /**
   * Total 3 Stars of reviews
   */
  total3Stars: number;
  /**
   * Total 2 Stars of reviews
   */
  total2Stars: number;
  /**
   * Total 1 Stars of reviews
   */
  total1Stars: number;
}

const ProgressBar = (props: ProgressBarProps) => {
  const {total5Stars, total4Stars, total3Stars, total2Stars, total1Stars} =
    props;

  const total =
    total5Stars + total4Stars + total3Stars + total2Stars + total1Stars;

  const progressRow = (
    star: number,
    totalStars: number,
    colorScheme: string,
  ) => {
    const percent = (totalStars / total) * 100;

    return (
      <Flex flex={1} direction="row" align="center">
        <Text mr={2} fontSize="sm">
          {star}
        </Text>
        <StarIcon type="full" />
        <Progress
          value={percent}
          flex={1}
          colorScheme={colorScheme}
          background="gray.400"
        />
        <Text ml={2} fontSize="sm" color={'gray.400'} width="45px">
          {formatNumber(totalStars)}
        </Text>
      </Flex>
    );
  };

  return (
    <Flex flex={1} p={4} direction="column">
      {progressRow(5, total5Stars, 'green')}
      {progressRow(4, total4Stars, 'green')}
      {progressRow(3, total3Stars, 'blue')}
      {progressRow(2, total2Stars, 'yellow')}
      {progressRow(1, total1Stars, 'red')}
    </Flex>
  );
};

const StarIcon = (props: {
  /**
   * Type of star full, half or default empty
   */
  type?: 'full' | 'half';
}) => {
  switch (props.type) {
    case 'full':
      return (
        <Icon>
          <Svg
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill={theme.colors.yellow['500']}>
            <G>
              <Rect fill="none" height="24" width="24" x="0" />
              <Polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" />
            </G>
          </Svg>
        </Icon>
      );

    case 'half':
      return (
        <Icon>
          <Svg
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill={theme.colors.yellow['500']}>
            <G>
              <Rect fill="none" height="24" width="24" x="0" />
            </G>
            <G>
              <G>
                <G>
                  <Path d="M22,9.24l-7.19-0.62L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27L18.18,21l-1.63-7.03L22,9.24z M12,15.4V6.1 l1.71,4.04l4.38,0.38l-3.32,2.88l1,4.28L12,15.4z" />
                </G>
              </G>
            </G>
          </Svg>
        </Icon>
      );

    default:
      return (
        <Icon>
          <Svg
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill={theme.colors.gray['400']}>
            <Path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
          </Svg>
        </Icon>
      );
  }
};

Ratings.Total = Total;
Ratings.ProgressBar = ProgressBar;

export default Ratings;
