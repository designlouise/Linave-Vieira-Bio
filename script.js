import React from "react";

export default function HeaderCard() {
  return (
    <div className="w-full max-w-md mx-auto bg-[#5D66AA] rounded-b-[100px] shadow-lg relative overflow-hidden">
      {/* Imagem principal */}
      <div className="relative w-full h-[320px] overflow-hidden">
        <img
          src="/images/linave.jpg" // substitua pela sua imagem
          alt="Foto principal"
          className="object-cover object-center w-full h-full scale-[1.05]" // rosto ainda em destaque, mas menor
          style={{ objectPosition: "center 25%" }} // mantém o foco no rosto
        />
        {/* Curva inferior */}
        <div className="absolute bottom-[-1px] left-0 w-full h-[100px] bg-[#5D66AA] rounded-t-[100px]" />
      </div>

      {/* Logo com efeito de bolha */}
      <div className="absolute bottom-[-55px] left-1/2 -translate-x-1/2 z-10">
        <div className="relative w-[120px] h-[120px] rounded-full bg-gradient-to-b from-[#6C72C9] to-[#4B528F] shadow-[inset_0_2px_6px_rgba(255,255,255,0.5),_0_4px_10px_rgba(0,0,0,0.25)] flex items-center justify-center border-[3px] border-[#E5B8B7]">
          <img
            src="/images/logo.png" // substitua pela sua logo
            alt="Logo"
            className="w-[70px] h-[70px] object-contain"
          />
          {/* Reflexo estilo bolha */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/10 to-white/40 blur-[2px]" />
        </div>
      </div>
    </div>
  );
}
