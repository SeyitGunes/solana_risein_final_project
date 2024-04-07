// import all images from assets/images directory
import img01 from "../all-images/slider-img/slider-1.jpg";
import img02 from "../all-images/slider-img/slider-2.jpg";
import img03 from "../all-images/slider-img/slider-3.jpg";

const carData = [
  {
    id: 1,
    brand: "Audi",
    rating: 112,
    carName: "Audi",
    imgUrl: img01,
    model: "Model -2021",
    price: 50,
    speed: "12.500 kmh",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    previousOwners: [
      { name: "İbrahim Doğan", price: 690 },
      { name: "Cem Kandemir", price: 630.0 },
    ],
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 2,
    brand: "FORD SUV",
    rating: 102,
    carName: "FORD SUV",
    imgUrl: img02,
    model: "Model-2020",
    price: 50,
    speed: "80.000 kmh",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    previousOwners: [
      { name: "Seyit  Güneş", price: 800.5 },
      { name: "Furkan Esen", price: 770.0 },
    ],
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 3,
    brand: "Mercedes",
    rating: 132,
    carName: "Mercedes New Series",
    imgUrl: img03,
    model: "Model-2022",
    price: 65,
    speed: "5.000 kmh",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    previousOwners: [
      { name: "Seyit  Güneş", price: 730.5 },
      { name: "Furkan Esen", price: 550.0 },
    ],
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
];

export default carData;
