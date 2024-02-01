import React from 'react';
import {render, screen} from '@testing-library/react'

import '@testing-library/jest-dom';
import Row from './Row';

describe("Row Component", ()=> {
    it("renders with children react node", ()=> {
         render(<Row ><div>children </div></Row>)
        const childElement = screen.getByText('children')
        expect(childElement).toBeInTheDocument();
    })
    it("renders with small types", ()=> {
        const {container} = render(<Row type="small"><div>child</div></Row>)
        screen.debug()
        let rowElement = container.querySelector('.row.row-small')
        expect(rowElement).toBeInTheDocument()
    })

    it("renders with large types", ()=> {
        const {container} = render(<Row type="large"><div>child</div></Row>)
        let rowElement = container.querySelector('.row.row-large')
        expect(rowElement).toBeInTheDocument()
    })
    it("renders with normal types", ()=> {
        const {container} = render(<Row><div>child</div></Row>)
        let rowElement = container.querySelector('.row')
        expect(rowElement).toBeInTheDocument()
    })
})