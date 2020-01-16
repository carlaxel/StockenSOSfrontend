import React from "react";
import styles from "./Info.module.css";
import stockenMap from "../assets/images/stocken_map2.png";

function Info(props) {
  return (
    <div className={styles.Info}>
      <div className={styles.InfoCenter}>
        <a href="https://goo.gl/maps/4EwBMBK11t2Aoy5LA">
          <img
            src={stockenMap}
            className={styles.map}
            alt="karta över stocken"
          ></img>
        </a>
        <h2 className={styles.H2}>Allt du behöver veta</h2>
        <h3 className={styles.H3}>Info om loppen</h3>
        <p className={styles.P}>
          <b>Tävlingsdatum:</b> Lördag den 18 juli 2020.
        </p>
        <p className={styles.P}>
          Vi tar emot anmälningar löpande, först till kvarn gäller och vi
          reserverar oss för slutförsäljning då vi har max 300 platser att
          erbjuda. Sista anmälningsdag är 15 juli.
        </p>
        <p className={styles.P}>
          <b>Starttider:</b> Långa 13:00, Mellan 14.00 och Knatte 15.00
        </p>
        <p className={styles.P}>
          <b>Start och mål:</b> Fiskaffären, Stocken.
        </p>
        <p className={styles.P}>
          <b>Registrering:</b> 11.00-12.00 på Gräsmattan i änden av gatan
          Husegärdet (finns på Google Maps).
        </p>
        <p className={styles.P}>
          <b>Pre run info och uppvärming:</b> 12.15 på Gräsmattan i änden av
          gatan Husegärdet. Därefter gemensam promenad till startområdet. Löpare
          ska befinna sig i startfållan senast 10 min före start.
        </p>
        <p className={styles.P}>
          <b>Överdragskläder:</b> Lägg i egen medhavd påse eller väska och ta
          med från uppvärmningen till start/målområdet.
        </p>
        <p className={styles.P}>
          <b>Parkering:</b> Finns vid infarten till Stocken, vid
          Återvinningsplatsen samt vid föreningslokalen Svanvik ca 1 km före
          Stocken. Undvik att parkera inne i samhället.
        </p>
        <p className={styles.P}>
          <b>Boende:</b> Vi rekommenderar att vara ute i mycket god tid och boka
          på Tofta Gård (
          <a href="https://toftagard.se" alt="toftgård">
            toftagard.se
          </a>
          ) eller Stocken Camping (
          <a href="https://stockencamping.se" alt="stocken camping">
            stockencamping.se
          </a>
          ) som båda ligger i närheten.
        </p>
        <h3 className={styles.H3}>Bansträckning</h3>
        <p className={styles.P}>
          Inför 2020 kommer vi att göra några justeringar som vi i dialog med
          löpare, funktionärer och sponsorer hoppas kommer göra upplevelsen än
          mer spektakulär. Banguider mailas ut några dagar innan start till den
          mailadress som uppgetts i anmälan.
        </p>
        <h3 className={styles.H3}>Regler</h3>
        <p className={styles.P}>
          Badmössa är frivilligt och tas med av respektive löpare. Simglasögon
          får användas. Våtdräkt får användas (vi avråder dock från det p.g.a.
          risk för överhettning). Paddlar, fenor eller andra simhjälpmedel får
          inte användas. Parlina får inte användas. Bansträckningen under loppet
          är snitslad/utmärkt och måste följas. Funktionärer kommer även finnas
          utplacerade längs banan för att visa löpare rätt. Kontroller kommer
          finnas och vid varje kontroll måste båda lagmedlemmarna visa upp
          händerna för funktionär. De tävlande får vara max 10 meter ifrån
          varandra under loppet. Vid målgång måste båda lagmedlemmarna visa upp
          händerna till målfunktionär som noterar sluttid.
        </p>
        <p className={styles.P}>
          Deltagande i tävlingen sker på egen risk. Minderåriga deltagare måste
          ha målsmans godkännande för att få starta. Arrangörerna,
          tävlingsledningen och funktionärerna frånsäger sig allt ansvar för
          olycksfall eller dylikt under loppet. Nedskräpning leder till direkt
          diskvalificering. Deltagare är skyldiga att ingripa vid eventuella
          nödsituationer och hjälpa/rädda medlöpare. Lag som bryter loppet måste
          genast meddela funktionär eller tävlingsledning.
        </p>
        <h3 className={styles.H3}>Anmälan och startavgift </h3>
        <p className={styles.P}>
          Anmälan görs på hemsidan genom att ange personuppgifter samt betala in
          startavgiften. Begränsat antal löpare, först till kvarn gäller.
          Startavgiften är 500 kr per löpare i lång- och mellandistanserna.
          Knattedistansen är gratis (men deltagare måste anmälas till
          johan.kyllerman@gmail.com). För minderåriga (under 18 år) vill vi ha
          målsmans medgivande att deltaga. Din anmälan kommer inte att godkännas
          förrän startavgiften är inbetald. Vi kan inte återbetala outnyttjade
          startavgifter, så om du skulle få förhinder ber vi dig att hitta en
          ersättare som kan ta din plats. Viktigt i så fall att kontakta oss så
          vi kan uppdatera startlistan med rätt personuppgifter. För att hantera
          ändringar i efterhand kommer vi att ta ut en administrativ avgift på
          50 kr. Vi tar emot anmälningar löpande och kan välkomna max 300
          deltagare. Först till kvarn gäller, vi reserverar oss för
          slutförsäljning. Sista anmälningsdag är 15 juli.
        </p>
        <h3 className={styles.H3}>Registrering</h3>
        <p className={styles.P}>
          Registrering sker på Gräsmattan i slutet av gatan Husegärdet i Stocken
          kl. 11.00 - 12.00 på tävlingsdagen. Husegärdet är en liten gata men
          finns på Google Maps! Tag med legitimation. Efter godkänd registrering
          får varje löpare sitt startnummer skrivet på ovansidan av ena handen.
          OBS! Endast registrering av löpare som anmält sig i tid, betalat
          startavgiften och fått bekräftelse. Det går inte att anmäla sig på
          plats.
        </p>
        <h3 className={styles.H3}>Publik</h3>
        <p className={styles.P}>
          Det finns många fina platser att se och heja på just dina löpare:
          start och mål vid fiskaffären gräsmattan vid Tofta Gård, Tofta Gårds
          badplats, de båda långbryggorna inne i Stocken samt badplatsen vid
          hopptornet (Djupet).
        </p>
        <h3 className={styles.H3}>Priser</h3>
        <p className={styles.P}>
          Vår huvudsponsor Salming Running och våra övriga sponsorer står för
          priser till de som placerar sig bäst i lång- och mellandistanserna.
          Beroende på hur deltagarlistan ser ut förbehåller vi oss rätten att
          fördela priser efter klass (herr, dam, mixed) istället för efter
          enbart tid. Prisutdelning sker ca 14.30. Alla som anmäler sig senast 1
          juli och slutför lång- och mellandistanserna får en running tee från
          Salming. Goodiebag från Hemköp delas ut till samtliga deltagare som
          slutför Lång och Mellan.
        </p>
        <h3 className={styles.H3}>Förmånstagare</h3>
        <p className={styles.P}>
          Stocken SOS arrangeras av den ideella föreningen Sommarträning på
          Stocken och överskottet går till att förbättra miljön för boende och
          gäster i samhället.
        </p>
      </div>
    </div>
  );
}

export default Info;
