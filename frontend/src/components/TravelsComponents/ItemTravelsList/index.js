import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdTrash } from 'react-icons/io';
import { TiArrowSortedDown } from 'react-icons/ti';
import * as actionsTravels from '../../../store/modules/travels/actions';

import { UlTravels, LiTravels, HeaderLi, BodyLi } from './styled';

export default function ItemTravelsList() {
  const dispatch = useDispatch();
  const travels = useSelector(state => state.travels.allTravels);

  const handleClick = async (id_travel, index) => {
    const response = window.confirm('Deseja excluir esta viagem ?');

    if (response) {
      dispatch(actionsTravels.deleteTravelRequest({ id_travel, index }));
    }
  };

  return (
    <UlTravels id="listTravels">
      {travels &&
        travels.map((travel, index) => (
          <LiTravels key={travel.id_travel}>
            <HeaderLi>
              <div className="infoGroup">
                <IoMdTrash
                  onClick={() => handleClick(travel.id_travel, index)}
                />
                <h1 className={travel.status}>{travel.status}</h1>
              </div>

              <span>{travel.description}</span>
              <span>{travel.address}</span>
              <div className="infoGroup">
                <span>
                  {travel.hour} - {travel.date}
                </span>
                <label htmlFor={travel.id_travel} className="iconArrow">
                  <TiArrowSortedDown />
                </label>
              </div>
            </HeaderLi>

            <BodyLi>
              <input type="checkbox" id={travel.id_travel} />
              <section>
                <div className="infoGroup">
                  <h1>TRAVEL ID</h1>
                  <span>{travel.id_travel}</span>
                </div>

                <div className="infoGroup">
                  <h1>Created</h1>
                  <span>{travel.created}</span>
                </div>

                <div className="infoGroup">
                  <h1>Driver</h1>
                  <span>{travel.name_driver}</span>
                </div>
              </section>
            </BodyLi>
          </LiTravels>
        ))}
    </UlTravels>
  );
}
