
export const createSiteInfoTemplate = (dateStart, dateEnd, routeCities) => {

  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${routeCities}</h1>

        <p class="trip-info__dates">${dateStart}&nbsp;&mdash;&nbsp;${dateEnd}</p>
      </div>

        <p class="trip-info__cost">
          Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
        </p>
    </section>`
  );
};


