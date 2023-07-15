import { Character } from "@/models/Character";
import Image from "next/image";

type CardCaracterProps = {
  character: Character;
};

export function CardCharacter({ character }: CardCaracterProps) {
  return (
    <div className="flex items-center justify-start flex-col flex-wrap border-2 border-gray-100 px-2 py-4 w-52">
      <div className="mb-2">
        <Image
          width={120}
          height={120}
          src={character.image}
          alt="Logomarca"
          className="rounded-full"
        />
      </div>

      <div className="flex flex-col flex-wrap justify-start items-center">
        <div className="flex flex-row items-center gap-1 flex-wrap justify-start">
          <p className="text-xs leading-6 text-gray-900">Nome:</p>
          <p className="text-xs leading-5 text-gray-500">{`${character.name}`}</p>
        </div>

        <div className="flex flex-row items-center gap-1">
          <p className="text-xs leading-6 text-gray-900">Espécie:</p>
          <p className="text-xs leading-5 text-gray-500 flex-wrap">{`${character.species}`}</p>
        </div>

        <div className="flex flex-row items-center gap-1">
          <p className="text-xs leading-6 text-gray-900">Status: </p>
          <p className="text-xs leading-5 text-gray-500">{`${character.status}`}</p>
        </div>
      </div>
    </div>
  );
}
