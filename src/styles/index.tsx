import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export const Container = (props:any) => {

  const style = useSelector((state:any) => state.style);
  const user = useSelector((state:any) => state.user);
  const theme = user.settings.darkMode ? 'darkMode' : 'lightMode';

  const styles = StyleSheet.create({
    container: { 
      flex: 1,
      backgroundColor: style[theme].background,
    }
  });

  return(
    <View style={{ ...styles.container, ...props.style }}>{props.children}</View>
  );
};

export const Title = (props:any) => {

  const style = useSelector((state:any) => state.style);
  const user = useSelector((state:any) => state.user);
  const theme = user.settings.darkMode ? 'darkMode' : 'lightMode';

  const styles = StyleSheet.create({
    text: { 
      color: style[theme].surfaceText,
    }
  });

  return(
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

export const ButtonNew = (props:any) => {

  const style = useSelector((state:any) => state.style);
  const user = useSelector((state:any) => state.user);
  const theme = user.settings.darkMode ? 'darkMode' : 'lightMode';

  const styles = StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      backgroundColor: style[theme].primary,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: style[theme].primaryText,
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });

  return(
    <TouchableOpacity onPress={props.onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export const Row = (props:any) => {

  const styles = StyleSheet.create({
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });

  return(
    <View style={{ ...styles.row, ...props.style }}>{props.children}</View>
  );
};

export const Panel = (props:any) => {

  const style = useSelector((state:any) => state.style);
  const user = useSelector((state:any) => state.user);
  const theme = user.settings.darkMode ? 'darkMode' : 'lightMode';

  const styles = StyleSheet.create({
    panel: {
      flex: 1,
      shadowColor: '#000',
      borderRadius: 8,
      margin: 8,
      backgroundColor: style[theme].surface
    }
  });

  return(
    <View style={{ ...styles.panel, ...props.style }}>{props.children}</View>
  );
};