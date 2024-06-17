import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const bids = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: sample([
    'Backhoe Loader',
    'Bulldozer',
    'Crane',
    'Excavator',
    'Forklift',
    'Grader',
    'Jackhammer',
    'Loader',
    'Mixer Truck',
    'Paver',
    'Pile Driver',
    'Roller',
    'Skid Steer',
    'Telehandler',
    'Tractor',
    'Truck Crane',
    'Wheel Loader',
    'Compactor',
    'Dump Truck',
    'Generator',
    'Scaffolding',
    'Welding Machine',
    'Power Saw',
    'Concrete Pump'
  ]),
 
 
  postedby: sample([
    '2023-04-28',
    '2023-04-28',
    '2023-04-28',
    '2023-04-28',
    '2023-04-28',
    '2023-04-28',
    '2023-04-28',
    '2023-04-28',
  ]),
  startdate: sample([
    '2023-04-28',
    '2023-04-28',
    '2023-04-28',
    '2023-04-28',
    '2023-04-28',
    '2023-04-28',
    '2023-04-28',
    '2023-04-28',
  
  ]),
  enddate: sample([
    '2023-04-28',
    '2023-04-28',
    '2023-04-28',
    '2023-04-28',
    '2023-04-28',
    '2023-04-28',
    '2023-04-28',
    '2023-04-28',
  
  ]),

}));