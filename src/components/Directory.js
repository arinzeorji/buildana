import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';

import car from '../images/car1.jpg';

const DirectoryMenu = styled.div`
    width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'Cars',
                    images: car,
                    id: 1,
                    linkUrl: 'car'
                },
                {
                    title: 'Decoders',
                    images: car,
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'Phones',
                    images: car,
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'Laptops',
                    images: car,
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'Computers',
                    images: car,
                    id: 5,
                    linkUrl: ''
                }

            ]
        }



    }

    render() {
        return (
            <DirectoryMenu>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </DirectoryMenu>
        );
    }
}
export default Directory;
