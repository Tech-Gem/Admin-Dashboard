import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const books = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  bookuser: faker.person.fullName(),
//  name: sample([
//     'selamawit siferh',
//     'ruhama gashaw',
//     'hiwot derese',
//     'hayat tofic',
//     'christina solomon',
//     'selome sifer',
//     'hiwot siferh',
//     'haile siferh',
//     'melkamu siferh',
//     'gedamnesh emirie',
//     'siferh zeleke',
//   ]),


  isVerified: faker.datatype.boolean(),


 
  equipmentname: sample([
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
 
  date: sample([
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
