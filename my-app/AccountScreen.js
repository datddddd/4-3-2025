import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from './AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function AccountScreen() {
  const { user, signOut } = useAuth(); // Loại bỏ setUser
  const navigation = useNavigation();

  const handleSignOut = () => {
    signOut(); // Chỉ gọi signOut để đăng xuất
    navigation.navigate('Sign In');
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}></View>
      <Text style={styles.name}>{user ? user.email : 'Guest'}</Text>
      <Text style={styles.role}>Mobile developer</Text>
      <Text style={styles.description}>
        I have above 5 years of experience in native mobile apps development, now I am learning React Native
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', alignItems: 'center', padding: 20 },
  banner: { width: '100%', height: 150, backgroundColor: '#00aaff' },
  name: { fontSize: 24, fontWeight: 'bold', marginTop: 20 },
  role: { fontSize: 16, color: 'blue', marginVertical: 10 },
  description: { textAlign: 'center', color: 'gray', marginBottom: 30 },
  button: { backgroundColor: 'orange', padding: 10, borderRadius: 10 },
  buttonText: { color: 'white', fontWeight: 'bold' },
});