import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const KoalaWelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>Panel kierowców (panel.szbludnik.pl)</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>Dziękujemy za rejestracje w panelu,</Text>
        <Text style={paragraph}>
          Jest nam niezmiernie miło, że możemy z Tobą współpracować. W przypadku
          posiadania jakichkolwiek problemów, skontaktuj się z nami poprzez
          Discord'a.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="http://localhost:3000/dashboard">
            Przejdź do panelu
          </Button>
        </Section>
        <Text style={paragraph}>
          Pozdrawiamy
          <br />
          Zespół Wirtualnych Miejskich Zakładów Autobusowych
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Jeżeli to nie ty założyłeś konto, skontakuj się z nami pod ten adres
          e-mailowy.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default KoalaWelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#dc2626",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
