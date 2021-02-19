import { ArrowDown } from '../../assets/svg/Arrow';
import { CodingBoy } from '../../assets/svg/CodingBoy';
import Text from '../common/Text';
import { C } from './styles';

export default function Welcome() {
  return (
    <C.Container>
      <C.Content>
        <CodingBoy />
        <C.TextArea>
          <Text variant="titleText">Leonardo M. Primieri</Text>
          <Text variant="titleText">Portfólio</Text>
          <a href="#projects">
            <ArrowDown />
          </a>
        </C.TextArea>
      </C.Content>
    </C.Container>
  );
}
