import React, {Fragment, useEffect, useState} from 'react';

import {StyleSheet, View, Image, FlatList} from 'react-native';
import Button from './component/Button';
import {
  HP1,
  HP20,
  WP1,
  WP10,
  WP100,
  WP2,
  WP3,
  WP4,
  WP5,
  WP50,
  WP55,
  WP80,
  WP90,
  WP92,
} from './component/Size';
import {dumy} from './data/dummy';

export default function Home() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dumy);
  }, []);
  useEffect;
  const onPressResetAll = () => {
    const _fields = [...data];
    _fields.map(item => {
      (item.value === item.value) === 0;

      item.value = 0;
      return _fields;
    });
    setData(_fields);
  };
  const onPressDisLikeAll = () => {
    const _fields = [...data];
    _fields.map(item => {
      item.value = item.value - 1;
    });
    setData(_fields);
  };
  const onPressLikeAll = () => {
    const _fields = [...data];
    _fields.map(item => {
      item.value = item.value + 1;
    });
    setData(_fields);
  };
  const onPressBottomDisLike = id => {
    const _fields = [...data];
    _fields.map(item => {
      if (id.id === item.id) {
        item.value = item.value - 1;
      }
    });
    setData(_fields);
  };

  const onPressBottomLike = id => {
    const _fields = [...data];
    _fields.map(item => {
      if (id.id === item.id) {
        item.value = item.value + 1;
      }
    });
    setData(_fields);
  };
  console.log('data', data);
  const _renderItem = (item, index) => {
    return (
      <View style={styles.mainCardView} key={index}>
        <View>
          <View>
            <Image
              style={styles.sectionImage}
              source={{
                uri: `${item.url}`,
              }}
            />
          </View>
          <View style={styles.sectionButtonBottom}>
            <View style={styles.buttton100}>
              <Button
                type="outlined"
                text="Like"
                count={item.value < 0 ? 0 : item.value}
              />
            </View>

            <Button
              text="Like"
              type="blue"
              bordered
              onPress={() => onPressBottomLike(item)}
            />
            <Button
              text="Dislike"
              type="red"
              onPress={() => onPressBottomDisLike(item)}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <Fragment>
      <View style={styles.sectionBackground}>
        <View style={styles.sectionButtonTop}>
          <View style={styles.buttonLikeTop}>
            <Button text="Like All" type="blue" onPress={onPressLikeAll} />
          </View>
          <View style={styles.buttonRisetTop}>
            <Button text="Riset All" type="" onPress={onPressResetAll} />
          </View>
          <View style={styles.buttonDislikeTop}>
            <Button text="Dislike All" type="red" onPress={onPressDisLikeAll} />
          </View>
        </View>

        <FlatList
          onEndReachedThreshold={0.1}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => _renderItem(item, index)}
        />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  sectionBackground: {
    backgroundColor: '#eeeee4',
  },
  buttonLikeTop: {},
  buttonDislikeTop: {},
  buttonRisetTop: {
    marginLeft: WP5,
    marginRight: WP5,
  },
  buttton100: {
    marginRight: WP4,
  },
  sectionButtonTop: {
    flexDirection: 'row',
    marginHorizontal: WP1,
  },
  sectionButtonBottom: {
    flexDirection: 'row',
    marginTop: HP1,
    marginHorizontal: WP1,
  },
  sectionImage: {
    width: WP92,
    height: HP20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: 'white',
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainCardView: {
    height: WP55,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    marginTop: 6,
    marginBottom: 6,
    marginHorizontal: WP4,
  },
});
