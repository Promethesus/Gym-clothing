const INITIAL_STATE = {
    sections: [{
        title: 'BRO TANKS',
        imageUrl: 'https://i.ibb.co/X8mnfvp/BRO-TANK.png',
        id: 1,
        linkUrl: 'shop/brotanks'
      },
      {
        title: 'JACKETS',
        imageUrl: 'https://i.ibb.co/KWsxHr3/JACKET.png',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'SWEATS',
        imageUrl: 'https://i.ibb.co/fpwLNQY/SWEATS.jpg',
        id: 3,
        linkUrl: 'shop/sweats'
      },
      {
        title: 'WOMENS',
        imageUrl: 'https://i.ibb.co/sbKMDGL/WOEMNS.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'MENS',
        imageUrl: 'https://i.ibb.co/GFyj5bS/MENS.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action)=> {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer