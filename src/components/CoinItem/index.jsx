import React from "react";
import { View, Image, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

import styles from './style';

const CoinItem = ({currency}) => {

    const { 
        name, 
        symbol, 
        image, 
        market_cap_rank, 
        current_price,
        price_change_percentage_24h,
        market_cap
     } = currency;
    
  return (
    <View style={styles.coinContainer}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.textContainer}>
          <View style={styles.coinRankContainer}>
            <Text style={styles.coinRank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            style={styles.expoVectorDownArrow}
            name="caretdown"
            size={15}
            color="#fff"
          />
          <Text style={styles.text}>{price_change_percentage_24h.toFixed(2)}%</Text>
        </View>
      </View>
      <View style={styles.marginCapContainer}>
        <Text style={styles.title}>{current_price}</Text>
        <Text style={styles.text}>MCap {market_cap}</Text>
      </View>
    </View>
  );
};

export default CoinItem;
