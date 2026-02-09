import React from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Link,
} from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  name,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Preview>Nuevo mensaje de contacto de {name}</Preview>
    <Body style={{ fontFamily: 'sans-serif', backgroundColor: '#f5f5f5' }}>
      <Container style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <Section style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px' }}>
          <Text style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: '#0a0a0a' }}>
            Nuevo mensaje desde Portfolio JB
          </Text>
          
          <Hr style={{ borderColor: '#e5e5e5', margin: '20px 0' }} />
          
          <Text style={{ fontSize: '16px', margin: '10px 0', color: '#0a0a0a' }}>
            <strong>Nombre:</strong> {name}
          </Text>
          
          <Text style={{ fontSize: '16px', margin: '10px 0', color: '#0a0a0a' }}>
            <strong>Email:</strong>{' '}
            <Link href={`mailto:${email}`} style={{ color: '#00e5ff' }}>{email}</Link>
          </Text>
          
          <Text style={{ marginTop: '20px', fontSize: '16px', color: '#0a0a0a' }}>
            <strong>Mensaje:</strong>
          </Text>
          <Text style={{ 
            backgroundColor: '#f9f9f9', 
            padding: '15px', 
            borderLeft: '4px solid #00e5ff',
            fontSize: '15px',
            lineHeight: '1.6',
            color: '#0a0a0a',
            whiteSpace: 'pre-wrap'
          }}>
            {message}
          </Text>

          <Hr style={{ borderColor: '#e5e5e5', margin: '20px 0' }} />
          
          <Text style={{ fontSize: '12px', color: '#666' }}>
            Puedes responder directamente a este email haciendo clic en la dirección de correo del remitente.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;
