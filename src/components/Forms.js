import React from 'react'
import styled from 'styled-components';

const Group = styled.div`
position: relative;
  margin: 45px 0;
`;

const FormInput = styled.input`
background: none;
    background-color: white;
    color: $sub-color;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid grey;
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ Label {
        top: -14px;
        font-size: 12px;
        color: black;
    }
`;

const Label = styled.label`
    color: grey;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 1s ease all;

    .shrink {
      top: -14px;
        font-size: 12px;
        color: black;
    }
`;

const Forms = ({ handleChange, label, ...otherProps }) => {
    return (
        <Group>
            <FormInput
                onChange={handleChange}
                {...otherProps}
            />
            {
                label ?
                    (<Label
                        className=
                        {`${otherProps.value.length
                            ? 'shrink' : ''}`}
                    >
                        {label}
                    </Label>)
                    : null

            }
        </Group >
    )
}

export default Forms
