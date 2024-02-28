import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import RoutesProps from '../types/RoutesProps';
import {colors} from '../styles/colors';
import {displayImage} from '../utils/utilities';
import LinearGradient from 'react-native-linear-gradient';
import { useGetAnalysisById } from '../hooks/useGetAnalysis';
import { LoadingIndicator } from '../UI/LoadingIndicator';

type Props = NativeStackScreenProps<RoutesProps, 'Detail'>;

export const Details: FC<Props> = ({route}) => {
  const params = route.params;
  console.log("🚀 ~ params:", params)
  const {data : details, refetch} = useGetAnalysisById(params.id);
  console.log("🚀 ~ details:", details?.data)


  if(!details){
    <LoadingIndicator />
  }

  return (
    <LinearGradient
      colors={['#C3FFDF', '#CFCCFB', '#EFF9F2']}
      style={style.container}>
      <View>
        <View style={style.viewImage}>
          <Image
            style={style.image}
            source={displayImage(
              details?.data.mood as string,
              details?.data.sentimentScore as number,
              details?.data.negative as boolean,
            )}
          />
        </View>
        <View style={style.view}>
          <Text style={style.textSubject}>
            {details?.data.subject}
          </Text>
        </View>
        <View style={style.view}>
          <Text style={style.textSummary}>{details?.data.summary}</Text>
        </View>
        <View style={style.view}>
          <Text>Tip :</Text><Text style={style.textSummary}>{details?.data.tip}</Text>
        </View>
      </View>
    </LinearGradient>
  );
  
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    padding: 14,
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  viewImage: {
    flexDirection: 'row',
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  view: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    marginTop: 5,
    justifyContent: 'center',
  },
  textSubject: {
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  textSummary: {
    fontSize: 14,
    textAlign: 'justify',
  },
});
