type User = {
  readonly _id: string; // cannot alter _id down the line
  name: string;
  mobile: number;
  isActive: boolean;
  cardNo?: string; // cardNo is an optional property
};

const user: User = {
  _id: "1230",
  name: "Subho Yadav",
  mobile: 9007259485,
  isActive: true,
};

// user._id = "test"

type CardNum = {
  cardnumber: string;
};

type CardDate = {
  carddate: string;
};

// Mixing of the above two types

type CardDetails = CardDate &
  CardNum & {
    cvv: string;
  };

const cd: CardDetails = {
  cardnumber: "1234",
  carddate: "12-02-25",
  cvv: "77789",
};

const MLModel: Array<Array<number>> = [[255, 255, 255]];

let luckyNum: number[] = [];
// let luckyNum: [number] = [25];

luckyNum.push(250);

const readonlyArr: ReadonlyArray<number> = [25, 89, 71];
// readonlyArr.push(87) : illegal operation for type readonly array

type AppUser = {
  name: string;
  isActive: boolean;
};

type AppAdmin = {
  username: string;
  isActive: boolean;
};

let subho: AppUser | AppAdmin;

subho = {
  name: "Subho Yadav",
  isActive: true,
};

subho = {
  username: "SY",
  isActive: true,
};
