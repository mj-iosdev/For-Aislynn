import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const standardWidth = 375;
export const deviceWidth = width;
export const deviceHeight = height;
const K = deviceWidth / standardWidth;

const USE_FOR_BIGGER_SIZE = true;

export function deviceSize(size) {
  return K * size;
}

export function getFontSize(size) {
  if (USE_FOR_BIGGER_SIZE || deviceWidth < standardWidth) {
    const newSize = deviceSize(size);
    return newSize;
  }
  return size;
}
