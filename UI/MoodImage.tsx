import {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';

const displayImage = (mood:string)=>{
    if(mood == 'happy'){
      return  require('../assets/icons/shy.png')
    }

    if(mood == 'neutral'){
        return  require('../assets/icons/smile.png')
    }

    if(mood == 'sad'){
        return  require('../assets/icons/sad.png')
    }

}
export const MoodImage: FC<{mood: string}> = ({mood}) => {
  return (
    <View style={styles.containerImage}>
      <Image style={styles.image} source={displayImage(mood)} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    width: 60,
    height: 60,

  },
  image:{
    width: 60,
    height: 60
  }
});
