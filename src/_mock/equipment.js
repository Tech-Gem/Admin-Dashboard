// import { sample } from 'lodash';
// import { faker } from '@faker-js/faker';

// // ----------------------------------------------------------------------

// export const equipments = [...Array(24)].map((_, index) => ({
//   id: faker.string.uuid(),
//   name: sample([
//     'Backhoe Loader',
//     'Bulldozer',
//     'Crane',
//     'Excavator',
//     'Forklift',
//     'Grader',
//     'Jackhammer',
//     'Loader',
//     'Mixer Truck',
//     'Paver',
//     'Pile Driver',
//     'Roller',
//     'Skid Steer',
//     'Telehandler',
//     'Tractor',
//     'Truck Crane',
//     'Wheel Loader',
//     'Compactor',
//     'Dump Truck',
//     'Generator',
//     'Scaffolding',
//     'Welding Machine',
//     'Power Saw',
//     'Concrete Pump'
//   ]),
//   catagory: sample([
    
//       "Earthmoving Equipment",
//       "Lifting Equipment",
//       "Concrete Equipment",
//       "Pavement Equipment",
//       "Material Handling Equipment",
//       "Site Preparation Equipment",
//       "Demolition Equipment",
//       "Paving Equipment",
//       "Compaction Equipment",

//   ]),
//   posteddate: sample([
//     '2023-04-28',
//     '2023-04-28',
//     '2023-04-28',
//     '2023-04-28',
//     '2023-04-28',
//     '2023-04-28',
//     '2023-04-28',
//     '2023-04-28',
  
//   ]),
//   postedby: sample([
//     '2023-04-28',
//     '2023-04-28',
//     '2023-04-28',
//     '2023-04-28',
//     '2023-04-28',
//     '2023-04-28',
//     '2023-04-28',
//     '2023-04-28',
//   ]),

// }));
export const equipments = [
  {
    id: "182893be-3d78-4d04-9a6f-c3a389cb2e8e",
    name: "Tractor",
    quantity: 3,
    pricePerHour: "10000.00",
    location: "Construction Site D",
    description: "Heavy-duty tractor for digging and earthmoving",
    category: "HeavyEarthmoving",
    image: [
      "https://t3.ftcdn.net/jpg/02/00/15/12/360_F_200151261_PJFscbgBk4VgZKMkIQ0FDECkiXppGe2V.jpg"
    ],
    capacity: "Medium",
    model: "XYZ-800",
    specifications: [
      "Diesel-powered",
      "Bucket size: 2 cubic meters"
    ],
    transportation: true,
    isBooked: false,
    userId: "1e6183b9-4e86-4ab1-a32c-5286fe810138",
    createdAt: "2024-05-14T00:52:33.261Z",
    updatedAt: "2024-05-14T00:52:33.261Z"
  },
  {
    id: "25b6adc0-618c-4e4e-be72-b3b2754ffd02",
    name: "Excavator",
    quantity: 20,
    pricePerHour: "10000.00",
    location: "Construction Site A",
    description: "Heavy-duty tractor for digging and earthmoving",
    category: "HeavyEarthmoving",
    image: [
      "https://t3.ftcdn.net/jpg/02/00/15/12/360_F_200151261_PJFscbgBk4VgZKMkIQ0FDECkiXppGe2V.jpg"
    ],
    capacity: "Medium",
    model: "XYZ-800",
    specifications: [
      "Diesel-powered",
      "Bucket size: 2 cubic meters"
    ],
    transportation: true,
    isBooked: false,
    userId: "1e6183b9-4e86-4ab1-a32c-5286fe810138",
    createdAt: "2024-05-14T04:39:26.852Z",
    updatedAt: "2024-05-14T04:39:26.852Z"
  },
  // Add more equipment objects here based on the API response
];
