import { Injectable } from '@angular/core';
 
@Injectable()
export class Checklists {
 
    public checklist1 = [
        { val: 'Samarbeidsmøte på sykehuset med pasient / pårørende, fastlege og sykehusavdeling', isChecked: false },
        { val: 'Avklare: diagnose, hjelpebehov, pleiepenger, hjelpemidler - OBS: fysioterapi, forventninger, tidspunkt for hjemreise, åpen retur? kontakt med spesialisthelsetjenesten', isChecked: false },
        { val: 'Sikre at fastlegen informeres - er informert om hjemreise', isChecked: false },
        { val: 'Avklare tilgjengelighet utenom kontortid med fastlege', isChecked: false },
        { val: 'Vurdere / utarbeide "individuell plan til bruk i palliasjon"', isChecked: false },
        { val: 'Nødvendige medisiner for de første døgnene sendes med pasienten', isChecked: false },
        { val: 'E-resepter sendes fra sykehus og/eller fastlege', isChecked: false },
        { val: 'Sjekke at nødvendige medisiner er tilgjengelig på apotek, evt. bestille disse', isChecked: false },
        { val: 'Dokumentere i elektronisk pasientjournal', isChecked: false }
      ];

      public checklist2 = [
        { val: 'Kontinuerlig oppfølging av aktuelle oppgaver fra før pasienten kommer hjem. Informer pårørende om rett til pleiepenger!', isChecked: false },
        { val: 'Pasienten og pårørende får hilse på sin primærkontakt', isChecked: false },
        { val: 'Ansvarlige sykepleiere på kveld / helg / hellidag gjør seg kjent hjemme hos pasienten', isChecked: false },
        { val: 'Sikre oversikt over medisiner, resepter, og utstyr. Bestill nye dersom behov', isChecked: false },
        { val: 'Dokumentere i elektronisk pasientjournal (EPJ)', isChecked: false }  
      ];

      public checklist3 = [
        { val: 'Kontakt fastlegen for avtale om mulig hjemmebesøk', isChecked: false },
        { val: 'Oppdater pasientens medisinoversikt ved behov', isChecked: false },
        { val: 'Følg opp pårørende. Vurder behov for avlasting / "time-out"?', isChecked: false },
        { val: 'Vurder avlasting for pårørende på natt', isChecked: false },
        { val: 'Hyppig kontakt med fastlege - avklare rolle ved dødsfall', isChecked: false }
      ];

      public checklist4 = [
        { val: 'Fastlege skriver dødsattest - i hjemmet', isChecked: false },
        { val: 'Brosjyre:\n"Til deg som har mistet en av dine nærmeste" (KLB), "Når en av dine nærmeste dør" (H.Dir)', isChecked: false },
        { val: 'Personalets refleksjon og evaluering av prosessen', isChecked: false }
      ];
 
    constructor() {}

}