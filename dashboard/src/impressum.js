import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Layout from './layout';

function Impressum() {
  return (
    <Layout>
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Impressum
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Angaben gemäß § 5 TMG:
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Firma:</strong> Austrian Budget Dashboard GmbH<br />
            <strong>Adresse:</strong> Musterstraße 1, 1010 Wien, Österreich<br />
            <strong>Vertreten durch:</strong> Max Mustermann<br />
            <strong>Kontakt:</strong><br />
            Telefon: +43 1 234 56 78<br />
            E-Mail: info@austrianbudgetdashboard.at<br />
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
          </Typography>
          <Typography variant="body1" gutterBottom>
            Max Mustermann<br />
            Musterstraße 1<br />
            1010 Wien<br />
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Haftungsausschluss:
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Haftung für Inhalte</strong><br />
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Haftung für Links</strong><br />
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Urheberrecht</strong><br />
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Datenschutz</strong><br />
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}

export default Impressum;
