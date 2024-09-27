"use client";

import React from "react";
import styled from "styled-components";
import { useAppContext } from "@/app/context/StoreContext";
import { ColorPicker as ColorPickerAntD } from "antd";
import { Color } from "antd/es/color-picker";

const ColorPicker = () => {
    const { theme, changeTheme } = useAppContext();

    const handleColorChange = (color: Color) => {
        changeTheme(color.toHexString());
    };

    return (
        <StyledWrapper>
            <ColorPickerAntD defaultValue={theme.background} onChangeComplete={handleColorChange} size="large" showText />
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    padding: 16px;
`;

export default ColorPicker;