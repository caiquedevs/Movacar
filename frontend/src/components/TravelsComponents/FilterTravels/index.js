import React from 'react';

import { FilterTravels } from './styled';

export default function FilterTravelsComponent() {
  return (
    <FilterTravels>
      <li>
        <input type="radio" name="filter" id="recents" defaultChecked />
        <label htmlFor="recents">Recents</label>
      </li>
      <li>
        <input type="radio" name="filter" id="Pending" />
        <label htmlFor="Pending">Pending</label>
      </li>
      <li>
        <input type="radio" name="filter" id="Processing" />
        <label htmlFor="Processing">Processing</label>
      </li>
      <li>
        <input type="radio" name="filter" id="Completed" />
        <label htmlFor="Completed">Completed</label>
      </li>
    </FilterTravels>
  );
}
