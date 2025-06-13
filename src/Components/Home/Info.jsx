import React from "react";
import styles from "./Info.module.css";
import stockenMap from "../assets/images/stocken_map2.png";
import Social from "./Social";

function Info(props) {
  return (
    <div className={styles.Info}>
      <div className={styles.InfoCenter}>
        <h2 className={styles.H2}>Allt du behöver veta</h2>
        
        <a href="https://goo.gl/maps/4EwBMBK11t2Aoy5LA" target="_blank" rel="noopener noreferrer">
          <img
            src={stockenMap}
            className={styles.map}
            alt="Karta över Stocken"
          />
        </a>

        <h3 className={styles.H3}>Info om loppen</h3>
        <p className={styles.P}>
          <b>Tävlingsdatum:</b> Lördag den 19 juli 13:00. Vi tar emot
          anmälningar löpande, sista anmälningsdag är 17 juli.
        </p>
        <p className={styles.P}>
          <b>Starttider:</b> Långa 13:00, Mellan 14.00 och Knatte 15.00
        </p>
        <p className={styles.P}>
          <b>Start och mål:</b> Gamla fiskaffären, Stocken.
        </p>
        <p className={styles.P}>
          <b>Banguide:</b>{" "}
          <a href="/Banguide_Stocken_SOS_2024.pdf" download>
            Ladda ner banguide
          </a>
        </p>

        <p className={styles.P}>
          <b>Registrering:</b> 10.00-12.00 på gräsmattan i änden av gatan
          Husegärdet (finns på Google Maps).
        </p>
        <p className={styles.P}>
          <b>Pre-run info och uppvärming:</b> 12.15 på gräsmattan i änden av
          gatan Husegärdet. Därefter gemensam promenad till startområdet. Löpare
          ska befinna sig i startfållan senast 10 min före start.
        </p>
        <p className={styles.P}>
          <b>Överdragskläder:</b> Lägg i egen medhavd påse eller väska och ta
          med från uppvärmningen till start/målområdet.
        </p>
        <p className={styles.P}>
          <b>Parkering:</b> Finns vid infarten till Stocken, vid
          återvinningsplatsen samt vid föreningslokalen Svanvik ca 1 km före
          Stocken. Undvik att parkera inne i samhället.
        </p>
        <p className={styles.P}>
          <b>Boende:</b> Vi rekommenderar{" "}
          <a href="https://stockencamping.se" target="_blank" rel="noopener noreferrer">
            Stocken Camping
          </a>{" "}
          som ligger i närheten.
        </p>

        <h3 className={styles.H3}>Regler</h3>
        <p className={styles.P}>
          Badmössa är frivilligt och tas med av respektive löpare. Simglasögon
          får användas. Våtdräkt får användas (vi avråder dock från det pga risk
          för överhettning). Paddlar, fenor eller andra simhjälpmedel får inte
          användas. Parlina får inte användas. Bansträckningen under loppet är
          snitslad/utmärkt och måste följas. Funktionärer kommer även finnas
          utplacerade längs banan för att visa löpare rätt.
        </p>
        <p className={styles.P}>
          Kontroller kommer finnas och vid varje kontroll ska båda lagmedlemmarna prickas av hos funktionär. 
          De tävlande får vara max 10 meter ifrån varandra under loppet. Vid målgång måste båda lagmedlemmarna 
          passera tidtagningen samtidigt, målfunktionär noterar sluttid via lagens nummerlappar.
        </p>
        <p className={styles.P}>
          Deltagande i tävlingen sker på egen risk. Minderåriga deltagare måste
          ha målsmans godkännande för att få starta. Arrangörerna,
          tävlingsledningen och funktionärerna frånsäger sig allt ansvar för
          olycksfall eller dylikt under loppet. Nedskräpning leder till direkt
          diskvalificering.
        </p>
        <p className={styles.P}>
          <b>
            Deltagare är skyldiga att ingripa vid eventuella nödsituationer och
            hjälpa/rädda medlöpare. Lag som bryter loppet måste genast meddela
            funktionär eller tävlingsledning.
          </b>
        </p>

        <h3 className={styles.H3}>Anmälan och startavgift</h3>
        <p className={styles.P}>
          Anmälan görs på hemsidan genom att ange personuppgifter samt betala in
          startavgiften. Startavgiften är 600 kr per löpare i långa distansen
          och 400 kr per löpare i mellandistansen.
        </p>
        <p className={styles.P}>
          Om du anmäler dig senast 15 augusti 2024 ingår en t-shirt i funktionsmaterial till ett värde av 450
          kr. Om du anmäler dig mellan 16 augusti 2024 och 30 juni 2025 finns möjlighet att
          beställa funktionströjan för 250 kr.
        </p>
        <p className={styles.P}>
          Sista anmälningsdag är 17 juli (utan möjlighet att beställa funktionströjan efter 30 juni). 
          För minderåriga (under 18 år) vill vi ha målsmans medgivande att deltaga.
          Din anmälan kommer inte att godkännas förrän startavgiften är inbetald.
        </p>
        <p className={styles.P}>
          För dig som vill lämna in kvitto till friskvårdsbidrag,
          vänligen använd kvittot du får i bekräftelsemailet.
        </p>

        <h3 className={styles.H3}>Vid förhinder att deltaga samt ändringar</h3>
        <p className={styles.P}>
          Outnyttjade startavgifter återbetalas inte, om du skulle få förhinder
          ber vi dig att hitta en ersättare som kan ta din plats. Alla ändringar
          av deltagare måste göras på vår sajt så att vi har en korrekt
          startlista. Använd länken i bekräftelsemailet du fick vid bokningen
          för att lägga in de nya personuppgifterna.
        </p>
        <h3 className={styles.H3}>Registrering</h3>
        <p className={styles.P}>
          Sker på gräsmattan i slutet av gatan Husegärdet i Stocken kl 10.00-12.00 på tävlingsdagen, gatan finns på Google Maps! Ta med
          legitimation. Efter
godkänd registrering får varje löpare en nummerlapp som ska fästas väl
synlig framifrån på tröja eller badbyxa. OBS! Vi registerar
          endast löpare som anmält sig i tid, betalat startavgiften och fått
          bekräftelse. Det går inte att anmäla sig på plats.
        </p>

        <h3 className={styles.H3}>Publik</h3>
        <p className={styles.P}>
          Det finns många fina platser att se och heja på all våra löpare: start
          och mål vid gamla fiskaffären, gräsmattan vid Tofta Gård, Tofta Gårds
          badplats, den yttersta långbryggan Pan i Stocken, Råöns samhälle samt
          badplatsen vid hopptornet (Djupet).
        </p>
        <h3 className={styles.H3}>Priser</h3>
        <p className={styles.P}>
          Våra sponsorer bidrar med priser till de som placerar sig bäst i lång-
          och mellandistanserna. Prisbordets värde är högre i det långa loppet
          än i mellanloppet, fördelning sker efter klass (herr, dam, mixed).
          Prisutdelning sker ca 14.30. Goodiebag delas ut till de 300 först
          anmälda deltagarna som slutför Lång- och Mellanloppet.
        </p>
        <h3 className={styles.H3}>Fotografering</h3>
        <p className={styles.P}>
          Vi har en egen fotograf på plats och förbehåller oss rätten att
          publicera bilder på vår hemsida och i våra sociala medier, både i
          syfte att dokumentera och att marknadsföra loppet för att locka löpare
          till kommande lopp. Vänligen säg till på plats eller meddela oss i
          efterhand om du önskar att vi inte publicerar bilder på dig.
        </p>
        <h3 className={styles.H3}>Förmånstagare</h3>
        <p className={styles.P}>
          Stocken SOS arrangeras av den ideella föreningen Sommarträning på
          Stocken och överskottet går till att förbättra miljön för boende och
          gäster i samhället.
        </p>
        <h3 className={styles.H3}>Knattedistansen</h3>
        <p className={styles.P}>
          Knattedistansen är gratis, anmäl deltagande till
          stockensommar@gmail.com så att vi kan planera glassinköp.
        </p>
        <p
          className={styles.P}
          style={{ marginTop: "5rem", textAlign: "center" }}
        >
          Följ oss gärna på sociala medier!
          <br />
          <Social />
        </p>
      </div>
    </div>
  );
}

export default Info;
