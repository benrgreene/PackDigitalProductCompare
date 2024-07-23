export const PluginStyles = ({ cms }) => {
  return (
    <style>{`
      .btn--compare {
        ${cms.cta?.cta_position}: 1rem;
        border-color: ${cms.cta?.cta_background_color};
        color: ${cms.cta?.cta_text_color};
        background: ${cms.cta?.cta_background_color};
        z-index: 10;
      }

      .btn--compare:hover {
        border-color: ${cms.cta?.cta_background_color_hover};
        color: ${cms.cta?.cta_text_color_hover};
        background: ${cms.cta?.cta_background_color_hover};
      }

      .compare-table[open] {
        display: flex;
      }

      .compare-table ::-webkit-scrollbar {
        width: 0.25rem;
        height: 0.25rem;
      }

      .compare-table ::-webkit-scrollbar-thumb {
        background-color: ${cms.colors?.scrollbar_color || 'var(--primary)'};
      }

      .compare-table ::-webkit-scrollbar-track-piece {
        background-color: var(--light-gray);
      }
    `}</style>
  )
}