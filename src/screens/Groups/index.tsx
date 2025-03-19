import { Header } from '@components/Header';
import { Container } from './style';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='Jogue com sua turma'/>
      <GroupCard title='Galera do TI'/>
      <GroupCard title='Galera do Finan' />
    </Container>
  );
}


