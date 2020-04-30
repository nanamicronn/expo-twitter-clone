import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View, Icon, Switch } from 'native-base';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

type Props = DrawerContentComponentProps<DrawerContentOptions>;

const DrawerContent = (props: Props) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <View style={styles.profileIcon}>
            <Image
              source={require('../assets/profile.jpg')}
              style={styles.profileIconImg}
            />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.name}>みくろん</Text>
            <Text style={styles.id}>@nanamicronn</Text>
          </View>
          <View style={styles.followInfo}>
            <View style={styles.follow}>
              <Text style={styles.followNumber}>245</Text>
              <Text style={styles.followWord}>フォロー中</Text>
            </View>
            <View style={styles.follower}>
              <Text style={styles.followNumber}>265</Text>
              <Text style={styles.followWord}>フォロワー</Text>
            </View>
          </View>
          <View style={styles.drawerSection}>
            <DrawerItem
              icon={() => (
                <Icon type="Feather" name="user" style={styles.icon} />
              )}
              label={() => <Text style={styles.labelText}>プロフィール</Text>}
              onPress={() => {}}
            />
            <DrawerItem
              icon={() => (
                <Icon
                  type="Feather"
                  name="message-circle"
                  style={styles.icon}
                />
              )}
              label={() => <Text style={styles.labelText}>トピック</Text>}
              onPress={() => {}}
            />
            <DrawerItem
              icon={() => (
                <Icon type="Feather" name="list" style={styles.icon} />
              )}
              label={() => <Text style={styles.labelText}>リスト</Text>}
              onPress={() => {}}
            />
            <DrawerItem
              icon={() => (
                <Icon type="Feather" name="bookmark" style={styles.icon} />
              )}
              label={() => <Text style={styles.labelText}>ブックマーク</Text>}
              onPress={() => {}}
            />
            <DrawerItem
              icon={() => (
                <Icon type="Feather" name="zap" style={styles.icon} />
              )}
              label={() => <Text style={styles.labelText}>モーメント</Text>}
              onPress={() => {}}
            />
            <DrawerItem
              icon={() => (
                <Icon type="Feather" name="pie-chart" style={styles.icon} />
              )}
              label={() => (
                <View style={styles.switch}>
                  <Text style={styles.switchText}>データセーバー</Text>
                  <Switch value />
                </View>
              )}
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: 'red',
  },
  userInfoSection: {
    flex: 1,
  },
  profileIcon: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  profileIconImg: {
    height: 38,
    width: 38,
    borderRadius: 38 / 2,
  },
  userInfo: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  id: {
    fontSize: 15,
  },
  followInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  follow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  follower: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  followNumber: {
    fontSize: 15,
    fontWeight: '700',
  },
  followWord: {
    fontSize: 15,
    marginRight: 20,
  },
  icon: {
    fontSize: 17,
  },
  labelText: {
    fontSize: 14,
    marginLeft: -18,
  },
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    marginVertical: 4,
  },
  switchText: {
    fontSize: 14,
    marginLeft: -18,
  },
});
