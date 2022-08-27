import { Linking } from "react-native";
import SendIntentAndroid from "react-native-send-intent"
export const bottomrow1 = [
    {
      name: 'telegram',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/185/185977.png',
      onIconPress: () => {
        console.log('Telegram Is Click');
        Linking.openURL('https://telegram.me/i_am_haresh').catch(() => {
          console.log('Telegram Error');
        });
      },
    },
    {
      name: 'youtube',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/185/185983.png',
      onIconPress: () => {
        console.log('Youtube Is Click');
        Linking.openURL('https://www.youtube.com/c/CodeDiggers').catch(() => {
          console.log('Youtube Error');
        });
      },
    },
    {
      name: 'qa',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/1484/1484822.png',
      onIconPress: () => {
        console.log('Website Is Click');
        Linking.openURL('http://codediggers.gq').catch(() => {
          console.log('Website Error');
        });
      },
    },
    {
      name: 'information',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/1028/1028917.png',
      onIconPress: () => {
        console.log('Website Is Click');
        Linking.openURL('http://codediggers.gq').catch(() => {
          console.log('Website Error');
        });
      },
    },
  ];
  export const bottomrow2 = [
    {
      name: 'share',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/469/469335.png',
      onIconPress: () => {
        console.log('Share Is Click');

        SendIntentAndroid.sendText(
          {
            subject: 'Please share this app',
            text: 'Hello I Am Haresh Prajapati Subscribe Our Channel On Youtube :- https://www.youtube.com/c/CodeDiggers',
          },
          'Share Story',
        );
      },
    },
    {
      name: 'internet',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/457/457654.png',
      onIconPress: () => {
        console.log('Website Is Click');

        Linking.openURL('http://mrhp.gq').catch(() => {
          console.log('Website Error');
        });
      },
    },
    {
      name: 'happyface',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051270.png',
      onIconPress: () => {
        console.log('Website Is Click');
      },
    },
    {
      name: 'history',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/4763/4763081.png',
      onIconPress: () => {
        // handleNavigation('History');
      },
    },
  ];

 export const bottomOptionList = [
    {name: 'Bollywood', navigationName: 'Bollywood'},
    {name: 'Hollywood', navigationName: 'Hollywood'},
    {name: 'Series', navigationName: 'Series'},
    {name: 'LiveTV', navigationName: 'LiveTV'},
  ];