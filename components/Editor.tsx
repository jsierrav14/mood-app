import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useCreateAnalysis} from '../hooks/useCreateAnalyze';
import {FC, useEffect, useState} from 'react';
import {colors} from '../styles/colors';
import {LoadingIndicator} from '../UI/LoadingIndicator';

export const Editor: FC<{navigate: (data: any) => void}> = ({navigate}) => {
  const [value, setValue] = useState('');
  const {mutate, isLoading, isSuccess, data: details} = useCreateAnalysis();

  useEffect(() => {
    if (isSuccess) {
      navigate(details.data);
    }
  }, [isSuccess]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <View>
      <View style={styles.containerEditor}>
        <TextInput
          multiline={true}
          numberOfLines={15}
          value={value}
          onChangeText={text => setValue(text)}
          placeholder="Type your feelings here"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => mutate(value)}>
        <Text style={styles.textButton}>Track</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerEditor: {
    width: '100%',
    padding: 10,
    height: '70%',
    marginTop: 20,
    borderRadius: 15,
    borderStyle: 'solid',
    borderColor: 'grey',
    backgroundColor: 'white',
  },
  editor: {
    marginTop: 15,
    padding: 10,
    width: '100%',
    height: '60%',
  },
  button: {
    backgroundColor: colors.buttonColor,
    textAlign: 'center',
    marginTop: 15,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
