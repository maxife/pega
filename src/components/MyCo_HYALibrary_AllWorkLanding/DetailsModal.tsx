
// DetailsModal.tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

type DetailsModalProps = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(17, 24, 39, 0.35); /* #111827, 35% */
  display: grid;
  place-items: center;
  z-index: 1000;
`;

const Panel = styled.div`
  background: #fff;
  width: 360px;
  max-width: calc(100vw - 2rem);
  border-radius: 8px;
  border: 1px solid #d1d5db;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  overflow: hidden;
`;

const Header = styled.div`
  background: #e9edf2;
  color: #1f2d3d;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
`;

const Body = styled.div`
  padding: 0.75rem 1rem 1rem;
  display: grid;
  gap: 0.5rem;
`;

const CloseBtn = styled.button`
  border: none;
  background: transparent;
  color: #374151;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1;
`;

export function DetailsModal({ open, title, onClose, children }: DetailsModalProps) {
  const panelRef = React.useRef<HTMLDivElement | null>(null);
  const lastActive = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    lastActive.current = document.activeElement as HTMLElement | null;

    const focusTarget = panelRef.current?.querySelector<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    (focusTarget ?? panelRef.current)?.focus?.();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  React.useEffect(() => {
    if (!open) return;
    return () => {
      lastActive.current?.focus?.();
    };
  }, [open]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <Backdrop
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-hidden={false}
    >
      <Panel
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="details-modal-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <Header>
          <span id="details-modal-title">{title}</span>
          <CloseBtn onClick={onClose} aria-label="Fermer">×</CloseBtn>
        </Header>
        <Body>{children}</Body>
      </Panel>
    </Backdrop>,
    document.body
   );
}
