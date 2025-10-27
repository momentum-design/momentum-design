/** @jsxImportSource preact */
import brandvisualsManifest from '@momentum-design/brand-visuals/dist/manifest.json';
import { useCallback, useMemo, useState } from 'preact/hooks';
import './BrandVisualsTable.css';

type Props = {
  brandvisuals: object;
};

const getBackgroundClass = (key: string) => {
  if (key.includes('-dark-') || key.endsWith('-dark')) {
    return 'brandvisualsGrid-dark';
  }
  if (key.includes('-light-') || key.endsWith('-light')) {
    return 'brandvisualsGrid-light';
  }
  return '';
};

export const BrandvisualsTable = ({ brandvisuals }: Props) => {
  if (Object.entries(brandvisuals).length === 0) {
    return <p>No Brand Visuals found...</p>;
  }

  const render = useMemo(
    () => (
      <div className="brandvisualsGrid grid192">
        {Object.entries(brandvisuals).map(([key, path]) => {
          const finalPath = path.replace(/^\.\/(?:png|svg)/, '/brand-visuals');
          const backgroundClass = getBackgroundClass(key);

          return (
            <div className={`brandvisualsWrapper ${backgroundClass}`} key={key}>
              <div className="nameAnchor">
                <div className="nameWrapper">
                  <code>{key}</code>
                </div>
              </div>
              <img src={finalPath} className="brandvisualsImg" alt={key} />
            </div>
          );
        })}
      </div>
    ),
    [brandvisuals],
  );

  return render;
};

export const Pagination = () => {
  const PAGE_SIZE = 50;
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');

  const onQueryChange = useCallback(
    (e: any) => {
      setQuery(e?.target?.value);
      setCurrentPage(1);
    },
    [setQuery],
  );

  const onClickNext = useCallback(() => {
    setCurrentPage((page) => page + 1);
  }, [setCurrentPage]);

  const onClickPrev = useCallback(() => {
    setCurrentPage((page) => (currentPage === 1 ? 1 : page - 1));
  }, [setCurrentPage, currentPage]);

  const filteredItems = useMemo(() => {
    const entries = Object.entries(brandvisualsManifest);
    return entries.filter(([key]) => (query ? key.includes(query) : true));
  }, [brandvisualsManifest, query]);

  const paginatedItems = useMemo(
    () => filteredItems.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
      .reduce(
        (output, [key, value]) => ({
          ...output,
          [key]: value,
        }),
        {},
      ),
    [currentPage, filteredItems],
  );

  const filteredItemsLength = Object.keys(filteredItems).length;
  const totalPages = Math.ceil(filteredItemsLength / PAGE_SIZE);
  const isNextButtonDisabled = currentPage === totalPages;

  return (
    <div>
      <div class="headerTextWrapper">
        <p>Total Brand Visuals in the library - {Object.keys(brandvisualsManifest).length}</p>
        <p>Current Page: {currentPage}</p>
      </div>
      <div className="brandvisualsFilters">
        <input placeholder="Search by Brand Visual name" className="queryInput" type="text" onInput={onQueryChange} />
      </div>
      {!!query && <div className="query">Searching for: {query}</div>}
      <BrandvisualsTable brandvisuals={paginatedItems} />
      <div className="paginationButtons">
        <button disabled={currentPage === 1} onClick={onClickPrev}>
          Prev
        </button>
        <button disabled={isNextButtonDisabled} onClick={onClickNext}>Next</button>
      </div>
    </div>
  );
};
