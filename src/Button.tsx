import React, {FC} from 'react';
import {Button, Text, IButtonProps} from 'native-base';

interface ButtonProps extends IButtonProps {
  innerText: string;
}

const ButtonComponnent: FC<ButtonProps> = props => {
  return <Button {...props}>{props.children}</Button>;
};

export default ButtonComponnent;
