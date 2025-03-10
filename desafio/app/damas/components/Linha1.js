import estilo from "../css/style.module.css";

export default function Linha1({ rowIndex }) {
    const casas = Array.from({ length: 8 });
    return (
        <div style={{ display: "flex" }}>
            {casas.map((_, index) => {
                const isBlack = index % 2 !== 0; // Casas pretas estão nos índices ímpares
                const showPiece = isBlack && (rowIndex < 3 || rowIndex > 4); // Apenas nas 3 primeiras e últimas linhas
                const pieceColor = rowIndex < 3 ? estilo.pecaAzul : estilo.pecaVermelha; // Cor da peça
                return (
                    <div key={index} className={isBlack ? estilo.casapreta : estilo.casabranca}>
                        {showPiece && <div className={pieceColor}></div>}
                    </div>
                );
            })}
        </div>
    );
}
