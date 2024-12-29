import { get } from '../../services/api';
import { getLastTwoMonths } from '../../utils/date';

const fetchLast30Days = (indicator: string) => {
  const lastTwoMonths = getLastTwoMonths();
  const getLast30Items = (arr: any) => arr.slice(-30);

  return get(
    `/${indicator}/periodo/${lastTwoMonths[1]}/${lastTwoMonths[0]}`,
  ).then(({ data }) => getLast30Items(Object.values(data)[0]));
};

const indicator = {
  fetchLast30Days,
};

export default indicator;
