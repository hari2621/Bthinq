import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  ImageBackground,
  StatusBar
} from 'react-native';
import Head from './Header';
const ListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      
    <View style={styles.item}>
        <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
    </View>
  );
};
export default  () => {
  return (
    <View style={styles.container}>
      <Head/>
      <ImageBackground source={require("../../../Image/14.png")} resizeMode="cover" style={styles.image}>
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
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
      </ImageBackground>
</View>
  );
};
const SECTIONS = [
  {
    title: ' For Engagement Ceremony Decorations',
    horizontal: true,
    data: [
      {
        key: '1',
        uri: 'https://styl-inc.com/wp-content/uploads/2022/04/Untitled-design-3.png',
      },
      {
        key: '2',
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56x1Qn31pHNTO4hrCBpDMvbrhFs-F_yQgyA&usqp=CAU',
      },
      {
        key: '3',
        uri: 'https://images.pexels.com/photos/169203/pexels-photo-169203.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-169203.jpg&fm=jpg',
      },
    ],
  },
  {
    title: ' For Sangeet Ceremony Decorations',
    horizontal: true,
    data: [
      {
        key: '1',
        uri: 'http://new.dontworryevents.com/public/uploads/all/jNdHAJPvPGGm6c66RnuuyzYIG3Y41xNA9QXhUmq3.jpeg',
      },
      {
        key: '2',
        uri: 'http://new.dontworryevents.com/public/uploads/all/twUkCzyRcEARx3I57hOdphTglg19Q8FmxVwFZ6gT.jpeg',
      },
      {
        key: '3',
        uri: 'https://royalpepper.in/blog/wp-content/uploads/2021/01/Sangeet3-819x1024.jpg',
      },
    ],
  },
  {
    title: ' For Haldi Ceremony Decorations',
    horizontal: true,
    data: [
      {
        key: '1',
        uri: 'https://selectvenue.in/blog/wp-content/uploads/2021/01/haldi-decoration.4jpg.png',
      },
      {
        key: '2',
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEfFypK8yokfa1uc0mFxquvycxtYBP9YOCZTfy-sZDQM-cON6LknrEbbTx_nGJJBDohQ0&usqp=CAU',
      },
      {
        key: '3',
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRuwnwCcMxQdyAhKWybOT0ya0O_9NBjMlbAw&usqp=CAU',
      },
    ],
  },
  {
    title: ' For Mehandi Ceremony Decorations',
    horizontal: true,
    data: [
      {
        key: '1',
        uri: 'https://i.pinimg.com/564x/98/e9/d8/98e9d80c0b6ee58829441b0b0726ed20.jpg',
      },
        {
        key: '2',
        uri: 'https://1.bp.blogspot.com/-9vn9b497X2Y/YJhRpR0UJ0I/AAAAAAAAWqo/HuMrGXintz8hvzSr3CBeXq38G5Xh-t1iwCNcBGAsYHQ/s726/Homemade%2BMehndi%2BFunction%2BLatest%2BDecoration%2BIdeas%2Bat%2BHome%2B%25281%2529.jpg',
      },
      {
        key: '3',
        uri: 'https://images.shaadisaga.com/shaadisaga_production/photos/pictures/002/205/650/new_medium/ranipink_love.jpg?1608381003',
      },
    ],
  },
  {
    title: ' For Wedding Day Decorations',
    horizontal: true,
    data: [
      {
        key: '1',
        uri: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80',
      },
      {
        key: '2',
        uri: 'https://5.imimg.com/data5/ER/QI/MY-54210683/img-20180430-wa0001-500x500.jpg',
      },
      {
        key: '3',
        uri: 'https://www.7eventzz.com/blog/wp-content/uploads/2022/03/chennaieventsanddecors_270572097_3149245691983782_6146114254369164377_n-1024x878.jpg',
      },
    ],
  },
  {
    title: ' Others',
    horizontal: true,
    data: [
      {
        key: '1',
        text:'Food Items',
        uri: 'https://secureservercdn.net/45.40.150.54/ihr.09f.myftpupload.com/wp-content/uploads/2018/01/best-south-indian-food-wedding-lunch.jpg?time=1659995476',
      },
      {
        key: '2',
        text: 'Photography',
        uri: 'https://antphotography.in/wp-content/uploads/2019/08/Aditya-and-Chandani-fantastic-pre-wedding-photoshoot-in-Alibaug-and-Tamini-Ghat-Pune23.jpg',
      },
    ],
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    flex:1,
    justifyContent:'center',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 20,
    color: 'black',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 300,
    height: 300,
    borderRadius:10
  },
  itemText: {
    color: '#DF6229',
    marginTop: 5,
    fontSize:20,
    fontWeight:'bold'
  },
});