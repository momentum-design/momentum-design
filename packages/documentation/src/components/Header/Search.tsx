/** @jsxImportSource react */
import { useState, useCallback, useRef } from 'react';
import { ALGOLIA } from '../../config';
import '@docsearch/css';
import './Search.css';

import { createPortal } from 'react-dom';
import * as docSearchReact from '@docsearch/react';

/** FIXME: This is still kinda nasty, but DocSearch is not ESM ready. */
const DocSearchModal =	docSearchReact.DocSearchModal || (docSearchReact as any).default.DocSearchModal;
const useDocSearchKeyboardEvents =	docSearchReact.useDocSearchKeyboardEvents
	|| (docSearchReact as any).default.useDocSearchKeyboardEvents;

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const [initialQuery, setInitialQuery] = useState('');

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onInput = useCallback(
    (e) => {
      setIsOpen(true);
      setInitialQuery(e.key);
    },
    [setIsOpen, setInitialQuery],
  );

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });

  return (
    <>
      <button type="button" ref={searchButtonRef} onClick={onOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M8.125 1.25C4.32804 1.25 1.25 4.32804 1.25 8.125C1.25 11.922 4.32804 15 8.125 15C9.79844 15 11.3322 14.4021 12.5244 13.4083L17.6831 18.5669C17.9272 18.811 18.3229 18.811 18.567 18.5669C18.811 18.3229 18.811 17.9271 18.567 17.6831L13.4083 12.5244C14.4021 11.3322 15 9.79843 15 8.125C15 4.32804 11.922 1.25 8.125 1.25ZM2.5 8.125C2.5 5.0184 5.0184 2.5 8.125 2.5C11.2316 2.5 13.75 5.0184 13.75 8.125C13.75 11.2316 11.2316 13.75 8.125 13.75C5.0184 13.75 2.5 11.2316 2.5 8.125Z" fill="white" fill-opacity="0.95"/>
        </svg>
      </button>
      {isOpen
				&& createPortal(
				  <DocSearchModal
				    initialQuery={initialQuery}
				    initialScrollY={window.scrollY}
				    onClose={onClose}
				    indexName={ALGOLIA.indexName}
				    appId={ALGOLIA.appId}
				    apiKey={ALGOLIA.apiKey}
				    transformItems={(items) => items.map((item) => {
				      // We transform the absolute URL into a relative URL to
				      // work better on localhost, preview URLS.
				      const a = document.createElement('a');
				      a.href = item.url;
				      const hash = a.hash === '#overview' ? '' : a.hash;
				      return {
				        ...item,
				        url: `${a.pathname}${hash}`,
				      };
				    })}
				  />,
				  document.body,
				)}
    </>
  );
}
