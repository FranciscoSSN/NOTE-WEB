import { Container, Form } from './styles';

import { Link } from 'react-router-dom';

import { Header } from '../../Components/Header';
import { Input } from '../../Components/Input';
import { TextArea } from '../../Components/TextArea';
import { NoteItem } from '../../Components/NoteItem';
import { Section } from '../../Components/Section';
import { Button } from '../../Components/Button';

export function NewInterface() {
    return(
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>Criar Note</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input placeholder="Titulo" />
                    <TextArea placeholder="Observações "/>

                    <Section title="Links úteis">
                        <NoteItem value="https://github.com/FranciscoSSN"/>
                        <NoteItem 
                            isNew
                            placeholder="Novo link"
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className='tags'>
                            <NoteItem value="react"/>
                            <NoteItem 
                                isNew
                                placeholder="Novo marcador"
                            />
                        </div>
                    </Section>

                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}