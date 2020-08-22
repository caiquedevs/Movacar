import React from 'react';
import { Main } from './styled';

import Menu from '../../components/Menu';
import DriversList from '../../components/DriversComponents/DriversList';
import FormDriver from '../../components/DriversComponents/FormDriver';
import FormTravel from '../../components/TravelsComponents/FormTravel';
import TravelsList from '../../components/TravelsComponents/TravelsList';

export default function DashBoardPage() {
  return (
    <Main>
      <Menu />
      <DriversList />
      <FormDriver />

      <TravelsList />
      <FormTravel />
    </Main>
  );
}
