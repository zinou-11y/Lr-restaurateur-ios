import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import ToastMessages from '../../../Components/ToastMessages';
import HeaderInfo from '../../Screens-2-Commandes/Details-Cmd--Screen--1/Components/header';
import RenderItemes from './Render_Itemes';
import { GetReservationsById } from '../../../Redux/Actions/Reservations/GetResrvation';
import { useDispatch, useSelector } from 'react-redux';
import { useReservation } from '../Reservation--Screen--1/Hooks/useReservation';

const DetailsReservation = ({route, navigation}) => {
  const {idReservation} = route.params;

  // const dispatch =useDispatch()

  const { configHead ,dispatch} = useReservation();
  const {loadingPost}= useSelector(state => state.postReservationsSlice);


  useEffect(() => {
    if(idReservation){
     GetReservationsById(dispatch, configHead, idReservation);
      
    }
  
  
  }, [idReservation,loadingPost])
  
  return (
    <View style={styles.container}>
        <StatusBar  backgroundColor={'transparent'}   barStyle='dark-content'/>
      <HeaderInfo navigation={navigation} />
        <RenderItemes navigation={navigation}/>
    </View>
  );
};

export default DetailsReservation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerId: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  TextId: {
    fontSize: 50,
    fontWeight: '700',
  },
  ContainerBodyTab: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ContainerBody: {},
  BoxOrders: {
    width: '100%',
    alignSelf: 'center',
    height: '40%',
    backgroundColor: '#fff',
    flex: 1,
  },
  BoxOrdersTab: {
    width: '60%',
    alignSelf: 'center',
    height: '40%',
    backgroundColor: '#fff',
    flex: 1,
  },
  BottomItems: {},
});
