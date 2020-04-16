//Na pagina da expo.
//Rodar: yarn add react-navigation
// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
import { createAppContainer } from 'react-navigation';
import { createStackNavigation } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigation({
        Main:{
            screen: Main,
            navigationOption:{
                title: 'DevRadar'
            },
        },
        Profile:{
            screen: Profile,
            navigationOptions:{
                title: 'Perfil no GitHub'
            }
        },
    },{
        defaultNavigationOptions:{
            headerTintColor: '#FFF',
            headerStyle:{
                backgroundColor: '#7D40A7'
            },
        },
    })
);

export default Routes;