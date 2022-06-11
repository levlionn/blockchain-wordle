export type Letter =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

export type Colour = "Black" | "Yellow" | "Green";

export type Tile = [Letter, Colour]; //tupole

export type Row = [Tile, Tile, Tile, Tile, Tile]; // tupole

export type Board = Row[]; //6 rows

// export type InputBuffer = Letter[];
// export type Answer = Letter[];
