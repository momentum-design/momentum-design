import { html } from 'lit';
import '../../../src/components/iconprovider';

export const withIconProvider = story => html` <mdc-iconprovider url="./icons/svg"> ${story()} </mdc-iconprovider>`;
