/** @jsxImportSource preact */
import brandvisualsManifest from '@momentum-design/brand-visuals/dist/manifest.json';
import { useCallback, useMemo, useState } from 'preact/hooks';
import './BrandVisualsTable.css';

type Props = {
  brandvisuals: object;
  type: string;
};

export const BrandvisualsTable = ({ brandvisuals, type }: Props) => {
  if (Object.entries(brandvisuals).length === 0) {
    return <p>No Brand Visuals found...</p>;
  }

  const classNameSuffix = type === '' ? 'light' : type;

  const render = useMemo(
    () => (
      <div className={`brandvisualsGrid grid192 brandvisualsGrid-${classNameSuffix}`}>
        {Object.entries(brandvisuals).map(([key, path]) => {
          let finalPath = `${path.replace('./backgrounds', '/momentum-design/brand-visuals')}`;
          finalPath = `${finalPath.replace('./images', '/momentum-design/brand-visuals')}`;
          finalPath = `${finalPath.replace('./logos', '/momentum-design/brand-visuals')}`;

          return (
            <div className="brandvisualsWrapper">
              <div className="nameAnchor">
                <div className="nameWrapper">
                  <code >{key}</code>
                </div>
              </div>
              <img src={finalPath} className="brandvisualsImg" />
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
  const [type, setType] = useState('dark');
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

  const onTypeChange = useCallback(
    (event: any) => {
      setType(event?.target?.value);
      setCurrentPage(1);
    },
    [setType],
  );

  const filterByType = useCallback((key: string) => {
    // Empty string means 'Other' type
    if (type === '') {
      return !key.includes('dark') && !key.includes('light');
    }
    return key.includes(type);
  }, [type]);

  const filteredItems = useMemo(
    () => Object.entries(brandvisualsManifest).filter(([key]) => (
      query ? key.includes(query) && filterByType(key) : filterByType(key))),
    [brandvisualsManifest, filterByType, query],
  );

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
        <select placeholder="Type" className="typeSelect" value={type} onChange={onTypeChange}>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="">Other</option>
        </select>
      </div>
      {!!query && <div className="query">Searching for: {query}</div>}
      <BrandvisualsTable brandvisuals={paginatedItems} type={type} />
      <div className="paginationButtons">
        <button disabled={currentPage === 1} onClick={onClickPrev}>
          Prev
        </button>
        <button disabled={isNextButtonDisabled} onClick={onClickNext}>Next</button>
      </div>
    </div>
  );
};
