import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from '@emotion/styled';

export const Emotion: React.FC = () => {
    //インライン
    const containerStyle = css`
        border: solid 2px red;
        border-radius: 20px;
        padding: 8px;
        margin: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;
    const titleStyle = css({
        margin: 0,
        color: "blue"
    });
        
    return(
        <>
            <div css={containerStyle}>
                <p css={titleStyle}>emotion</p>
                <Sbutton>OK</Sbutton>
            </div>
        </>
    )
}

//styled
const Sbutton = styled.button`
    background-color: yellow;
    border: none;
    padding: 8px;
    border-radius: 8px;
`

export default Emotion;