
export const createSiteInfoTemplate = () => {
  const routeCities = [`Amsterdam`, `Chamonix`, `Geneva`].join(` &mdash; `);
  const month = `Mar`;
  const dateStart = 18;
  const dateEnd = 20;
  const total = 1230;

  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${routeCities}</h1>

        <p class="trip-info__dates">${month} ${dateStart}&nbsp;&mdash;&nbsp;${dateEnd}</p>
      </div>

        <p class="trip-info__cost">
          Total: &euro;&nbsp;<span class="trip-info__cost-value">${total}</span>
        </p>
    </section>`
  );
};


