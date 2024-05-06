import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, deviceWidthRatio} from '../../utils/theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {Text, Image} from '@rneui/themed';

export type CardProps = {
  id: number;
  name: string;
  photoUrl: string;
  distance_mi?: string;
  region_name?: string;
  full_width?: boolean;
  navigation?: any;
};

const CampgroundCard: React.FC<CardProps> = ({
  id,
  name,
  photoUrl,
  distance_mi,
  region_name,
  full_width,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('CampgroundDetails', {
          name: name,
          campgroundId: id,
        })
      }>
      <View
        style={{
          ...styles.card,
          ...{width: full_width ? deviceWidthRatio(1) : deviceWidthRatio(0.85)},
        }}>
        <Image
          source={{
            uri: photoUrl
              ? photoUrl
              : 'https://placehold.co/600x400/orange/white',
          }}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={styles.textContainer}>
          <Text numberOfLines={2} style={styles.title}>
            {name}
          </Text>
          {distance_mi && <Text>{distance_mi} miles away</Text>}
          {region_name && <Text>{region_name}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: deviceWidthRatio(0.5),
  },
  textContainer: {
    justifyContent: 'center',
    padding: 12,
  },
  title: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    color: colors.dirtOrange,
    marginBottom: 4,
  },
});

export default CampgroundCard;
