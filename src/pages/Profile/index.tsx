import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Switch, View } from 'react-native';
import {useAuth} from '../../providers/AuthProvider';
import { Container, Title, ButtonNew } from '../../styles';

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state:any) => state.user);
  const {signOut} = useAuth();

  async function handleSignOut() {
    signOut();
  }

  function handleTheme() {
    dispatch({ type: "TOGGLE_THEME", darkMode: !user.settings.darkMode });
  }

  return (
    <Container>
      <Title>{user?.name}</Title>
      <View style={styles.view}>
        <Title>Dark Mode</Title>
        <Switch
          trackColor={{ false: "#767577", true: "#767577" }}
          thumbColor={user.settings.darkMode ? "#00e640" : "#f4f3f4"}
          ios_backgroundColor="#767577"
          onValueChange={handleTheme}
          value={user.settings.darkMode}
        />
      </View>
      <ButtonNew onPress={handleSignOut} >Sign Out</ButtonNew>
    </Container>
  );
}

export default Profile;