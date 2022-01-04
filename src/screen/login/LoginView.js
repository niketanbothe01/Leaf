import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';
import React from 'react';
import {
  StyleSheet, Text, StatusBar, View, Image, TextInput, TouchableOpacity} from 'react-native';

const LoginView = ({navigation}) => {
  return (
    <View style={styles.sectionContainer}>
      <StatusBar style="auto" />
      <Image style={{ resizeMode: 'contain', height: '25%' }} source={require('../../../assets/image/NCI.png')} />
      <View style={{width:'100%'}}>
        <View style={{ margin: '10%', flexDirection: 'row', display: 'flex', borderRadius: 100, width: '80%', height: '3%'}}>
          <TextInput
            style={styles.input}
            placeholder='Username'
            
          />
        </View>
        <View style={{ margin: '10%', flexDirection: 'row', display: 'flex', borderRadius: 100, width: '80%', height: '8%' }}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', width: '87%' }}>
        <Text style={styles.forgot_button} onPress={() => alert('Sending rest link')}>Forgot Password?</Text>
      </View>
      <TouchableOpacity
        style={styles.button}>
        <Text style={{ fontSize: 18, color: '#061c6f', fontWeight: 'bold' }}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.buttonchange} >or</Text>
      <TouchableOpacity style={styles.button} onPress={() =>
        navigation.navigate('signUp')}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#061c6f' }}>SIGN UP</Text>
      </TouchableOpacity>
    </View>


  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    flex: 1,
    height: 45,
    width: 350,
    borderRadius: 10,
    padding: 5,
    borderWidth:0.7
  },
  button: {
    height: '6%',
    width: '25%',
    backgroundColor: '#B78f0c',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    elevation: 5
  },
  buttonchange: {
    height: '5%',
    fontSize: 20,
  },
  forgot_button: {
    height: 30,
  },

});

export default LoginView;
