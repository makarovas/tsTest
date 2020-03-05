interface React {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const react1: React = {
  id: "1234",
  size: {
    width: 29,
    height: 30
  },
  color: "#ccc"
};
