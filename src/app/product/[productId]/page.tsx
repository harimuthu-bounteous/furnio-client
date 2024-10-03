interface PageProp {
  params: {
    productId: string;
  };
}

export default function Page({ params }: PageProp) {
  return <div>Product ID : {params.productId} </div>;
}
