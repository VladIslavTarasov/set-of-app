import React, { memo, useCallback } from 'react';

import { SliderPicker, ColorChangeHandler } from 'react-color';

import { Input, Label } from 'components/Common/Fileds';
import { useTheme } from 'theme/theme';

import { useStyles } from './Slider.styles';

interface ThemeSliderProps {
  onChange: (e: React.ChangeEvent<any>) => void;
  error: string;
  name: 'dark' | 'main' | 'light';
  color: string;
}

const ThemeSlider: React.FC<ThemeSliderProps> = ({ onChange, name, color, error }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const handleChangeColor = useCallback<ColorChangeHandler>(
    ({ hex: value }) => {
      const target = { name, value };
      onChange({ target } as React.ChangeEvent<any>);
    },
    [onChange, name]
  );

  return (
    <div className={classes.field}>
      <Label touched uppercase title={name} name={name} error={error} className={classes.label}>
        <Input
          touched
          readOnly
          name={name}
          id={name}
          type="text"
          maxLength={40}
          error={error}
          value={color}
          borderColor={color}
        />
      </Label>
      <div className={classes.slider}>
        <SliderPicker color={color} onChange={handleChangeColor} />
      </div>
    </div>
  );
};

export default memo(ThemeSlider);
