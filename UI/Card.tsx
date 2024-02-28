import {FC} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {MoodImage} from './MoodImage';
import {colors} from '../styles/colors';
import {IAnalysis} from '../types/IAnalysis';

interface CardProps {
  item: IAnalysis;
  action: (data: IAnalysis) => void;
}

export const Card: FC<CardProps> = ({item, action}) => {
  return (
    <TouchableOpacity onPress={() => action(item)}>
      <View style={styles.containerCard}>
        <View style={styles.image}>
          <MoodImage
            mood={item.mood}
            sentimentScore={item.sentimentScore}
            negative={item.negative}
          />
        </View>
        <View style={styles.subject}>
          <Text style={styles.subject}>{item.subject.charAt(0).toUpperCase() +item.subject.slice(1) }</Text>
          <Text style={styles.tip}>{item.tip}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  containerCard: {
    width: '100%',
    height: 85,
    padding: 10,
    color: 'white',
    flexDirection: 'row',
    borderRadius: 5,
    marginTop: 15,
    backgroundColor:'white'
  },
  image: {
    flex: 1,
  },
  subject: {
    flexDirection:'column',
    marginTop: 5,
    flex: 3,
    fontSize: 16,
    color: colors.textColor,
    fontWeight: 'bold',
  },
  tip: {
    flexDirection:'column',
    marginTop: 2,
    flex: 3,
    fontSize: 12,
    color: '#100F11',
  }
});
