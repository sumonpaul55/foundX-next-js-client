interface IDate {
  identifier: string;
  day: number;
  year: number;
  era: string;
  month: number;
}

const dateToIsonString = (date: IDate) => {
  return new Date(`${date?.month}-${date?.day + 1}-${date?.year}`).toISOString();
};

export default dateToIsonString;
