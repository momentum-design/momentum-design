/** @jsxImportSource preact */
import iconsManifest from '@momentum-design/icons/dist/manifest.json';
import { useCallback, useMemo, useState } from 'preact/hooks';
import './IconTable.css';

type Props = {
  icons: object;
};

export const IconTable = ({ icons }: Props) => {
  if (Object.entries(icons).length === 0) {
    return <p>No icons found...</p>;
  }

  const render = useMemo(
    () => (
      <div className="iconGrid">
        {Object.entries(icons).map(([key, path]) => {
          const finalPath = `${path.replace('./svg', '/momentum-design/icons')}`;
          return (
            <div className="iconWrapper">
              <img className={(!key.includes('colored') && 'icon') || ''} src={finalPath} />
              <div className="nameAnchor">
                <div className="nameWrapper">
                  <code>{key}</code>
                  <a href={finalPath} download={key} className="nameWrapper">Download</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    ),
    [icons],
  );

  return render;
};

export const Pagination = () => {
  const PAGE_SIZE = 50;
  const [currentPage, setCurrentPage] = useState(1);
  const [weight, setWeight] = useState('');
  const [query, setQuery] = useState('');

  const onQueryChange = useCallback(
    (e: any) => {
      setQuery(e?.target?.value);
    },
    [setQuery],
  );

  const onClickNext = useCallback(() => {
    setCurrentPage((page) => page + 1);
  }, [setCurrentPage]);

  const onClickPrev = useCallback(() => {
    setCurrentPage((page) => (currentPage === 1 ? 1 : page - 1));
  }, [setCurrentPage]);

  const onWeightChange = useCallback(
    (event: any) => {
      setWeight(event?.target?.value);
    },
    [setWeight],
  );

  const paginatedItems = useMemo(
    () => Object.entries(iconsManifest)
      .filter(([key]) => (query ? key.includes(query) && key.includes(weight) : key.includes(weight)))
      .slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
      .reduce(
        (output, [key, value]) => ({
          ...output,
          [key]: value,
        }),
        {},
      ),
    [currentPage, weight, iconsManifest, query],
  );

  return (
    <div>
      <p>Total Icons in the library - {Object.keys(iconsManifest).length}</p>
      <p>Current Page: {currentPage}</p>
      <div className="iconFilters">
        <input placeholder="Search by icon name" className="queryInput" type="text" onInput={onQueryChange} />
        <select className="weightSelect" value={weight} onChange={onWeightChange}>
          <option value="">Any</option>
          <option value="regular">Regular</option>
          <option value="light">Light</option>
          <option value="bold">Bold</option>
          <option value="filled">Filled</option>
        </select>
      </div>
      {!!query && <div className="query">Searching for: {query}</div>}
      <IconTable icons={paginatedItems} />
      <div className="paginationButtons">
        <button disabled={currentPage === 1} onClick={onClickPrev}>
          Prev
        </button>
        <button onClick={onClickNext}>Next</button>
      </div>
    </div>
  );
};
