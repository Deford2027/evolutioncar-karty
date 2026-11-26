import{r as e}from"./hooks.module.BNbONuGS.js";import{t}from"./jsxRuntime.module.Bfdc-KV3.js";import n from"./LeadForm.J0dNlive.js";var r=e=>`${e.toLocaleString(`ru-RU`)} ¥`;function i(i){let{ui:a}=i,[o,s]=e(i.trims[0].id),c=i.trims.find(e=>e.id===o),l=i.trims[0].priceCny,u=c.priceCny-l;return t(`div`,{class:`tp`,children:[t(`div`,{class:`tp__grid`,children:[t(`div`,{class:`tp__visual`,children:i.gallery.map(e=>t(`img`,{class:`tp__photo`,src:e.src,alt:e.alt,loading:`lazy`},e.src))}),t(`div`,{class:`tp__panel`,children:[t(`h2`,{class:`tp__h`,children:a.trimsTitle}),t(`div`,{class:`tp__trims`,role:`radiogroup`,"aria-label":a.trimsTitle,children:i.trims.map(e=>t(`button`,{type:`button`,role:`radio`,"aria-checked":e.id===o,class:`tp__trim ${e.id===o?`is-on`:``}`,onClick:()=>s(e.id),children:[t(`span`,{class:`tp__trim-name`,children:e.name}),e.tag&&t(`span`,{class:`tp__trim-tag`,children:e.tag}),t(`span`,{class:`tp__trim-price`,children:r(e.priceCny)})]},e.id))}),t(`p`,{class:`tp__summary`,children:c.summary}),t(`h3`,{class:`tp__h3`,children:a.specsTitle}),t(`dl`,{class:`tp__rows`,children:c.rows.map(e=>t(`div`,{class:`tp__row`,children:[t(`dt`,{children:e.label}),t(`dd`,{children:e.value})]},e.label))}),t(`div`,{class:`tp__price`,children:[t(`span`,{class:`tp__price-label`,children:a.priceLabel}),t(`b`,{class:`tp__price-value`,children:r(c.priceCny)}),u>0&&t(`span`,{class:`tp__price-extra`,children:[`на `,r(u),` дороже начальной`]}),t(`span`,{class:`tp__price-note`,children:a.priceNote})]})]})]}),t(`section`,{class:`tp__common`,children:[t(`h3`,{class:`tp__h3`,children:a.commonTitle}),t(`dl`,{class:`tp__rows tp__rows--wide`,children:i.commonSpecs.map(e=>t(`div`,{class:`tp__row`,children:[t(`dt`,{children:e.label}),t(`dd`,{children:e.value})]},e.label))})]}),t(`section`,{class:`tp__form`,children:[t(`h3`,{class:`tp__h3`,children:a.formTitle}),t(`p`,{class:`tp__form-lead`,children:a.formLead}),t(n,{car:i.car,brand:i.brand,namePlaceholder:i.form.namePlaceholder,phonePlaceholder:i.form.phonePlaceholder,cta:i.form.cta,success:i.form.success,source:`Подбор версии – ${i.car} ${c.name}; цена в Китае ${r(c.priceCny)}`})]}),t(`p`,{class:`tp__note`,children:a.sourceNote}),t(`style`,{children:`
        .tp__grid { display: grid; gap: 1.5rem; }
        @media (min-width: 1024px) {
          .tp__grid { grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr); gap: 2.5rem; align-items: start; }
        }
        .tp__photo { width: 100%; height: auto; border-radius: 16px; display: block; }
        .tp__h { font-size: .8125rem; text-transform: uppercase; letter-spacing: .08em;
                 color: var(--c-text-2); margin: 0 0 .75rem; }
        .tp__h3 { font-size: 1.0625rem; margin: 1.75rem 0 .75rem; }

        .tp__trims { display: grid; gap: .5rem; }
        .tp__trim { display: grid; grid-template-columns: 1fr auto; gap: .25rem 1rem;
                    text-align: left; padding: .875rem 1rem; border-radius: 12px; cursor: pointer;
                    background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.12);
                    color: inherit; font: inherit; }
        .tp__trim:hover { border-color: rgba(255,255,255,.28); }
        .tp__trim.is-on { border-color: var(--c-accent); background: rgba(201,162,39,.1); }
        .tp__trim-name { font-weight: 600; }
        .tp__trim-tag { grid-column: 1; font-size: .8125rem; color: var(--c-text-2); }
        .tp__trim-price { grid-column: 2; grid-row: 1 / span 2; align-self: center;
                          font-variant-numeric: tabular-nums; white-space: nowrap; }

        .tp__summary { color: var(--c-text-2); line-height: 1.6; margin: 1rem 0 0; }

        .tp__rows { display: grid; gap: 0; margin: 0; }
        .tp__row { display: grid; gap: .25rem 1rem; padding: .6875rem 0;
                   border-top: 1px solid rgba(255,255,255,.1); }
        .tp__row:first-child { border-top: 0; }
        .tp__row dt { color: var(--c-text-2); font-size: .9375rem; margin: 0; }
        .tp__row dd { margin: 0; }
        @media (min-width: 600px) {
          .tp__row { grid-template-columns: minmax(0, 13rem) minmax(0, 1fr); align-items: baseline; }
        }

        .tp__price { margin-top: 1.5rem; padding: 1.125rem 1.25rem; border-radius: 14px;
                     background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.12);
                     display: grid; gap: .25rem; }
        .tp__price-label { font-size: .8125rem; text-transform: uppercase; letter-spacing: .06em;
                           color: var(--c-text-2); }
        .tp__price-value { font-size: clamp(1.5rem, 1.2rem + 1.4vw, 2rem); line-height: 1.1;
                           font-variant-numeric: tabular-nums; }
        .tp__price-extra { font-size: .875rem; color: var(--c-accent); }
        .tp__price-note { font-size: .9375rem; color: var(--c-text-2); margin-top: .375rem; }

        .tp__common { margin-top: 2.5rem; }
        @media (min-width: 1024px) {
          .tp__rows--wide { grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 2.5rem; }
          .tp__rows--wide .tp__row:nth-child(2) { border-top: 0; }
        }

        .tp__form { margin-top: 2.5rem; padding: 1.5rem; border-radius: 16px;
                    background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.12); }
        .tp__form .tp__h3 { margin-top: 0; }
        .tp__form-lead { color: var(--c-text-2); line-height: 1.6; margin: 0 0 1.25rem; max-width: 60ch; }

        .tp__note { margin-top: 1.5rem; font-size: .875rem; line-height: 1.6; color: var(--c-text-2); }
      `})]})}export{i as default};