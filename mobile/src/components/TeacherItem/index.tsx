import React from 'react';
import { View, Text, Image } from 'react-native';

import heartOutilineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          style={styles.avatar}
          source={{ uri: 'https://github.com/calebesg.png' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Calebe Guimarães</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Falar é fácil, me mostre o código
        {'\n'}{'\n'}
        Programar é uma arte que exige dedicação e muita paciência, é principalmente para os persistentes e não para os que são apenas Gênios.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/*<Image source={heartOutilineIcon} />*/}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
