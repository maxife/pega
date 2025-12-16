// theme.ts
export const theme = {
  base: {
    spacing: '0.5rem',
    palette: {
      'secondary-background': '#f5f7fa', // hover doux sur les lignes
    },
    'font-size': 16,
    'font-scale': 1.2,
  },
  components: {
    table: {
      spacing: {
        'vertical-inner': true,
        'horizontal-inner': true,
        'vertical-outer': true,
        'horizontal-outer': true,
      },
      border: {
        'horizontal-inner': true,
        'vertical-inner': false,
        'horizontal-outer': true,
        'vertical-outer': false,
      },
      header: {
        'vertical-spacing': '1',
        'horizontal-spacing': '2',
        'border-width': '1px',
        'border-color': '#d1d5db',    // gris clair
        'font-size': 'md',
        'font-weight': 600,
        'foreground-color': '#1f2d3d', // bleu/gris foncé
        'background-color': '#e9edf2', // gris bleuté (bannière d’en-tête)
      },
      body: {
        'vertical-spacing': '1',
        'horizontal-spacing': '2',
        'border-width': '1px',
        'border-color': '#e5e7eb',    // séparateur doux
        'foreground-color': '#111827', // texte principal
        'background-color': '#ffffff', // fond lignes
      },
    },
  },
} as const;
