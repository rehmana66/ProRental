import * as React from 'react';
import { Button, View, Text } from 'react-native';

function Signup({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Dashboard')}
        />
      </View>
    );
  }


  export default Signup;