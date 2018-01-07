const listOfRoomObjects = [
  { price: 125,
    billsIncluded: 0,
    bedroom: 5,
    bathroom: 1,
    occupant: 5,
    url: 'https://flatmates.com.au/P623207',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/fwcbtbujl7nsgrujiqmh.jpg',
    flatmates: 5,
    predictedPrice: null,
    difference: null },
  { price: 159,
    billsIncluded: 1,
    bedroom: 5,
    bathroom: 1,
    occupant: 4,
    url: 'https://flatmates.com.au/P423042',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/l86ldonqefdj7c5l4aqz.jpg',
    flatmates: 5,
    predictedPrice: null,
    difference: null },
  { price: 179,
    billsIncluded: 0,
    bedroom: 5,
    bathroom: 1,
    occupant: 4,
    url: 'https://flatmates.com.au/P423049',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/dxlneyeozphwirpxsbxi.jpg',
    flatmates: 5,
    predictedPrice: null,
    difference: null },
  { price: 178,
    billsIncluded: 1,
    bedroom: 5,
    bathroom: 2,
    occupant: 4,
    url: 'https://flatmates.com.au/P407579',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/dccyjvlwmojflp63rotg.jpg',
    flatmates: 5,
    predictedPrice: null,
    difference: null },
  { price: 150,
    billsIncluded: 0,
    bedroom: 3,
    bathroom: 1,
    occupant: 3,
    url: 'https://flatmates.com.au/P622730',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/uihtwhra2i58nf3cptff.jpg',
    flatmates: 3,
    predictedPrice: null,
    difference: null },
  { price: 120,
    billsIncluded: 0,
    bedroom: 4,
    bathroom: 2,
    occupant: 4,
    url: 'https://flatmates.com.au/P622212',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/uvjd2tovsrlwa0xprdtl.jpg',
    flatmates: 4,
    predictedPrice: null,
    difference: null },
  { price: 142,
    billsIncluded: 0,
    bedroom: 2,
    bathroom: 1,
    occupant: 1,
    url: 'https://flatmates.com.au/P388726',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/iuoftmhrr7ziajyayh5f.jpg',
    flatmates: 2,
    predictedPrice: null,
    difference: null },
  { price: 220,
    billsIncluded: 1,
    bedroom: 1,
    bathroom: 1,
    occupant: 3,
    url: 'https://flatmates.com.au/P468167',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/dswxlw3qlgyulqkmoioc.jpg',
    flatmates: 3,
    predictedPrice: null,
    difference: null },
  { price: 180,
    billsIncluded: 1,
    bedroom: 4,
    bathroom: 1,
    occupant: 3,
    url: 'https://flatmates.com.au/P496982',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/ap0tdgzzq2d35tenxzzs.jpg',
    flatmates: 4,
    predictedPrice: null,
    difference: null },
  { price: 200,
    billsIncluded: 0,
    bedroom: 2,
    bathroom: 1,
    occupant: 1,
    url: 'https://flatmates.com.au/P454344',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/lnubuy1vajilwbplyzxg.jpg',
    flatmates: 2,
    predictedPrice: null,
    difference: null },
  { price: 160,
    billsIncluded: 0,
    bedroom: 6,
    bathroom: 4,
    occupant: 7,
    url: 'https://flatmates.com.au/P604617',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/q8kpbdfri3tju4v6gkpr.jpg',
    flatmates: 7,
    predictedPrice: null,
    difference: null },
  { price: 130,
    billsIncluded: 0,
    bedroom: 3,
    bathroom: 1,
    occupant: 3,
    url: 'https://flatmates.com.au/P547999',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/wy97er7fr7mxhy4g2ls3.jpg',
    flatmates: 3,
    predictedPrice: null,
    difference: null } ];

