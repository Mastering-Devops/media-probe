import './ArticleSearch.css';

interface ArticleSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ArticleSearch({ value, onChange }: ArticleSearchProps) {
  return (
    <div className="article-search-container">
      <input
        data-testid="search-input"
        placeholder="Buscar"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
      />
    </div>
  );
}
