import {FC, useEffect, useState} from 'react';
import { Image, Text, TouchableOpacity} from 'react-native';
import {StyleSheet, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../styles/colors';
import {useLogin} from '../hooks/UseAuth';
import {User} from '../types/User';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RoutesProps from '../types/RoutesProps';
import { LoadingIndicator } from '../UI/LoadingIndicator';

type Props = NativeStackScreenProps<RoutesProps, 'Login'>;

export const Login: FC<Props> = ({navigation}) => {
  const [user, setUser] = useState<User>({email: '', password: ''});
  const {mutate, isLoading, isSuccess, data: userData} = useLogin();
  console.log('🚀 ~ userData:', userData);
  console.log('🚀 ~ isSuccess:', isSuccess);

  const onChangeValue = (name: string, value: string) => {
    setUser({...user, [name]: value});
  };

  const loginAction = () => {
    mutate(user);
  };

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate('Home');
    }
  }, [isSuccess]);

  return (
    <LinearGradient
      colors={['#C3FFDF', '#CFCCFB', '#EFF9F2']}
      style={style.container}>
      <View style={style.containerImage}>
        <Image
          style={style.image}
          source={require('../assets/icons/emotional-intelligence.png')}
        />
      </View>
      <View style={style.containerView}>
        <View style={style.viewInput}>
          <TextInput
            style={style.input}
            placeholder="Email"
            onChangeText={text => onChangeValue('email', text)}
          />
        </View>
        <View style={style.viewInput}>
          <TextInput
            style={style.input}
            placeholder="Contraseña"
            onChangeText={text => onChangeValue('password', text)}
          />
        </View>
        <TouchableOpacity style={style.button} onPress={loginAction}>
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <Text style={style.textButton}>Login</Text>
          )}
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    padding: 15,
  },
  containerImage: {
    width: '100%',
    alignContent: 'center',
    marginTop: '35%',
  },
  image: {
    width: 180,
    height: 220,
    alignSelf: 'center',
  },
  containerView: {
    padding: 10,
  },
  viewInput: {
    width: '100%',
    borderStyle: 'solid',
    borderColor: 'grey',
    backgroundColor: 'white',
    height: 40,
    marginTop: 20,
    borderRadius: 15,
  },
  input: {
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: colors.buttonColor,
    textAlign: 'center',
    marginTop: 20,
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
