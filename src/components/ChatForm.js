import * as React from 'react';
import {useState} from 'react';

import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './ChatForm.componenent.style';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import LinearGradient from 'react-native-linear-gradient';

const ChatForm = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Agent Rose',
      text: 'Ok. Please kindly take the picture of the card front and back view...',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Agent Daniel',
      text: `Ok. Please kindly take the picture of the card front and back view${'...'}`,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Agent Rue',
      text: 'Ok. Please kindly take the picture of the card front and back view...',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d71',
      name: 'Agent Amaka',
      text: 'Ok. Please kindly take the picture of the card front and back view...',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d70',
      name: 'Agent Shawn',
      text: 'Ok. Please kindly take the picture of the card front and back view...',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d744124',
      name: 'Agent Shawn',
      text: 'Ok. Please kindly take the picture of the card front and back view',
    },
  ];
  const [listData, setListData] = useState(DATA);
  let row = [];
  let prevOpenedRow;

  const renderItem = ({item, index}, onClick) => {
    const closeRow = index => {
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

    const renderRightActions = (progress, dragX, onClick) => {
      return (
        <LinearGradient
          style={styles.rightButton}
          locations={[0, 0.6, 1]}
          colors={['white', `#ff1493`, `#8a2be2`]}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <TouchableOpacity onPress={onClick}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require('../../Images/delete.png')}
              />
            </View>
          </TouchableOpacity>
        </LinearGradient>
      );
    };

    return (
      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, onClick)
        }
        onSwipeableOpen={() => closeRow(index)}
        ref={ref => (row[index] = ref)}
        rightOpenValue={-100}>
        <View style={styles.swipeContainer}>
          <View style={styles.fixChats}>
            <View style={styles.profile}>
              <Image
                style={styles.image}
                source={require('../../Images/chatImg.png')}
              />
            </View>
            <View style={styles.fixNameText}>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.messageView}>
                <Text style={styles.text}>{item.text}</Text>
              </View>
            </View>
          </View>
        </View>
      </Swipeable>
    );
  };

  const deleteItem = ({item, index}) => {
    let a = listData;
    a.splice(index, 1);
    setListData([...a]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        renderItem={v =>
          renderItem(v, () => {
            deleteItem(v);
          })
        }
        keyExtractor={item => item.id}></FlatList>
    </View>
  );
};

export default ChatForm;
