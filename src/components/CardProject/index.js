import React from 'react';
import Text from '../common/Text';
import Image from '../common/Image';
import { C } from './styles';

const CardProject = ({ background, description, name }) => {
  return (
    <C.Container>
      <C.Image>
        <Image src={`images/${background}`} />
      </C.Image>
      <C.Title>
        <Text tag="h1" variant="titleText">
          {name}
        </Text>
        <Text tag="p" variant="paragraphText">
          {description}
        </Text>
      </C.Title>
    </C.Container>
  );
};

export default CardProject;
