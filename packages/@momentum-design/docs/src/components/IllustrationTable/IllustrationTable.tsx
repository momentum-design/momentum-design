/** @jsxImportSource preact */
import illustrationsManifest from '@momentum-design/illustrations/dist/manifest.json';
import { useCallback, useMemo, useState } from 'preact/hooks';
import './IllustrationTable.css';

type Props = {
  illustrations: object;
  size: string;
};

const getSize = (key: string) => {
  if (key.includes('320')) return 320;
  if (key.includes('192')) return 192;
  if (key.includes('120')) return 120;
  if (key.includes('60')) return 60;
  return 320;
};

export const IllustrationTable = ({ illustrations, size }: Props) => {
  if (Object.entries(illustrations).length === 0) {
    return <p>No illustrations found...</p>;
  }

  const render = useMemo(
    () => (
      <div className={`illustrationGrid grid${getSize(size)}`}>
        {Object.entries(illustrations).map(([key, path]) => {
          const finalPath = `${path.replace('./svg', '/momentum-design/illustrations')}`;
          return (
            <div className="illustrationWrapper">
              <img
                style={{ maxWidth: `${getSize(key)}px` }}
                src={finalPath}
              />
              <div className="nameAnchor">
                <div className="nameWrapper">
                  <code >{key}</code>
                  <a href={finalPath} download={key} className="nameWrapper">Download</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    ),
    [illustrations],
  );

  return render;
};

export const Pagination = () => {
  const PAGE_SIZE = 50;
  const [currentPage, setCurrentPage] = useState(1);
  const [size, setSize] = useState('120');
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

  const onSizeChange = useCallback(
    (event: any) => {
      setSize(event?.target?.value);
    },
    [setSize],
  );

  const paginatedItems = useMemo(
    () => Object.entries(illustrationsManifest)
      .filter(([key]) => (query ? key.includes(query) && key.includes(size) : key.includes(size)))
      .slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
      .reduce(
        (output, [key, value]) => ({
          ...output,
          [key]: value,
        }),
        {},
      ),
    [currentPage, size, illustrationsManifest, query],
  );

  return (
    <div>
      <p>Total illustrations in the library - {Object.keys(illustrationsManifest).length}</p>
      <p>Current Page: {currentPage}</p>
      <div className="illustrationFilters">
        <input placeholder="Search by illustration name" className="queryInput" type="text" onInput={onQueryChange} />
        <select placeholder="Size" className="sizeSelect" value={size} onChange={onSizeChange}>
          <option value="">Any</option>
          <option value="320">320</option>
          <option value="192">192</option>
          <option value="120">120</option>
          <option value="60">60</option>
        </select>
      </div>
      {!!query && <div className="query">Searching for: {query}</div>}
      <IllustrationTable illustrations={paginatedItems} size={size} />
      <div className="paginationButtons">
        <button disabled={currentPage === 1} onClick={onClickPrev}>
          Prev
        </button>
        <button onClick={onClickNext}>Next</button>
      </div>
    </div>
  );
};
