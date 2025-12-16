
import type { StoryObj, Meta } from '@storybook/react';
import AllWorkLanding from './index';

// -------------------------
// Mock PCore for Storybook
// -------------------------
const setPCore = () => {
  (window as any).PCore = {
    getConstants: () => ({ CASE_INFO: {} }),
    getActions: () => ({
      ACTION_OPENWORKBYHANDLE: 'openWorkByHandle',
      openWorkByHandle: (pzInsKey: string) => {
        // eslint-disable-next-line no-console
        console.log('[Mock] openWorkByHandle:', pzInsKey);
      },
      openWorkByID: (pyID: string) => {
        // eslint-disable-next-line no-console
        console.log('[Mock] openWorkByID:', pyID);
      }
    }),
    getSemanticUrlUtils: () => ({
      getResolvedSemanticURL: () => '/case/C-1'
    }),
    getDataApiUtils: () => ({
      // IMPORTANT : notre composant appelle getDataPage(...)
      getDataPage: (dpName: string) => {
        // eslint-disable-next-line no-console
        console.log('[Mock] getDataPage:', dpName);
        // On renvoie un shape proche de ce que getDataPage retourne côté Infinity
        // => { data: { pxResults: [...] } } ou { pxResults: [...] } selon versions
        const sample = [
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
  }
        ];
        return Promise.resolve({ data: { pxResults: sample } });
      }
    }),
    getPubSubUtils: () => ({
      publish: () => {
        /* noop */
      }
    })
  };
};

// Fournit un getPConnect minimal – suffisant pour val() dans index.tsx
const getMockPConnect = () => ({
  getContextName: () => '',
  getValue: (ref: string) => {
    // petite implémentation "safe"
    // eslint-disable-next-line no-console
    console.log('[Mock] getValue called for:', ref);
    return undefined;
  }
});

// -------------------------
// Storybook meta
// -------------------------
const meta: Meta<typeof AllWorkLanding> = {
  title: 'Widgets/All Work Landing',
  component: AllWorkLanding,
  argTypes: {
    // On masque les props pilotées par la plateforme ou par setPCore()
    getPConnect: { table: { disable: true } }
  },
  parameters: {
    a11y: {
      context: '#storybook-root',
      // Ex: désactiver une règle si elle gêne la démo (optionnel)
      config: { rules: [{ id: 'list', enabled: false }] }
    }
  }
};
export default meta;

// -------------------------
// Stories
// -------------------------
type Story = StoryObj<typeof AllWorkLanding>;

/** Démo par défaut : D_pyAllWork + mapping de colonnes classique */
export const Default: Story = {
  render: args => {
    setPCore();
    const props = {
      ...args,
      getPConnect: getMockPConnect
    };
    return <AllWorkLanding {...props} />;
  },
  args: {
    heading: 'Mes dossiers',
    dataPageName: 'D_pyAllWork',

    // Colonnes
    colCaseID: '.pyID',
    colLabel: '.pyLabel',
    colStatus: '.pyStatusWork',
    colCreatedOn: '.pxCreateDateTime',
    colCreator: '.pxCreateOpName',
    colClass: '.pxObjClass',

    // Filtres
    enableFilters: true,
    filterFieldRef: '.pyStatusWork',
    tokenProjets: 'Projet',
    tokenActifs: 'Actif',
    tokenCloture: 'Clôturé',

    // Preview
    caseIDProperty: '.pyID',
    caseHandleProperty: '.pzInsKey',
    previewWidth: '30rem',
    previewHeader: '.pyLabel',
    previewOwner: '.pxCreateOpName',
    previewStatus: '.pyStatusWork',
    previewCreatedOn: '.pxCreateDateTime',
    previewClass: '.pxObjClass',
    previewDescription: '.pyDescription',

    // Tableau
    enableSort: true,
    enablePagination: true,
    pageSize: "25"
  }
};

/** Variante avec filtres actifs sur 'Actif' pour illustrer la vue */
export const WithFilters: Story = {
  render: args => {
    setPCore();
    const props = {
      ...args,
      getPConnect: getMockPConnect
    };
    return <AllWorkLanding {...props} />;
  },
  args: {
    heading: 'Mes dossiers – Actifs',
    dataPageName: 'D_pyAllWork',
    colCaseID: '.pyID',
    colLabel: '.pyLabel',
    colStatus: '.pyStatusWork',
    colCreatedOn: '.pxCreateDateTime',
    colCreator: '.pxCreateOpName',
    colClass: '.pxObjClass',

    enableFilters: true,
    filterFieldRef: '.pyStatusWork',
    tokenProjets: 'Projet',
    tokenActifs: 'Actif',
    tokenCloture: 'Clôturé',

    caseIDProperty: '.pyID',
    caseHandleProperty: '.pzInsKey',
    previewWidth: '30rem',
    previewHeader: '.pyLabel',
    previewOwner: '.pxCreateOpName',
    previewStatus: '.pyStatusWork',
    previewCreatedOn: '.pxCreateDateTime',
    previewClass: '.pxObjClass',
    previewDescription: '.pyDescription',

    enableSort: true,
    enablePagination: true,
    pageSize: "25"
  }
};
