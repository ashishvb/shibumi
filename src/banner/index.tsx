import React from 'react';
import {Image, Box} from 'native-base';
import Carousel from './carousel';

interface BannerProps {
  /**
   * Children Or Slides for the banner
   */
  children?: any;
  /**
   * If `true`, and banner has multiple childrens
   */
  autoPlay?: boolean;
  /**
   * The number of seconds after which the slide shoudl change
   */
  timeOut?: number;

  /**
   * width for the image default is 100%
   */
  width?: string;
  /**
   * Height of the image, If specified uses the height of the image if not uses aspectRatio to calulcate height of the image
   */
  height?: string;
  /**
   * Aspect ratio of the image defaults to 1.72
   */
  aspectRatio?: number;
}

/**
 * Banner Component. Wrapper or parent component for the banner slides
 */
const Banner = (props: BannerProps) => {
  const {children, width, height, aspectRatio} = props;

  /**
   * Depening upon children determine to show single image or carousel
   */
  const childrenLength = children?.length ? children.length : 0;

  let styles: any = {
    width: width ? width : '100%',
  };

  if (height) {
    styles = {
      ...styles,
      height: height,
    };
  } else {
    styles = {
      ...styles,
      aspectRatio: aspectRatio ? 1 * aspectRatio : 1 * 1.72,
    };
  }

  return (
    <Box style={styles}>
      {childrenLength && childrenLength > 1 ? (
        <Carousel>
          {children.map((child: any) => (
            <Banner.Slide
              key={child?.props.key ? child?.props.key : Math.random()}
              imgURL={child?.props.imgURL}
              width={width ? width : undefined}
              height={height ? height : undefined}
              aspectRatio={aspectRatio ? aspectRatio : undefined}
            />
          ))}
        </Carousel>
      ) : (
        children
      )}
    </Box>
  );
};

interface BannerSlideProps {
  /**
   * URL for the banner image
   */
  imgURL: string;
  /**
   * Alt text for the banner image
   */
  alt?: string;
  /**
   * width for the image default is 100%
   */
  width?: string;
  /**
   * Height of the image, If specified uses the height of the image if not uses aspectRatio to calulcate height of the image
   */
  height?: string;
  /**
   * Aspect ratio of the image defaults to 1.72
   */
  aspectRatio?: number;
}

const BannerSlide = (props: BannerSlideProps) => {
  const {imgURL, alt, width, height, aspectRatio} = props;

  let styles: any = {
    width: width ? width : '100%',
  };

  if (height) {
    styles = {
      ...styles,
      height: height,
    };
  } else {
    styles = {
      ...styles,
      aspectRatio: aspectRatio ? 1 * aspectRatio : 1 * 1.72,
    };
  }

  return (
    <Box style={styles}>
      <Image
        source={{
          uri: imgURL,
        }}
        style={styles}
        alt={alt ? alt : 'Banner Image'}
        resizeMode="cover"
      />
    </Box>
  );
};

Banner.Slide = BannerSlide;

export default Banner;
