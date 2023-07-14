export function EmptyData() {
  return (
    <div className="flex items-center justify-center mt-8 bg-white">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <div className="text-blue-500 font-bold text-lg">Ops...</div>

          <div className="font-semibold text-md xl:text-md lg:text-md md:text-sm">
            Não há episódios assistidos no momento
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyData;
