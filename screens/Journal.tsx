import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Card} from '../UI/Card';
import {colors} from '../styles/colors';
import {useGetAnalysis} from '../hooks/useGetAnalysis';
import {useEffect} from 'react';
export const Journal = () => {
  const {data, refetch} = useGetAnalysis();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <View style={style.container}>
      <FlatList
        data={data?.data}
        renderItem={({item}) => (
          <Card
            mood={item.mood}
            subject={item.summary}
            score={item.sentimentScore}
            negative={item.negative}
            color={item.color}
          />
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 15,
    backgroundColor: colors.mainBackground,
  },
});
