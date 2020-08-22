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
              <ul>
                <li>
                  <strong>CREATED:</strong>
                  {travel.created}
                </li>
                <li>
                  <strong>ID DRIVER:</strong>
                  {travel.id_driver}
                </li>
                <li>
                  <strong>DRIVER:</strong>
                  {travel.name_driver}
                </li>
                <li>
                  <strong>DESC:</strong>
                  {travel.description}
                </li>
                <li>
                  <strong>ADDRESS:</strong>
                  {`${travel.address} - ${travel.number}`}
                </li>
                <li>
                  <strong>CEP:</strong>
                  {travel.cep}
                </li>
                <li>
                  <strong>CITY:</strong>
                  {travel.city}
                </li>
                <li>
                  <strong>UF:</strong>
                  {travel.state}
                </li>
              </ul>
            </BodyLi>
          </LiTravels>
        ))}
    </UlTravels>
  );
}
