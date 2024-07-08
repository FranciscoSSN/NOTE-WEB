import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../Components/Header";
import { Input } from '../../Components/Input';
import { ButtonText } from "../../Components/ButtonText";

import { Note } from '../../Components/Note';
import { Section } from '../../Components/Section';

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>My Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="All" isActive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Node" />
        </li>
      </Menu>

      <Search>
        <Input 
          placeholder="Search by title"
          icon={FiSearch}
        />
      </Search>

      <Content>
        <Section title="My notes">
          <Note data={{
              title: "React",
              tags: [
                {id: '1', name: 'react'},
                {id: '2', name: 'node'}
              ]
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Create Note
      </NewNote>
    </Container>
  );
}
