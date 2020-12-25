import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useAuth } from '../../providers/AuthProvider';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#6200ee',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: '#eeeeee',
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

const SignIn: React.FC = () => {

  const {signIn} = useAuth();

  async function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignIn} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignIn;