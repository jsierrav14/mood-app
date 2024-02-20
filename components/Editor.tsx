import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useCreateAnalysis} from '../hooks/useCreateAnalyze';
import {useState} from 'react';
import {colors} from '../styles/colors';
import {LoadingIndicator} from '../UI/LoadingIndicator';

export const Editor = () => {
  const [value, setValue] = useState('');
  const {mutate, isLoading} = useCreateAnalysis();

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
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: 'solid',
    borderColor: 'grey',
  },
  editor: {
    marginTop: 15,
    padding: 10,
    width: '100%',
    height: '60%',
  },
  button: {
    backgroundColor: colors.textColor,
    textAlign: 'center',
    marginTop: 10,
    justifyContent: 'center',
    padding: 5,
    borderRadius: 4,
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
