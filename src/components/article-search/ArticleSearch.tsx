import './ArticleSearch.css';

interface ArticleSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ArticleSearch({ value, onChange }: ArticleSearchProps) {
  return (
    <div className="article-search">
      <input
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
      />
    </div>
  );
}
