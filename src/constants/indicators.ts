export const euro = { label: 'Euro', value: 'euro', unit: 'pesos' };
export const dolar = { label: 'Dólar', value: 'dolar', unit: 'pesos' };
export const ipc = { label: 'IPC', value: 'ipc', unit: 'unidad' };
export const uf = { label: 'UF', value: 'uf', unit: 'pesos' };
export const utm = { label: 'UTM', value: 'utm', unit: 'pesos' };

interface DynamicObject {
  [key: string]: any;
}

export const indicatorList: DynamicObject = {
  euro,
  dolar,
  ipc,
  uf,
  utm,
};
