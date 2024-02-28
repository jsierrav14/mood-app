import {StyleSheet, Text, View} from 'react-native';
import {Editor} from '../components/Editor';
import {colors} from '../styles/colors';
import {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RoutesProps from '../types/RoutesProps';
import LinearGradient from 'react-native-linear-gradient';

type Props = NativeStackScreenProps<RoutesProps, 'Entry'>;

export const Entry: FC<Props> = ({navigation}) => {
  const goToEntryDetail = (data: any) => {
    navigation.navigate('Detail', data);
  };

  return (
    <LinearGradient colors={['#C3FFDF', '#CFCCFB', '#EFF9F2']}>
      <View style={styles.container}>
        <Text style={styles.textLabel}>What happened today?</Text>
        <Editor navigate={goToEntryDetail} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 18,
  },
  textLabel: {
    fontSize: 16,
    marginTop: 20,
    alignSelf:'center'
  },
});
