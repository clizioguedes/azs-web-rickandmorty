type SearchProps = {
  onSearch: (value: string) => void;
  searchValue: string;
};

export function Search({ onSearch, searchValue }: SearchProps) {
  return (
    <div className="flex items-center justify-center mb-2 ">
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Pesquisar"
        value={searchValue}
        className="p-2 border-2 border-gray-300 rounded-md focus:border-red-500"
      />
    </div>
  );
}
