import { useState } from "react";

function Formulario() {
    const [step, setStep] = useState(1); // etapa atual
    const totalSteps = 4;

    // Inputs separados por etapa
    const steps = [
        [
            "Nome completo",
            "Idade",
            "E-mail",
            "Telefone",
            "Endereço",
        ],
        [
            "Altura",
            "Peso",
            "Pressão arterial",
            "Frequência cardíaca",
            "Alergias",
        ],
        [
            "Doenças pré-existentes",
            "Medicamentos em uso",
            "Histórico familiar",
            "Cirurgias anteriores",
            "Fuma/ingere álcool?",
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
