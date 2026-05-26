import Image from 'next/image';

type SobreProps = {
  titulo?: string;
  texto?: string;
};

const Sobre = ({ 
  titulo = "Objetivo do site", 
  texto = "O principal objetivo do nosso site é ajudar você a encontrar seu novo melhor amigo de forma simples e rápida. Contamos com parceiros (casas de adoção) que têm animais prontos para receber carinho e amor. Aqui, você pode filtrar e encontrar o pet que mais combina com o seu estilo de vida, sem perder tempo navegando em vários sites." 
}: SobreProps) => {
  return (
    <>
      <div
        className="relative mt-[2.5rem] mb-[2.5rem] flex max-[800px]:mb-[8rem] max-[800px]:flex-col gap-4 bg-[#fffbeb] h-[32rem] rounded-tl-[30%] rounded-tr-[30%] rounded-bl-[30%] rounded-br-[30%]"
      >
        <Image
          src="/images/cachorropatacima.png"
          alt="Imagem de um cachorro com uma pata pra cima"
          width={550}
          height={550}
          className="h-[34.375rem] w-[34.375rem] max-[1400px]:h-[13.375rem] max-[1400px]:w-[13.375rem] max-[800px]:h-[9.375rem] max-[800px]:w-[9.375rem]"
        />

        <div className="mx-auto mt-4 px-4">
          {/* 3. Trocamos o texto travado pelas variáveis */}
          <h1 className="w-fit text-[3rem] max-[800px]:text-center max-[800px]:text-[2.5rem] font- m-auto text-[#292929]">
            {titulo}
          </h1>
          <p className="font- text-justify text-[1.5rem] max-[800px]:text-center max-[800px]:text-[1rem] mt-4 text-[#292929]">  
            {texto}
          </p>
        </div>
        
        <Image
          src="/images/gatopracima.png"
          alt="Imagem de um gato com a pata pra cima"
          width={550}
          height={550}
          className="image-gato h-[34.375rem] w-[34.375rem] max-[800px]:h-[9.375rem] max-[800px]:w-[9.375rem] max-[1400px]:h-[13.375rem] max-[1400px]:w-[13.375rem] max-[800px]:ml-auto max-[400px]:hidden"
        />
      </div>
    </>
  );
};

export default Sobre;