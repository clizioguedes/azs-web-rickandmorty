export function HandleError() {
  return (
    <div
      className="container mx-auto mt-8 bg-red-100 flex flex-col border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Falha ao carregar dados</strong>
      <span className="block sm:inline">
        Espere alguns instantes e tente novamente
      </span>
    </div>
  );
}
