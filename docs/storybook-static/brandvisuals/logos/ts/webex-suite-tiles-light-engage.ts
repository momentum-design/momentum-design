import { html } from 'lit';

const icon = () =>
  html`<svg aria-hidden="true" part="brandvisual" data-name="webex-suite-tiles-light-engage" xmlns="http://www.w3.org/2000/svg" width="72" height="68" fill="none" viewBox="0 0 72 68"><rect width="72" height="68" fill="#000" rx="12"/><path fill="#fff" d="M21.623 23.296h2.142l-3.115 9.417h-2.458l-2.328-7.106-2.329 7.106h-2.42L8 23.296h2.193l2.21 7.156 2.32-7.156h2.328l2.358 7.194zM32.955 28.76h-6.95c.064.486.247.948.53 1.347.253.35.594.624.988.796a3.1 3.1 0 0 0 1.274.257c.485-.002.966-.09 1.42-.26.471-.172.911-.42 1.303-.734l1.023 1.474c-.522.455-1.13.8-1.787 1.017a6.8 6.8 0 0 1-2.086.31 5 5 0 0 1-2.497-.614 4.35 4.35 0 0 1-1.706-1.739 5.34 5.34 0 0 1-.613-2.6 5.47 5.47 0 0 1 .59-2.581 4.35 4.35 0 0 1 1.656-1.748 4.7 4.7 0 0 1 2.437-.625 4.19 4.19 0 0 1 3.888 2.358c.39.802.583 1.685.566 2.576a8 8 0 0 1-.036.766m-2.063-1.562a2.9 2.9 0 0 0-.787-1.721 2.2 2.2 0 0 0-1.603-.59 2.3 2.3 0 0 0-1.686.625 3 3 0 0 0-.81 1.695zM41.748 23.69a4.6 4.6 0 0 1 1.7 1.769c.423.781.639 1.658.625 2.546a5.17 5.17 0 0 1-.625 2.544 4.57 4.57 0 0 1-4.085 2.408 3.85 3.85 0 0 1-1.7-.357 3.5 3.5 0 0 1-1.247-1.008v1.12h-2.063V19.287h2.063v5.129c.333-.425.76-.768 1.246-1.003a3.8 3.8 0 0 1 1.701-.36c.838-.01 1.663.21 2.385.637m-1.126 6.93c.428-.263.772-.643.993-1.094a3.54 3.54 0 0 0 0-3.044 2.67 2.67 0 0 0-.993-1.094 3 3 0 0 0-2.983 0c-.428.26-.776.635-1.002 1.082a3.26 3.26 0 0 0-.36 1.544c-.01.536.114 1.066.36 1.542.226.447.574.821 1.002 1.081a3 3 0 0 0 2.983 0zM54.253 28.76h-6.947c.064.486.246.948.53 1.347a2.4 2.4 0 0 0 .988.796 3.1 3.1 0 0 0 1.273.257c.485-.003.966-.09 1.42-.26.472-.172.912-.42 1.303-.734l1.02 1.474a5.1 5.1 0 0 1-1.783 1.017 6.8 6.8 0 0 1-2.09.31 5 5 0 0 1-2.496-.614 4.36 4.36 0 0 1-1.703-1.739 5.35 5.35 0 0 1-.617-2.6 5.5 5.5 0 0 1 .59-2.581 4.35 4.35 0 0 1 1.656-1.748 4.7 4.7 0 0 1 2.456-.634 4.2 4.2 0 0 1 3.887 2.358c.39.802.584 1.685.566 2.576q-.02.309-.053.775m-2.063-1.562a2.93 2.93 0 0 0-.79-1.71 2.2 2.2 0 0 0-1.598-.6 2.3 2.3 0 0 0-1.685.624 2.97 2.97 0 0 0-.811 1.695zM64.053 32.713h-2.526l-2.387-3.275-2.358 3.275h-2.408l3.537-4.807-3.481-4.61h2.529l2.299 3.145 2.299-3.145H64l-3.495 4.592z"/><path fill="#fff" fill-opacity=".95" d="M20.812 42.039h-4.023v3.086h4.391v1.118h-5.684v-9.346h5.684v1.118h-4.39v2.934h4.021zM22.38 46.243v-6.75h1.001l.138.858a2.4 2.4 0 0 1 1.997-1.05c1.43 0 2.328.898 2.328 2.546v4.402h-1.216v-4.397c0-1.01-.506-1.49-1.403-1.49-.875 0-1.635.65-1.635 1.716v4.165zM30.468 46.695c.116.678.671 1.09 1.634 1.09 1.227 0 1.86-.638 1.86-1.75v-.87c-.44.531-1.177.881-2.19.881-1.54 0-2.91-1.18-2.91-3.335 0-2.116 1.199-3.414 2.987-3.414 1.024 0 1.722.451 2.14 1.089l.188-.897h1.001v6.602c0 1.53-1.09 2.675-3.037 2.675-1.761 0-2.757-.818-2.971-2.076h1.298zm1.568-1.71c1.255 0 1.987-.84 1.987-2.206 0-1.586-.81-2.416-1.987-2.416-1.111 0-1.91.768-1.91 2.376 0 1.428.86 2.246 1.91 2.246M36.378 41.374c.127-1.248 1.178-2.077 2.823-2.077 1.722 0 2.68.948 2.68 2.336v4.605h-1.002l-.154-.92c-.43.621-1.139 1.118-2.2 1.118-1.442 0-2.279-.83-2.279-1.936 0-1.23.72-1.936 2.493-2.246l1.926-.339v-.333c0-.83-.545-1.297-1.52-1.297-.934 0-1.391.417-1.48 1.089zm4.292 2.387v-.87l-1.634.3c-1.178.209-1.491.581-1.491 1.18 0 .648.456 1.01 1.276 1.01.925.005 1.85-.695 1.85-1.62M44.5 46.695c.115.678.67 1.09 1.633 1.09 1.228 0 1.86-.638 1.86-1.75v-.87c-.44.531-1.177.881-2.19.881-1.54 0-2.91-1.18-2.91-3.335 0-2.116 1.2-3.414 2.987-3.414 1.024 0 1.723.451 2.14 1.089l.188-.897h1.001v6.602c0 1.53-1.09 2.675-3.037 2.675-1.76 0-2.757-.818-2.971-2.076h1.298zm1.573-1.71c1.255 0 1.986-.84 1.986-2.206 0-1.586-.808-2.416-1.986-2.416-1.111 0-1.91.768-1.91 2.376-.005 1.428.859 2.246 1.91 2.246M56.463 44.296c-.33 1.23-1.365 2.139-2.95 2.139-1.87 0-3.224-1.197-3.224-3.567 0-2.347 1.343-3.566 3.164-3.566s3.087 1.117 3.087 3.843h-5.013c.1 1.557.925 2.246 2.025 2.246.798 0 1.403-.468 1.596-1.09h1.315zm-4.886-2.144h3.72c-.089-1.259-.81-1.857-1.822-1.857-.974 0-1.706.615-1.898 1.857"/></svg>`;

export default icon;
