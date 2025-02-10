import game from "./Game";

export default class dialogue {
    constructor(game) {
        this.game = game
        this.canvas = this.game.canvas
        this.posX = 100
        this.posY = 100
        this.text = "'Hej, jag heter rudolf. Välkommen till mitt fina hem, jag har förberett mig för ditt besök. Man blir nästen lite nervös, du är så fint uppklädd till skillnad från mig. Jag hoppas att du känner dig varmt välkommen här. Man börjar bli lite hungrig ändå och på tal om att vara hungrig, om jag skulle laga mat till dig, vad skulle du vilja ha?'"
        this.dialogue = document.createElement("p")
        this.maxIndex = 0
        this.index = 0
        this.setIndex = 0
        this.score = 0
        this.happiness1 = [1, -1, 1, -1]
        this.happiness2 = [-1, 1, -1, 1]
        this.dialogues = [
            this.dialogueIndex = ["'Man ska ju sannerligen alltid äta sina grönsaker, bra tänkt av dig. Jag ska lägga det på minnet för din skull'",
                 "'Vem vet, någon gång i framtiden kanske jag får överraska dig med en fräsch sallad på morgonen. Tro det eller ej, jag är faktiskt ganska bra på att laga sallader så din gröna måltid är i goda händer'",
                  "'Men nog om mig och mina färdigheter, jag vill veta mer om dig. Alla har vi någonting som vi gör för nöjets skull, så hur spenderar du din fritid, har du några hobbies?'"],
            this.dialogueIndex2 = ["'Jägare? En såndär person som går ut i skogen och.. skjuter djur? Skjuter dem för att d-dra hem dem och göra filé av dem? D-Det måste ta mycket tålamod och viljestyrka..'",
                "Du tycker dig se hur det rycker till i Rudolfs öga, men du kanske bara inbillade dig. Rudolf kliar sig hastigt i bakhuvudet och sväljer, men snart så är han tillbaka till sitt vanliga jag.",
                "'Nog ska alla få ha en hobby utan att det blir fördomar ändå. Själv gillar jag att åka pulka ner för långa snöbackar. Det finns ingenting som får en att känna sig så vid liv! Just det.. vid liv.. Förresten vad är det du har på dig för något? Det ser väldigt fint ut.'"],
            this.dialogueIndex3 = ["'Nämen oj! Jag visste inte att du hade den typen av pengar. Du fortsätter att överraska mig! Som sagt, den är väldigt fin'",
                                    "'Jag blir nästan lite generad. Att du klär upp dig så fint för min skull, aldrig i mina vildaste fantasier hade jag kunnat ana. Jag önskar att jag hade råd att förbereda mig på samma sätt. Jag må vara tomtens mest lojala ren, men han betalar mig inte så mycket. Han betalar mig faktiskt inte alls. Men det är lugnt, jag gör det inte för pengar i alla fall.'"],
            this.dialogueIndex4 = ["'Sommaren säger du? Jag förstår hur du tänker, men jag håller inte riktigt med. Man blir så varm och svettig under sommaren, det känns lite obekvämt'",
                                    "Han kliar sig lite generat bakom huvudet. Du kan se att han inte är nöjd med ditt svar, men han vill ändå vara artig. Han måste ha uppfostrats väl den renen.",
                                    "'Men alla har vi våra egna åsikter! Det är okej att inte alltid hålla med varandra, våra olikheter kan föra oss samman. Låt oss inte splittras på grund av våra diverse åsikter. Jag tycker till och med att det kan vara lite spännande att ha motsatta åsikter'",
                                    "Rudolf observerar dig från top till botten. Det här är stunden du har väntat på. Kommer du få Rudolfs bekräftelse eller inte? En meningsfull tystnad befaller er.", ". . ."
            ]
            ]
        this.dialogues2 = [
            this.dialogueIndexS = ["'Du.. du gillar att käka hovdjur säger du? F-Fantastiskt! Det är inte som att j-jag är ett h-hovdjur själv.'",
                "Rudolf ger dig ett nervöst leende. Han är svårläst, och du finner det ytters svårt att avgöra om hans nervösa leende innebär att han är rädd för dig, eller att du borde vara rädd för honom..",
                "'Kul att du delar med dig av dina preferenser. Tyvärr så är jag inte så erfaren med att.. tillaga hovdjur.. och jag hoppas att det inte är ett problem för dig. Men nog om det, jag vill veta mer om dig. Hur spenderar du din fritid? Har du några hobbies?'"],
            this.dialogueIndexS2 = ["Välgörenhet alltså? Vad omtänksamt av dig! Det är ju sant att när man själv ger till andra och sprider glädje så känns det bra i hjärtat.",
                                    "Rudolf ger dig ett varmt leende och signalerar tummen upp. Han verkar väldigt imponerad av ditt svar. Hans blick faller sedan på kläderna som han tidigare gett dig komplimanger för.",
                                    "Jag vet att jag redan sagt till dig att du är väldigt fint klädd, men vad är det du har på dig egentligen?"],
            this.dialogueIndexS3 = ["'Renpäls? Du har alltså pälsen av en d-död ren på dig? F-Fint! J-Ja, jag tycker det ser m-mjukt och.. ja, jätte fint som sagt! D-Den måste ha kostat dig mycket. E-Eller du kanske g-gjorde den själv?'",
                                    "'Tänka sig att j-jag inte insåg det själv! Det är ju rätt f-färg och allt! Jag borde ha forstått det från f-första början, jag som ändå är en re-'",
                                    "'EN HJORT! Jag som ändå är en hjort ja, det är k-klart att jag inte insåg det. H-Hade det inte varit knasigt om j-jag var en r-ren va?'",
                                    "Rudolf andas snabbt. Om det här hade varit en film så hade du nog kunnat höra hur snabbt hans hjärta slår. Svett rinner ner från hans panna. Han ser ut som att han är nära att svimma."],
            this.dialogueIndexS4 = ["Rudolf lyser upp, om än för ett kort ögonblick. Han nickar långsamt på sitt huvud för sig själv med en nöjd blick.",
                                    "'Jo jag håller med dig! Vintern är definitivt den bästa årstiden. Det finns så mycket man kan göra ute i snön, som att åka pulka eller bygga snögubbar!'",
                                    "Rudolf observerar dig från top till botten. Det här är stunden du har väntat på. Kommer du få Rudolfs bekräftelse eller inte? En meningsfull tystnad befaller er.", ". . ."]
        ]
    }

    create(text) {
        let box = document.createElement("div")
        box.classList.add("textBox")
        this.dialogue.textContent = this.text
        box.appendChild(this.dialogue)
        this.canvas.parentNode.appendChild(box)
    }
    change() {
        this.dialogue.textContent = this.text
    }
}