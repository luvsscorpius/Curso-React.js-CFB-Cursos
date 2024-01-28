import React from "react";
import Card from "./Card";

export default function Ap() {
    return (
        <div className="Ap">
            <Card title="Exemplo de Card" image="image.jpg">
                <p>Conteúdo do Card que pode ser qualquer coisa.</p>
                <p>Ouvindo The weeknd.</p>
                <button>Clique aqui</button>
            </Card>
        </div>
    )
}