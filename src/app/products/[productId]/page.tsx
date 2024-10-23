'use client';

import { Metadata } from 'next';
import ProductDetailsCard from '@/components/ProductDetailsCard';

type Props = {
  params: {
    productId: string;
  };
};

export const generateMrtTag = ({ params }: Props): Metadata => {
  return {
    title: `Product: ${params.productId}`,
    keywords: `Product: ${params.productId}`,
    description: 'this is product Description',
    openGraph: {
      title: 'OG title',
      description: 'OG description',
      url: 'test.ge',
    },
  };
};

const PrductsDetails = ({ params }: Props) => {
  return (
    <>
      <ProductDetailsCard params={params} />
      <div>PrductsDetails page i: {params.productId}</div>;
    </>
  );
};

export default PrductsDetails;
