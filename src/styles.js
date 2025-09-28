import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lexend', sans-serif;
    }

    html {
        font-size: clamp(15px, 15px + 2vw, 20px);
    }

    body, #root {
        font-family: 'Roboto', sans-serif;
        min-height: 100dvh;
        min-height: 100svh;
        min-height: 100lvh;
        
        /* Fallback for older browsers */
        min-height: 100vh;
    }

    body {
        padding: 4vw;
    }

    .full {
        min-height: 100%;
    }

    .debug {
        border: 2px solid #000;
        > * {
            border: 1px solid #000;
            > * {
                border: 1px solid #000a;
                > * {
                    border: 1px solid: #0005;
                    > * {
                        border: 1px dashed #0005;
                    }
                }
            }
        }
    }

    /* --- TYPOGRAPHY SCALE --- */
    /* Using a modular scale (Major Third: 1.25) for visual hierarchy */
    h1 {
        font-size: 3.052rem;
        font-weight: 700;
        line-height: 1.1;
        letter-spacing: -0.02em;
    }
    h2 {
        font-size: 2.441rem; 
        font-weight: 600;
        line-height: 1.15;
        letter-spacing: -0.01em;
    }
    h3 {
        font-size: 1.953rem;
        font-weight: 600;
        line-height: 1.18;
    }
    h4 {
        font-size: 1.563rem;
        font-weight: 500;
        line-height: 1.22;
    }
    h5 {
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 1.25;
    }
    h6 {
        font-size: 1rem; 
        font-weight: 500;
        line-height: 1.3;
        text-transform: uppercase;
        letter-spacing: 0.04em;
    }
    p {
        font-size: 1rem; 
        font-weight: 400;
        line-height: 1.6;
        margin-bottom: 1em;
    }
    /* Optional: Remove top margin for first child and bottom for last */
    h1, h2, h3, h4, h5, h6, p {
        margin-top: 0;
    }
    p:last-child {
        margin-bottom: 0;
    }

    button {
        outline: 0;
        border: 0;
        background: #0002;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;

        &:hover {
            background: #0004;
        }
    }

    .upper {
        text-transform: uppercase;
    }

    .thin {
        font-weight: 200;
    }


    .fs {
        height: 100dvh;
    }

    /* Padding and margin scale */
    :root {
        --space-1: 0.25rem;   /* x-small */
        --space-2: 0.5rem;    /* small */
        --space-3: 1rem;      /* medium */
        --space-4: 2rem;      /* large */
        --space-5: 4rem;      /* x-large */
    }

    /* 
      Order: 
      - All sides (lowest specificity)
      - Axis (horizontal/vertical)
      - Single direction (highest specificity)
    */

    /* --- PADDING --- */
    /* All sides */
    .p1 { padding: var(--space-1); }
    .p2 { padding: var(--space-2); }
    .p3 { padding: var(--space-3); }
    .p4 { padding: var(--space-4); }
    .p5 { padding: var(--space-5); }

    /* Axis */
    .px1 { padding-left: var(--space-1); padding-right: var(--space-1); }
    .px2 { padding-left: var(--space-2); padding-right: var(--space-2); }
    .px3 { padding-left: var(--space-3); padding-right: var(--space-3); }
    .px4 { padding-left: var(--space-4); padding-right: var(--space-4); }
    .px5 { padding-left: var(--space-5); padding-right: var(--space-5); }

    .py1 { padding-top: var(--space-1); padding-bottom: var(--space-1); }
    .py2 { padding-top: var(--space-2); padding-bottom: var(--space-2); }
    .py3 { padding-top: var(--space-3); padding-bottom: var(--space-3); }
    .py4 { padding-top: var(--space-4); padding-bottom: var(--space-4); }
    .py5 { padding-top: var(--space-5); padding-bottom: var(--space-5); }

    /* Single direction */
    .pt1 { padding-top: var(--space-1); }
    .pt2 { padding-top: var(--space-2); }
    .pt3 { padding-top: var(--space-3); }
    .pt4 { padding-top: var(--space-4); }
    .pt5 { padding-top: var(--space-5); }

    .pb1 { padding-bottom: var(--space-1); }
    .pb2 { padding-bottom: var(--space-2); }
    .pb3 { padding-bottom: var(--space-3); }
    .pb4 { padding-bottom: var(--space-4); }
    .pb5 { padding-bottom: var(--space-5); }

    .pl1 { padding-left: var(--space-1); }
    .pl2 { padding-left: var(--space-2); }
    .pl3 { padding-left: var(--space-3); }
    .pl4 { padding-left: var(--space-4); }
    .pl5 { padding-left: var(--space-5); }

    .pr1 { padding-right: var(--space-1); }
    .pr2 { padding-right: var(--space-2); }
    .pr3 { padding-right: var(--space-3); }
    .pr4 { padding-right: var(--space-4); }
    .pr5 { padding-right: var(--space-5); }

    /* --- MARGIN --- */
    /* All sides */
    .m1 { margin: var(--space-1); }
    .m2 { margin: var(--space-2); }
    .m3 { margin: var(--space-3); }
    .m4 { margin: var(--space-4); }
    .m5 { margin: var(--space-5); }

    /* Axis */
    .mx1 { margin-left: var(--space-1); margin-right: var(--space-1); }
    .mx2 { margin-left: var(--space-2); margin-right: var(--space-2); }
    .mx3 { margin-left: var(--space-3); margin-right: var(--space-3); }
    .mx4 { margin-left: var(--space-4); margin-right: var(--space-4); }
    .mx5 { margin-left: var(--space-5); margin-right: var(--space-5); }

    .my1 { margin-top: var(--space-1); margin-bottom: var(--space-1); }
    .my2 { margin-top: var(--space-2); margin-bottom: var(--space-2); }
    .my3 { margin-top: var(--space-3); margin-bottom: var(--space-3); }
    .my4 { margin-top: var(--space-4); margin-bottom: var(--space-4); }
    .my5 { margin-top: var(--space-5); margin-bottom: var(--space-5); }

    /* Single direction */
    .mt1 { margin-top: var(--space-1); }
    .mt2 { margin-top: var(--space-2); }
    .mt3 { margin-top: var(--space-3); }
    .mt4 { margin-top: var(--space-4); }
    .mt5 { margin-top: var(--space-5); }

    .mb1 { margin-bottom: var(--space-1); }
    .mb2 { margin-bottom: var(--space-2); }
    .mb3 { margin-bottom: var(--space-3); }
    .mb4 { margin-bottom: var(--space-4); }
    .mb5 { margin-bottom: var(--space-5); }

    .ml1 { margin-left: var(--space-1); }
    .ml2 { margin-left: var(--space-2); }
    .ml3 { margin-left: var(--space-3); }
    .ml4 { margin-left: var(--space-4); }
    .ml5 { margin-left: var(--space-5); }

    .mr1 { margin-right: var(--space-1); }
    .mr2 { margin-right: var(--space-2); }
    .mr3 { margin-right: var(--space-3); }
    .mr4 { margin-right: var(--space-4); }
    .mr5 { margin-right: var(--space-5); }

    /* --- FLEXBOX HELPERS --- */
    .flex { display: flex; }
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .align-center {
        display: flex;
        align-items: center;
    }
    .split {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .col { flex-direction: column; }

    /* --- FLEX GAP HELPERS (SEP) --- */
    .sep { display: flex; gap: var(--space-2); }
    .sep1 { display: flex; gap: var(--space-1); }
    .sep2 { display: flex; gap: var(--space-2); }
    .sep3 { display: flex; gap: var(--space-3); }
    .sep4 { display: flex; gap: var(--space-4); }
    .sep5 { display: flex; gap: var(--space-5); }

    /* Axis-specific gap helpers */
    .sep-x1 { display: flex; column-gap: var(--space-1); }
    .sep-x2 { display: flex; column-gap: var(--space-2); }
    .sep-x3 { display: flex; column-gap: var(--space-3); }
    .sep-x4 { display: flex; column-gap: var(--space-4); }
    .sep-x5 { display: flex; column-gap: var(--space-5); }

    .sep-y1 { display: flex; row-gap: var(--space-1); }
    .sep-y2 { display: flex; row-gap: var(--space-2); }
    .sep-y3 { display: flex; row-gap: var(--space-3); }
    .sep-y4 { display: flex; row-gap: var(--space-4); }
    .sep-y5 { display: flex; row-gap: var(--space-5); }
`

