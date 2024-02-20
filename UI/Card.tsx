import {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MoodImage} from './MoodImage';
import {colors} from '../styles/colors';

interface CardProps {
  mood: string;
  subject: string;
  score: number;
  negative: boolean;
  color: string;
}

export const Card: FC<CardProps> = ({
  mood,
  subject,
  score,
  negative,
  color,
}) => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.image}>
        <MoodImage mood={mood} />
      </View>
      <View style={styles.subject}>
        <Text style={styles.subject}>{subject}</Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  containerCard: {
    width: '100%',
    height: 85,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 17,
    marginTop: 15,
  },
  image: {
    flex: 1,
  },
  subject: {
    marginTop: 5,
    flex: 3,
    fontSize: 16,
    color: colors.textColor,
  },
});
