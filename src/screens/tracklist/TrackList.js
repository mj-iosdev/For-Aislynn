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
import images from '../../config/images';

let trackList = [
  {
    Name: 'Adam Denisov',
    Description: 'A brief track description',
    Duration: '3:12',
  },
  {
    Name: 'Aneta Skodova',
    Description: 'A brief track description',
    Duration: '1:51',
  },
  {
    Name: 'Bernd Prefferberg',
    Description: 'A brief track description',
    Duration: '1:15',
  },
  {
    Name: 'Freddy Denisov',
    Description: 'A brief track description',
    Duration: '4:08',
  },
  {
    Name: 'Harmen Porter',
    Description: 'A brief track description',
    Duration: '1:80',
  },
  {
    Name: 'Monika Derfflinger',
    Description: 'A brief track description',
    Duration: '0:95',
  },
  {
    Name: 'Uche Denisov',
    Description: 'A brief track description',
    Duration: '1:14',
  },
  {
    Name: 'Zlkoranaumma Nkechi',
    Description: 'A brief track description',
    Duration: '2:08',
  },
];

class TrackList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  trackListItem = ({item, index}) => {
    return (
      <View style={styles.renderItem}>
        <View style={{flex: 0.2}}>
          <Text style={styles.indexText}>{index + 1}</Text>
        </View>
        <View>
          <Text style={styles.nameText}>{item.Name}</Text>
          <Text style={styles.trackDes}>{item.Description}</Text>
        </View>
        <View style={styles.durationContainer}>
          <Text style={styles.duretionText}>{item.Duration}</Text>
        </View>
        <View style={styles.playcontrolle}>
          <TouchableOpacity onPress={() => {}}>
            <Icon
              type={'AntDesign'}
              name={index == 2 ? 'pausecircle' : 'play'}
              size={22}
              color={colors.whiteColor}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={globalStyles.flexCenter}>
            <Text style={styles.logoText}>LOGO</Text>
          </View>
          <View style={styles.headerRound}></View>
        </View>
        <View style={styles.colorContainer}>
          <View
            style={{
              height: 15,
              width: '100%',
              backgroundColor: colors.whiteColor,
            }}
          />
          <Image
            source={{
              uri:
                'https://jyllands-posten.dk/pictures/migrated/article3227010.ece/ALTERNATES/f_a-s/OK%209_2_2008%20Danske%20Bank',
            }}
            style={styles.backImage}
          />
          <View style={styles.trackContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{position: 'absolute'}}>
                <Image source={images.triangle} style={styles.triangleImage} />
              </View>
              <View style={styles.ratingContainer}>
                <View>
                  <Image
                    source={{
                      uri:
                        'https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/256x256/plain/piggy_bank.png',
                    }}
                    style={styles.pigImage}
                  />
                </View>
                <View style={[globalStyles.row, {marginTop: 10}]}>
                  {[...Array(5)].map((item, index) => {
                    return (
                      <Icon
                        type={'FontAwesome'}
                        name={index == 4 ? 'star-o' : 'star'}
                        size={10}
                        color={colors.whiteColor}
                        style={{marginHorizontal: 3}}
                      />
                    );
                  })}
                </View>
              </View>
              <View style={{marginHorizontal: 15}}>
                <Text style={styles.titleText}>TITLE</Text>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Image
                    source={{
                      uri:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfvikWNhJZL4m8QiWG-UakGwLFg10yltGfnQ&usqp=CAU',
                    }}
                    style={styles.avatarImage}
                  />
                  <Text style={styles.autherText}>by Robert Kiyosaki</Text>
                  <Text style={styles.descriptionText}>
                    Kiyosaki's seminars in the United States and Canada are
                    conducted in collaboration with a company called Whitney
                    Information Network and are contracted out to local
                    companies as franchisees in other countries.However.
                  </Text>
                </View>
                <TouchableOpacity style={styles.listenButton}>
                  <Text style={styles.listenButtonText}>LISTEN</Text>
                </TouchableOpacity>
                <View>
                  <Text style={styles.trackListText}>TRACK LIST:</Text>
                  <View style={styles.listContainer}>
                    <FlatList
                      data={trackList}
                      renderItem={this.trackListItem}
                      keyExtractor={(item, index) => index.toString()}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default TrackList;
