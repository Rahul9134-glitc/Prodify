const saveData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getData = (key) => {
  const items = localStorage.getItem(key);

  if (!items) {
    return [];
  }

  const Parsedata = JSON.parse(items);

  return Parsedata;
};

const removeData = (key) => {
  localStorage.removeItem(key);
};


export {saveData , getData , removeData}