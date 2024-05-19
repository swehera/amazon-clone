const SavedPrice = ({ savedamount }: { savedamount: number }) => {
  const savedAmount = new Number(savedamount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return <p className=" text-sm">!save {savedAmount}</p>;
};

export default SavedPrice;
