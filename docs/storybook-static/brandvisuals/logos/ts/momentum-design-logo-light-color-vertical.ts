import { html } from 'lit';

const icon = () =>
  html`<svg aria-hidden="true" part="brandvisual" data-name="momentum-design-logo-light-color-vertical" xmlns="http://www.w3.org/2000/svg" width="312" height="287" fill="none" viewBox="0 0 312 287"><path fill="url(#a)" fill-rule="evenodd" d="M102.602.144v48.448c27.594 1.223 49.143 24.316 48.485 51.959s-23.281 49.683-50.902 49.588H49.441v-48.388H1.105V.144zM9.356 4.984l42.503 42.548L94.35 4.984zm88.451 3.42v40.128H57.692zm-.039 44.998H54.317l-.04 43.509h43.491zM5.941 96.911V8.403l43.501 43.55V96.95zM54.235 145.3h45.909c24.547-.488 44.374-20.209 45.021-44.779s-18.116-45.308-42.604-47.089v48.319H54.235z" clip-rule="evenodd"/><path fill="#000" d="M272.422 220.571h-5.81v-31.472h4.781l.605 3.692q3.209-4.6 9.261-4.6 6.597 0 9.26 4.963 3.147-4.963 10.229-4.963 5.265 0 8.11 3.208 2.542 2.965 2.542 8.11v21.062h-5.81v-20.639q0-6.778-6.113-6.778-3.631 0-5.811 2.844-1.755 2.3-1.755 5.387v19.186h-5.81v-20.639q0-6.778-6.113-6.778-3.39 0-5.629 2.663-1.937 2.239-1.937 5.387zM232.205 189.099h5.81v20.639q0 6.778 6.537 6.778 3.995 0 6.113-2.844 1.634-2.18 1.634-5.387v-19.186h5.81v31.472h-4.781l-.666-3.631q-3.328 4.539-9.442 4.539-5.387 0-8.292-3.329-2.723-3.086-2.723-8.534zM227.044 215.911v4.963q-2.24.605-4.297.605-4.358 0-6.537-2.723-1.876-2.24-1.876-5.992v-18.702h-4.661v-4.963h4.661l.363-7.566h5.447v7.566h6.779v4.963h-6.779v18.823q0 3.51 3.329 3.51 1.574 0 3.571-.484M184.472 220.571h-5.81v-31.472h4.781l.666 3.994q3.51-4.902 9.563-4.902 5.568 0 8.534 3.45 2.602 3.086 2.602 8.413v20.517h-5.81v-20.457q0-6.96-6.718-6.96-3.511 0-5.75 2.421-2.058 2.178-2.058 5.568zM165.037 211.493h6.295q-1.332 4.78-5.266 7.505-3.692 2.481-8.836 2.481-7.445 0-11.621-4.721-3.813-4.418-3.813-11.923 0-8.534 4.842-12.952 3.995-3.693 10.289-3.692 7.384 0 11.137 4.781 3.631 4.6 3.631 13.134h-23.968q.363 5.568 3.39 8.292 2.481 2.18 6.294 2.179 2.966 0 5.145-1.634 1.816-1.392 2.481-3.45m-7.989-18.642q-3.873 0-6.234 2.421-2.24 2.24-2.845 6.234h17.795q-.303-4.54-3.027-6.779-2.178-1.875-5.689-1.876M96.463 220.571h-5.81v-31.472h4.78l.606 3.692q3.208-4.6 9.26-4.6 6.598 0 9.261 4.963 3.147-4.963 10.228-4.963 5.266 0 8.111 3.208 2.541 2.965 2.542 8.11v21.062h-5.811v-20.639q0-6.778-6.113-6.778-3.631 0-5.81 2.844-1.755 2.3-1.755 5.387v19.186h-5.811v-20.639q0-6.778-6.113-6.778-3.39 0-5.628 2.663-1.937 2.239-1.937 5.387zM52.96 204.835q0-8.655 5.144-13.073 4.116-3.571 10.41-3.571 7.323 0 11.5 4.66 3.994 4.358 3.994 11.984 0 8.534-5.023 13.013-4.116 3.631-10.531 3.631-7.324 0-11.56-4.842-3.935-4.418-3.935-11.802m6.052 0q0 6.053 3.086 9.26 2.542 2.663 6.477 2.663 4.6 0 7.081-3.45 2.3-3.147 2.3-8.473 0-6.174-3.026-9.321-2.482-2.602-6.416-2.602-4.54 0-7.081 3.45-2.421 3.147-2.421 8.473M7.626 220.571h-5.81v-31.472h4.781l.605 3.692q3.209-4.6 9.26-4.6 6.599 0 9.261 4.963 3.147-4.963 10.229-4.963 5.265 0 8.11 3.208 2.542 2.965 2.542 8.11v21.062h-5.81v-20.639q0-6.778-6.113-6.778-3.632 0-5.81 2.844-1.756 2.3-1.756 5.387v19.186h-5.81v-20.639q0-6.778-6.113-6.778-3.39 0-5.63 2.663-1.936 2.239-1.936 5.387zM161.657 274.315h-5.81v-31.473h4.781l.666 3.995q3.51-4.903 9.563-4.903 5.568 0 8.534 3.45 2.602 3.087 2.602 8.413v20.518h-5.81v-20.457q0-6.961-6.718-6.961-3.511 0-5.75 2.421-2.058 2.18-2.058 5.569zM118.601 276.433h6.234q.425 2.421 2.421 3.753 2.058 1.331 5.387 1.331 4.66 0 6.96-2.421 1.937-2.057 1.937-5.749v-4.056q-3.51 4.116-10.471 4.116-6.294 0-10.228-4.539-3.693-4.238-3.692-11.016 0-7.868 4.478-12.165 3.813-3.753 9.805-3.753 6.78 0 10.229 5.084l.908-4.176h4.781v30.807q0 5.932-4.297 9.321-3.873 3.147-10.229 3.147-6.597 0-10.349-2.965-3.148-2.482-3.874-6.719m4.6-18.46q0 5.145 3.026 8.05 2.482 2.421 6.113 2.421 4.782 0 7.324-3.147 2.179-2.663 2.179-7.142 0-5.75-2.966-8.776-2.481-2.482-6.537-2.482-4.479 0-6.9 3.087-2.24 2.905-2.239 7.989M110.834 237.576h-6.537v-6.839h6.537zm-.363 36.739h-5.81v-31.473h5.81zM92.148 265.781q0-2.663-2.785-3.995-1.633-.726-6.355-1.815-5.81-1.272-8.292-3.692-2.057-2.058-2.057-5.387 0-4.419 3.57-6.779 3.209-2.178 8.656-2.179 5.628 0 9.139 2.784 3.026 2.421 3.752 6.416h-5.931q-1.029-4.6-7.02-4.6-3.33 0-4.964 1.211-1.332 1.029-1.332 2.602 0 1.937 1.453 2.905 1.513.97 5.871 1.937 6.658 1.453 9.26 3.571 2.906 2.361 2.906 6.597 0 4.722-3.874 7.445-3.51 2.421-9.26 2.421-6.296 0-9.987-3.026-3.208-2.664-3.571-6.9h5.932q.967 5.326 7.686 5.326 3.631 0 5.629-1.574 1.574-1.27 1.574-3.268M60.124 265.236h6.294q-1.331 4.782-5.265 7.505-3.693 2.482-8.837 2.482-7.444 0-11.62-4.721-3.814-4.419-3.814-11.923 0-8.534 4.842-12.953 3.995-3.692 10.29-3.692 7.383 0 11.136 4.782 3.631 4.599 3.631 13.134H42.814q.363 5.568 3.39 8.291 2.48 2.18 6.294 2.179 2.966 0 5.144-1.634 1.815-1.392 2.482-3.45m-7.99-18.641q-3.873 0-6.233 2.421-2.24 2.24-2.845 6.234H60.85q-.302-4.54-3.026-6.779-2.18-1.876-5.69-1.876M30.202 274.315H25.42l-1.029-4.418q-3.63 5.326-10.47 5.326-6.598 0-10.41-4.782Q0 266.023 0 258.76q0-8.776 4.479-13.194 3.753-3.632 9.805-3.632 6.537 0 10.108 4.903v-16.1h5.81zm-24.15-15.434q0 5.871 2.906 8.897 2.421 2.482 6.234 2.482 4.72 0 7.323-3.571 2.18-3.087 2.18-7.747-.001-6.114-2.906-9.321-2.482-2.724-6.597-2.724-4.6 0-6.96 3.329-2.18 3.027-2.18 8.655"/><defs><linearGradient id="a" x1="16.588" x2="121.585" y1="126.14" y2="21.257" gradientUnits="userSpaceOnUse"><stop stop-color="#DB1F2E"/><stop offset=".12" stop-color="#F26B1D"/><stop offset=".249" stop-color="#F2990A"/><stop offset=".396" stop-color="#73A321"/><stop offset=".525" stop-color="#00A3B5"/><stop offset=".668" stop-color="#0A78CC"/><stop offset=".828" stop-color="#643ABD"/><stop offset="1" stop-color="#C233C4"/></linearGradient></defs></svg>`;

export default icon;
