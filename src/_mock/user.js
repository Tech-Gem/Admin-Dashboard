import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
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

  // company: faker.company.name(),
  // isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),

  // role: sample([
  //   'Leader',
  //   'Hr Manager',
  //   'UI Designer',
  //   'UX Designer',
  //   'UI/UX Designer',
  //   'Project Manager',
  //   'Backend Developer',
  //   'Full Stack Designer',
  //   'Front End Developer',
  //   'Full Stack Developer',
  // ]),
  email: sample([
    'siferhselam@gmail.com',
    'ruhamagashaw@gmail.com',
    'hiwotderese@gmail.com',
    'hayattofic@gmail.com',
    'christinasolomon@gmail.com',
    'siferselome@gmail.com',
    'siferhhiwot@gmail.com',
    'siferhhaile@gmail.com',
    'siferhmelkamu@gmail.com',
    'gedamnesh@gmail.com',
    'siferh@gmail.com',
  ]),
  // email: [
  //   'siferhselam@gmail.com',

  // ],
  phone: sample([
    '0930961202',
    '0930961102',
    '0920961202',
    '0930861202',
    '0950961202',
    '0940961202',
    '0970961202',
    '0990961202',
    '0960961202',
  ]),
}));
