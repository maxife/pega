// PoliceRow.ts
export type PoliceRow = {
  id: string | number;     // requis par Table.js
  numeroPolice: string;    // "N° police"
  souscripteur: string;
  intermediaire: string;
  statut: string;
  prime: string | number;  // garde la main sur le format d’affichage
  sp: string;              // "S/P" (%) ex: "50%"
  tacheEtape: string;      // "Tâche / Etape"
};

export const POLICES: PoliceRow[] = [
  {
    id: '4000P234567',
    numeroPolice: '4000P234567',
    souscripteur: 'DM Apro',
    intermediaire: 'Super courtier',
    statut: 'Projet',
    prime: '10 000 €',
    sp: '50%',
    tacheEtape: 'En négociation',
  },
  {
    id: '4000P234568',
    numeroPolice: '4000P234568',
    souscripteur: 'COFAQ',
    intermediaire: 'Assuraction',
    statut: 'Assuré',
    prime: 25000,
    sp: '60%',
    tacheEtape: "Demande d'option",
  },
  {
    id: '4000P234569',
    numeroPolice: '4000P234569',
    souscripteur: 'ExaCOM',
    intermediaire: 'Courtier SA',
    statut: 'Assuré',
    prime: 7000,
    sp: '45%',
    tacheEtape: "Demande d'aménagement technique",
  },
  {
    id: '4000P234570',
    numeroPolice: '4000P234570',
    souscripteur: 'InterCollect',
    intermediaire: 'Jemassure',
    statut: 'Projet',
    prime: 15000,
    sp: '40%',
    tacheEtape: 'En négociation',
  },
  {
    id: '4000P234571',
    numeroPolice: '4000P234571',
    souscripteur: 'NEXOCTOM',
    intermediaire: 'Jemassure',
    statut: 'Projet',
    prime: 15000,
    sp: '40%',
    tacheEtape: 'En négociation',
  },
  {
    id: '4000P234572',
    numeroPolice: '4000P234572',
    souscripteur: 'ALGOREL',
    intermediaire: 'Courtier&Co',
    statut: 'Assuré',
    prime: 30000,
    sp: '70%',
    tacheEtape: "Demande d'option",
  },
];
