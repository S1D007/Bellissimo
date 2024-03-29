import {
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {colors} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Feather';
import TextMD from '../../common/Text/TextMD';
import EIcon from 'react-native-vector-icons/Entypo';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';
import ButtonSM from '../../common/Button/ButtonSM';
import ProductCard from './components/ProductCard';
import TextLG from '../../common/Text/TextLG';
import ProductCard2 from './components/ProductCard2';
import ProductCard3 from './components/ProductCard3';
import {FlatList} from 'react-native';
import Header from './components/Header';
import Category from './components/Category';
import ShowcaseCard1 from './components/ShowcaseCard1';
import AdSmall from './components/AdSmall';
import ShowcaseCard2 from './components/ShowcaseCard2';
import ShowcaseCard3 from './components/ShowcaseCard3';
import Carousel from './components/Carousel';
import {useHome} from '../../zustand/useHome';
import ShowcaseCard4 from './components/ShowcaseCard4';

const Main = () => {
  const width = Dimensions.get('window').width;
  const {products} = useHome();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <Header />
      <FlatList
        contentContainerStyle={{
          width: '100%',
          padding: 10,
          paddingBottom: 150,
          // justifyContent: 'flex-start',
          // alignItems: 'flex-start',
        }}
        ListHeaderComponentStyle={{
          width: '100%',
          // flex: 1,
        }}
        columnWrapperStyle={{
          width: '100%',
          // justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
        }}
        ListHeaderComponent={() => {
          return (
            <>
              <Carousel />
              <Category />
              <ShowcaseCard3
                title="Most Bought Products"
                subtitle="Customers are loving these products"
                data={products}
                titleImage="https://cdn3d.iconscout.com/3d/premium/thumb/fire-6400085-5285088.png?f=png"
              />
              <ShowcaseCard1
                background="https://gkh-images.s3.ap-south-1.amazonaws.com/2.jpg"
                title="Featured Products"
                subtitle="Top Picks: Unveiling Our Finest Selections"
                data={products}
                titleImage="https://cdn3d.iconscout.com/3d/premium/thumb/shopping-sale-10241364-8330401.png"
              />
              <ShowcaseCard4
                background="https://gkh-images.s3.ap-south-1.amazonaws.com/2.jpg"
                title="Newly Launched"
                subtitle="Explore all of the freshly added items"
                data={Array.from({length: 9})}
                titleImage="https://cdn3d.iconscout.com/3d/premium/thumb/shopping-sale-10241364-8330401.png"
              />
              <AdSmall />
              <ShowcaseCard2
                title="Newly added Products"
                subtitle="Check out our latest additions to the store"
                data={products}
                titleImage="https://cdnl.iconscout.com/lottie/premium/thumb/new-7037402-5728742.gif"
              />
              <ShowcaseCard2
                title="Personal Care Products"
                subtitle="Shop from our wide range of personal care products"
                data={products}
                titleImage="https://cdn3d.iconscout.com/3d/premium/thumb/hairdryer-8909422-7250484.png?f=png"
              />
              <ShowcaseCard1
                title="Most Bought Products"
                subtitle="Customers are loving these products"
                data={products}
                titleImage="https://cdn3d.iconscout.com/3d/premium/thumb/fire-6400085-5285088.png?f=png"
                background="https://gkh-images.s3.ap-south-1.amazonaws.com/4.jpg"
              />
              <Text
                style={{
                  fontSize: 22,
                  color: colors.textColor,
                  marginTop: 20,
                  fontFamily: 'Gilroy-Black',
                }}>
                Speically for You
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: colors.textColor,
                  marginBottom: 10,
                  fontFamily: 'Gilroy-Semibold',
                }}>
                Shop from Our Curated List of Products
              </Text>
            </>
          );
        }}
        renderItem={({item}) => {
          return <ProductCard2 {...item} />;
        }}
        data={products}
        keyExtractor={(item, index) => `${index}`}
        numColumns={3}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: 80,
          backgroundColor: colors.primary,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          elevation: 50,
          paddingHorizontal: 5,
          // gap: 10,
        }}>
        <Image
          source={{
            uri: 'https://cdnl.iconscout.com/lottie/premium/thumb/gift-4904681-4079146.gif',
          }}
          style={{
            width: 80,
            height: 80,
          }}
          resizeMode="cover"
        />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: colors.textColor,
              fontFamily: 'Gilroy-Black',
              textAlign: 'center',
            }}>
            Get Free T-shirt
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: colors.textColor,
              fontFamily: 'Gilroy-Semibold',
              textAlign: 'center',
            }}>
            On Orders Above ₹399
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: colors.textColor,
              fontFamily: 'Gilroy-Semibold',
              textAlign: 'center',
            }}>
            Add more to Avail
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
            }}>
            <Text
              style={{
                color: '#0035C5',
                fontFamily: 'Gilroy-Bold',
                fontSize: 14,
              }}>
              See all Offers
            </Text>
            <AntDIcon
              name="arrowright"
              style={{
                fontSize: 14,
                color: '#0035C5',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Main;
