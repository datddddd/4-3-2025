import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from './AuthContext';

export default function SignInScreen({ navigation }) {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (email && password) {
      signIn(email);
      navigation.navigate('Explorer');
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.label}>Email ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email here!"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password here!"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>For got password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or sign in with</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookButton}>
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.signUpText}>Not yet a member? <Text style={{ color: 'orange' }}>Sign Up</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 5 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20, borderRadius: 10, borderColor: '#ccc' },
  forgotPassword: { color: 'orange', textAlign: 'right', marginBottom: 20 },
  button: { backgroundColor: 'orange', padding: 15, borderRadius: 10, alignItems: 'center', marginBottom: 20 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  orText: { textAlign: 'center', marginVertical: 10 },
  socialButtons: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  googleButton: { padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 10, backgroundColor: '#fff', alignItems: 'center', width: 140 },
  googleText: { color: '#000', fontWeight: 'bold', textAlign: 'center' },
  facebookButton: { padding: 10, backgroundColor: '#4267B2', borderRadius: 10, alignItems: 'center', width: 140 },
  socialButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  signUpText: { textAlign: 'center', marginTop: 20 },
});