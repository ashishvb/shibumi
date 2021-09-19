import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {StyleSheet, View, ScrollView, SafeAreaView} from 'react-native';

interface Props {
  children: any;
  style?: StyleProp<ViewStyle>;
}

const DefaultView = (props: Props) => {
  return (
    <SafeAreaView style={[styles.main, props.style]}>
      <ScrollView>{props.children}</ScrollView>
    </SafeAreaView>
  );
};

export default DefaultView;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
