import { FlatList, Text } from 'react-native';
import { Header } from '@components/Header';
import { Container } from './style';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { ListEmpty } from '@components/ListEmpty';

export function Groups() {

  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='Jogue com sua turma'/>

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) =>(
          <GroupCard 
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && {flex:1}}
         ListEmptyComponent={() =>
          <ListEmpty
            message="Que tal cadastrar a primeira turma?"
          />
         }
      />
      
    </Container>
  );
}


