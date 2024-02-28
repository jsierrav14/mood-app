import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Card} from '../UI/Card';
import {colors} from '../styles/colors';
import {useGetAnalysis} from '../hooks/useGetAnalysis';
import {FC, useEffect} from 'react';
import RoutesProps from '../types/RoutesProps';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

type Props = NativeStackScreenProps<RoutesProps, 'Journal'>;

export const Journal: FC<Props> = ({navigation}) => {
  const {data, refetch} = useGetAnalysis(new Date().toLocaleDateString());
  console.log("🚀 ~ data:", data?.data)

  const goToEntryDetail = (data: any) => {
    navigation.navigate('Detail', data);
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <LinearGradient colors={['#C3FFDF', '#CFCCFB', '#EFF9F2']} style={style.container}>
      <View>
        <FlatList
          data={data?.data}
          renderItem={({item}) => <Card item={item} action={goToEntryDetail} />}
        />
      </View>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 15,
  },
});
