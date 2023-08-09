import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';

const OrderingSelection = ({ onPress }) => {
  const [visible, setVisible] = React.useState(false);
  const [order, setOrder] = React.useState('Latest repositories'); 

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>{order}</Button>}>
          <Menu.Item 
            onPress={() => {
                onPress({orderDirection: 'DESC', orderBy: 'CREATED_AT'})
                setOrder('Latest repositories');
                openMenu(false); 
            }} 
            title='Latest repositories' /> 
          <Divider />
          <Menu.Item 
            onPress={() => {
                onPress({orderDirection: 'DESC', orderBy: 'RATING_AVERAGE'}); 
                setOrder('Higest rated repositories'); 
                openMenu(false); 
            }} 
            title='Higest rated repositories' />
          <Divider />
          <Menu.Item 
            onPress={() => {
                onPress({orderDirection: 'ASC', orderBy: 'RATING_AVERAGE'}); 
                setOrder('Lowest rated repositories'); 
                openMenu(false); 
            }} 
            title='Lowest rated repositories' />
        </Menu>
      </View>
    </PaperProvider>
  );
};

export default OrderingSelection;