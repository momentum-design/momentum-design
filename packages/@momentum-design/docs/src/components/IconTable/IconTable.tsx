/** @jsxImportSource preact */
import iconsManifest from '@momentum-design/icons/dist/manifest.json';
import { useMemo, useState } from 'preact/hooks';
import './IconTable.css';

type Props = {
  icons: object;
};

// const svgList = fs
//   .readdirSync('../../../../../../node_modules/@momentum-design/icons/dist/svg/')
//   .filter((file) => file.endsWith('.svg'));

export const IconTable = ({ icons }: Props) => (
  <div>
    {Object.entries(icons).map(([key, path]) => (
      <div>
        {key}
        <svg className="icon">
          <use href={`${path.replace('./svg', '/icons')}`} style="--color_fill: #000;"></use>
        </svg>

      </div>
    ))}
  </div>
);

export const Pagination = ({ items }: { items: string[] }) => {
  const PAGE_SIZE = 50;
  const [currentPage, setCurrentPage] = useState(0);
  const [weight, setWeight] = useState('regular');

  const paginatedItems = useMemo(() => Object.entries(iconsManifest)
    .filter(([key]) => key.includes(weight))
    .slice(currentPage * PAGE_SIZE, PAGE_SIZE)
    .reduce(
      (output, [key, value]) => ({
        ...output,
        [key]: value,
      }),
      {},
    ), [currentPage, weight]);

  return <IconTable icons={paginatedItems} />;
};

// .*(?<!(?:regular|bold|filled|light))[.]svg
