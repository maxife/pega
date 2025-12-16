import React, { useState } from "react";

// --------------------
// Données mockées fidèles
// --------------------
const mockRows = [
  {
    id: "4000P234567",
    numeroPolice: "4000P234567",
    souscripteur: "DM Appro",
    intermediaire: "Super courtier",
    statut: "Projet",
    prime: "10 000 €",
    sp: "50%",
    tache: "En négociation"
  },
  {
    id: "4000P234568",
    numeroPolice: "4000P234568",
    souscripteur: "COFAQ",
    intermediaire: "Assuraction",
    statut: "Assuré",
    prime: "25 000 €",
    sp: "60%",
    tache: "Demande d'option"
  },
  {
    id: "4000P234569",
    numeroPolice: "4000P234569",
    souscripteur: "ExaCOM",
    intermediaire: "Courtier SA",
    statut: "Assuré",
    prime: "7 000 €",
    sp: "45%",
    tache: "Demande d'aménagement technique"
  },
  {
    id: "4000P234570",
    numeroPolice: "4000P234570",
    souscripteur: "InterCollect",
    intermediaire: "Jemassure",
    statut: "Projet",
    prime: "15 000 €",
    sp: "40%",
    tache: "En négociation"
  },
  {
    id: "4000P234571",
    numeroPolice: "4000P234571",
    souscripteur: "NEXOCTOM",
    intermediaire: "Jemassure",
    statut: "Projet",
    prime: "15 000 €",
    sp: "40%",
    tache: "En négociation"
  },
  {
    id: "4000P234572",
    numeroPolice: "4000P234572",
    souscripteur: "ALGOREL",
    intermediaire: "Courtier&Co",
    statut: "Assuré",
    prime: "30 000 €",
    sp: "70%",
    tache: "Demande d'option"
  }
];

// --------------------
// Styles Cosmos-like
// --------------------
const container = { padding: "16px", fontFamily: "Arial, sans-serif" };

const titleStyle = { fontSize: "18px", fontWeight: 600, marginBottom: "12px" };

const tabStyle = (active: boolean) => ({
  padding: "6px 12px",
  borderRadius: "16px",
  border: "1px solid #0b5ed7",
  background: active ? "#0b5ed7" : "#ffffff",
  color: active ? "#ffffff" : "#0b5ed7",
  fontSize: "13px",
  cursor: "pointer",
  marginRight: "8px"
});

const filterStyle = (active: boolean) => ({
  padding: "4px 10px",
  borderRadius: "12px",
  border: "1px solid #d1d5db",
  background: active ? "#e5f0fb" : "#ffffff",
  fontSize: "12px",
  marginRight: "6px",
  cursor: "pointer"
});

const listWrapper = { display: "flex", gap: "16px" };

const headerRow = {
  display: "grid",
  gridTemplateColumns: "140px 140px 160px 90px 110px 70px 1fr 90px",
  padding: "8px 12px",
  fontSize: "12px",
  fontWeight: 600,
  borderBottom: "1px solid #d1d5db"
};

const rowStyle = (active: boolean) => ({
  display: "grid",
  gridTemplateColumns: "140px 140px 160px 90px 110px 70px 1fr 90px",
  padding: "10px 12px",
  fontSize: "13px",
  borderBottom: "1px solid #e5e7eb",
  background: active ? "#eef3f8" : "#ffffff",
  alignItems: "center"
});

const badge = (bg: string, color: string) => ({
  padding: "3px 10px",
  borderRadius: "999px",
  background: bg,
  color,
  fontSize: "12px",
  display: "inline-block"
});

const detailButton = {
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "#374151",
  fontSize: "13px",
  display: "flex",
  alignItems: "center",
  gap: "4px"
};

const sideCard = {
  width: "280px",
  background: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  padding: "16px",
  fontSize: "13px"
};

// --------------------
// Composant principal
// --------------------
export default function Index() {
  const [activeTab, setActiveTab] = useState("Mon portefeuille");
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selectedRow, setSelectedRow] = useState<any>(mockRows[0]);

  return (
    <div style={container}>
      <div style={titleStyle}>Mes dossiers</div>

      {/* Onglets */}
      <div style={{ marginBottom: "10px" }}>
        <button type="button" style={tabStyle(activeTab === "Mon portefeuille")} onClick={() => setActiveTab("Mon portefeuille")}>
          Mon portefeuille
        </button>
        <button type="button" style={tabStyle(activeTab === "Portefeuille étendu")} onClick={() => setActiveTab("Portefeuille étendu")}>
          Portefeuille étendu
        </button>
      </div>

      {/* Filtres */}
      <div style={{ marginBottom: "10px" }}>
        {["Tous", "Projets", "Actifs", "Clôturé"].map(f => (
          <button type="button" key={f} style={filterStyle(activeFilter === f)} onClick={() => setActiveFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      {/* Liste + Synthèse */}
      <div style={listWrapper}>
        <div style={{ flex: 1 }}>
          <div style={headerRow}>
            <div>N° police</div>
            <div>Souscripteur</div>
            <div>Intermédiaire</div>
            <div>Statut</div>
            <div>Prime</div>
            <div>S/P</div>
            <div>Tâche / Étape</div>
            <div></div>
          </div>

          {mockRows.map(row => (
            <div key={row.id} style={rowStyle(selectedRow?.id === row.id)}>
              <div>{row.numeroPolice}</div>
              <div>{row.souscripteur}</div>
              <div>{row.intermediaire}</div>
              <div>
                <span style={row.statut === "Projet" ? badge("#e0f2fe", "#0369a1") : badge("#ecfeff", "#155e75")}>
                  {row.statut}
                </span>
              </div>
              <div>{row.prime}</div>
              <div>
                <span style={badge("#f0fdf4", "#166534")}>{row.sp}</span>
              </div>
              <div>
                <span style={badge("#fff7ed", "#9a3412")}>{row.tache}</span>
              </div>
              <div style={{ textAlign: "right" }}>
                <button type="button" style={detailButton} onClick={() => setSelectedRow(row)}>
                  🔍 Détails
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Synthèse */}
        {selectedRow && (
          <div style={sideCard}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <strong>{selectedRow.souscripteur}</strong>
              <span style={badge("#e0f2fe", "#0369a1")}>{selectedRow.statut}</span>
            </div>

            <div style={{ marginBottom: "8px" }}><strong>Synthèse</strong></div>

            {["Échéance police", "Durée", "Branche", "Prime minimum", "Taux de couverture"].map((label) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <span>{label}</span>
                <span>
                  {label === "Échéance police" && "03/10/2023"}
                  {label === "Durée" && "Biennal"}
                  {label === "Branche" && "Sur mesure"}
                  {label === "Prime minimum" && "50 000 €"}
                  {label === "Taux de couverture" && "70%"}
                </span>
              </div>
            ))}

            <div style={{ marginTop: "12px", color: "#0b5ed7", cursor: "pointer" }}>
              Afficher plus de détails
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
