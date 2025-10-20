import React from "react";

export default function HeaderCard() {
  return (
    <div className="w-full max-w-md mx-auto bg-[#5D66AA] rounded-b-[120px] shadow-lg relative overflow-hidden">
      {/* Imagem principal */}
      <div className="relative w-full h-[380px] overflow-hidden">
        <img
          src="/images/linave.jpg" // Substitua pela sua imagem real
          alt="Foto principal"
          className="object-cover object-center w-full h-full scale-110" // aproxima o rosto
          style={{ objectPosition: "center 20%" }} // foco no rosto
        />
        {/* Curva inferior */}
        <div className="absolute bottom-[-1px] left-0 w-full h-[120px] bg-[#5D66AA] rounded-t-[120px]" />
      </div>

      {/* Logo com efeito de bolha */}
      <div className="absolute bottom-[-65px] left-1/2 -translate-x-1/2 z-10">
        <div className="relative w-[140px] h-[140px] rounded-full bg-gradient-to-b from-[#6C72C9] to-[#4B528F] shadow-[inset_0_2px_8px_rgba(255,255,255,0.5),_0_4px_15px_rgba(0,0,0,0.25)] flex items-center justify-center">
          <img
            src="/images/logo.png" // Substitua pela logo
            alt="Logo"
            className="w-[85px] h-[85px] object-contain"
          />
          {/* Reflexo estilo bolha */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/10 to-white/40 blur-[2px]" />
        </div>
      </div>
    </div>
  );
}
