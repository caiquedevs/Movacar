import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionsTravels from '../../../store/modules/travels/actions';

import { Section } from './styled';
import emptyTravels from '../../../assets/emptyTravels.svg';
import FilterTravels from '../FilterTravels';
import ItemTravelsList from '../ItemTravelsList';

export default function TravelsListComponent() {
  const dispatch = useDispatch();
  const travels = useSelector(state => state.travels.allTravels);
  const drivers = useSelector(state => state.drivers.allDrivers);
  const pageActive = useSelector(state => state.menu.pageActive);

  useEffect(() => {
    dispatch(actionsTravels.listTravelRequest());
  }, [dispatch]);

  if (travels && travels.length > 0) {
    return (
      <Section pageActive={pageActive}>
        <h1>{travels && travels ? travels.length : '0'} TRAVELS</h1>
        <FilterTravels />
        <ItemTravelsList />
      </Section>
    );
  }
  if (drivers && drivers.length > 0 && travels && travels.length === 0) {
    return (
      <Section pageActive={pageActive}>
        <figure>
          <img id="emptyTravels" src={emptyTravels} alt="Empty Travels" />
          <figcaption>Now just register your trips</figcaption>
        </figure>
      </Section>
    );
  }

  return <Section pageActive={pageActive} />;
}
