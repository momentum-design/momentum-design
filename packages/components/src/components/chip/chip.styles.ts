import { css } from 'lit';
import { hostFitContentStyles, hostFocusRingStyles } from '../../utils/styles';

const styles = css`
  :host {
    height: 1.5rem;
    gap: 0.25rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid;
    cursor: pointer;
  }

  :host([color='default']) {
    border-color: var(--mds-color-theme-outline-button-normal);
    background-color: var(--mds-color-theme-background-label-default-normal);
  }

  :host([color='default']:hover) {
    background-color: var(--mds-color-theme-background-label-default-hover);
  }

  :host([color='default']:active) {
    background-color: var(--mds-color-theme-background-label-default-active);
  }

  :host([color='cobalt']) {
    border-color: var(--mds-color-theme-outline-theme-normal);
    background: var(--mds-color-theme-background-label-cobalt-normal);
  }

  :host([color='cobalt']:hover) {
    background: var(--mds-color-theme-background-label-cobalt-hover);
  }

  :host([color='cobalt']:active) {
    background: var(--mds-color-theme-background-label-cobalt-active);
  }

  :host([color='gold']) {
    border-color: var(--mds-color-theme-outline-label-gold);
    background: var(--mds-color-theme-background-label-gold-normal);
  }

  :host([color='gold']:hover) {
    background: var(--mds-color-theme-background-label-gold-hover);
  }

  :host([color='gold']:active) {
    background: var(--mds-color-theme-background-label-gold-active);
  }

  :host([color='lime']) {
    border-color: var(--mds-color-theme-outline-label-lime);
    background: var(--mds-color-theme-background-label-lime-normal);
  }

  :host([color='lime']:hover) {
    background: var(--mds-color-theme-background-label-lime-hover);
  }

  :host([color='lime']:active) {
    background: var(--mds-color-theme-background-label-lime-active);
  }

  :host([color='mint']) {
    border-color: var(--mds-color-theme-outline-label-mint);
    background: var(--mds-color-theme-background-label-mint-normal);
  }

  :host([color='mint']:hover) {
    background: var(--mds-color-theme-background-label-mint-hover);
  }

  :host([color='mint']:active) {
    background: var(--mds-color-theme-background-label-mint-active);
  }

  :host([color='pink']) {
    border-color: var(--mds-color-theme-outline-label-pink);
    background: var(--mds-color-theme-background-label-pink-normal);
  }

  :host([color='pink']:hover) {
    background: var(--mds-color-theme-background-label-pink-hover);
  }

  :host([color='pink']:active) {
    background: var(--mds-color-theme-background-label-pink-active);
  }

  :host([color='purple']) {
    border-color: var(--mds-color-theme-outline-label-purple);
    background: var(--mds-color-theme-background-label-purple-normal);
  }

  :host([color='purple']:hover) {
    background: var(--mds-color-theme-background-label-purple-hover);
  }

  :host([color='purple']:active) {
    background: var(--mds-color-theme-background-label-purple-active);
  }

  :host([color='slate']) {
    border-color: var(--mds-color-theme-outline-label-slate);
    background: var(--mds-color-theme-background-label-slate-normal);
  }

  :host([color='slate']:hover) {
    background: var(--mds-color-theme-background-label-slate-hover);
  }

  :host([color='slate']:active) {
    background: var(--mds-color-theme-background-label-slate-active);
  }

  :host([color='violet']) {
    border-color: var(--mds-color-theme-outline-label-violet);
    background: var(--mds-color-theme-background-label-violet-normal);
  }

  :host([color='violet']:hover) {
    background: var(--mds-color-theme-background-label-violet-hover);
  }

  :host([color='violet']:active) {
    background: var(--mds-color-theme-background-label-violet-active);
  }

  :host([disabled]) {
    border-color: var(--mds-color-theme-outline-primary-disabled);
    background: var(--mds-color-theme-background-primary-disabled);
    color: var(--mds-color-theme-text-primary-disabled);
    cursor: auto;
  }
`;

export default [hostFitContentStyles, styles, ...hostFocusRingStyles()];
