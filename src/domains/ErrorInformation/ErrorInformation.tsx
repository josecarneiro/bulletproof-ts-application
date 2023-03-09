import { Column, FullSizeBox, Text } from '../../elements';

export const ErrorInformation = () => (
  <FullSizeBox>
    <Column className="items-center">
      <Text className="text-7xl mb-16 text-slate-300">:'(</Text>
      <Text>There was an error...</Text>
    </Column>
  </FullSizeBox>
);
