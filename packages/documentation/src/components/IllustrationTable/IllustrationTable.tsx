/** @jsxImportSource preact */
import illustrationsManifest from '@momentum-design/illustrations/dist/manifest.json';
import { useCallback, useMemo, useState } from 'preact/hooks';
import { IllustrationSize } from './constants';
import './IllustrationTable.css';

type IllustrationSizeType = keyof typeof IllustrationSize;
type Props = {
  illustrations: object;
  size: string;
};

const getSize = (key: string) => {
  if (key.includes(IllustrationSize[320])) return 320;
  if (key.includes(IllustrationSize[192])) return 192;
  if (key.includes(IllustrationSize[120])) return 120;
  if (key.includes(IllustrationSize[60])) return 60;
  return 320;
};

export const IllustrationTable = ({ illustrations, size }: Props) => {
  if (Object.entries(illustrations).length === 0) {
    return <p>No illustrations found...</p>;
  }

  const render = useMemo(
    () => (
      <div className={`illustrationGrid grid${size}`}>
        {Object.entries(illustrations).map(([key, path]) => {
          const finalPath = `${path.replace('./svg', '/momentum-design/illustrations')}`;
          const isInverted = key.includes('default');
          return (
            <div className={isInverted
              ? ['illustrationWrapper', 'illustration-bg-inverted'].join(' ') : 'illustrationWrapper'}>
              <img
                style={{ maxWidth: `${getSize(key)}px` }}
                src={finalPath}
              />
              <div className="nameAnchor">
                <div className="nameWrapper">
                  <code>{key}</code>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    ),
    [illustrations, size],
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

  const onSizeChange = useCallback(
    (event: any) => {
      setSize(event?.target?.value);
      setCurrentPage(1);
    },
    [setSize],
  );

  const filteredItems = useMemo(
    () => Object.entries(illustrationsManifest).filter(([key]) => (query
      ? key.includes(query) && key.includes(IllustrationSize[size as IllustrationSizeType])
      : key.includes(IllustrationSize[size as IllustrationSizeType]))),
    [illustrationsManifest, size, query],
  );

  const paginatedItems = useMemo(
    () => filteredItems
      .slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
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
        <p>Total illustrations in the library - {Object.keys(illustrationsManifest).length}</p>
        <p>Current Page: {currentPage}</p>
      </div>
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
        <button disabled={isNextButtonDisabled} onClick={onClickNext}>Next</button>
      </div>
    </div>
  );
};
