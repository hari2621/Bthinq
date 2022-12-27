import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  BACKGROUND_COLORS, COLOR, DEMO_IMAGE, HOME_SECTION_HEADER, STYLE
} from '../../Utility/Constants';
import Head from './Header';

const ListItem = ({ item }) => { 
  return (
    <View style={styles.container} >
      <View style={styles.item}>
        <Image
          source={{
            uri: item.uri,
          }}
          style={styles.itemPhoto}
          resizeMode={STYLE.RECOVERSIZE_MODE}
        />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </View>
  );
};

export default function Home() {
  return (
    <View style={styles.container}>
      <Head />
        <StatusBar
          translucent
          backgroundColor={BACKGROUND_COLORS.WHITE}
          barStyle={COLOR.DARK_CONTENT} />
        <SafeAreaView style={{ flex: 1 }}>
          <SectionList
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            sections={SECTIONS}
            renderSectionHeader={({ section }) => (
              <>
                <Text style={styles.sectionHeader}>{section.title}</Text>
                {section.horizontal ? (
                  <FlatList
                    horizontal
                    data={section.data}
                    renderItem={({ item }) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                  />
                ) : null}
              </>
            )}
            renderItem={({ item, section }) => {
              if (section.horizontal) {
                return null;
              }
              return <ListItem item={item} />;
            }}
          />
        </SafeAreaView>

    </View>
  );
};
const SECTIONS = [
  {
    title: HOME_SECTION_HEADER.ENGAGEMENT,
    horizontal: true,
    data: [
      {
        key: '1',
        uri: DEMO_IMAGE.ENGAGEMENT_IMAGE1,
      },
      {
        key: '2',
        uri: DEMO_IMAGE.ENGAGEMENT_IMAGE2,
      },
      {
        key: '3',
        uri: DEMO_IMAGE.ENGAGEMENT_IMAGE3,
      },
    ],
  },
  {
    title: HOME_SECTION_HEADER.SANGEET,
    horizontal: true,
    data: [
      {
        key: '1',
        uri: DEMO_IMAGE.SANGEET_IMAGE1,
      },
      {
        key: '2',
        uri: DEMO_IMAGE.SANGEET_IMAGE2,
      },
      {
        key: '3',
        uri: DEMO_IMAGE.SANGEET_IMAGE3,
      },
    ],
  },
  {
    title: HOME_SECTION_HEADER.HALDI,
    horizontal: true,
    data: [
      {
        key: '1',
        uri: DEMO_IMAGE.HALDI_IMAGE1,
      },
      {
        key: '2',
        uri: DEMO_IMAGE.HALDI_IMAGE2,
      },
      {
        key: '3',
        uri: DEMO_IMAGE.HALDI_IMAGE3,
      },
    ],
  },
  {
    title: HOME_SECTION_HEADER.MEHANDI,
    horizontal: true,
    data: [
      {
        key: '1',
        uri: DEMO_IMAGE.MEHANDI_IMAGE1,
      },
      {
        key: '2',
        uri: DEMO_IMAGE.MEHANDI_IMAGE2,
      },
      {
        key: '3',
        uri: DEMO_IMAGE.MEHANDI_IMAGE3,
      },
    ],
  },
  {
    title: HOME_SECTION_HEADER.WEDDING,
    horizontal: true,
    data: [
      {
        key: '1',
        uri: DEMO_IMAGE.WEDDING_IMAGE1,
      },
      {
        key: '2',
        uri: DEMO_IMAGE.WEDDING_IMAGE2,
      },
      {
        key: '3',
        uri: DEMO_IMAGE.WEDDING_IMAGE3,
      },
    ],
  },
  {
    title: HOME_SECTION_HEADER.OTHERS,
    horizontal: true,
    data: [
      {
        key: '1',
        text: HOME_SECTION_HEADER.FOOD,
        uri: DEMO_IMAGE.OTHERS1,
      },
      {
        key: '2',
        text: HOME_SECTION_HEADER.PHOTOGRAPHY,
        uri: DEMO_IMAGE.OTHERS2,
      },
    ],
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundimage: {
    flex: 1,
    justifyContent: 'center',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 20,
    color: COLOR.BLACK,
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 300,
    height: 300,
    borderRadius: 10
  },
  itemText: {
    color: COLOR.ORANGE,
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold'
  },
});