import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'
import React from "react"

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
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
    }
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps})=>(
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;