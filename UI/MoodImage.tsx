import {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import { displayImage } from '../utils/utilities';


export const MoodImage: FC<{
  mood: string;
  sentimentScore: number;
  negative: boolean;
}> = ({mood, sentimentScore, negative}) => {
  return (
    <View style={styles.containerImage}>
      <Image style={styles.image} source={displayImage(mood, sentimentScore, negative)} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    width: 60,
    height: 60,
  },
  image: {
    width: 60,
    height: 60,
  },
});
