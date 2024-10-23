type Props = {
  params: {
    productId: string;
  };
};

const ProductDetailsCard = ({ params }: Props) => {
  return <div> ProductDetailsCard : {params.productId}</div>;
};

export default ProductDetailsCard;
