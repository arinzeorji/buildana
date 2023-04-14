import React from 'react';
import styled from 'styled-components';
import Items from './Items'
const CollectionPreview = styled.div`
    display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
`;

const Preview = styled.div`
    display: flex;
    justify-content: space-between; 
`;

const Collections = ({ title, items }) => (
    <CollectionPreview>
        <Title>{title.toUpperCase()}</Title>
        <Preview>
            {items
                .filter((item, idx) => idx < 4)
                .map(({ id, ...otherItemProps }) => (
                    <Items key={id} {...otherItemProps} />
                ))}
        </Preview>
    </CollectionPreview>
)


export default Collections; 