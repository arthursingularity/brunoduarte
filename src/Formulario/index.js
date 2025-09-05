import { useState } from "react";

function Formulario() {
    const [step, setStep] = useState(1); // etapa atual
    const totalSteps = 4;

    // Inputs separados por etapa
    const steps = [
        [
            "Nome completo",
            "Email",
            "Telefone",
            "Data de nascimento",
            "Endereço",
            "Profissão",
            "FC repouso",
            "Peso",
            "Altura",
            "O que você espera com a consultoria online?",
            "Qual é o seu objetivo principal? Se há mais de um, cite-os",
            "Profissão",
        ],
        [
            "Onde pretende treinar?",
            "Possui equipamentos em casa? Quais",
            "Quantos dias por semana e quantas horas por dia você se propõe a treinar?",
            "Pratica atividade física? Se sim, qual/quais?",
            "A quanto tempo pratica?",
            "Caso tenha parado a prática, a quanto tempo está parado(a)?",
            "Existe alguma parte do seu corpo que o/a incomoda esteticamente? Se sim, qual ou quais?",
            "Pela sua percepção, você acha que ganha massa muscular facilmente?",
            "Faz quantas refeições por dia?",
            "Faz dieta e/ou suplementação? Explique"
        ],
        [
            "Fuma? Quantos cigarros por dia? Se parou, a quanto tempo?",
            "Consome bebidas alcoólicas? Quais e com qual frequência?",
            "Possui colesterol, triglicérides ou glicose alta?",
            "Possui alguma alteração cardíaca? Algum parente com problemas cardíacos? Quem?",
            "É hipertenso?",
            "É diabético, ou possui algum parente que seja?",
            "Tem problemas pulmonares?",
            "Toma algum tipo de medicamento? Qual?",
            "Durante a prática de exercícios, alguma vez já sentiu tonteira?",
        ],
        [
            "Pratica atividade física?",
            "Quantas horas de sono?",
            "Nível de estresse",
            "Alimentação diária",
            "Objetivo do atendimento",
        ],
    ];

    const handleNext = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        } else {
            // Ação final do formulário
            alert("Formulário finalizado! 🎉");
        }
    };

    const handlePrev = () => {
        if (step > 1) setStep(step - 1);
    };

    const progressWidth = `${(step / totalSteps) * 100}%`;

    return (
        <div className="font-light flex justify-center text-white p-6">
            <div className="w-[500px]">
                {/* Título */}
                <p className="text-center text-bgreen text-[36px] font-medium">
                    Anamnese
                </p>
                <hr className="border-1 border-neutral-500 mt-8" />
                <p className="text-center mt-5">
                    Responda ao questionário para que possamos obter melhores resultados.
                </p>

                {/* Barra de progresso */}
                <div className="w-full bg-gray-700 h-2 rounded mt-8">
                    <div
                        className="bg-bgreen h-2 rounded transition-all duration-500"
                        style={{ width: progressWidth }}
                    ></div>
                </div>
                <p className="text-center mt-2">Etapa {step} de {totalSteps}</p>

                {/* Formulário */}
                <div className="flex justify-center mt-10">
                    <form className="w-full">
                        {/* Container dos inputs */}
                        <div className="space-y-4">
                            {steps[step - 1].map((label, index) => (
                                <div key={index} className="flex flex-col space-y-1">
                                    <p>{label}</p>
                                    <input
                                        className="bg-transparent border border-neutral-300 rounded h-[43px] caret-bgreen pl-2 outline-none hover:border-bgreen"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Botões - fora do container dos inputs */}
                        <div className="flex justify-between mt-10">
                            {step > 1 ? (
                                <button
                                    type="button"
                                    onClick={handlePrev}
                                    className="buttonHover px-6 py-2 rounded text-black text-[18px] font-medium bg-neutral-400"
                                >
                                    Voltar
                                </button>
                            ) : (
                                <div></div>
                            )}

                            <button
                                type="button"
                                onClick={handleNext}
                                className="buttonHover px-6 py-2 rounded text-black text-[18px] font-medium bg-verde"
                            >
                                {step === totalSteps ? "Finalizar" : "Próximo"}
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
}

export default Formulario;
