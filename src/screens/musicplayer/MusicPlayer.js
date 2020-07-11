import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
  FlatList,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import Icon from '../../components/Icon';
import globalStyles from '../../config/globalStyles';
import colors from '../../config/colors';

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.header}>
          <View style={globalStyles.flexCenter}>
            <Text style={styles.logoText}>LOGO</Text>
          </View>
          <View style={styles.headerRound}></View>
        </View>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>
            Music player
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default MusicPlayer;