const correctTestRankedRooms = [
  { price: 120,
    billsIncluded: 0,
    bedroom: 4,
    bathroom: 2,
    occupant: 4,
    url: 'https://flatmates.com.au/P622212',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/uvjd2tovsrlwa0xprdtl.jpg',
    flatmates: 4,
    predictedPrice: '153.62',
    difference: '-33.62' },
  { price: 130,
    billsIncluded: 0,
    bedroom: 3,
    bathroom: 1,
    occupant: 3,
    url: 'https://flatmates.com.au/P547999',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/wy97er7fr7mxhy4g2ls3.jpg',
    flatmates: 3,
    predictedPrice: '153.41',
    difference: '-23.41' },
  { price: 142,
    billsIncluded: 0,
    bedroom: 2,
    bathroom: 1,
    occupant: 1,
    url: 'https://flatmates.com.au/P388726',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/iuoftmhrr7ziajyayh5f.jpg',
    flatmates: 2,
    predictedPrice: '160.79',
    difference: '-18.79' },
  { price: 159,
    billsIncluded: 1,
    bedroom: 5,
    bathroom: 1,
    occupant: 4,
    url: 'https://flatmates.com.au/P423042',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/l86ldonqefdj7c5l4aqz.jpg',
    flatmates: 5,
    predictedPrice: '176.82',
    difference: '-17.82' },
  { price: 125,
    billsIncluded: 0,
    bedroom: 5,
    bathroom: 1,
    occupant: 5,
    url: 'https://flatmates.com.au/P623207',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/fwcbtbujl7nsgrujiqmh.jpg',
    flatmates: 5,
    predictedPrice: '138.66',
    difference: '-13.66' },
  { price: 178,
    billsIncluded: 1,
    bedroom: 5,
    bathroom: 2,
    occupant: 4,
    url: 'https://flatmates.com.au/P407579',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/dccyjvlwmojflp63rotg.jpg',
    flatmates: 5,
    predictedPrice: '184.41',
    difference: '-6.41' },
  { price: 180,
    billsIncluded: 1,
    bedroom: 4,
    bathroom: 1,
    occupant: 3,
    url: 'https://flatmates.com.au/P496982',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/ap0tdgzzq2d35tenxzzs.jpg',
    flatmates: 4,
    predictedPrice: '184.20',
    difference: '-4.20' },
  { price: 150,
    billsIncluded: 0,
    bedroom: 3,
    bathroom: 1,
    occupant: 3,
    url: 'https://flatmates.com.au/P622730',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/uihtwhra2i58nf3cptff.jpg',
    flatmates: 3,
    predictedPrice: '153.41',
    difference: '-3.41' },
  { price: 160,
    billsIncluded: 0,
    bedroom: 6,
    bathroom: 4,
    occupant: 7,
    url: 'https://flatmates.com.au/P604617',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/q8kpbdfri3tju4v6gkpr.jpg',
    flatmates: 7,
    predictedPrice: '146.66',
    difference: '13.34' },
  { price: 220,
    billsIncluded: 1,
    bedroom: 1,
    bathroom: 1,
    occupant: 3,
    url: 'https://flatmates.com.au/P468167',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/dswxlw3qlgyulqkmoioc.jpg',
    flatmates: 3,
    predictedPrice: '191.57',
    difference: '28.43' },
  { price: 200,
    billsIncluded: 0,
    bedroom: 2,
    bathroom: 1,
    occupant: 1,
    url: 'https://flatmates.com.au/P454344',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/lnubuy1vajilwbplyzxg.jpg',
    flatmates: 2,
    predictedPrice: '160.79',
    difference: '39.21' },
  { price: 179,
    billsIncluded: 0,
    bedroom: 5,
    bathroom: 1,
    occupant: 4,
    url: 'https://flatmates.com.au/P423049',
    image: 'https://flatmates-res.cloudinary.com/image/upload/c_fill,f_auto,h_180,q_auto,w_290/dxlneyeozphwirpxsbxi.jpg',
    flatmates: 5,
    predictedPrice: '138.66',
    difference: '40.34' } ];

module.exports = {
  listOfRoomObjects,
  correctTestRankedRooms
};