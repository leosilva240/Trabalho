import estilo from "./css/style.module.css";
import Linha1 from "/app/damas/components/Linha1";
import Linha2 from "/app/damas/components/Linha2";

export default function Damas() {
    const linhas = Array.from({ length: 8 });
    return (
        <div className={estilo.container}>
            <div className={estilo.tabuleiro}>
                {linhas.map((_, index) =>
                    index % 2 === 0 ? <Linha1 key={index} rowIndex={index} /> : <Linha2 key={index} rowIndex={index} />
                )}
            </div>
        </div>
    );
}
